import type { PatientData } from '../components/AcrGuidelineTool/types';
import { connectiviteTypes, riskFactors, symptoms } from '../components/AcrGuidelineTool/constants';
import { SARD_LABELS } from '../data/acr_treatment_data';
import type { ILAAlgorithmAnswers } from '../components/ILAAlgorithmTool';

/**
 * A helper function that wraps the native fetch API to provide automatic retries.
 * @param url The URL to fetch.
 * @param options The request options, including an AbortSignal.
 * @param retries The number of times to retry on failure.
 * @returns A Promise that resolves to the Response.
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = 2
): Promise<Response> {
  for (let i = 0; i <= retries; i++) {
    try {
      if (options.signal?.aborted) {
        throw new DOMException('The user aborted a request.', 'AbortError');
      }
      return await fetch(url, options);
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        throw err; // Re-throw AbortError immediately to stop retries
      }
      if (i === retries) {
        console.error(`Fetch failed after ${retries} retries:`, err);
        throw err; // Throw the final error after all retries are exhausted
      }
      // Wait before retrying
      await new Promise(res => setTimeout(res, 1000 * (i + 1)));
    }
  }
  // This line should be unreachable
  throw new Error("Fetch with retry failed unexpectedly.");
}


/**
 * A generic function to call the backend AI generation service and handle a streaming response.
 * @param prompt The main prompt for the AI.
 * @param systemInstruction The system instruction to guide the AI's behavior.
 * @param onStreamUpdate Callback function to handle incoming text chunks.
 * @param onStreamEnd Callback function to signal the end of the stream.
 * @param onStreamError Callback function to handle any errors.
 * @param signal AbortSignal to allow for request cancellation.
 */
