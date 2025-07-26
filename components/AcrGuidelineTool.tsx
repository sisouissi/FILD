import React, { useState, useCallback, useMemo } from 'react';
import { AlertTriangle, CheckCircle, Stethoscope, Activity, Heart, XCircle, Search } from './icons';
import { generateScreeningSummary } from '../services/gemini';
import { AISummary } from './AcrGuidelineTool/components/AISummary';
import { StepIndicator } from './AcrGuidelineTool/components/StepIndicator';
import { PatientInfoForm } from './AcrGuidelineTool/components/PatientInfoForm';
import { RecommendationsDisplay } from './AcrGuidelineTool/components/RecommendationsDisplay';
import { PatientData, Step, RiskLevelInfo, Recommendation } from './AcrGuidelineTool/types';
import { connectiviteTypes } from './AcrGuidelineTool/constants';

const getRiskLevel = (data: PatientData): RiskLevelInfo => {
    let score = 0;

    if (data.hasPID) {
        // If ILD is already diagnosed, we are in a monitoring context. Risk is inherently high for progression.
        return { level: 'high', color: 'border-red-500', icon: AlertTriangle };
    }

    // Screening context
    const connectivite = connectiviteTypes.find(c => c.value === data.connectiviteType);
    if (connectivite) {
         if (connectivite.risk === 'high') score += 2;
         if (connectivite.risk === 'moderate') score += 1;
    }
    
    // Assess risk based on selected factors
    if (data.riskFactors.some(rf => ['anti-scl70', 'anti-synthetase', 'anti-mda5'].includes(rf))) score += 2;
    if (data.riskFactors.includes('age') || data.riskFactors.includes('sexeM')) score += 1;

    if (data.currentSymptoms.includes('crepitants')) score += 2;
    if (data.currentSymptoms.includes('dyspnee')) score += 1;
    if (data.currentSymptoms.length > 2) score +=1;

    if (score >= 3) {
        return { level: 'high', color: 'border-red-500', icon: AlertTriangle };
    }
    if (score >= 1) {
        return { level: 'moderate', color: 'border-orange-500', icon: Stethoscope };
    }
    return { level: 'low', color: 'border-green-500', icon: CheckCircle };
};

const SCREENING_RECOMMENDATIONS: Recommendation[] = [
    { test: 'PFTs (Spirometry + DLCO)', recommendation: 'Recommended (conditional)', level: 'conditional-for', icon: Activity, description: "Initial evaluation of lung function. Essential for detecting restrictive impairment or diffusion alteration.", frequency: 'At CTD diagnosis' },
    { test: 'High-Resolution Chest CT', recommendation: 'Recommended (conditional)', level: 'conditional-for', icon: Search, description: "Reference examination for morphological diagnosis. To be discussed based on risk level and symptoms.", frequency: 'If PFTs are abnormal or symptoms present' },
    { test: '6-Minute Walk Test (6MWT)', recommendation: 'Recommended (conditional)', level: 'conditional-for', icon: Heart, description: "Assesses exercise tolerance and checks for desaturation, an important prognostic factor.", frequency: 'If symptoms or abnormal PFTs' },
    { test: 'Echocardiogram', recommendation: 'Not Recommended (conditional)', level: 'conditional-against', icon: XCircle, description: "Not recommended routinely for ILD screening. Indicated if pulmonary hypertension is suspected.", frequency: 'Not applicable for systematic screening' },
];

const MONITORING_RECOMMENDATIONS: Recommendation[] = [
    { test: 'PFTs (Spirometry + DLCO)', recommendation: 'Recommended (strong)', level: 'conditional-for', icon: Activity, description: "Monitoring of disease progression. Frequency depends on severity and stability.", frequency: 'Every 3-6 months if progressing, 6-12 months if stable' },
    { test: '6-Minute Walk Test (6MWT)', recommendation: 'Recommended (strong)', level: 'conditional-for', icon: Heart, description: "Regular assessment of functional capacity and oxygenation on exertion.", frequency: 'Every 6-12 months' },
    { test: 'High-Resolution Chest CT', recommendation: 'Recommended (conditional)', level: 'conditional-for', icon: Search, description: "To assess radiological progression or in case of unexplained worsening. Not for routine systematic monitoring.", frequency: 'Every 12-24 months, or if worsening' },
];

export const AcrScreeningTool: React.FC = () => {
    const [step, setStep] = useState<Step>('patient-info');
    const [patientData, setPatientData] = useState<PatientData>({
        connectiviteType: '',
        hasPID: false,
        riskFactors: [],
        currentSymptoms: []
    });
    const [aiSummary, setAiSummary] = useState('');
    const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
    const [summaryError, setSummaryError] = useState<string | null>(null);

    const riskLevel = useMemo(() => getRiskLevel(patientData), [patientData]);

    const handleSubmit = () => {
        setStep('recommendations');
    };

    const handleBack = () => {
        setStep('patient-info');
    };

    const handleReset = () => {
        setPatientData({
            connectiviteType: '',
            hasPID: false,
            riskFactors: [],
            currentSymptoms: []
        });
        setAiSummary('');
        setSummaryError(null);
        setStep('patient-info');
    };

    const handleGenerateSummary = useCallback(async () => {
        setIsGeneratingSummary(true);
        setAiSummary('');
        setSummaryError(null);
        try {
            const summary = await generateScreeningSummary(patientData, riskLevel.level);
            setAiSummary(summary);
        } catch (e) {
            setSummaryError(e instanceof Error ? e.message : "An unknown error occurred.");
        } finally {
            setIsGeneratingSummary(false);
        }
    }, [patientData, riskLevel]);

    return (
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-8">
            <StepIndicator currentStep={step} />

            {step === 'patient-info' && (
                <PatientInfoForm
                    patientData={patientData}
                    setPatientData={setPatientData}
                    onSubmit={handleSubmit}
                />
            )}

            {step === 'recommendations' && (
                <RecommendationsDisplay
                    patientData={patientData}
                    riskLevel={riskLevel}
                    screeningRecs={SCREENING_RECOMMENDATIONS}
                    monitoringRecs={MONITORING_RECOMMENDATIONS}
                    onBack={handleBack}
                    onReset={handleReset}
                    onGenerateSummary={handleGenerateSummary}
                    aiSummary={aiSummary}
                    isGeneratingSummary={isGeneratingSummary}
                    summaryError={summaryError}
                />
            )}
        </div>
    );
};