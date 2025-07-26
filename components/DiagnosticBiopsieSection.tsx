
import React from 'react';
import { Microscope, CheckCircle, AlertTriangle, FileText, Activity, Info } from './icons';
import { Accordion } from './Accordion';

const ComparisonRow = ({ feature, slb, tblc }: { feature: string, slb: string, tblc: string }) => (
    <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-200 last:border-b-0 text-base">
        <div className="font-semibold text-slate-700">{feature}</div>
        <div className="text-slate-600">{slb}</div>
        <div className="text-slate-600">{tblc}</div>
    </div>
);

export const DiagnosticBiopsieSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Microscope className="w-7 h-7 mr-3 text-blue-500" />
        Lung Biopsy
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        When and how to obtain histological confirmation in the diagnosis of Idiopathic Pulmonary Fibrosis.
      </p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            Lung biopsy is a decisive but invasive diagnostic step. It is not necessary for all patients and its relevance must be assessed on a case-by-case basis. The objective is to histologically confirm the Usual Interstitial Pneumonia (UIP) pattern when non-invasive tests are not conclusive, and to formally exclude other diagnoses that are treated differently.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-blue-800">When to discuss biopsy?</h3>
                <div className="mt-2 text-base text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Discussion is <strong>essential</strong> for HRCT patterns "Indeterminate" or "Suggestive of an alternative diagnosis".</li>
                    <li>It is <strong>unnecessary</strong> if the HRCT shows a Definite or Probable UIP pattern in a patient with a typical clinical profile.</li>
                    <li>It is <strong>contraindicated</strong> if the operative risks are deemed too high.</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Indications for Lung Biopsy" icon={<CheckCircle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">Lung biopsy is not systematic. It is reserved for situations where the diagnosis remains uncertain after non-invasive evaluation.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Main indication:</strong> Patient with a clinical suspicion of IPF but an HRCT pattern that is <strong>Indeterminate</strong> or <strong>Suggestive of an Alternative Diagnosis</strong>.</li>
                    <li><strong>Objective:</strong> To confirm a Usual Interstitial Pneumonia (UIP) pattern and/or to exclude other diagnoses (e.g., fibrotic HP, sarcoidosis).</li>
                    <li><strong>Decision:</strong> Must be made during a <strong>multidisciplinary discussion (MDD)</strong>, weighing the diagnostic benefit against the operative risks for the patient.</li>
                </ul>
                <div className="flex items-start bg-red-50 border-l-4 border-red-500 p-3 rounded-r-sm mt-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base text-red-800">
                        Biopsy is <strong>contraindicated</strong> if the patient is too frail (advanced age, severe comorbidities, severe pulmonary hypertension, severe hypoxemic respiratory failure) or if the HRCT shows a Definite or Probable UIP pattern in a typical clinical context.
                    </p>
                </div>
            </div>
        </Accordion>

        <Accordion title="Biopsy Techniques: Surgical vs. Cryobiopsy" icon={<Activity className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700 text-base">
                <p>Two main techniques are available, each with its advantages and disadvantages. The choice depends on the center's expertise and the patient's profile.</p>
                <div className="mt-4 border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-3 gap-2 bg-slate-100 p-2 font-bold text-slate-800 text-base">
                        <div>Characteristic</div>
                        <div>Surgical Lung Biopsy (SLB)</div>
                        <div>Transbronchial Lung Cryobiopsy (TBLC)</div>
                    </div>
                    <div className="p-2">
                        <ComparisonRow feature="Technique" slb="Video-assisted thoracoscopic surgery (VATS), general anesthesia" tblc="Bronchoscopy, deep sedation or GA" />
                        <ComparisonRow feature="Sample size" slb="Large (several cm), gold standard for analysis" tblc="Smaller than surgical but larger than forceps biopsies" />
                        <ComparisonRow feature="Diagnostic yield" slb="Very high (over 90%)" tblc="Good (70-85%), but depends on operator experience" />
                        <ComparisonRow feature="Invasiveness" slb="High, requires chest tube drainage" tblc="Less invasive, outpatient or short hospital stay" />
                        <ComparisonRow feature="Main risks" slb="Mortality (1-3%), acute exacerbation (higher risk), prolonged air leak" tblc="Pneumothorax (7-10%), bleeding (often moderate)" />
                        <ComparisonRow feature="Recommendation" slb="The historical gold standard" tblc="Acceptable alternative in expert centers (conditional recommendation ATS/ERS 2022)" />
                    </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Histological Features (UIP Pattern)" icon={<FileText className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">The histological diagnosis of UIP is based on the combination of several criteria. The key is the spatial and temporal heterogeneity of the lesions.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Architectural heterogeneity:</strong> Coexistence of areas of near-normal lung, dense fibrosis, and microscopic "honeycombing".</li>
                    <li><strong>Subpleural distribution:</strong> Fibrosis predominantly located just beneath the pleura and along interlobular septa.</li>
                    <li><strong>Fibroblastic Foci:</strong> Key elementary lesion. These are clusters of active myofibroblasts at the interface between healthy and fibrotic tissue, marking the progression of the disease.</li>
                    <li><strong>"Honeycombing" remodeling:</strong> Fibrotic cystic spaces lined by bronchiolar epithelium.</li>
                    <li><strong>Absence of features suggesting another diagnosis:</strong> No well-formed granulomas (sarcoidosis), no predominant cellular inflammation (cellular NSIP), no marked peribronchiolar involvement (HP).</li>
                </ul>
            </div>
        </Accordion>
    </div>
  </div>
);

export default DiagnosticBiopsieSection;