async function generateAITextStream(
  prompt: string,
  systemInstruction: string,
  onStreamUpdate: (chunk: string) => void,
  onStreamEnd: () => void,
  onStreamError: (error: Error) => void,
  signal?: AbortSignal
): Promise<void> {
  try {
    const response = await fetchWithRetry('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, systemInstruction }),
      signal,
    });

    if (!response.ok || !response.body) {
      const errorData = await response.json().catch(() => ({ error: `Request failed with status ${response.status}` }));
      throw new Error(errorData.error || `Request failed with status ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
       if (signal?.aborted) {
          reader.cancel();
          throw new DOMException('The user aborted a request.', 'AbortError');
      }
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      onStreamUpdate(decoder.decode(value, { stream: true }));
    }

    onStreamEnd();

  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.log("Stream fetch aborted by client.");
      return;
    }
    console.error("Error fetching from streaming /api/generate:", error);
    const err = error instanceof Error
      ? new Error(`AI Service is not available: ${error.message}`)
      : new Error("An unknown error occurred while contacting the AI service.");
    onStreamError(err);
  }
}

// --- API for Screening Tool ---
export const generateScreeningSummary = async (
    patientData: PatientData,
    riskLevel: string,
    onStreamUpdate: (chunk: string) => void,
    onStreamEnd: () => void,
    onStreamError: (error: Error) => void,
    signal?: AbortSignal
): Promise<void> => {
    const connectiviteLabel = connectiviteTypes.find(c => c.value === patientData.connectiviteType)?.label || 'Unspecified';
    const riskFactorsList = patientData.riskFactors.length > 0 ?
        patientData.riskFactors.map(rf => riskFactors.find(r => r.value === rf)?.label).filter(Boolean).join(', ') :
        'none';
    const symptomsList = patientData.currentSymptoms.length > 0 ?
        patientData.currentSymptoms.map(s => symptoms.find(sym => sym.value === s)?.label).filter(Boolean).join(', ') :
        'none';

    const systemInstruction = "You are an expert assistant in pulmonology and rheumatology, specializing in the interpretation of clinical guidelines. You write clear and structured summaries for physicians.";

    const prompt = `Generate a concise clinical summary and recommendations based on the ACR 2023 guidelines for a patient with the following characteristics. Use markdown format with bold titles (**Title**). The response must be exclusively in English.

**Patient Profile:**
- **Connective Tissue Disease:** ${connectiviteLabel}
- **ILD Already Diagnosed:** ${patientData.hasPID ? 'Yes' : 'No'}
- **Identified ILD Risk Factors:** ${riskFactorsList}
- **Presenting ILD Symptoms:** ${symptomsList}
- **Estimated ILD Risk Level (for screening):** ${riskLevel}

**Task:**
1.  Write a **Clinical Summary** of the patient's profile.
2.  Based on whether ILD is already diagnosed or not, provide **Priority Recommendations** for either monitoring or screening.
3.  Add a section for **Monitoring and Follow-up**.
4.  If applicable, add a **Special Attention** section for high-risk connective tissue diseases like SSc or IIM.`;

    await generateAITextStream(prompt, systemInstruction, onStreamUpdate, onStreamEnd, onStreamError, signal);
};


// --- API for Treatment Tool ---
export const generateTreatmentSummary = async (
    sard: string,
    context: string,
    onStreamUpdate: (chunk: string) => void,
    onStreamEnd: () => void,
    onStreamError: (error: Error) => void,
    signal?: AbortSignal
): Promise<void> => {
    const contextLabels: Record<string, string> = {
        firstLine: "First-line treatment",
        progression: "ILD progression on treatment",
        'rp-ild': "Rapidly Progressive ILD (RP-ILD)"
    };

    const systemInstruction = "You are an expert assistant in pulmonology and rheumatology, specializing in the interpretation of clinical guidelines. You write clear and structured therapeutic summaries for physicians based on the ACR 2023 guidelines.";

    const prompt = `Generate a concise therapeutic summary based on the ACR 2023 guidelines for a patient with the following profile. Use markdown format with bold titles (**Title**). The response must be exclusively in English.

**Patient Profile:**
- **Connective Tissue Disease:** ${SARD_LABELS[sard as keyof typeof SARD_LABELS] || sard}
- **Clinical Context:** ${contextLabels[context] || context}

**Task:**
1.  Summarize the recommended therapeutic approach for this specific context.
2.  Clearly list the **Recommended**, **Conditional Options**, **Conditionally Not Recommended**, and **Strongly Not Recommended** treatments.
3.  Include any important notes or precautions mentioned in the guidelines for this specific scenario.`;

    await generateAITextStream(prompt, systemInstruction, onStreamUpdate, onStreamEnd, onStreamError, signal);
};

// --- API for ILA Tool ---
export const generateILAmanagementSummary = async (
    answers: ILAAlgorithmAnswers,
    finalRecommendation: string,
    onStreamUpdate: (chunk: string) => void,
    onStreamEnd: () => void,
    onStreamError: (error: Error) => void,
    signal?: AbortSignal
): Promise<void> => {
    const contextLabels: Record<string, string> = {
        symptoms: 'Evaluation for respiratory symptoms',
        lcs: 'Lung Cancer Screening program',
        incidental: 'Incidental finding on non-dedicated CT',
    };

    const patientInfoLabels: Record<string, string> = {
        history: 'Significant medical history',
        symptoms: 'Presence of respiratory symptoms',
        sard: 'Features of Systemic Autoimmune Rheumatic Disease (SARD)',
        family: 'Family history of pulmonary fibrosis',
    };

    const answerContext = contextLabels[answers.context] || 'Not specified';
    const patientContext = answers.patientInfo.length > 0
        ? answers.patientInfo.map(pi => patientInfoLabels[pi] || pi).join(', ')
        : 'None specified';

    const systemInstruction = "You are an expert assistant in pulmonology, specializing in Interstitial Lung Diseases. You provide clear, evidence-based summaries and management plans for physicians based on the Fleischner Society and other relevant guidelines for ILA.";

    const prompt = `Generate a concise clinical summary and management plan for a patient with Interstitial Lung Abnormalities (ILA) based on the following algorithm results. Use markdown format with bold titles (**Title**). The response must be exclusively in English.

**Patient Profile from ILA Algorithm:**
- **Context of Discovery:** ${answerContext}
- **Additional Clinical Context:** ${patientContext}
- **Final Recommendation from Algorithm:** ${finalRecommendation}

**Task:**
1.  Write a **Clinical Summary** of the patient's ILA profile and risk stratification based on the provided context and final recommendation.
2.  Provide a detailed **Management Plan** based on the final recommendation. Elaborate on what the recommendation entails (e.g., what "individualised surveillance" involves in terms of specific tests and frequencies; what "discharge to GP" means in terms of instructions for the GP and patient).
3.  Include a section on **Key Discussion Points** for the multidisciplinary team (MDD) or the pulmonologist, highlighting the most critical aspects to consider for this patient.`;

    await generateAITextStream(prompt, systemInstruction, onStreamUpdate, onStreamEnd, onStreamError, signal);
};