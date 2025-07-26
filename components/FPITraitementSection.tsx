
import React from 'react';
import { Pill, Lungs, Heart, Activity, HandHeart, Info, AlertTriangle, Shield, CheckCircle } from './icons';
import { Accordion } from './Accordion';

const TraitementCard = ({ title, content }: { title: string, content: React.ReactNode }) => (
    <div className="bg-slate-50 p-4 rounded-md border border-slate-200 h-full">
        <h4 className="font-semibold text-slate-700 mb-2">{title}</h4>
        <div className="text-base text-slate-600 space-y-1">{content}</div>
    </div>
);

export const FPITraitementSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Pill className="w-7 h-7 mr-3 text-blue-500" />
        Treatment of Idiopathic Pulmonary Fibrosis
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        A comprehensive and multimodal therapeutic approach aimed at slowing disease progression and improving quality of life.
      </p>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            The treatment of IPF has been transformed by the advent of antifibrotic therapies. The goal is not to cure the disease, but to slow its inexorable progression, manage symptoms, treat comorbidities, and improve patients' quality of life. Management is a complex journey that requires a holistic approach and shared decision-making with the patient.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-blue-800">The 5 Pillars of IPF Treatment</h3>
                <div className="mt-2 text-base text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Antifibrotic treatment:</strong> Slow the decline of respiratory function.</li>
                    <li><strong>Non-pharmacological management:</strong> Manage hypoxemia and improve exercise tolerance.</li>
                    <li><strong>Comorbidity management:</strong> Actively treat associated diseases to improve overall prognosis.</li>
                    <li><strong>Lung transplantation:</strong> Consider early as the only curative option.</li>
                    <li><strong>Supportive and palliative care:</strong> Control symptoms for a better quality of life.</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Pharmacological Treatment: Antifibrotics" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">Two drugs, nintedanib and pirfenidone, have demonstrated efficacy in slowing the decline of Forced Vital Capacity (FVC) by about 50% over one year. The choice between the two depends on the patient's tolerance profile and comorbidities.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <TraitementCard 
                        title="Nintedanib (Ofev®)"
                        content={
                            <>
                                <p><strong>Mechanism:</strong> Tyrosine kinase inhibitor (VEGFR, FGFR, PDGFR).</p>
                                <p><strong>Efficacy:</strong> Slows the annual decline in FVC.</p>
                                <p className="font-semibold mt-2">Managing side effects:</p>
                                <ul className="list-disc list-inside pl-2 text-base">
                                    <li><strong>Diarrhea (very common):</strong> Symptomatic treatment (loperamide), hydration, dose adjustment.</li>
                                    <li><strong>Nausea, vomiting.</strong></li>
                                    <li><strong>Elevated transaminases:</strong> Regular liver function monitoring (monthly for the first 3 months, then quarterly).</li>
                                </ul>
                            </>
                        }
                    />
                    <TraitementCard 
                        title="Pirfenidone (Esbriet®)"
                        content={
                            <>
                                <p><strong>Mechanism:</strong> Antifibrotic, anti-inflammatory, and antioxidant effects.</p>
                                <p><strong>Efficacy:</strong> Slows the annual decline in FVC.</p>
                                <p className="font-semibold mt-2">Managing side effects:</p>
                                <ul className="list-disc list-inside pl-2 text-base">
                                    <li><strong>Digestive issues (nausea, anorexia):</strong> Take the medication during or after meals.</li>
                                    <li><strong>Photosensitivity and skin rash:</strong> Strict sun avoidance, use of total sunblock, protective clothing.</li>
                                    <li><strong>Fatigue.</strong></li>
                                </ul>
                            </>
                        }
                    />
                </div>
                <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
                    <h4 className="text-lg font-bold text-amber-900 mb-3">Focus on Nintedanib (Ofev®)</h4>
                    <div className="space-y-3 text-base text-amber-800">
                        <div>
                            <h5 className="font-semibold">Mechanism of Action</h5>
                            <p className="text-base">Inhibitor of multiple tyrosine kinases (VEGFR, FGFR, PDGFR) that block signaling pathways involved in fibroblast proliferation and migration.</p>
                        </div>
                        <div>
                            <h5 className="font-semibold">Demonstrated Efficacy</h5>
                            <ul className="list-disc list-inside pl-4 text-base">
                                <li>Slows FVC decline by about 50% compared to placebo (INPULSIS trials).</li>
                                <li>Reduces the risk of acute exacerbations.</li>
                                <li>Effective even in patients with more severe disease (FVC less than 50%) or associated emphysema (CPFE).</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold">Dosage and Administration</h5>
                            <ul className="list-disc list-inside pl-4 text-base">
                                <li>150 mg, twice daily, approximately 12 hours apart.</li>
                                <li>To be taken with food to improve digestive tolerance.</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold">Practical Management of Side Effects</h5>
                            <ul className="list-disc list-inside pl-4 text-base">
                                <li><strong>Diarrhea:</strong> The most common side effect (over 60%). Managed by hydration, loperamide, and if necessary, dose reduction to 100 mg twice daily.</li>
                                <li><strong>Hepatotoxicity:</strong> Possible elevation of transaminases. Monthly lab monitoring for the first 3 months, then quarterly.</li>
                            </ul>
                        </div>
                         <div>
                            <h5 className="font-semibold">Precautions for Use</h5>
                             <ul className="list-disc list-inside pl-4 text-base">
                                <li>Contraindicated in moderate to severe hepatic impairment (Child-Pugh B or C).</li>
                                <li>Caution with anticoagulant therapy due to a potentially increased risk of bleeding.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Non-Pharmacological Management" icon={<Activity className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Oxygen Therapy:</strong> Essential to correct resting or exertional hypoxemia. It aims to maintain SpO2 ≥ 90%. Ambulatory oxygen therapy improves exercise capacity and quality of life.</li>
                    <li><strong>Pulmonary Rehabilitation:</strong> A supervised program of exercise training, therapeutic education, and psychosocial support. Proven to improve dyspnea, walking distance, and quality of life.</li>
                    <li><strong>Vaccinations:</strong> Updated vaccinations for influenza (annual), pneumococcus, and COVID-19 are recommended to reduce the risk of infectious acute exacerbations.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Comorbidity Management" icon={<Shield className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                 <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Gastroesophageal Reflux Disease (GERD):</strong> Highly prevalent. Treatment with proton pump inhibitors (PPIs) is recommended for symptomatic patients, although its impact on IPF progression remains debated.</li>
                    <li><strong>Pulmonary Hypertension (PAH):</strong> A frequent and poor prognostic complication. Screening with echocardiography is recommended, especially in cases of very low DLCO or a mismatch between dyspnea and FVC decline.</li>
                    <li><strong>Obstructive Sleep Apnea (OSA):</strong> Should be investigated if suggestive symptoms are present. Its management can improve quality of life.</li>
                    <li><strong>Combined Pulmonary Fibrosis and Emphysema (CPFE):</strong> Modifies the functional presentation (sub-normal lung volumes) but worsens the prognosis.</li>
                 </ul>
            </div>
        </Accordion>
        
        <Accordion title="Lung Transplantation" icon={<Heart className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">Lung transplantation is the only curative therapeutic option for IPF.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Early referral:</strong> It is crucial to refer the patient to a transplantation center for an initial evaluation at the time of diagnosis.</li>
                    <li><strong>Transplantation window:</strong> The goal is to list the patient neither too early (risks related to immunosuppression) nor too late (death on the waiting list).</li>
                    <li><strong>Criteria for listing:</strong> Generally discussed in cases of proven functional decline (10% drop in FVC or 15% drop in DLCO in 6 months) or immediately if DLCO is less than 40%.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Palliative Care and Symptom Management" icon={<HandHeart className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">The early introduction of supportive care is fundamental to improving quality of life.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Dyspnea:</strong> Management relies on oxygen therapy and rehabilitation. For refractory dyspnea, low-dose opioids (oral morphine) are the most effective and recommended treatment.</li>
                    <li><strong>Chronic cough:</strong> Often refractory. Non-specific treatments like opioids (codeine) or gabapentin can be tried. Treating associated GERD is essential.</li>
                    <li><strong>Psychological support:</strong> Anxiety and depression are common and must be managed.</li>
                    <li><strong>Advance directives:</strong> Discussing the patient's wishes regarding end-of-life care is an integral part of management.</li>
                </ul>
            </div>
        </Accordion>
    </div>
  </div>
);

export default FPITraitementSection;