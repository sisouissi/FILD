import React from 'react';
import { Activity, History, FlaskConical, Image, ClipboardList, AlertTriangle, Info } from './icons';
import { Accordion } from './Accordion';

const TDMCard = ({ title, characteristics, confidence, borderColorClass }: { title: string, characteristics: string[], confidence: string, borderColorClass: string }) => (
    <div className={`p-4 rounded-lg border-l-4 ${borderColorClass} bg-slate-50`}>
        <h4 className={`font-bold text-lg mb-2 ${borderColorClass.replace('border-', 'text-').replace('-500', '-800')}`}>{title}</h4>
        <ul className="list-disc list-inside space-y-1 text-base text-slate-700">
            {characteristics.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <p className={`mt-3 text-base font-semibold ${borderColorClass.replace('border-', 'text-').replace('-500', '-700')}`}>Confidence for a UIP pattern: {confidence}</p>
    </div>
);

export const FPIEvaluationInitialeSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Activity className="w-7 h-7 mr-3 text-blue-500" />
        Initial Evaluation
      </h2>
       <p className="text-slate-600 mt-2 text-base">
        A structured approach for the initial evaluation of a patient with suspected Idiopathic Pulmonary Fibrosis (IPF).
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            The initial evaluation of IPF is a crucial step that relies on a multidisciplinary approach. The goal is not only to suspect IPF, but more importantly, to rigorously rule out all other possible causes of fibrosing interstitial lung disease. A methodical process is essential to avoid diagnostic errors and to properly guide management.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-blue-800">Objectives of the Initial Evaluation</h3>
                <div className="mt-2 text-base text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Rule out differential diagnoses</strong> (CTD, HP, toxicities...).</li>
                    <li><strong>Assess the probability of IPF</strong> based on clinical and HRCT findings.</li>
                    <li><strong>Quantify the severity</strong> of the respiratory functional impairment.</li>
                    <li>Determine the need for <strong>histological confirmation</strong>.</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="History and Physical Examination" icon={<History className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">The first step is to confirm the clinical suspicion of IPF and exclude other causes of fibrosing ILD.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Confirm the clinical picture:</strong> Exertional dyspnea, dry cough, age over 60, smoking history, "velcro-like" crackles.</li>
                    <li><strong>Rule out differential diagnoses:</strong>
                        <ul className="list-['-_'] list-inside pl-6 mt-1 space-y-1">
                            <li><strong>Exposures:</strong> Meticulous search for occupational (asbestos, silica) or domestic (birds, molds) exposures to rule out pneumoconiosis or fibrotic HP.</li>
                            <li><strong>Connective Tissue Diseases:</strong> Comprehensive history and physical exam looking for extra-pulmonary signs (arthralgia, Raynaud's, skin rash, dry eyes/mouth...).</li>
                            <li><strong>Medications:</strong> Review of all past and current treatments known for their pulmonary toxicity.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Laboratory Tests" icon={<FlaskConical className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">The main goal of lab workup is to search for an underlying cause of the ILD. There is no specific blood marker for IPF.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Standard panel:</strong> CBC, complete metabolic panel, liver function tests.</li>
                    <li><strong>Basic autoimmune panel:</strong> Antinuclear antibodies (ANA), Rheumatoid Factor (RF), anti-cyclic citrullinated peptide (anti-CCP) antibodies.</li>
                    <li><strong>Extended panel (if suspected):</strong> Specific antibodies for myositis (anti-Jo1, etc.), Scleroderma (anti-Scl70, etc.), ANCA.</li>
                    <li><strong>Precipitins:</strong> To be considered if HP is suspected.</li>
                </ul>
                <div className="flex items-start bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-sm mt-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base text-amber-800">A weakly positive autoimmune panel (low-titer ANA, RF) can be seen in patients with IPF without indicating a connective tissue disease. Interpretation must be cautious and integrated with the clinical context.</p>
                </div>
            </div>
        </Accordion>

        <Accordion title="Pulmonary Function Tests (PFTs)" icon={<ClipboardList className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">PFTs confirm the restrictive nature of the impairment and quantify its severity.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Typical profile:</strong> Restrictive pattern with a decrease in Forced Vital Capacity (FVC) and Total Lung Capacity (TLC).</li>
                    <li><strong>FEV1/FVC ratio:</strong> Normal or increased.</li>
                    <li><strong>Diffusing capacity for CO (DLCO):</strong> Early and often disproportionate decrease compared to the decline in volumes. It is an important marker of severity and prognosis.</li>
                    <li><strong>6-Minute Walk Test (6MWT):</strong> Assesses exercise tolerance and looks for oxygen desaturation, a major prognostic factor.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="High-Resolution Computed Tomography (HRCT)" icon={<Image className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">HRCT is the key examination. Analysis by an experienced radiologist allows for classification of the fibrosis into 4 patterns, which determine the probability of an IPF diagnosis and the need for a biopsy.</p>
                <div className="space-y-4">
                    <TDMCard 
                        title="Definite UIP Pattern"
                        characteristics={[
                            "Predominantly subpleural and basal distribution.",
                            "Honeycombing, with or without traction bronchiectasis.",
                            "Presence of reticulation.",
                            "Absence of atypical features."
                        ]}
                        confidence="Very high (over 90%)"
                        borderColorClass="border-green-500"
                    />
                     <TDMCard 
                        title="Probable UIP Pattern"
                        characteristics={[
                            "Predominantly subpleural and basal distribution.",
                            "Fine to coarse reticulation.",
                            "Traction bronchiectasis/bronchiolectasis.",
                            "Absence of honeycombing and atypical features."
                        ]}
                        confidence="High (70-89%)"
                        borderColorClass="border-yellow-500"
                    />
                     <TDMCard 
                        title="Indeterminate for UIP Pattern"
                        characteristics={[
                            "Variable distribution of fibrosis (e.g., diffuse or peribronchovascular).",
                            "Presence of reticulation, but without criteria for definite/probable UIP.",
                            "May have subtle features suggesting another disease, but inconclusive."
                        ]}
                        confidence="Low (51-69%)"
                        borderColorClass="border-orange-500"
                    />
                     <TDMCard 
                        title="Pattern Suggestive of an Alternative Diagnosis"
                        characteristics={[
                            "Multiple cysts, diffuse nodules, predominant ground-glass opacity, consolidations.",
                            "Marked perilymphatic or peribronchovascular distribution.",
                            "Significant air trapping (three density sign in HP)."
                        ]}
                        confidence="Very low (≤50%)"
                        borderColorClass="border-red-500"
                    />
                </div>
            </div>
        </Accordion>
    </div>
  </div>
);

export default FPIEvaluationInitialeSection;