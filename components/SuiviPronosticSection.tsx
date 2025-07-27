

import React from 'react';
import { TrendingUp, Stethoscope, Activity, Image, Heart, Info, AlertTriangle, CheckCircle, Clock, FlaskConical, Lungs, Bug } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ title: string; icon: React.ReactNode; color: 'blue' | 'green' | 'orange' | 'purple' | 'red'; children: React.ReactNode; }> = ({ title, icon, color, children }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        orange: 'border-orange-500 bg-orange-50 text-orange-800',
        purple: 'border-purple-500 bg-purple-50 text-purple-800',
        red: 'border-red-500 bg-red-50 text-red-800',
    };
    
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color]} h-full`}>
            <h4 className={`font-semibold flex items-center mb-2 ${colors[color]}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};


export const SuiviPronosticSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <TrendingUp className="w-7 h-7 mr-3 text-blue-500" />
        Follow-up, Prognosis, and Complications
      </h2>
       <p className="text-slate-600 mt-2 text-base">
        Anticipating the evolution, screening for complications, and adapting the therapeutic strategy.
      </p>
    </div>

    <div className="space-y-4">
        <Accordion title="1. Follow-up of Pulmonary Fibrosis" icon={<Stethoscope className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">Regular follow-up of patients is fundamental to assess progression, monitor treatment efficacy, and screen for complications.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Regular Clinical Examination" icon={<Stethoscope className="w-5 h-5"/>} color="blue">
                        <ul className="list-disc list-inside text-sm">
                            <li>Monitoring of symptoms (dyspnea, cough, asthenia).</li>
                            <li>Looking for signs of respiratory failure or worsening.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Pulmonary Function Tests (PFTs)" icon={<Activity className="w-5 h-5"/>} color="green">
                         <ul className="list-disc list-inside text-sm">
                            <li><strong>FVC:</strong> key marker of progression.</li>
                            <li><strong>DLCO:</strong> decreases in case of worsening.</li>
                            <li>Arterial blood gases or oximetry at rest and during exercise (6MWT).</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Chest HRCT Scan" icon={<Image className="w-5 h-5"/>} color="purple">
                        <ul className="list-disc list-inside text-sm">
                           <li>Monitoring the extension and pattern of fibrosis.</li>
                           <li>Detection of complications (cancer, infection).</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Lab Tests" icon={<FlaskConical className="w-5 h-5"/>} color="orange">
                        <ul className="list-disc list-inside text-sm">
                           <li>Screening for complications (infections).</li>
                           <li>Monitoring treatment tolerance (liver function tests).</li>
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </Accordion>

        <Accordion title="2. Prognosis" icon={<Clock className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-slate-700 text-base">
                 <p>The prognosis is variable and depends on the etiology, radiological pattern, speed of progression, and response to treatment.</p>
                 <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center"><AlertTriangle className="w-5 h-5 mr-2"/>Factors of Poor Prognosis</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                        <li>Rapid decline in respiratory function (FVC drop greater than 10% over 6-12 months).</li>
                        <li>Extension of fibrosis on HRCT, especially the <strong>honeycombing</strong> pattern.</li>
                        <li>Advanced age (over 65) and comorbidities (PAH, cancer, etc.).</li>
                        <li>Severe hypoxemia (desaturation below 88% on exertion or at rest).</li>
                        <li>Non-response or intolerance to treatments.</li>
                    </ul>
                 </div>
                 <p className="italic text-sm">The 5-year survival is highly variable: poor in IPF (around 20%), better in DIP/RB-ILD. Other forms depend on the cause and access to appropriate treatments.</p>
            </div>
        </Accordion>

        <Accordion title="3. Complications" icon={<AlertTriangle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard title="Chronic Respiratory Failure" icon={<Lungs className="w-5 h-5"/>} color="blue">
                        <p className="text-sm">The most frequent complication, requiring oxygen therapy or non-invasive ventilation.</p>
                    </InfoCard>
                    <InfoCard title="Pulmonary Hypertension (PAH)" icon={<Heart className="w-5 h-5"/>} color="red">
                        <p className="text-sm">Frequent in the course of the disease, worsens dyspnea and increases mortality.</p>
                    </InfoCard>
                     <InfoCard title="Infections" icon={<Bug className="w-5 h-5"/>} color="orange">
                        <p className="text-sm">Bacterial or viral superinfection, favored by parenchymal alteration and immunosuppressants.</p>
                    </InfoCard>
                    <InfoCard title="Spontaneous Pneumothorax" icon={<Lungs className="w-5 h-5"/>} color="purple">
                        <p className="text-sm">Due to the rupture of cysts or honeycombing areas.</p>
                    </InfoCard>
                    <InfoCard title="Lung Cancer" icon={<AlertTriangle className="w-5 h-5"/>} color="red">
                        <p className="text-sm">Increased risk of primary lung cancer, especially in a fibrotic lung.</p>
                    </InfoCard>
                     <InfoCard title="Cardiac Complications" icon={<Heart className="w-5 h-5"/>} color="red">
                        <p className="text-sm">Right heart failure (cor pulmonale), arrhythmias.</p>
                    </InfoCard>
                </div>
            </div>
        </Accordion>
    </div>

     <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
      <h3 className="text-xl font-semibold text-slate-800 mb-2 flex items-center">
        <Info className="w-6 h-6 mr-3" />
        Key Points
      </h3>
      <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
        <li>A <strong>close multidisciplinary follow-up</strong> allows for treatment adaptation and early detection of complications.</li>
        <li>Prognosis depends on the type of fibrosis, the <strong>rate of progression</strong>, and added complications.</li>
        <li>Complications are frequent and justify <strong>anticipation</strong> and specific management (respiratory failure, PAH, infectious risk).</li>
        <li>Overall management is based on monitoring, prevention, complication management, and <strong>multidisciplinary support</strong>.</li>
      </ul>
    </div>
  </div>
);

export default SuiviPronosticSection;