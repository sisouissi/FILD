import React from 'react';
import { Wind, Info, Bug, Stethoscope, Search, Image, Lungs, Microscope, Activity, FlaskConical, History, FileText, TrendingUp, Pill, CheckCircle, AlertTriangle, Shield, HandHeart } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ 
  title: string; 
  children: React.ReactNode; 
  icon: React.ReactNode; 
  color: 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'teal'
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
        <div className={`p-4 rounded-lg border-l-4 ${colors[color].border} ${colors[color].bg} h-full`}>
            <h4 className={`font-semibold flex items-center mb-2 ${colors[color].text}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};

export const PHSSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Wind className="w-7 h-7 mr-3 text-blue-500" />
        Hypersensitivity Pneumonitis (HP)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        A complex immune-mediated disease resulting from exposure to a wide range of inhaled antigens.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Introduction</h3>
        <p className="text-slate-700 mb-4 text-base">
            Hypersensitivity pneumonitis (HP) is a diffuse interstitial lung disease (ILD) that occurs in susceptible individuals after repeated exposure to one or more inhaled antigens. Historically classified into acute, subacute, and chronic forms, modern understanding has evolved. Due to a lack of consensus and diagnostic difficulties, professional societies (ATS/JRS/ALAT) have recently proposed guidelines to standardize the approach.
        </p>
        <p className="text-slate-700 text-base">
            Chronic fibrotic HP can be difficult to distinguish from IPF, highlighting the importance of a thorough history and a multidisciplinary diagnostic approach to identify the causative antigen, which is crucial for prognosis.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded-r-lg">
            <h4 className="text-base font-semibold text-blue-800 mb-2">
                <Info className="w-5 h-5 mr-2 inline-block" />
                Key Points (ATS/JRS/ALAT 2020)
            </h4>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-base">
                <li>HP is now classified into two phenotypes: <strong>non-fibrotic HP</strong> (mainly inflammatory) and <strong>fibrotic HP</strong>.</li>
                <li>The diagnosis is integrative and based on a combination of three pillars:
                    <ol className="list-decimal list-inside pl-6 mt-1 text-sm">
                        <li><strong>Exposure</strong> to a compatible antigen (history, specific IgGs).</li>
                        <li>Typical <strong>HRCT imaging</strong>.</li>
                        <li><strong>Lymphocytosis</strong> in Bronchoalveolar Lavage (BAL).</li>
                    </ol>
                </li>
                <li><strong>Multidisciplinary Discussion (MDD)</strong> is essential to establish a confident diagnosis.</li>
                <li><strong>Antigen avoidance</strong> is the cornerstone of treatment, when possible.</li>
            </ul>
        </div>
    </div>
    
    <div className="space-y-4">
        <Accordion title="Causal Agents and Exposure Sources" icon={<Bug className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">Hundreds of antigens can cause HP. Here are the most common:</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <InfoCard title="Molds and Fungi" icon={<Bug className="w-5 h-5"/>} color="green">
                        <ul className="list-disc list-inside">
                            <li><strong>Farmer's Lung:</strong> Thermophilic actinomycetes in moldy hay.</li>
                            <li><strong>Air conditioner/humidifier lung:</strong> Contamination by molds.</li>
                            <li><strong>Suberosis:</strong> Moldy cork dust.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Avian Proteins" icon={<Bug className="w-5 h-5"/>} color="blue">
                        <ul className="list-disc list-inside">
                            <li><strong>Bird Fancier's Lung:</strong> Exposure to droppings, serum, and feathers of pigeons, parakeets, canaries, etc.</li>
                            <li><strong>Feather Duvet Lung:</strong> Antigens in feather pillows and duvets.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Bacteria" icon={<Bug className="w-5 h-5"/>} color="purple">
                         <ul className="list-disc list-inside">
                            <li><strong>Hot Tub Lung:</strong> Exposure to aerosols of <i>Mycobacterium avium complex</i>.</li>
                            <li><strong>Sawmill Worker's Lung:</strong> Bacterial contamination of wood.</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Chemical Agents" icon={<Bug className="w-5 h-5"/>} color="orange">
                        <ul className="list-disc list-inside">
                            <li><strong>Painter's Lung:</strong> Exposure to isocyanates in paints and polyurethane foams.</li>
                            <li><strong>Contaminated machining fluids.</strong></li>
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </Accordion>

        <Accordion title="Clinical Manifestations" icon={<Stethoscope className="w-5 h-5 text-white" />}>
            <div className="p-4 grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
                    <h4 className="font-semibold text-orange-800 text-lg mb-2">Non-Fibrotic HP</h4>
                    <div className="space-y-3 text-base text-slate-700">
                        <div>
                            <h5 className="font-medium">Symptoms</h5>
                             <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Subacute onset (days/weeks) after exposure: cough, dyspnea.</li>
                                <li>Frequent flu-like syndrome: fever, chills, malaise, weight loss.</li>
                                <li>Sometimes chest tightness.</li>
                            </ul>
                        </div>
                         <div>
                            <h5 className="font-medium">Physical Examination</h5>
                             <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Bilateral fine crackles.</li>
                                <li>Very characteristic mid-inspiratory "squawks" or "chirps".</li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                    <h4 className="font-semibold text-red-800 text-lg mb-2">Fibrotic HP</h4>
                    <div className="space-y-3 text-base text-slate-700">
                        <div>
                            <h5 className="font-medium">Symptoms</h5>
                             <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Insidious and progressive exertional dyspnea and dry cough.</li>
                                <li>The temporal link with exposure is often absent or difficult to establish.</li>
                                <li>Weight loss and fatigue are possible.</li>
                            </ul>
                        </div>
                         <div>
                            <h5 className="font-medium">Physical Examination</h5>
                             <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>"Velcro-like" crackles, similar to IPF.</li>
                                <li>Digital clubbing possible in advanced forms.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Initial Evaluation" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-6">
                <div className="p-4 bg-slate-100 border border-slate-300 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-2">Main objectives of the evaluation</h4>
                    <ul className="list-disc list-inside space-y-1 text-base text-slate-700">
                        <li>Identify <strong>potential exposures</strong>.</li>
                        <li>Determine the <strong>severity</strong> of respiratory impairment.</li>
                        <li>Identify <strong>typical features</strong> on imaging and BAL.</li>
                        <li>Guide the decision in a <strong>multidisciplinary discussion</strong>.</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="md:col-span-2">
                        <InfoCard title="1. Detailed Exposure History" icon={<History className="w-5 h-5"/>} color="blue">
                            <p>This is the <strong>crucial step</strong>. Systematic questioning about potential exposures (domestic, occupational, hobbies). The antigen is not identified in nearly 60% of cases.</p>
                        </InfoCard>
                   </div>
                    <InfoCard title="2. Laboratory Workup" icon={<FlaskConical className="w-5 h-5"/>} color="purple">
                        <p><strong>Serologies (specific IgGs):</strong> Positivity proves exposure, not the disease. Their usefulness is controversial due to many false positives and negatives.</p>
                    </InfoCard>
                     <InfoCard title="3. Pulmonary Function Tests (PFTs)" icon={<Activity className="w-5 h-5"/>} color="green">
                       <p>Typically a <strong>restrictive</strong> profile, but can be obstructive or mixed. A <strong>decrease in DLCO</strong> is almost constant. The 6MWT looks for exertional desaturation.</p>
                    </InfoCard>
                </div>
            </div>
        </Accordion>

        <Accordion title="Secondary Evaluation" icon={<Microscope className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-6">
                <p className="text-slate-700 text-base">
                    When the initial evaluation does not allow for a confident diagnosis of HP, further tests may be necessary. The decision is made on a case-by-case basis, ideally after multidisciplinary discussion.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InfoCard title="1. Bronchoalveolar Lavage (BAL)" icon={<Lungs className="w-5 h-5"/>} color="blue">
                        <p><strong>Role:</strong> The most sensitive tool for detecting alveolitis, but nonspecific.</p>
                        <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                            <li><strong>Key result:</strong> Marked <strong>lymphocytosis</strong> (often above 30-40%) is a major diagnostic argument.</li>
                            <li><strong>Limitations:</strong> Can be normal in chronic fibrotic forms or in smokers (threshold above 20%). Can be seen in other ILDs.</li>
                            <li><strong>Main utility:</strong> Very useful for differentiating an indeterminate fibrosing ILD (e.g., suspected IPF vs. fibrotic HP).</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="2. Lung Biopsy" icon={<Microscope className="w-5 h-5"/>} color="orange">
                        <p><strong>Objective:</strong> To obtain histological proof when the diagnosis is uncertain.</p>
                        <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                            <li><strong>Transbronchial Biopsies (TBB):</strong> Low yield (11-40%), often insufficient for a definitive diagnosis. A negative result does not rule out HP.</li>
                            <li><strong>Transbronchial Cryobiopsy (TBLC):</strong> Larger samples. Diagnostic accuracy close to surgical biopsy in expert centers, but limited data in HP. Risks of pneumothorax and bleeding.</li>
                            <li><strong>Surgical Lung Biopsy (VATS):</strong> The gold standard when histology is necessary, allowing for large samples from several lobes.</li>
                        </ul>
                    </InfoCard>

                    <InfoCard title="3. Histopathology" icon={<FileText className="w-5 h-5"/>} color="purple">
                         <div className="space-y-2">
                            <div>
                                <h5 className="font-semibold text-purple-700">Non-Fibrotic HP (Classic Triad)</h5>
                                <ul className="list-disc list-inside text-sm">
                                    <li>Cellular interstitial pneumonia, with lymphocytic and bronchiolocentric predominance.</li>
                                    <li>Chronic cellular bronchiolitis.</li>
                                    <li>Poorly formed, non-necrotizing epithelioid granulomas.</li>
                                </ul>
                            </div>
                             <div>
                                <h5 className="font-semibold text-purple-700">Fibrotic HP</h5>
                                <ul className="list-disc list-inside text-sm">
                                   <li>Can mimic a UIP or fibrotic NSIP pattern.</li>
                                   <li>The presence of suggestive signs (peribronchiolar lymphocytic inflammation, isolated granulomas) is key to the diagnosis.</li>
                                </ul>
                            </div>
                        </div>
                    </InfoCard>
                    
                    <InfoCard title="4. Inhalation Challenge Test" icon={<Wind className="w-5 h-5"/>} color="green">
                        <p><strong>Principle:</strong> Re-expose the patient to the suspected antigen in a controlled environment to confirm the causal link.</p>
                         <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                            <li><strong>Indication:</strong> Reserved for cases where the diagnosis remains uncertain and identifying the causal agent is crucial (e.g., maintaining employment).</li>
                            <li><strong>Limitations:</strong> Not standardized, risk of inducing a severe reaction, performed only in highly specialized centers.</li>
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </Accordion>

        <Accordion title="Evolution and Prognosis" icon={<TrendingUp className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <p className="text-slate-700 text-base">The prognosis of HP is highly variable and depends mainly on the presence of fibrosis and the possibility of antigen avoidance.</p>
                <div className="grid md:grid-cols-2 gap-4">
                    <InfoCard title="Non-Fibrotic HP" icon={<CheckCircle className="w-5 h-5"/>} color="green">
                        <p><strong>Generally favorable prognosis.</strong> The disease can be reversible, especially if the causative antigen is identified and completely avoided.</p>
                    </InfoCard>
                    <InfoCard title="Fibrotic HP" icon={<AlertTriangle className="w-5 h-5"/>} color="red">
                        <p><strong>More severe prognosis,</strong> with a risk of progressive fibrosis similar to other fibrosing ILDs. Median survival is reduced, especially with a UIP pattern on HRCT.</p>
                    </InfoCard>
                </div>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
                    <h4 className="font-semibold text-amber-800 text-lg mb-2">Factors of Poor Prognosis</h4>
                    <ul className="list-disc list-inside space-y-1 text-base text-slate-700">
                        <li>Inability to identify or avoid the causative antigen.</li>
                        <li>Presence and extent of fibrosis (especially honeycombing and a UIP pattern).</li>
                        <li>Older age and male sex.</li>
                        <li>Smoking history.</li>
                        <li>Lower baseline respiratory function (FVC, DLCO).</li>
                    </ul>
                </div>
            </div>
        </Accordion>

        <Accordion title="Treatment of HP" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <InfoCard title="Step 1: Antigen Avoidance" icon={<Wind className="w-5 h-5"/>} color="blue">
                            <p><strong>This is the absolute cornerstone of treatment.</strong></p>
                            <p>Complete and definitive avoidance of the responsible antigen is the most effective measure and can lead to stabilization or even improvement, especially in non-fibrotic forms.</p>
                        </InfoCard>
                    </div>
                    <InfoCard title="Corticosteroids" icon={<Pill className="w-5 h-5"/>} color="orange">
                        <p>Indicated for severe or persistent inflammatory symptoms, primarily in non-fibrotic HP. They can accelerate initial recovery but their long-term benefit on fibrosis is not demonstrated.</p>
                    </InfoCard>
                    <InfoCard title="Immunosuppressants" icon={<Shield className="w-5 h-5"/>} color="purple">
                        <p>Agents like <strong>Mycophenolate (MMF)</strong> or <strong>Azathioprine</strong> may be considered in fibrotic HP or as a steroid-sparing strategy, although evidence is limited.</p>
                    </InfoCard>
                    <InfoCard title="Antifibrotics" icon={<TrendingUp className="w-5 h-5"/>} color="green">
                        <p>Crucial for <strong>fibrotic HP with a progressive phenotype (PPF)</strong>. <strong>Nintedanib</strong> is indicated to slow the decline in FVC, often in addition to other treatments.</p>
                    </InfoCard>
                    <InfoCard title="Supportive Care" icon={<HandHeart className="w-5 h-5"/>} color="teal">
                         <ul className="list-disc list-inside space-y-1 text-base">
                            <li><strong>Oxygen therapy</strong> for hypoxemia.</li>
                            <li><strong>Pulmonary rehabilitation</strong> to improve quality of life.</li>
                            <li>Discussion of <strong>lung transplantation</strong> for advanced and progressive forms.</li>
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </Accordion>
    </div>
  </div>
);

export default PHSSection;