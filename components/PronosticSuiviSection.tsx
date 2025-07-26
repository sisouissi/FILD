
import React from 'react';
import { TrendingUp, Stethoscope, Activity, Image, Heart, Info, AlertTriangle, CheckCircle, Clock } from './icons';
import { Accordion } from './Accordion';

const InfoCard = ({ title, icon, content }: { title: string; icon: React.ReactNode; content: string[] }) => (
    <div className="bg-slate-50 p-4 rounded-md border border-slate-200 h-full">
        <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
        </h4>
        <ul className="text-base text-slate-600 list-disc list-inside space-y-1">
            {content.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
        </ul>
    </div>
);


export const FPIPronosticSuiviSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <TrendingUp className="w-7 h-7 mr-3 text-blue-500" />
        IPF Prognosis and Follow-up
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Understanding the disease trajectory to optimize management and anticipate complications.
      </p>
    </div>

     <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            The course of IPF is heterogeneous and often unpredictable. While median survival is an important indicator, the individual trajectory varies considerably. Regular and structured follow-up is therefore fundamental to assess disease progression, adapt the therapeutic strategy, and discuss future options with the patient.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-blue-800">Key Principles</h3>
                <div className="mt-2 text-base text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Heterogeneity:</strong> Progression can be slow, rapid, or punctuated by exacerbations.</li>
                    <li><strong>Dynamic prognosis:</strong> Prognosis should be regularly reassessed based on clinical and functional evolution.</li>
                    <li><strong>Anticipation:</strong> Follow-up helps anticipate the need for oxygen, discussions about transplantation, and palliative care.</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Prognosis and Predictive Factors" icon={<Clock className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Survival and Trajectory Heterogeneity</h4>
                    <p className="text-base text-slate-700">The median survival after diagnosis is historically <strong>3 to 5 years</strong>. However, this statistic masks great variability: up to <strong>20-25% of patients</strong> may survive beyond 10 years. The clinical course is unpredictable.</p>
                </div>
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                    <h4 className="font-semibold text-indigo-800 mb-2">The GAP Score: An Essential Prognostic Tool</h4>
                    <p className="text-base text-slate-700 mb-2">The GAP model (<strong>G</strong>ender, <strong>A</strong>ge, <strong>P</strong>hysiology) is a simple and validated index to predict mortality at 1, 2, and 3 years. It combines:</p>
                    <ul className="list-disc list-inside space-y-1 text-base text-slate-700 pl-4">
                        <li><strong>Gender</strong></li>
                        <li><strong>Age</strong></li>
                        <li><strong>Physiology:</strong> FVC (% predicted) and DLCO (% predicted)</li>
                    </ul>
                     <p className="text-base text-slate-700 mt-2">The total score classifies patients into three severity stages (I, II, III) with increasing mortality risks. It is a key tool for initial prognostic discussion and referral for transplantation.</p>
                </div>
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                    <h4 className="font-semibold text-teal-800 mb-2">Dynamic Markers: Functional Decline is Key</h4>
                    <p className="text-base text-slate-700">The <strong>evolutionary trajectory</strong> is a more powerful predictor of survival than baseline values. Signs of rapid progression include:</p>
                     <ul className="list-disc list-inside space-y-1 text-base text-slate-700 pl-4">
                        <li>Decline in <strong>absolute FVC of ≥ 5-10%</strong> over 6 to 12 months.</li>
                        <li>Decline in <strong>absolute DLCO of ≥ 15%</strong> over 6 to 12 months.</li>
                        <li>Decrease in <strong>6MWT distance of more than 30 meters</strong> in 6 months.</li>
                        <li>Worsening hypoxemia or increased oxygen requirements.</li>
                        <li>Hospitalization for a respiratory cause.</li>
                    </ul>
                </div>
            </div>
        </Accordion>
        
        <Accordion title="Acute Exacerbations: A Critical Turning Point" icon={<AlertTriangle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700">
                <p className="text-base">An acute exacerbation of IPF is an acute and clinically significant respiratory deterioration, not explained by another cause (heart failure, pulmonary embolism...).</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                    <li><strong>Incidence:</strong> Affects <strong>5 to 10%</strong> of patients per year.</li>
                    <li><strong>Diagnosis:</strong> Based on a rapid worsening of dyspnea and the appearance of new ground-glass opacities/consolidations on HRCT.</li>
                    <li><strong>Prognosis:</strong> Extremely severe, with an <strong>in-hospital mortality of over 50%</strong> and a median survival of only <strong>3 to 4 months</strong> after the event.</li>
                    <li><strong>Impact:</strong> Such an event should trigger an immediate reassessment of the goals of care.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Regular Follow-up Strategy" icon={<CheckCircle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">Proactive and regular follow-up, <strong>every 3 to 6 months</strong>, is essential for optimal management.</p>
                <div className="grid md:grid-cols-2 gap-4">
                     <InfoCard 
                        title="Clinical Evaluation" 
                        icon={<Stethoscope className="w-5 h-5 text-blue-500"/>}
                        content={[
                            "Evolution of <strong>dyspnea</strong> (mMRC scale).",
                            "Exercise tolerance, daily activities.",
                            "Frequency and severity of <strong>cough</strong>.",
                            "Search for signs of comorbidities (edema, etc.)."
                        ]}
                     />
                     <InfoCard 
                        title="Functional Explorations" 
                        icon={<Activity className="w-5 h-5 text-green-500"/>}
                        content={[
                            "<strong>FVC and DLCO</strong>: check for a significant decline.",
                            "<strong>6-Minute Walk Test (6MWT)</strong>: measure distance and exertional desaturation.",
                            "<strong>Pulse oximetry</strong>: at rest and during exercise to guide oxygen therapy."
                        ]}
                     />
                      <InfoCard 
                        title="Imaging (HRCT)" 
                        icon={<Image className="w-5 h-5 text-purple-500"/>}
                        content={[
                            "Not routinely, but <strong>every 1 to 2 years</strong> or in case of unexplained worsening.",
                            "Objectives: assess progression of fibrosis, screen for <strong>lung cancer</strong> (increased risk)."
                        ]}
                     />
                      <InfoCard 
                        title="Comorbidity Management" 
                        icon={<Heart className="w-5 h-5 text-red-500"/>}
                        content={[
                           "<strong>Active screening</strong>: GERD, OSA, PAH, cardiovascular diseases.",
                           "<strong>Echocardiography</strong> is indicated if DLCO is very low or in case of disproportionate dyspnea."
                        ]}
                     />
                </div>
            </div>
        </Accordion>
    </div>
  </div>
);

export default FPIPronosticSuiviSection;