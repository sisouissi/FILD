import React from 'react';
import { FileMedical, Search, Pill, Stethoscope, TrendingUp, CheckCircle, AlertTriangle, Heart, Users } from './icons';
import { Accordion } from './Accordion';
import { AcrScreeningTool } from './AcrScreeningTool';
import { AcrTreatmentTool } from './AcrTreatmentTool';
import { ImmunologyWorkupSection } from './ImmunologyWorkupSection';

const SubSectionTitle: React.FC<{children: React.ReactNode}> = ({children}) => <h5 className="font-semibold text-slate-700 mt-3 mb-1">{children}</h5>

const TherapeuticCard: React.FC<{ title: string; icon: React.ReactNode; color: 'green' | 'blue' | 'red' | 'orange'; children: React.ReactNode }> = ({ title, icon, color, children }) => {
    const colorClasses = {
        green: 'border-green-500 bg-green-50',
        blue: 'border-blue-500 bg-blue-50',
        red: 'border-red-500 bg-red-50',
        orange: 'border-orange-500 bg-orange-50'
    };
    const textColor = {
        green: 'text-green-800',
        blue: 'text-blue-800',
        red: 'text-red-800',
        orange: 'text-orange-800'
    }
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colorClasses[color]} shadow-sm`}>
            <h4 className={`font-semibold text-lg mb-3 flex items-center ${textColor[color]}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-base text-slate-700 space-y-2">{children}</div>
        </div>
    );
};

const ClinicalPresentationCard: React.FC<{ title: string; icon: React.ReactNode; color: 'red' | 'blue' | 'purple' | 'green'; children: React.ReactNode }> = ({ title, icon, color, children }) => {
    const colorClasses = {
        red: { border: 'border-l-red-400', icon: 'text-red-600' },
        blue: { border: 'border-l-blue-400', icon: 'text-blue-600' },
        purple: { border: 'border-l-purple-400', icon: 'text-purple-600' },
        green: { border: 'border-l-teal-400', icon: 'text-teal-600' }
    };

    return (
        <div className={`bg-slate-50 p-4 rounded-lg shadow-sm border ${colorClasses[color].border} border-l-4 h-full`}>
            <h4 className={`font-semibold text-slate-800 flex items-center mb-3`}>
                <span className={colorClasses[color].icon}>{icon}</span>
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-base text-slate-600 space-y-2">
                {children}
            </div>
        </div>
    );
};


