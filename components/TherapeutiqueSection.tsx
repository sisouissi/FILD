

import React from 'react';
import { Pill, Shield, Activity, Heart, HandHeart, Info, Users, CheckCircle, AlertTriangle } from './icons';
import { Accordion } from './Accordion';
import { TherapeuticAlgorithmTool } from './TherapeuticAlgorithmTool';

const InfoCard: React.FC<{ title: string; icon: React.ReactNode; color: 'blue' | 'green' | 'purple' | 'orange'; children: React.ReactNode }> = ({ title, icon, color, children }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        purple: 'border-purple-500 bg-purple-50 text-purple-800',
        orange: 'border-orange-500 bg-orange-50 text-orange-800',
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color]} h-full shadow-sm`}>
            <h4 className={`font-semibold flex items-center mb-2 ${colors[color]}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};

const TherapeutiqueSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Pill className="w-7 h-7 mr-3 text-blue-500" />
        Therapeutic Management of Fibrosing ILDs
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        An individualized and multidisciplinary approach to slow progression, manage symptoms, and improve quality of life.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            The management of fibrosing ILDs has evolved considerably. The goal is no longer just to treat inflammation but to target the mechanisms of fibrosis, especially in cases of progression. The therapeutic strategy is based on a precise assessment of the diagnosis, the progressive phenotype, and the patient's comorbidities, within a framework of shared decision-making.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded-r-lg">
            <h3 className="text-base font-semibold text-blue-800 mb-2 flex items-center">
                <Info className="w-5 h-5 mr-2" />
                Fundamental Principles of Management
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-base">
                <li><strong>Multidisciplinary Discussion (MDD):</strong> Essential for diagnosis, treatment, and follow-up.</li>
                <li><strong>Treat the underlying cause:</strong> Priority to treating the connective tissue disease, avoiding the antigen in HP, etc.</li>
                <li><strong>Identify and treat the progressive pulmonary fibrosis (PPF) phenotype:</strong> Main target of antifibrotic therapies.</li>
                <li><strong>Holistic management:</strong> Include non-pharmacological management, comorbidities, and supportive care.</li>
            </ul>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Pharmacological Therapeutic Arsenal" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Immunomodulatory Treatments" icon={<Shield className="w-5 h-5"/>} color="blue">
                        <p>Aim to control inflammation, especially in CTD-ILD, sarcoidosis, and some forms of HP.</p>
                        <ul className="list-disc list-inside text-sm mt-2">
                            <li><strong>Glucocorticoids:</strong> Often first-line, but their long-term use should be limited.</li>
                            <li><strong>Immunosuppressants:</strong> Mycophenolate (MMF), Azathioprine, Rituximab. Their choice depends on the underlying disease.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Antifibrotic Treatments" icon={<Activity className="w-5 h-5"/>} color="green">
                        <p>Aim to slow the progression of fibrosis. Indicated in IPF from the outset, and in other ILDs in case of a progressive phenotype (PPF).</p>
                         <ul className="list-disc list-inside text-sm mt-2">
                            <li><strong>Nintedanib:</strong> Approved for IPF, SSc-ILD, and PPF. Slows the decline of FVC.</li>
                            <li><strong>Pirfenidone:</strong> Approved for IPF. Its efficacy in PPF is under evaluation (RELIEF study).</li>
                        </ul>
                    </InfoCard>
                </div>
                 <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4 rounded-r-lg">
                    <p className="text-sm text-amber-800">
                       <strong className="font-semibold flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/>Warning:</strong> The combination of Prednisone, Azathioprine, and N-acetylcysteine is <strong>harmful and contraindicated</strong> in IPF (PANTHER-IPF study).
                    </p>
                </div>
            </div>
        </Accordion>

        <Accordion title="Non-Pharmacological and Supportive Management" icon={<HandHeart className="w-5 h-5 text-white" />}>
            <div className="p-4 grid md:grid-cols-2 gap-4">
                 <InfoCard title="Oxygen Therapy" icon={<Activity className="w-5 h-5"/>} color="purple">
                    <p>Indicated to correct resting (SpO2 less than 90%) or exertional hypoxemia. Improves quality of life and exercise tolerance.</p>
                </InfoCard>
                <InfoCard title="Pulmonary Rehabilitation" icon={<Heart className="w-5 h-5"/>} color="orange">
                    <p>An essential program to combat deconditioning, reduce dyspnea, improve exercise capacity, and quality of life.</p>
                </InfoCard>
                <InfoCard title="Comorbidity Management" icon={<Shield className="w-5 h-5"/>} color="blue">
                    <p>GERD, PAH, OSA, cardiovascular diseases must be actively sought and treated.</p>
                </InfoCard>
                <InfoCard title="Palliative and Supportive Care" icon={<HandHeart className="w-5 h-5"/>} color="green">
                    <p>Early introduction for symptom management (dyspnea, cough), psychosocial support, and discussion of advance directives.</p>
                </InfoCard>
            </div>
        </Accordion>
        
        <Accordion title="Strategic Management Algorithm" icon={<Users className="w-5 h-5 text-white" />}>
            <div className="p-4 text-slate-700 text-base">
                <p className="mb-4">This approach integrates the diagnosis, the progressive phenotype, and the available therapeutic options.</p>
                <div className="space-y-4">
                    <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                        <h4 className="font-bold text-blue-800">1. Precise Diagnosis in MDD</h4>
                        <p className="text-sm mt-1">Establish the most precise diagnosis possible (IPF, CTD-ILD, HP, etc.). If impossible, classify as "Unclassifiable ILD".</p>
                    </div>
                     <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg">
                        <h4 className="font-bold text-purple-800">2. Treatment of the Cause</h4>
                        <p className="text-sm mt-1">If a cause is identified (connective tissue disease, HP, drug), the first-line treatment targets this cause (immunosuppressants, antigen avoidance).</p>
                    </div>
                     <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                        <h4 className="font-bold text-green-800">3. Upfront Antifibrotic Treatment</h4>
                        <p className="text-sm mt-1">For patients with a diagnosis of <strong>IPF</strong>, an antifibrotic treatment (Nintedanib or Pirfenidone) should be initiated at diagnosis, regardless of severity.</p>
                    </div>
                     <div className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded-r-lg">
                        <h4 className="font-bold text-orange-800">4. Monitoring and Detection of the Progressive Phenotype (PPF)</h4>
                        <p className="text-sm mt-1">For <strong>non-IPF</strong> ILDs, close monitoring (clinical, PFTs, HRCT) is crucial. If progression criteria are met despite appropriate treatment, the patient is considered to have PPF.</p>
                    </div>
                     <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                        <h4 className="font-bold text-red-800">5. Introduction of an Antifibrotic Treatment in PPF</h4>
                        <p className="text-sm mt-1">In patients with PPF, the addition of <strong>Nintedanib</strong> is recommended to slow functional decline. This treatment is often combined with immunomodulatory therapy.</p>
                    </div>
                </div>
            </div>
        </Accordion>
        
        <Accordion title="Launch therapeutic management algorithm (NEJM 2020)" icon={<Users className="w-5 h-5 text-white" />} variant="danger">
            <div className="p-2 md:p-4">
                <TherapeuticAlgorithmTool />
            </div>
        </Accordion>
    </div>
  </div>
);

export default TherapeutiqueSection;