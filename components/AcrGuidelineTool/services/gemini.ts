import { PatientData } from '../types';
import { connectiviteTypes, riskFactors, symptoms } from '../constants';

export const generateClinicalSummary = async (patientData: PatientData, riskLevel: string): Promise<string> => {
    const connectiviteLabel = connectiviteTypes.find(c => c.value === patientData.connectiviteType)?.label || patientData.connectiviteType;
    const riskFactorsList = patientData.riskFactors.length > 0 ? patientData.riskFactors.map(rf => riskFactors.find(r => r.value === rf)?.label).join(', ') : 'none';
    const symptomsList = patientData.currentSymptoms.length > 0 ? patientData.currentSymptoms.map(s => symptoms.find(sym => sym.value === s)?.label).join(', ') : 'none';

    const prompt = `Generate a concise clinical summary for a patient with the following characteristics:
- **Connective Tissue Disease:** ${connectiviteLabel}
- **ILD Risk Factors:** ${riskFactorsList}
- **Presenting ILD Symptoms:** ${symptomsList}
- **ILD Already Diagnosed:** ${patientData.hasPID ? 'Yes' : 'No'}
- **Estimated ILD Risk Level:** ${riskLevel}

The summary should start with a sentence summarizing the patient's profile. Then, it should provide clear, prioritized recommendations for screening or monitoring, consistent with ACR 2023 guidelines. Use markdown format with bold titles (**Title**). The response must be exclusively in English.`;

    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: prompt,
                systemInstruction: "You are an expert assistant in pulmonology and rheumatology, specializing in the interpretation of clinical guidelines. You write clear and structured summaries for physicians.",
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `HTTP error: ${response.status}`);
        }

        const data = await response.json();
        return data.text;
        
    } catch (error) {
        console.error("Error generating summary:", error);
        throw new Error("Summary generation failed. The API may have encountered a problem.");
    }
};