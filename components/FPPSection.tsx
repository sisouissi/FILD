
import React from 'react';
import { TrendingUp, Info, CheckCircle, AlertTriangle, Stethoscope, Pill, Search, HandHeart, Activity, ChevronRight } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'teal';
}> = ({ title, children, icon, color }) => {
    const colors = {
        blue: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-800' },
        green: { border: 'border-green-500', bg: 'bg-green-50', text: 'text-green-800' },
        orange: { border: 'border-orange-500', bg: 'bg-orange-50', text: 'text-orange-800' },
        purple: { border: 'border-purple-500', bg: 'bg-purple-50', text: 'text-purple-800' },
        red: { border: 'border-red-500', bg: 'bg-red-50', text: 'text-red-800' },
        teal: { border: 'border-teal-500', bg: 'bg-teal-50', text: 'text-teal-800' },
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color].border} ${colors[color].bg} shadow-sm h-full`}>
            <h4 className={`font-semibold flex items-center mb-2 ${colors[color].text}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};

const StepCard: React.FC<{
  stepNumber: string;
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  color: 'blue' | 'purple' | 'orange';
}> = ({ stepNumber, title, children, icon, color }) => {
    const colors = {
        blue: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-800', bgDark: 'bg-blue-500' },
        purple: { border: 'border-purple-500', bg: 'bg-purple-50', text: 'text-purple-800', bgDark: 'bg-purple-500' },
        orange: { border: 'border-orange-500', bg: 'bg-orange-50', text: 'text-orange-800', bgDark: 'bg-orange-500' },
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color].border} ${colors[color].bg} w-full shadow-sm`}>
            <div className="flex items-center mb-3">
                <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full ${colors[color].bgDark} text-white font-bold text-lg mr-4`}>
                    {stepNumber}
                </div>
                <h4 className={`font-semibold text-lg flex items-center ${colors[color].text}`}>
                    {icon}
                    <span className="ml-2">{title}</span>
                </h4>
            </div>
            <div className="pl-14 text-slate-700 space-y-2 text-base">
                {children}
            </div>
        </div>
    );
};


