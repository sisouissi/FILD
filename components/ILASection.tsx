import React from 'react';
import { ClipboardPlus, Info, FileText, Image, TrendingUp, Stethoscope, Users, CheckCircle, AlertTriangle } from './icons';
import { Accordion } from './Accordion';
import { ILAAlgorithmTool } from './ILAAlgorithmTool';

const InfoCard: React.FC<{ 
  title: string; 
  children: React.ReactNode; 
  icon: React.ReactNode; 
  color: 'blue' | 'green' | 'orange' | 'red'
}> = ({ title, children, icon, color }) => {
    const colors = {
        blue: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-800' },
        green: { border: 'border-green-500', bg: 'bg-green-50', text: 'text-green-800' },
        orange: { border: 'border-orange-500', bg: 'bg-orange-50', text: 'text-orange-800' },
        red: { border: 'border-red-500', bg: 'bg-red-50', text: 'text-red-800' },
    };
    
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color].border} ${colors[color].bg} h-full`}>
            <h4 className={`font-semibold flex items-center mb-2 ${colors[color].text}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};

export const ILASection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <ClipboardPlus className="w-7 h-7 mr-3 text-blue-500" />
        Interstitial Lung Abnormalities (ILA)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        Incidental radiological findings that may represent the earliest signs of fibrosing lung disease.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Introduction</h3>
        <p className="text-slate-700 mb-4 text-base">
            Interstitial Lung Abnormalities (ILA) are specific, non-dependent opacities (such as ground-glass, reticulation, or cysts) incidentally identified on chest CT scans of individuals not suspected of having interstitial lung disease (ILD). With the increasing use of CT for lung cancer screening and other indications, the detection of ILA is becoming more common. While many ILAs remain stable, they are significant because they can represent the earliest, pre-clinical stage of a progressive fibrosing ILD, such as IPF.
        </p>
    </div>
    
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
            <Info className="w-6 h-6 mr-3" />
            Key Points
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
            <li>ILA are <strong>incidental radiological findings</strong>, not a disease in itself.</li>
            <li>They are found in individuals <strong>without clinical suspicion</strong> of ILD.</li>
            <li>Prevalence is estimated at <strong>4-9%</strong> in smokers and up to <strong>16%</strong> in lung cancer screening cohorts.</li>
            <li>ILAs are associated with an <strong>increased risk of progression</strong> to clinical ILD and <strong>higher all-cause mortality</strong>.</li>
            <li>Key risk factors include <strong>older age, smoking history, and genetic predisposition</strong> (e.g., MUC5B promoter variant).</li>
            <li>Management is centered on <strong>risk stratification</strong> to determine the appropriate level of follow-up.</li>
        </ul>
    </div>

    <div className="space-y-4">
        <Accordion title="Definition and Criteria (Fleischner Society)" icon={<FileText className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-slate-700 text-base">
                <p>The Fleischner Society has proposed specific criteria to standardize the definition of ILA:</p>
                <ul className="list-decimal list-inside space-y-2">
                    <li>Incidental finding on CT in an individual not suspected of having ILD.</li>
                    <li>Non-dependent abnormalities affecting at least 5% of any lung zone.</li>
                    <li>Includes features such as: ground-glass opacity, reticulation, lung distortion, traction bronchiectasis, honeycombing, and non-emphysematous cysts.</li>
                </ul>
                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Exclusion Criteria (What is NOT an ILA)</h4>
                     <ul className="list-disc list-inside text-sm text-slate-700">
                        <li>Dependent atelectasis</li>
                        <li>Focal fibrosis (e.g., adjacent to osteophytes or post-inflammatory)</li>
                        <li>Diffuse centrilobular nodularity in smokers (suggestive of respiratory bronchiolitis)</li>
                        <li>Findings related to heart failure or infection</li>
                    </ul>
                </div>
            </div>
        </Accordion>

        <Accordion title="Radiological Findings and Subtypes" icon={<Image className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-slate-700 text-base">
                 <p>ILAs are classified based on their radiological features, which has major prognostic implications.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard title="Non-Fibrotic ILA" icon={<CheckCircle className="w-5 h-5"/>} color="green">
                        <p>Characterized by <strong>ground-glass opacities</strong> as the predominant feature, sometimes with minor reticulation. They have a lower risk of progression.</p>
                    </InfoCard>
                     <InfoCard title="Fibrotic ILA" icon={<AlertTriangle className="w-5 h-5"/>} color="red">
                         <p>Defined by the presence of <strong>traction bronchiectasis, bronchiolectasis, and/or honeycombing</strong>. This subtype is associated with a significantly higher risk of progression and mortality.</p>
                    </InfoCard>
                 </div>
                 <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Typical Distribution</h4>
                    <p>Like many fibrosing ILDs, ILAs typically show a <strong>bilateral, subpleural, and basal</strong> predominance.</p>
                 </div>
            </div>
        </Accordion>
        
        <Accordion title="Clinical Significance and Progression" icon={<TrendingUp className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-slate-700 text-base">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard title="Increased Mortality" icon={<TrendingUp className="w-5 h-5"/>} color="red">
                        <p>Multiple large cohort studies have consistently shown that the presence of ILA is an independent risk factor for <strong>increased all-cause mortality</strong>, even in the absence of progression.</p>
                    </InfoCard>
                    <InfoCard title="Risk of Progression" icon={<TrendingUp className="w-5 h-5"/>} color="orange">
                        <p>A significant portion of individuals with ILA will experience radiological progression. Rates vary by study, but can be as high as <strong>20% to 76%</strong> over follow-up periods of 2 to 6 years. Progression is much more likely in fibrotic ILA.</p>
                    </InfoCard>
                 </div>
                 <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Functional Impact</h4>
                    <p>ILA, particularly when progressive, is associated with an accelerated decline in lung function, mainly measured by the <strong>Forced Vital Capacity (FVC)</strong>.</p>
                 </div>
            </div>
        </Accordion>
        
        <Accordion title="Management and Follow-up" icon={<Stethoscope className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-slate-700 text-base">
                 <p>The management of ILA is not about immediate treatment, but about <strong>risk stratification</strong> to determine the appropriate level of monitoring. A multidisciplinary discussion (MDD) is often valuable.</p>
                 <div className="space-y-3">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Low-Risk ILA</h4>
                        <ul className="list-disc list-inside text-sm">
                            <li><strong>Profile:</strong> Non-fibrotic, limited extent, no symptoms.</li>
                            <li><strong>Management:</strong> General risk factor modification (smoking cessation). Clinical follow-up. Routine repeat CT scanning is often not recommended, but may be considered in 3-5 years.</li>
                        </ul>
                    </div>
                     <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Indeterminate-Risk ILA</h4>
                        <ul className="list-disc list-inside text-sm">
                            <li><strong>Profile:</strong> Non-fibrotic but extensive, or with concerning features.</li>
                            <li><strong>Management:</strong> Referral to a pulmonologist is recommended. A follow-up HRCT in <strong>12-24 months</strong> can assess for stability or progression.</li>
                        </ul>
                    </div>
                     <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">High-Risk ILA</h4>
                        <ul className="list-disc list-inside text-sm">
                            <li><strong>Profile:</strong> Any fibrotic ILA (traction bronchiectasis/honeycombing), UIP-like pattern, associated with symptoms or functional decline.</li>
                            <li><strong>Management:</strong> These patients should be managed as having <strong>pre-clinical or early ILD</strong>. Urgent referral to a pulmonologist and MDD is essential for comprehensive evaluation and closer follow-up (e.g., HRCT and PFTs in 6-12 months).</li>
                        </ul>
                    </div>
                 </div>
            </div>
        </Accordion>
        
        <Accordion title="ILA Decision Support Tool (Based on Fleischner Society 2020)" icon={<Users className="w-5 h-5 text-white" />} variant="danger">
            <div className="p-2 md:p-4">
                <ILAAlgorithmTool />
            </div>
        </Accordion>
    </div>
  </div>
);

export default ILASection;