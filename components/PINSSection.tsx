import React from 'react';
import { ClipboardList, AlertTriangle, Activity, Stethoscope, Search, Pill, CheckCircle, Image, Users, HandHeart, History, FlaskConical, Lungs, Microscope, FileText } from './icons';
import { Accordion } from './Accordion';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; }> = ({ title, children, icon }) => (
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
        <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
            {icon}
            <span className="ml-2">{title}</span>
        </h4>
        <div className="text-base text-slate-700 space-y-2">
            {children}
        </div>
    </div>
);

const ClinicalFeatureCard: React.FC<{ title: string; icon: React.ReactNode; color: 'blue' | 'purple' | 'teal'; children: React.ReactNode }> = ({ title, icon, color, children }) => {
    const colorClasses = {
        blue: 'bg-blue-50 border-blue-500 text-blue-800',
        purple: 'bg-purple-50 border-purple-500 text-purple-800',
        teal: 'bg-teal-50 border-teal-500 text-teal-800',
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colorClasses[color]}`}>
            <h5 className={`font-semibold mb-2 flex items-center ${colorClasses[color]}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h5>
            <div className="text-slate-700 text-base space-y-1">{children}</div>
        </div>
    );
};

const EvaluationStepCard: React.FC<{ number: string; title: string; icon: React.ReactNode; color: 'blue' | 'orange' | 'green' | 'indigo'; children: React.ReactNode }> = ({ number, title, icon, color, children }) => {
     const colorClasses = {
        blue: 'border-blue-500',
        orange: 'border-orange-500',
        green: 'border-green-500',
        indigo: 'border-indigo-500',
    };
    return (
         <div className={`p-4 bg-slate-50 rounded-lg border-l-4 ${colorClasses[color]}`}>
            <h5 className="font-bold text-slate-800 flex items-center mb-2">
                <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white font-bold mr-4`}>{number}</span>
                <span className="flex items-center">{icon} <span className="ml-2">{title}</span></span>
            </h5>
            <div className="pl-12 text-base text-slate-700 space-y-2">{children}</div>
        </div>
    )
}


export const PINSSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <ClipboardList className="w-7 h-7 mr-3 text-blue-500" />
        Nonspecific Interstitial Pneumonia (NSIP)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        NSIP is a chronic interstitial pneumonia with a homogeneous appearance, combining inflammation and fibrosis. It is called "nonspecific" because it lacks the distinctive features of other IIPs.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Introduction and Definition</h3>
        <p className="text-slate-700 mb-4 text-base">
            Nonspecific Interstitial Pneumonia (NSIP) is one of the main forms of idiopathic interstitial pneumonias (IIPs), along with usual interstitial pneumonia (UIP/IPF), desquamative interstitial pneumonia (DIP), and other rarer entities.
        </p>
        <p className="text-slate-700 text-base">
            It is called "nonspecific" because its histological appearance, although distinct, does not have the specific features of other IIPs (e.g., heterogeneity of IPF, macrophage accumulation in DIP, etc.). The diagnosis of NSIP is based on a <strong>homogeneous</strong> histological picture, showing chronic inflammation and/or fibrosis of the pulmonary interstitium that appears to be of the same 'age' everywhere.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded-r-lg">
            <h4 className="text-base font-semibold text-blue-800 mb-2">Key Points on the Definition</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-base">
                <li><strong>A histological diagnosis of exclusion:</strong> NSIP is defined by the absence of characteristic signs of other IIPs.</li>
                <li><strong>Temporal homogeneity:</strong> Its major histological feature is a uniform (temporally homogeneous) appearance of inflammation and/or fibrosis.</li>
                <li><strong>Etiological duality:</strong> Can be idiopathic or, more frequently, secondary to a systemic disease (especially connective tissue diseases), drug use, or infection (HIV).</li>
            </ul>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Etiology" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-base text-slate-700">
                <p>NSIP can be idiopathic, but it is most often associated with various conditions, even if a causal link is not always formally identified.</p>
                
                <div className="pt-4">
                    <h4 className="font-semibold text-lg text-slate-800 mb-3">1. Connective Tissue Diseases</h4>
                    <p className="mb-4">NSIP is the most frequently found histological pattern in the context of connective tissue disease-associated interstitial lung disease.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
                            <h5 className="font-bold text-blue-800">Systemic Sclerosis (SSc)</h5>
                            <p className="mt-1">Most common pattern of ILD in SSc (up to 78% of biopsied cases).</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-md border border-purple-200">
                            <h5 className="font-bold text-purple-800">Polymyositis-Dermatomyositis (IIM)</h5>
                            <p className="mt-1">Very common (81% of biopsied cases in one study). ILD can manifest as antibiotic-resistant pneumonia.</p>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-md border border-teal-200">
                            <h5 className="font-bold text-teal-800">Sjögren's Syndrome</h5>
                            <p className="mt-1">Most common pattern of ILD in Sjögren's (nearly 50% of cases).</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-md border border-red-200">
                            <h5 className="font-bold text-red-800">Rheumatoid Arthritis (RA)</h5>
                            <p className="mt-1">Less frequent than the UIP pattern, but represents about 14% of ILD associated with RA.</p>
                        </div>
                        <div className="bg-slate-100 p-3 rounded-md border border-slate-300 col-span-1 md:col-span-2">
                            <h5 className="font-bold text-slate-800">ANCA-Associated Vasculitides</h5>
                            <p className="mt-1">An NSIP pattern is described, particularly in microscopic polyangiitis, although the UIP pattern is more common.</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t mt-4">
                    <h4 className="font-semibold text-lg text-slate-800 mb-3">2. Interstitial Pneumonia with Autoimmune Features (IPAF)</h4>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                        <p className="mb-3">Some patients have NSIP (or another ILD) with signs of autoimmunity, but do not meet the criteria for a defined connective tissue disease. These patients are classified as having IPAF.</p>
                        <p className="font-bold text-amber-800 mb-2">Criteria for IPAF (at least 1 criterion in at least 2 of the 3 domains):</p>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                            <div className="bg-white p-2 rounded border">
                                <h6 className="font-semibold">Clinical Domain</h6>
                                <ul className="list-disc list-inside pl-2">
                                    <li>Mechanic's hands</li>
                                    <li>Unexplained digital edema</li>
                                    <li>Inflammatory arthritis</li>
                                    <li>Palmar telangiectasias</li>
                                    <li>Raynaud's phenomenon</li>
                                    <li>Gottron sign</li>
                                </ul>
                            </div>
                            <div className="bg-white p-2 rounded border">
                                <h6 className="font-semibold">Serological Domain</h6>
                                <ul className="list-disc list-inside pl-2">
                                    <li>ANA of 1:320 or higher (or nucleolar/centromere)</li>
                                    <li>RF above 2x ULN</li>
                                    <li>Anti-CCP, anti-dsDNA, anti-Ro, anti-La</li>
                                    <li>Anti-RNP, anti-Smith, anti-Scl-70</li>
                                    <li>Antisynthetase (Jo-1...), anti-MDA5</li>
                                </ul>
                            </div>
                            <div className="bg-white p-2 rounded border">
                                <h6 className="font-semibold">Morphological Domain</h6>
                                <ul className="list-disc list-inside pl-2">
                                    <li>NSIP pattern (or other IIP) on HRCT or biopsy</li>
                                    <li>Multi-compartment involvement (pleura, pericardium, airways, vascular)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t mt-4">
                    <h4 className="font-semibold text-lg text-slate-800 mb-3">3. Other Etiologies</h4>
                    <ul className="list-disc list-inside space-y-2 text-base">
                        <li>
                            <strong>Hypersensitivity Pneumonitis (HP):</strong> Some chronic forms without well-formed granulomas can mimic NSIP on biopsy.
                        </li>
                        <li>
                            <strong>Drug-induced NSIP:</strong> Many drugs can be implicated (Amiodarone, Methotrexate, Statins, Nitrofurantoin, etc.).
                        </li>
                        <li>
                            <strong>HIV infection:</strong> Has become rare since antiretroviral therapies, but remains a possible cause.
                        </li>
                        <li>
                            <strong>Miscellaneous causes:</strong> IgG4-related disease, familial interstitial pneumonias, graft-versus-host disease (GVHD), and possibly smoking.
                        </li>
                    </ul>
                </div>
            </div>
        </Accordion>

        <Accordion title="Epidemiology" icon={<Activity className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-slate-700 text-base">
                <p>
                    Nonspecific interstitial pneumonia (NSIP) is a relatively rare lung disease, and its prevalence is not clearly established. It is estimated to account for 14% to 36% of cases of idiopathic interstitial pneumonias. NSIP is the second most common idiopathic interstitial pneumonia, after usual interstitial pneumonia (UIP/IPF). It tends to affect younger patients (e.g., below 50 years) compared to IPF. Most patients with NSIP are women, and the majority have no history of smoking.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Key Epidemiological Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                        <li><strong>Rarity:</strong> NSIP is a relatively rare condition.</li>
                        <li><strong>Second most common IIP:</strong> It is the second most common IIP after IPF.</li>
                        <li><strong>Age of onset:</strong> Typically occurs in middle-aged adults (40-50 years).</li>
                        <li><strong>Sex:</strong> More common in women, especially in cases of associated connective tissue disease.</li>
                        <li><strong>Smoking:</strong> Most patients are non-smokers.</li>
                        <li><strong>Strong association:</strong> Very often linked to a connective tissue disease.</li>
                        <li><strong>Prognosis:</strong> Generally better than that of IPF.</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-slate-800 mt-4 mb-2">Other Epidemiological Considerations</h4>
                    <div className="space-y-2 text-sm">
                        <div className="p-3 bg-slate-100 rounded-md border">
                            <strong>Geographic Variation:</strong> There may be a higher prevalence in the white European population.
                        </div>
                        <div className="p-3 bg-slate-100 rounded-md border">
                            <strong>Underlying Conditions:</strong> Can be associated with connective tissue diseases, HP, or drug toxicities.
                        </div>
                        <div className="p-3 bg-slate-100 rounded-md border">
                            <strong>Idiopathic vs. Secondary:</strong> NSIP can be idiopathic (no cause found) or secondary to another condition.
                        </div>
                    </div>
                </div>
                
                <p className="pt-4 border-t border-slate-200 italic text-slate-600">
                    In summary, although NSIP is not a common condition, it is an important subtype of interstitial pneumonia, particularly because of its association with connective tissue diseases and its generally better prognosis compared to IPF.
                </p>
            </div>
        </Accordion>

        <Accordion title="Pathophysiology and Histopathology" icon={<Stethoscope className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-base">
                 <InfoCard title="Pathophysiology" icon={<Activity className="w-4 h-4 mr-2" />}>
                     <p>The pathophysiology involves epithelial injury, deregulated repair, immune system involvement (lymphocytes), and abnormal fibroblast/myofibroblast function leading to excessive collagen deposition.</p>
                </InfoCard>
                 <InfoCard title="Histopathology" icon={<Stethoscope className="w-4 h-4 mr-2" />}>
                    <p>The histological diagnosis is based on the temporal homogeneity of the inflammatory and fibrotic process, unlike the heterogeneity of IPF. Three subgroups are distinguished:</p>
                    <ul className="list-decimal list-inside space-y-1 mt-2">
                        <li><strong>Group 1:</strong> Predominantly inflammatory.</li>
                        <li><strong>Group 2:</strong> Mixed inflammatory and fibrotic.</li>
                        <li><strong>Group 3:</strong> Predominantly fibrotic.</li>
                    </ul>
                    <div className="mt-3 bg-blue-50 border-l-4 border-blue-500 p-2 text-sm">
                        The gold standard for diagnosis is surgical biopsy (VATS or thoracotomy). Cryobiopsy is an alternative.
                    </div>
                </InfoCard>
            </div>
        </Accordion>

        <Accordion title="Clinical Presentation and Evaluation" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-8">
                <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">Clinical Features</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                        <ClinicalFeatureCard title="Typical Patient Profile" icon={<Users className="w-5 h-5"/>} color="blue">
                            <ul className="list-disc list-inside">
                                <li>Middle-aged woman (40-50 years)</li>
                                <li>Non-smoker</li>
                                <li>Often associated with a connective tissue disease</li>
                            </ul>
                        </ClinicalFeatureCard>
                        <ClinicalFeatureCard title="Symptoms" icon={<Stethoscope className="w-5 h-5"/>} color="purple">
                             <ul className="list-disc list-inside">
                                <li>Subacute onset of dyspnea and cough</li>
                                <li>Fever or flu-like symptoms (1/3 of cases)</li>
                                <li>Extra-pulmonary signs if connective tissue disease</li>
                            </ul>
                        </ClinicalFeatureCard>
                        <ClinicalFeatureCard title="Physical Examination" icon={<HandHeart className="w-5 h-5"/>} color="teal">
                             <ul className="list-disc list-inside">
                                <li>Bibasilar "velcro" crackles</li>
                                <li>Digital clubbing (10-35%)</li>
                                <li>Look for stigmata of rheumatic disease</li>
                            </ul>
                        </ClinicalFeatureCard>
                    </div>
                </div>

                <div className="pt-8 border-t">
                     <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">Evaluation Approach</h4>
                     <div className="space-y-4">
                        <EvaluationStepCard number="1" title="Targeted History" icon={<History className="w-5 h-5"/>} color="blue">
                            <p>A detailed history is crucial to explore differential diagnoses:</p>
                            <ul className="list-disc list-inside text-sm">
                                <li><strong>Exposures:</strong> Organic antigens (birds, molds), mineral dusts.</li>
                                <li><strong>Medications:</strong> Complete list of treatments (current and past).</li>
                                <li><strong>Connective Tissue Disease:</strong> Extra-pulmonary symptoms.</li>
                            </ul>
                        </EvaluationStepCard>
                        <EvaluationStepCard number="2" title="Laboratory Workup" icon={<FlaskConical className="w-5 h-5"/>} color="orange">
                             <p>Aims to rule out other causes and to look for underlying autoimmunity.</p>
                             <ul className="list-disc list-inside text-sm">
                                <li><strong>Basic panel:</strong> CBC, liver and kidney function tests.</li>
                                <li><strong>Autoimmune panel:</strong> ANA, RF, anti-CCP are systematic. Extended panel if suspected.</li>
                                <li><strong>Other:</strong> Precipitins (if HP is suspected), HIV serology if risk factors.</li>
                            </ul>
                        </EvaluationStepCard>
                        <EvaluationStepCard number="3" title="Pulmonary Function Tests (PFTs)" icon={<Activity className="w-5 h-5"/>} color="green">
                            <p>Confirms the restrictive ventilatory defect and quantifies the severity of impairment.</p>
                             <ul className="list-disc list-inside text-sm">
                                <li><strong>Typical profile:</strong> Decrease in FVC and TLC, normal/increased FEV1/FVC ratio.</li>
                                <li><strong>DLCO:</strong> Often early decrease, a marker of severity and prognosis.</li>
                                <li><strong>6MWT:</strong> Looks for exertional desaturation.</li>
                            </ul>
                        </EvaluationStepCard>
                         <EvaluationStepCard number="4" title="Bronchoalveolar Lavage (BAL)" icon={<Lungs className="w-5 h-5"/>} color="indigo">
                             <p>Nonspecific for the diagnosis of NSIP, but its main role is to exclude other diagnoses.</p>
                             <ul className="list-disc list-inside text-sm">
                                <li><strong>Exclude:</strong> Infection, alveolar hemorrhage, malignancy.</li>
                                <li><strong>Orientation:</strong> High lymphocytosis can suggest HP or NSIP, but remains nonspecific.</li>
                            </ul>
                        </EvaluationStepCard>
                     </div>
                </div>
            </div>
        </Accordion>
        
        <Accordion title="Imaging of NSIP" icon={<Image className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-base text-slate-700">
                <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Chest Radiograph</h4>
                    <ul className="list-disc list-inside space-y-1">
                        <li>May be normal in early stages.</li>
                        <li>Ground-glass or poorly defined opacities, predominantly in the bases.</li>
                        <li>May show a reticulo-nodular, patchy, or mixed pattern.</li>
                        <li>In advanced forms: bilateral pulmonary infiltrates with volume loss in the lower lobes.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-800 mb-2">High-Resolution Computed Tomography (HRCT)</h4>
                    <p className="mb-3">
                        The involvement is typically symmetrical, affecting the peribronchovascular interstitium of the lower lobes. Relative <strong className="text-blue-600">subpleural sparing</strong> is a very useful distinctive sign when present. Ground-glass opacity may indicate cellular NSIP or fine fibrosis not visible on the scan. It is essential to compare with previous scans as the NSIP pattern can evolve into a UIP pattern.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
                            <h5 className="font-bold text-blue-800">Frequent Signs</h5>
                            <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                                <li><strong>Ground-glass opacities:</strong> Often the dominant sign.</li>
                                <li><strong>Reticulation.</strong></li>
                                <li>Thickening of bronchovascular bundles.</li>
                                <li><strong>Traction bronchiectasis.</strong></li>
                                <li>Lung volume loss (lower lobes).</li>
                                <li>Microcystic honeycombing (rare).</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50 p-3 rounded-md border border-amber-200">
                            <h5 className="font-bold text-amber-800">Signs Suggesting an Alternative Diagnosis</h5>
                            <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                                <li>Centrilobular nodules.</li>
                                <li>Mosaic attenuation.</li>
                                <li>Thin-walled cysts.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Diagnostic Approach" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-6 text-base text-slate-700">
                <p>The definitive diagnosis of NSIP is based on histopathological analysis, ideally integrated into a multidisciplinary discussion. However, a biopsy is not always necessary to guide management.</p>

                <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                        <h4 className="font-semibold text-blue-800 flex items-center mb-2">
                            <Users className="w-5 h-5 mr-2"/>
                            1. Multidisciplinary Discussion (MDD): The Key Step
                        </h4>
                        <p className="text-sm">A confident clinical diagnosis can often be reached through MDD, which synthesizes clinical, serological, radiological, and exposure data. This is essential to optimize diagnostic accuracy.</p>
                    </div>

                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                        <h4 className="font-semibold text-green-800 flex items-center mb-2">
                            <CheckCircle className="w-5 h-5 mr-2"/>
                            2. Scenarios where biopsy can be avoided
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Known connective tissue disease:</strong> A typical clinical and HRCT picture of NSIP generally does not require a biopsy.</li>
                            <li><strong>Suspected drug-induced NSIP:</strong> Discontinuation of the suspected drug and observation of the response.</li>
                            <li><strong>Suspected HP:</strong> Evaluation with serologies, BAL, and an avoidance test before considering a biopsy.</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
                        <h4 className="font-semibold text-orange-800 flex items-center mb-2">
                            <Microscope className="w-5 h-5 mr-2"/>
                            3. Lung Biopsy: When and How?
                        </h4>
                        <p className="text-sm mb-2">It is discussed when the diagnosis remains uncertain after MDD, weighing the risks and benefits.</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Gold standard:</strong> Surgical biopsy (VATS).</li>
                            <li><strong>Alternative:</strong> Transbronchial cryobiopsy is an option in expert centers.</li>
                        </ul>
                    </div>
                    
                    <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
                        <h4 className="font-semibold text-purple-800 flex items-center mb-2">
                            <FileText className="w-5 h-5 mr-2"/>
                            4. Histopathology: What to look for
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Temporal homogeneity:</strong> The major criterion. The inflammatory and/or fibrotic involvement appears to be of the same "age" everywhere.</li>
                            <li><strong>Preserved architecture:</strong> Unlike in IPF.</li>
                            <li><strong>Absence of signs of other IIPs:</strong> No prominent fibroblastic foci, no granulomas, etc.</li>
                            <li><strong>Types:</strong> Cellular NSIP (better prognosis) vs. fibrotic NSIP.</li>
                        </ul>
                    </div>
                    
                    <div className="p-4 bg-slate-100 border-l-4 border-slate-500 rounded-lg">
                        <h4 className="font-semibold text-slate-800 flex items-center mb-2">
                            <ClipboardList className="w-5 h-5 mr-2"/>
                            5. Differential Diagnosis
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><strong>UIP/IPF:</strong> The distinction is crucial due to prognostic and therapeutic implications.</li>
                            <li><strong>Chronic HP:</strong> Can be histologically very similar.</li>
                            <li>Others: Sarcoidosis, drug-induced ILD, IgG4-related disease.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Accordion>

        <Accordion title="Treatment and Management" icon={<Pill className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-base text-slate-700">
                <p>Treatment depends on the cause and severity.</p>
                <div className="space-y-4">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                        <h4 className="font-semibold text-green-800">Mild Disease</h4>
                        <p className="mt-1">Close monitoring and observation may be sufficient.</p>
                    </div>
                     <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
                        <h4 className="font-semibold text-orange-800">Moderate to Severe Disease</h4>
                        <ul className="list-disc list-inside space-y-2 mt-2">
                           <li><strong>Systemic corticosteroids (Prednisone):</strong> 0.5 to 1 mg/kg/day (max 60mg/day) for 1 month, then slow taper over 6-12 months.</li>
                           <li><strong>Immunosuppressive agents:</strong> Azathioprine or Mycophenolate may be added upfront in severe forms, or after 3-6 months of evaluation on corticosteroids.</li>
                        </ul>
                    </div>
                     <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                        <h4 className="font-semibold text-red-800">Severe or Refractory Disease</h4>
                         <ul className="list-disc list-inside space-y-2 mt-2">
                            <li><strong>Hospitalization:</strong> May require methylprednisolone pulses (1g/day for 3 days).</li>
                            <li><strong>Refractory disease:</strong> Cyclophosphamide, Rituximab, or calcineurin inhibitors may be considered.</li>
                            <li><strong>Lung transplantation:</strong> An option for non-responders.</li>
                        </ul>
                    </div>
                </div>
                 <div className="flex items-start bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-sm mt-4">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-blue-800">
                        Consider PJP prophylaxis for patients on corticosteroids above 20mg/day for more than one month, or on multiple immunosuppressants.
                    </p>
                </div>
            </div>
        </Accordion>
    </div>
  </div>
);

export default PINSSection;