export const FPPSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <TrendingUp className="w-7 h-7 mr-3 text-blue-500" />
        Progressive Pulmonary Fibrosis (PPF)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Understanding the common progressive phenotype across various interstitial lung diseases (ILDs).
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Introduction to the Concept of PPF</h3>
        <p className="text-slate-700 mb-4 text-base">
            The concept of Progressive Pulmonary Fibrosis (PPF) does not refer to a single disease, but rather a **clinical phenotype**, i.e., a behavioral pattern observed in various ILDs. Regardless of their initial diagnosis, some patients develop a self-sustaining worsening of fibrosis, leading to functional decline, a decline in quality of life, and increased mortality, similar to Idiopathic Pulmonary Fibrosis (IPF).
        </p>
        <p className="text-slate-700 text-base">
            Recognizing this phenotype is crucial as it has paved the way for the use of antifibrotic treatments for patients with ILDs other than IPF.
        </p>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
            <Info className="w-6 h-6 mr-3" />
            Key Principles
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
            <li>PPF is a <strong>progressive clinical phenotype</strong>, not a distinct disease, which can occur in various fibrosing ILDs.</li>
            <li>It is characterized by a <strong>self-sustaining worsening of fibrosis</strong>, similar to IPF.</li>
            <li>The main marker is the <strong>decline in respiratory function</strong> (especially FVC) despite standard treatment of the underlying disease.</li>
            <li>Identifying this phenotype is <strong>crucial</strong> as it justifies the introduction of an <strong>antifibrotic treatment</strong> to slow progression.</li>
        </ul>
    </div>

    <div className="space-y-4">
        <Accordion title="Definition and Progression Criteria" icon={<CheckCircle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                 <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="What is the PPF phenotype?" icon={<Info className="w-5 h-5"/>} color="blue">
                        <p>PPF describes a progressive course where fibrosis worsens over time. It can be observed at the initial presentation of the patient (worsening symptoms and imaging).</p>
                        <p className="text-base italic mt-2">Approximately 18% to 32% of patients with non-IPF ILD develop this phenotype.</p>
                    </InfoCard>
                    <InfoCard title="PPF 'Despite Treatment': The Therapeutic Target" icon={<Pill className="w-5 h-5"/>} color="teal">
                        <p>The term **PPF (despite treatment)** is used to describe progression that occurs **despite an initial treatment deemed appropriate** (e.g., immunosuppressants for a connective tissue disease).</p>
                        <p className="text-base font-semibold mt-2">This distinction is crucial because this entity is the target of antifibrotic therapies.</p>
                    </InfoCard>
                </div>

                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                    <h4 className="font-semibold text-red-800 text-lg mb-2 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Progression Criteria (defined over 24 months)
                    </h4>
                    <p className="text-slate-700 mb-2 text-base">The patient must meet at least one of the following criteria, in the absence of another explanation:</p>
                    <ul className="space-y-2 text-base text-slate-700">
                        <li className="p-2 bg-white border border-red-200 rounded-md">
                            <strong className="block text-red-700">1. Significant functional decline:</strong><br/>
                            Relative decline in Forced Vital Capacity (FVC) ≥ 10% of the predicted value.
                        </li>
                         <li className="p-2 bg-white border border-red-200 rounded-md">
                            <strong className="block text-red-700">2. Moderate functional decline + Worsening:</strong><br/>
                            Relative decline in FVC of 5% to 10% <strong>AND</strong> worsening of respiratory symptoms <strong>OR</strong> worsening of fibrotic signs on HRCT.
                        </li>
                         <li className="p-2 bg-white border border-red-200 rounded-md">
                            <strong className="block text-red-700">3. Symptomatic and radiological worsening:</strong><br/>
                            Worsening of respiratory symptoms <strong>AND</strong> significant worsening of fibrotic signs on HRCT.
                        </li>
                    </ul>
                </div>
            </div>
        </Accordion>

        <Accordion title="Underlying Diseases and Risk Factors" icon={<Stethoscope className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-4">
                 <p className="text-slate-700 text-base">Many ILDs can progress to a PPF phenotype. Certain risk factors increase this likelihood.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <InfoCard title="Main ILDs Involved" icon={<CheckCircle className="w-5 h-5"/>} color="green">
                         <ul className="list-disc list-inside">
                             <li>Chronic Hypersensitivity Pneumonitis (HP)</li>
                             <li>Connective Tissue Disease-Associated ILD (CTD-ILD) (e.g., RA, SSc)</li>
                             <li>Unclassifiable ILD</li>
                             <li>Fibrotic Sarcoidosis</li>
                             <li>Pneumoconioses</li>
                         </ul>
                     </InfoCard>
                     <InfoCard title="Risk Factors for Progression" icon={<AlertTriangle className="w-5 h-5"/>} color="orange">
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>General Factors:</strong>
                                <ul className="list-['-_'] list-inside pl-4 mt-1 text-sm">
                                    <li><strong>Usual Interstitial Pneumonia (UIP)</strong> pattern on HRCT or biopsy.</li>
                                    <li>Extent of fibrosis on initial HRCT.</li>
                                    <li>Impaired baseline pulmonary function (low FVC and/or DLCO).</li>
                                    <li>Oxygen desaturation during the 6-minute walk test.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Disease-Specific Factors:</strong>
                                <ul className="list-['-_'] list-inside pl-4 mt-1 text-sm">
                                    <li><strong>Rheumatoid Arthritis (RA):</strong> UIP pattern on HRCT, male sex, advanced age, high levels of anti-CCP antibodies.</li>
                                    <li><strong>Systemic Sclerosis (SSc):</strong> Diffuse cutaneous involvement, presence of anti-Scl70 antibodies, significant extent of fibrosis on HRCT.</li>
                                    <li><strong>Hypersensitivity Pneumonitis (HP):</strong> Non-identification of the causative antigen, presence of extensive fibrosis.</li>
                                </ul>
                            </li>
                        </ul>
                     </InfoCard>
                 </div>
            </div>
        </Accordion>

        <Accordion title="Therapeutic Approach to PPF" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 flex flex-col items-center space-y-4">
                <StepCard stepNumber="1" title="Individualized Initial Treatment" icon={<Search className="w-6 h-6"/>} color="blue">
                    <p>The initial management is not standardized and should be tailored to the underlying disease. The goal is to control inflammation and/or eliminate the trigger.</p>
                    <ul className="list-disc list-inside text-base mt-2">
                        <li><strong>CTD-ILD:</strong> Immunosuppressants (e.g., mycophenolate, rituximab).</li>
                        <li><strong>Chronic HP:</strong> Antigen avoidance and/or corticosteroids/immunosuppressants.</li>
                        <li><strong>Sarcoidosis:</strong> Corticosteroids or other immunosuppressants.</li>
                    </ul>
                </StepCard>

                <div className="text-slate-400 transform rotate-90">
                    <ChevronRight className="w-8 h-8" />
                </div>

                <StepCard stepNumber="2" title="Monitoring and Detection of Progression" icon={<Activity className="w-6 h-6"/>} color="orange">
                    <p>After initiating baseline treatment, a period of close observation and monitoring is essential to identify patients who continue to progress.</p>
                    <p className="font-semibold mt-2">Observation period: at least 3 to 6 months.</p>
                    <p className="text-base">Monitor the evolution of symptoms, respiratory function (PFTs every 3-6 months), and imaging (HRCT as indicated) to apply the PPF criteria.</p>
                </StepCard>
                
                <div className="text-slate-400 transform rotate-90">
                    <ChevronRight className="w-8 h-8" />
                </div>

                <StepCard stepNumber="3" title="Treatment of Progression (Confirmed PPF)" icon={<Pill className="w-6 h-6"/>} color="purple">
                     <p>If fibrosis progresses **despite initial treatment** (if PPF criteria are met), the sequential addition of an **antifibrotic treatment** is indicated.</p>
                     <ul className="list-disc list-inside text-base mt-2">
                         <li><strong>Nintedanib:</strong> Has demonstrated efficacy in slowing the decline of FVC in patients with PPF (INBUILD trial). It can be used in combination with immunosuppressants.</li>
                         <li><strong>Pirfenidone:</strong> Its efficacy is under evaluation in this indication.</li>
                         <li>In some cases, immunosuppressants may be reduced or stopped when introducing the antifibrotic, if their benefit is not demonstrated.</li>
                     </ul>
                </StepCard>
            </div>
        </Accordion>

         <Accordion title="Progressive Pulmonary Fibrosis and Nintedanib" icon={<Pill className="w-5 h-5 text-white" />} variant="success">
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">The INBUILD trial was a pivotal study that validated the concept of PPF and demonstrated the efficacy of Nintedanib in this heterogeneous patient population.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard title="The INBUILD Trial" icon={<Info className="w-5 h-5"/>} color="blue">
                        <ul className="list-disc list-inside">
                            <li><strong>Population:</strong> Patients with various ILDs (excluding IPF) showing progression criteria.</li>
                            <li><strong>Primary outcome:</strong> Nintedanib significantly reduced the annual rate of FVC decline compared to placebo, regardless of whether the HRCT pattern was UIP-like or not.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Efficacy of Nintedanib" icon={<CheckCircle className="w-5 h-5"/>} color="green">
                        <ul className="list-disc list-inside">
                            <li>Slows disease progression.</li>
                            <li>Benefit observed in major ILD subgroups (HP, CTD-ILD, unclassifiable ILD).</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Tolerability Profile" icon={<AlertTriangle className="w-5 h-5"/>} color="orange">
                        <ul className="list-disc list-inside">
                            <li>Similar to that observed in IPF.</li>
                            <li><strong>Diarrhea:</strong> Most common side effect, generally manageable with symptomatic treatments and dose adjustments.</li>
                            <li><strong>Elevated liver enzymes:</strong> Requires regular lab monitoring.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Questions and Future Directions" icon={<Search className="w-5 h-5"/>} color="purple">
                        <ul className="list-disc list-inside">
                            <li>What is the best time to initiate Nintedanib?</li>
                            <li>Should antifibrotics or immunosuppressants be prioritized in inflammatory diseases?</li>
                            <li>What is the role of antifibrotics in the acute/subacute phases of certain ILDs?</li>
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </Accordion>
        
        <Accordion title="Follow-up and Supportive Care" icon={<HandHeart className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <InfoCard title="Regular Follow-up" icon={<Activity className="w-5 h-5"/>} color="green">
                        <p>Close follow-up is essential for early detection of progression.</p>
                        <ul className="list-disc list-inside text-base mt-2">
                            <li><strong>PFTs (FVC, DLCO):</strong> Every 3 to 6 months.</li>
                            <li><strong>Clinical evaluation:</strong> Dyspnea, cough, exercise tolerance.</li>
                            <li><strong>HRCT:</strong> Not routinely, but if worsening is suspected or for long-term follow-up.</li>
                        </ul>
                    </InfoCard>
                     <InfoCard title="Supportive Care" icon={<HandHeart className="w-5 h-5"/>} color="teal">
                         <p>It is identical to that for IPF and aims to improve quality of life:</p>
                         <ul className="list-disc list-inside text-base mt-2">
                            <li>Oxygen therapy to correct hypoxemia.</li>
                            <li>Pulmonary rehabilitation.</li>
                            <li>Management of comorbidities.</li>
                            <li>Early referral for lung transplantation.</li>
                            <li>Palliative and supportive care for symptom management.</li>
                         </ul>
                    </InfoCard>
                </div>
            </div>
        </Accordion>
    </div>
  </div>
);

export default FPPSection;
