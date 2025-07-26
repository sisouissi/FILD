import { GoogleGenAI } from "@google/genai";
import type { PatientData } from '../components/AcrGuidelineTool/types';
import { connectiviteTypes, riskFactors, symptoms } from '../components/AcrGuidelineTool/constants';
import { SARD_LABELS } from '../data/acr_treatment_data';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// --- API for Screening Tool ---
export const generateScreeningSummary = async (patientData: PatientData, riskLevel: string): Promise<string> => {
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
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error generating summary with Gemini API:", error);
        throw new Error("Summary generation failed. Could not connect to the AI service.");
    }
};


// --- API for Treatment Tool ---
export const generateTreatmentSummary = async (sard: string, context: string): Promise<string> => {
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
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error generating treatment summary with Gemini API:", error);
        throw new Error("Summary generation failed. Could not connect to the AI service.");
    }
};