

import React from 'react';
import { AlertTriangle, TrendingUp, Activity, Search, Pill, Heart, Info, Stethoscope, Image, Bug, CheckCircle, XCircle, PlusCircle, HandHeart } from './icons';
import { Accordion } from './Accordion';

const InfoCard = ({ title, icon, content, bgColorClass, borderColorClass, textColorClass }: { title: string; icon: React.ReactNode; content: React.ReactNode; bgColorClass: string; borderColorClass: string; textColorClass: string; }) => (
    <div className={`${bgColorClass} p-4 rounded-md border-l-4 ${borderColorClass} h-full shadow-sm`}>
        <h4 className={`font-semibold ${textColorClass} mb-2 flex items-center`}>
            {icon}
            <span className="ml-2">{title}</span>
        </h4>
        <div className="text-base text-slate-700 space-y-1">{content}</div>
    </div>
);

export const ExacerbationAigueSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <AlertTriangle className="w-7 h-7 mr-3 text-red-500" />
        Acute Exacerbation of IPF (AE-IPF)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        A critical and potentially fatal event in the course of IPF, requiring rapid recognition and management.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            An acute exacerbation is defined as an acute, clinically significant respiratory deterioration that marks a turning point in the disease. Understanding its definition, triggers, and management is fundamental for any clinician following patients with IPF.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
            <InfoCard 
                title="Incidence"
                icon={<TrendingUp className="w-5 h-5"/>}
                content={<p className="text-base">Affects <strong>5 to 10%</strong> of IPF patients per year.</p>}
                bgColorClass="bg-blue-50"
                borderColorClass="border-blue-500"
                textColorClass="text-blue-800"
            />
            <InfoCard 
                title="Prognosis"
                icon={<Heart className="w-5 h-5"/>}
                content={<p className="text-base">Extremely poor: in-hospital mortality <strong>over 50%</strong>, median survival of <strong>3 to 4 months</strong> post-event.</p>}
                bgColorClass="bg-red-50"
                borderColorClass="border-red-500"
                textColorClass="text-red-800"
            />
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Definition and Diagnostic Criteria (International Working Group 2016)" icon={<Stethoscope className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">The definition has evolved to be more inclusive and clinically relevant. Infection is no longer an exclusion criterion but a possible trigger.</p>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">The 4 cumulative diagnostic criteria:</h4>
                    <ul className="list-decimal list-inside space-y-2 text-base">
                        <li>Previous or concurrent diagnosis of IPF.</li>
                        <li>Worsening or development of dyspnea, typically <strong>within one month</strong>.</li>
                        <li><strong>Chest HRCT:</strong> New bilateral ground-glass opacities and/or consolidations superimposed on a pre-existing UIP pattern.</li>
                        <li>Deterioration not fully explained by cardiac failure or fluid overload.</li>
                    </ul>
                </div>
                <div className="flex items-start bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-sm mt-3">
                    <Info className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base text-amber-800">
                        AE-IPF can be classified as <strong>"triggered"</strong> (infection, post-procedure, toxic...) or <strong>"idiopathic"</strong> if no trigger is found.
                    </p>
                </div>
            </div>
        </Accordion>

        <Accordion title="Risk Factors and Triggers" icon={<Bug className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">AE-IPF is often considered an abnormal response of the fibrotic lung to an injury.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Patient-related factors:</strong> More advanced disease (low FVC and DLCO), pulmonary hypertension, exertional desaturation.</li>
                    <li><strong>Infections:</strong> Viral (influenza, CMV, etc.) or bacterial infections are common triggers.</li>
                    <li><strong>Microaspiration:</strong> GERD is a suspected risk factor.</li>
                    <li><strong>Thoracic procedures:</strong> Lung surgery, bronchoscopy, or biopsy can trigger an AE.</li>
                    <li><strong>Medications:</strong> Certain drugs can be pneumotoxic.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Diagnostic Approach" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">The approach is a race against time to rule out treatable differential diagnoses and confirm AE-IPF.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Imaging (HRCT):</strong> Key examination. Should be performed urgently, ideally with contrast to rule out pulmonary embolism. Shows new bilateral opacities.</li>
                    <li><strong>Lab tests:</strong> CBC, CRP, procalcitonin, BNP (to rule out HF), D-dimer (embolism), troponin.</li>
                    <li><strong>Microbiological samples:</strong> Blood cultures, urinary antigens, viral PCR on nasopharyngeal swab.</li>
                    <li><strong>Bronchoscopy with BAL:</strong> To be considered if the patient is stable. Aims to search for infection (bacterial, viral, opportunistic) or alveolar hemorrhage.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Therapeutic Management" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-6 text-slate-700">
                
                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">1. Supportive Measures: The Foundation of Treatment</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <InfoCard 
                            title="Oxygen Therapy"
                            icon={<CheckCircle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base"><strong>Goal:</strong> Maintain SpO2 at or above 90%.</p>
                                <p className="text-base"><strong>Means:</strong> High-flow nasal cannula (HFNC) is often necessary due to severe hypoxemia and high patient inspiratory flow.</p>
                            </>}
                            bgColorClass="bg-green-50"
                            borderColorClass="border-green-500"
                            textColorClass="text-green-800"
                        />
                         <InfoCard 
                            title="Mechanical Ventilation"
                            icon={<AlertTriangle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base"><strong>Non-Invasive Ventilation (NIV):</strong> May improve comfort and reduce short-term mortality compared to invasive ventilation.</p>
                                <p className="text-base"><strong>Invasive Mechanical Ventilation (IMV):</strong> Extremely high mortality (over 90%). To be considered only as a <strong>bridge to lung transplantation</strong> in an already listed patient, and after collegial discussion and patient consent.</p>
                            </>}
                            bgColorClass="bg-amber-50"
                            borderColorClass="border-amber-500"
                            textColorClass="text-amber-800"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">2. First-Line Pharmacological Treatments</h3>
                     <div className="grid md:grid-cols-2 gap-4">
                        <InfoCard 
                            title="Glucocorticoids"
                            icon={<CheckCircle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base">First-line treatment despite the absence of randomized controlled trials.</p>
                                <p className="text-base"><strong>Usual regimen:</strong> Pulse of <strong>methylprednisolone 500mg to 1g/day for 3 days</strong>, followed by oral corticosteroids (e.g., prednisone 0.5-1 mg/kg/day) with a slow taper.</p>
                            </>}
                             bgColorClass="bg-green-50"
                            borderColorClass="border-green-500"
                            textColorClass="text-green-800"
                        />
                         <InfoCard 
                            title="Antibiotics"
                            icon={<CheckCircle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base">Almost systematic due to the difficulty of ruling out an infection.</p>
                                <p className="text-base"><strong>Spectrum:</strong> Broad, covering community-acquired pathogens. Retrospective studies suggest a potential benefit of <strong>macrolides (Azithromycin)</strong>.</p>
                                <p className="text-base"><strong>PJP Prophylaxis:</strong> Consider Co-trimoxazole for patients on prolonged corticosteroid therapy.</p>
                            </>}
                             bgColorClass="bg-green-50"
                            borderColorClass="border-green-500"
                            textColorClass="text-green-800"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">3. Controversial or Investigational Therapies</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <InfoCard 
                            title="Antifibrotics (Nintedanib/Pirfenidone)"
                            icon={<PlusCircle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base"><strong>Recommendation:</strong> Do not initiate during the acute episode.</p>
                                <p className="text-base"><strong>If the patient is already on treatment:</strong> The tendency is to <strong>continue</strong> it if digestive and hepatic tolerance allows, as data suggest this is beneficial.</p>
                            </>}
                            bgColorClass="bg-amber-50"
                            borderColorClass="border-amber-500"
                            textColorClass="text-amber-800"
                        />
                        <InfoCard 
                            title="Immunosuppressants"
                            icon={<XCircle className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base"><strong>Cyclophosphamide:</strong> <strong>DO NOT USE.</strong> The EXAFIP trial showed an <strong>increase in mortality</strong>.</p>
                                <p className="text-base"><strong>Others (Cyclosporine, Tacrolimus):</strong> No evidence of benefit. Their use is not recommended outside of research protocols.</p>
                            </>}
                            bgColorClass="bg-red-50"
                            borderColorClass="border-red-500"
                            textColorClass="text-red-800"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b pb-2">4. Advanced and Supportive Strategies</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                         <InfoCard 
                            title="Experimental Therapies"
                            icon={<Pill className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base">Approaches being studied in expert centers:</p>
                                <ul className="list-disc list-inside pl-2 text-base">
                                    <li><strong>Plasma exchange + Rituximab +/- IVIG:</strong> Case series suggest a survival benefit.</li>
                                    <li><strong>Polymyxin-B hemoperfusion:</strong> Used in Japan, retrospective data show improved survival.</li>
                                </ul>
                            </>}
                            bgColorClass="bg-slate-50"
                            borderColorClass="border-slate-500"
                            textColorClass="text-slate-800"
                        />
                         <InfoCard 
                            title="Palliative Care and Advance Directives"
                            icon={<HandHeart className="w-5 h-5"/>}
                            content={<>
                                <p className="text-base"><strong>Essential and early.</strong></p>
                                <p className="text-base">AE-IPF is a key moment to (re)address goals of care, therapeutic limitations (especially IMV), and focus on patient comfort (managing dyspnea with low-dose opioids).</p>
                            </>}
                            bgColorClass="bg-green-50"
                            borderColorClass="border-green-500"
                            textColorClass="text-green-800"
                        />
                    </div>
                </div>

            </div>
        </Accordion>
    </div>
  </div>
);

export default ExacerbationAigueSection;