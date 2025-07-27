import { GoogleGenAI } from "@google/genai";
import type { PatientData } from '../components/AcrGuidelineTool/types';
import { connectiviteTypes, riskFactors, symptoms } from '../components/AcrGuidelineTool/constants';
import { SARD_LABELS } from '../data/acr_treatment_data';
import type { ILAAlgorithmAnswers } from '../components/ILAAlgorithmTool';

let ai: GoogleGenAI | null = null;
let initError: string | null = null;

try {
  if (!process.env.API_KEY) {
    throw new Error("An API Key must be provided. Please ensure it is set in the execution environment.");
  }
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
} catch (e) {
  console.error("Failed to initialize GoogleGenAI:", e);
  initError = e instanceof Error ? e.message : "An unknown error occurred during AI service initialization.";
}

const getAIService = (): GoogleGenAI => {
    if (initError) throw new Error(`AI Service is not available: ${initError}`);
    if (!ai) throw new Error("AI Service could not be initialized.");
    return ai;
};


// --- API for Screening Tool ---
export const generateScreeningSummary = async (patientData: PatientData, riskLevel: string): Promise<string> => {
    const aiService = getAIService();
    
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
    
    try {
        const response = await aiService.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error generating summary with Gemini API:", error);
        throw new Error("The AI summary could not be generated. There might be an issue with the AI service or the request.");
    }
};


// --- API for Treatment Tool ---
export const generateTreatmentSummary = async (sard: string, context: string): Promise<string> => {
    const aiService = getAIService();

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

    try {
        const response = await aiService.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error generating treatment summary with Gemini API:", error);
        throw new Error("The AI summary could not be generated. There might be an issue with the AI service or the request.");
    }
};

// --- API for ILA Tool ---
export const generateILAmanagementSummary = async (answers: ILAAlgorithmAnswers, finalRecommendation: string): Promise<string> => {
    const aiService = getAIService();
    
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

    try {
        const response = await aiService.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error generating ILA summary with Gemini API:", error);
        throw new Error("The AI summary could not be generated. There might be an issue with the AI service or the request.");
    }
};