export const ConnectivitesPIDSection: React.FC = () => {
    return (
        <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                    <FileMedical className="w-7 h-7 mr-3 text-blue-500" />
                    Connective Tissue Disease-Associated ILD (CTD-ILD)
                </h2>
                <p className="text-slate-600 mt-2 text-base">
                   Diagnostic and therapeutic approach to interstitial lung involvement in the context of systemic autoimmune diseases.
                </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                 <p className="text-slate-600 mb-4 text-base">
                   Connective tissue disease-associated ILD (CTD-ILD) is the most common pulmonary manifestation of these systemic diseases and a major cause of morbidity and mortality. Their management requires close collaboration between pulmonologists and rheumatologists.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                        <Stethoscope className="w-5 h-5 mr-2" />
                        Key Principles
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 text-base">
                        <li><strong>Systemic Disease:</strong> Pulmonary involvement is part of a broader disease.</li>
                        <li><strong>Multidisciplinary Approach:</strong> Pulmonology-rheumatology collaboration is essential.</li>
                        <li><strong>Variable Prognosis:</strong> Generally better than IPF, but heterogeneous.</li>
                        <li><strong>Therapeutic Target:</strong> Aims at both inflammation (immunosuppressants) and fibrosis (antifibrotics).</li>
                    </ul>
                </div>
            </div>

            <Accordion title="Clinical Presentations by Connective Tissue Disease" icon={<Stethoscope className="w-5 h-5 text-white" />}>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ClinicalPresentationCard title="Rheumatoid Arthritis (RA)" icon={<Users className="w-6 h-6"/>} color="red">
                        <div>
                            <p><strong>Profile:</strong> Often older men, smokers, with long-standing, seropositive (high RF, anti-CCP) joint disease.</p>
                            <SubSectionTitle>HRCT Patterns:</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>UIP:</strong> The most frequent and severe, often indistinguishable from IPF.</li>
                                <li><strong>NSIP:</strong> Second most frequent pattern, with a better prognosis.</li>
                                <li><strong>Others:</strong> Organizing pneumonia (OP), airway disease.</li>
                            </ul>
                        </div>
                    </ClinicalPresentationCard>
                    <ClinicalPresentationCard title="Systemic Sclerosis (SSc)" icon={<Users className="w-6 h-6"/>} color="blue">
                        <div>
                            <p><strong>Profile:</strong> ILD is a major cause of mortality. It often appears early in the course of the disease.</p>
                            <SubSectionTitle>HRCT Patterns:</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>Fibrotic NSIP:</strong> The most frequent pattern.</li>
                                <li><strong>UIP:</strong> Less frequent (up to 40%) but has a poorer prognosis.</li>
                            </ul>
                             <SubSectionTitle>Key Signs and Autoantibodies:</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>Anti-Scl70 (topoisomerase I):</strong> Strongly associated with ILD in diffuse forms.</li>
                                <li>Esophageal dilation visible on HRCT.</li>
                            </ul>
                        </div>
                    </ClinicalPresentationCard>
                    <ClinicalPresentationCard title="Inflammatory Myopathies (IIM)" icon={<Users className="w-6 h-6"/>} color="purple">
                        <div>
                            <p><strong>Profile:</strong> ILD can precede, accompany, or follow muscle involvement. It is sometimes the only manifestation (amyopathic dermatomyositis).</p>
                            <SubSectionTitle>HRCT Patterns:</SubSectionTitle>
                             <ul className="list-disc list-inside pl-4">
                                <li><strong>NSIP and/or Organizing Pneumonia (OP)</strong> are the most typical.</li>
                            </ul>
                             <SubSectionTitle>Key Signs and Autoantibodies:</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>Antisynthetase syndrome (anti-Jo1, etc.):</strong> ILD is almost constant, mechanic's hands, arthritis.</li>
                                <li><strong>Anti-MDA5:</strong> Associated with rapidly progressive ILD and specific skin lesions.</li>
                            </ul>
                        </div>
                    </ClinicalPresentationCard>
                    <ClinicalPresentationCard title="Sjögren's Syndrome (SjS)" icon={<Users className="w-6 h-6"/>} color="green">
                       <div>
                            <p><strong>Profile:</strong> ILD is one of the most common systemic manifestations.</p>
                            <SubSectionTitle>HRCT Patterns:</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li><strong>NSIP</strong> is the most frequent pattern.</li>
                                <li><strong>Others:</strong> Cystic disease (Lymphocytic Interstitial Pneumonia - LIP), airway disease.</li>
                            </ul>
                            <SubSectionTitle>Key Signs and Autoantibodies:</SubSectionTitle>
                            <ul className="list-disc list-inside pl-4">
                                <li>Sicca syndrome (ocular, oral).</li>
                                <li>Anti-SSA (Ro) and anti-SSB (La) antibodies.</li>
                            </ul>
                        </div>
                    </ClinicalPresentationCard>
                </div>
            </Accordion>
            
            <Accordion title="Diagnostic Approach: An Integrated Approach" icon={<Search className="w-5 h-5 text-white" />}>
                 <div className="p-4 space-y-4">
                    <div className="bg-blue-50/60 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                        <h4 className="font-bold text-slate-800 flex items-center mb-2">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">1</span>
                            Clinical Suspicion
                        </h4>
                        <div className="pl-12 text-base text-slate-700">
                             <p>Any fibrosing ILD without a clear cause should raise suspicion of an underlying connective tissue disease. It is essential to systematically search for extra-pulmonary signs, even minor ones (skin, joint examination, capillaroscopy).</p>
                        </div>
                    </div>

                    <div className="bg-blue-50/60 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                        <h4 className="font-bold text-slate-800 flex items-center mb-2">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">2</span>
                            Targeted Laboratory Workup
                        </h4>
                        <div className="pl-12 text-base text-slate-700">
                            <p>A broad autoimmune panel is essential, including at a minimum: ANA, Rheumatoid Factor, anti-CCP. Depending on the clinical orientation, it will be expanded (anti-Scl70, anti-synthetases, anti-MDA5, anti-SSA/SSB...).</p>
                        </div>
                    </div>
                    
                    <div className="bg-blue-50/60 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                         <h4 className="font-bold text-slate-800 flex items-center mb-2">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">3</span>
                            Imaging (HRCT): Look for CTD 'Red Flags'
                        </h4>
                        <div className="pl-12 text-base text-slate-700">
                             <p>Certain radiological signs, although not specific, increase the probability of a CTD-ILD compared to IPF:</p>
                             <ul className="list-disc list-inside pl-4 mt-2">
                                <li>Predominant NSIP pattern: Subpleural sparing, significant ground-glass opacity.</li>
                                <li>Symmetric and extensive multilobar involvement.</li>
                                <li>Associated signs: Esophageal dilation (SSc), pleural/pericardial effusions, adenopathy.</li>
                                <li>"Straight Edge Sign", "Exuberant Honeycombing" are suggestive clues.</li>
                            </ul>
                        </div>
                    </div>

                     <div className="bg-blue-50/60 p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                         <h4 className="font-bold text-slate-800 flex items-center mb-2">
                            <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">4</span>
                            Multidisciplinary Discussion (MDD)
                        </h4>
                        <div className="pl-12 text-base text-slate-700">
                           <p>A crucial and mandatory step. The comparison of clinical, serological, radiological (and sometimes histological) data among the pulmonologist, rheumatologist, radiologist, and pathologist allows for the most probable diagnosis and the decision on the therapeutic strategy.</p>
                        </div>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-amber-800">What if the criteria are not met? The concept of IPAF</h4>
                        <p className="mt-2 text-base text-amber-700">Patients with ILD and evidence for autoimmunity (clinical or serological) who do not meet the criteria for a defined connective tissue disease are classified as having Interstitial Pneumonia with Autoimmune Features (IPAF). This is a research entity that requires close monitoring and expert discussion for therapeutic decisions.</p>
                    </div>
                </div>
            </Accordion>

            <ImmunologyWorkupSection />
            
            <Accordion title="Therapeutic Management (based on ACR 2023 recommendations)" icon={<Pill className="w-5 h-5 text-white" />}>
                 <div className="p-4 space-y-4">
                    <TherapeuticCard title="First-Line Treatment" icon={<CheckCircle />} color="green">
                        <div>
                            <h5 className="font-bold">Immunosuppressants</h5>
                            <p><strong>Mycophenolate (MMF)</strong> is often preferred. Alternatives: Azathioprine, Rituximab, Cyclophosphamide.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mt-2">
                             <div className="p-3 bg-orange-50 border border-orange-200 rounded-md">
                                <h6 className="font-semibold text-orange-800 flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/>Glucocorticoids</h6>
                                <p>Conditionally recommended (except SSc). <strong className="text-red-700">Strongly discouraged as first-line in SSc</strong> (risk of scleroderma renal crisis).</p>
                            </div>
                            <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                                <h6 className="font-semibold text-blue-800 flex items-center"><Pill className="w-4 h-4 mr-2"/>Nintedanib</h6>
                                <p>Optional as first-line for <strong>SSc-ILD</strong>. Conditionally discouraged for Sjögren's, IIM, and MCTD.</p>
                            </div>
                        </div>
                    </TherapeuticCard>
                    <TherapeuticCard title="Management of Progression on Treatment" icon={<TrendingUp />} color="blue">
                        <div>
                            <h5 className="font-bold">Second-Line Options</h5>
                            <p>In case of progression, a switch or addition of a treatment is recommended: <strong>MMF, Rituximab, Cyclophosphamide, or Nintedanib.</strong></p>
                        </div>
                        <div>
                             <h5 className="font-bold">Specific Cases</h5>
                             <ul className="list-disc list-inside pl-4">
                               <li><strong>RA-ILD:</strong> Adding <strong>Pirfenidone</strong> is an option.</li>
                               <li><strong>SSc/RA/MCTD:</strong> <strong>Tocilizumab</strong> is an option.</li>
                            </ul>
                        </div>
                    </TherapeuticCard>
                    <TherapeuticCard title="Rapidly Progressive Forms (RP-ILD)" icon={<AlertTriangle />} color="red">
                        <div>
                            <h5 className="font-bold">Aggressive Induction Treatment</h5>
                            <ol className="list-decimal list-inside pl-2 mt-1">
                                <li><strong>High-dose corticosteroids:</strong> IV methylprednisolone pulses as first-line.</li>
                                <li><strong>Combination treatments:</strong> Association of 2 or 3 agents: Rituximab, Cyclophosphamide, IVIG, MMF, calcineurin inhibitors, or JAK inhibitors (especially if anti-MDA5+).</li>
                            </ol>
                            <p className="mt-2"><strong>Antifibrotics (Nintedanib, Pirfenidone):</strong> Not recommended in the acute phase of RP-ILD.</p>
                        </div>
                    </TherapeuticCard>
                </div>
            </Accordion>
            
            <Accordion title="Follow-up and Prognosis" icon={<TrendingUp className="w-5 h-5 text-white" />}>
                 <div className="p-4 grid md:grid-cols-2 gap-4">
                    <TherapeuticCard title="Follow-up Modalities" icon={<Stethoscope />} color="blue">
                        <div>
                            <h5 className="font-bold">Frequency:</h5>
                            <p>PFTs every <strong>3-6 months</strong> for the first year for SSc and IIM, every <strong>3-12 months</strong> for RA, Sjögren's, and MCTD, then spaced out if stable.</p>
                        </div>
                         <div>
                            <h5 className="font-bold">Tools:</h5>
                            <p><strong>PFTs (FVC, DLCO)</strong> are key. The <strong>6MWT</strong> with oximetry is useful. <strong>HRCT</strong> is indicated in case of unexplained clinical or functional worsening.</p>
                        </div>
                    </TherapeuticCard>
                    <TherapeuticCard title="Prognostic Factors" icon={<Heart />} color="orange">
                         <div>
                            <h5 className="font-bold">General:</h5>
                            <p>Generally better than IPF.</p>
                        </div>
                        <div>
                            <h5 className="font-bold">Poor prognosis:</h5>
                            <p>Advanced age, male sex, UIP pattern on HRCT, low baseline DLCO, extent of fibrosis on HRCT.</p>
                        </div>
                        <div className="mt-2 p-2 bg-red-100 border border-red-200 rounded-md">
                            <h5 className="font-bold text-red-800 flex items-center"><AlertTriangle className="w-4 h-4 mr-2"/>Functional decline:</h5>
                            <p className="text-red-700">A drop of <strong>10% in FVC</strong> or <strong>15% in DLCO</strong> is a major marker of progression and increased mortality.</p>
                        </div>
                    </TherapeuticCard>
                </div>
            </Accordion>
            
            <Accordion title="Screening and Monitoring Aid Algorithm for CTD-ILD (ACR 2023)" icon={<Search className="w-5 h-5 text-white" />} variant="danger">
                 <div className="p-2 md:p-4">
                    <AcrScreeningTool />
                </div>
            </Accordion>
            
            <Accordion title="Therapeutic Decision Aid Algorithm for CTD-ILD (ACR 2023)" icon={<Pill className="w-5 h-5 text-white" />} variant="danger">
                 <div className="p-2 md:p-4">
                    <AcrTreatmentTool />
                </div>
            </Accordion>
        </div>
    );
};

export default ConnectivitesPIDSection;