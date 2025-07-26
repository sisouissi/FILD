
import React from 'react';
import { BrainCircuit, Info, CheckCircle, AlertTriangle, Stethoscope, FlaskConical, Image, Search, Clock, Pill, ClipboardPlus } from './icons';
import { Accordion } from './Accordion';
import { IPAFClassifierTool } from './IPAFClassifierTool';

const CriteriaCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode; color: 'blue' | 'purple' | 'teal' }> = ({ title, items, icon, color }) => {
    const colorClasses = {
        blue: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-800' },
        purple: { border: 'border-purple-500', bg: 'bg-purple-50', text: 'text-purple-800' },
        teal: { border: 'border-teal-500', bg: 'bg-teal-50', text: 'text-teal-800' },
    };

    return (
        <div className={`p-4 rounded-lg border-l-4 ${colorClasses[color].border} ${colorClasses[color].bg} h-full`}>
            <h4 className={`font-semibold ${colorClasses[color].text} mb-2 flex items-center`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-700">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

export const IPAFSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <BrainCircuit className="w-7 h-7 mr-3 text-blue-500" />
        Interstitial Pneumonia with Autoimmune Features (IPAF)
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        A research classification for patients at the intersection of idiopathic ILD and connective tissue disease-associated ILD.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-base">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Why was the concept of IPAF proposed?</h3>
        <p className="text-slate-700 mb-4">
            A significant proportion of patients with ILD have clinical, serological, or radiological features that suggest an autoimmune disease, without meeting the strict criteria for a defined connective tissue disease (such as rheumatoid arthritis or scleroderma).
        </p>
        <p className="text-slate-700 mb-4">
            Before 2015, this "gray area" was described by a multitude of terms ("undifferentiated connective tissue disease," "lung-dominant CTD," etc.), which hindered research. The IPAF classification criteria were proposed by an ERS/ATS task force to unify terminology and stimulate research on this group of patients.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6 rounded-r-lg">
            <h4 className="text-base font-semibold text-blue-800 mb-2 flex items-center"><Info className="w-5 h-5 mr-2" />Key Points</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-base">
                <li>IPAF is <strong>not a diagnosis</strong>, but a <strong>research classification category</strong>.</li>
                <li>It identifies patients with ILD who have evidence of underlying autoimmunity.</li>
                <li>The goal is to study their evolution, prognosis, and response to treatment in a standardized manner.</li>
            </ul>
        </div>
    </div>

    <div className="space-y-4">
        <Accordion title="Classification Criteria (ERS/ATS 2015)" icon={<CheckCircle className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4 text-slate-700">
                <div className="p-4 bg-slate-100 rounded-lg border border-slate-300 text-center">
                    <p className="font-bold text-slate-800">IPAF classification requires the presence of ILD (proven by HRCT or biopsy) in a patient with no other identified cause who does not meet the criteria for a defined connective tissue disease, <strong>AND</strong>:</p>
                    <p className="text-xl font-bold text-blue-600 mt-2">At least 1 criterion in at least 2 of the following 3 domains</p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <CriteriaCard 
                        title="Clinical Domain"
                        icon={<Stethoscope className="w-5 h-5" />}
                        color="blue"
                        items={[
                            "Mechanic's hands",
                            "Digital ulceration",
                            "Inflammatory arthritis / morning stiffness ≥60 min",
                            "Palmar telangiectasias",
                            "Raynaud's phenomenon",
                            "Unexplained digital edema",
                            "Gottron sign"
                        ]}
                    />
                     <CriteriaCard 
                        title="Serological Domain"
                        icon={<FlaskConical className="w-5 h-5" />}
                        color="purple"
                        items={[
                            "ANA ≥1:320 (diffuse, speckled, homogeneous)",
                            "ANA (any titer, nucleolar or centromere pattern)",
                            "Rheumatoid Factor ≥2x ULN",
                            "Anti-CCP, anti-dsDNA, anti-Ro, anti-La",
                            "Anti-RNP, anti-Smith",
                            "Anti-Scl-70, antisynthetase, anti-MDA5"
                        ]}
                    />
                     <CriteriaCard 
                        title="Morphological Domain"
                        icon={<Image className="w-5 h-5" />}
                        color="teal"
                        items={[
                           "HRCT or histological pattern of NSIP, OP, LIP",
                           "Specific histology (lymphoid aggregates with germinal centers, etc.)",
                           "Multi-compartment involvement (unexplained pleuritis, pericarditis, airway disease, vasculopathy)"
                        ]}
                    />
                </div>
            </div>
        </Accordion>

        <Accordion title="Initial Evaluation and Role of Biopsy" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-3 text-slate-700 text-base">
                 <p>Currently, there is no consensus on the best practices for the initial investigation and management of patients meeting IPAF criteria.</p>
                 <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Prognosis of the UIP pattern:</strong> A UIP pattern (definite or probable) on HRCT or biopsy in an IPAF context is associated with mortality similar to that of IPF.
                    </li>
                     <li>
                        <strong>Indication for biopsy:</strong> The threshold for a biopsy is lower in a young patient, especially a woman, even with a probable UIP pattern on HRCT. In an older patient with a typical IPF profile, a biopsy is not necessarily required.
                    </li>
                     <li>
                        <strong>Importance of histology:</strong> Histological NSIP would support an immunosuppressive approach, whereas histological UIP would prompt caution with immunosuppressants and earlier consideration of antifibrotics in case of progression.
                    </li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                       A <strong>multidisciplinary team</strong> discussion (pulmonologist, radiologist, pathologist, rheumatologist) is essential for all complex IPAF cases to weigh the pros and cons of invasive investigations.
                    </p>
                </div>
            </div>
        </Accordion>

        <Accordion title="Follow-up and Evolution Over Time" icon={<Clock className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-3 text-slate-700 text-base">
                <p>ILD can be the first manifestation of a connective tissue disease. It is therefore crucial to monitor the evolution of patients classified as IPAF.</p>
                 <ul className="list-disc list-inside space-y-2">
                    <li>
                        <strong>Evolution to a defined connective tissue disease:</strong> Studies show that up to 13.5% of IPAF patients may develop a defined connective tissue disease (Sjögren's, RA, myositis) within a mean of 31 months.
                    </li>
                     <li>
                        <strong>Continuous monitoring:</strong> All patients with ILD should be re-evaluated at each visit for signs or symptoms of connective tissue disease.
                    </li>
                     <li>
                        <strong>Rheumatological evaluation:</strong> A formal evaluation by a rheumatologist should be considered for IPAF cases to not miss a diagnosis of connective tissue disease that could guide treatment.
                    </li>
                     <li>
                        <strong>Repeating tests:</strong> Repeating the extended antibody panel (not just ANA) should be considered, especially in case of an NSIP/OP HRCT pattern or new clinical signs.
                    </li>
                </ul>
            </div>
        </Accordion>
        
        <Accordion title="Therapeutic Management of IPAF" icon={<Pill className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-3 text-slate-700 text-base">
                <p>There are no randomized controlled trials specific to IPAF. Management is therefore individualized and largely extrapolated from studies on CTD-ILD.</p>
                 <ul className="list-disc list-inside space-y-2">
                     <li>
                        <strong>General measures:</strong> Pulmonary rehabilitation, oxygen therapy if necessary, treatment of GERD, and prevention of infections are indicated.
                    </li>
                     <li>
                        <strong>Immunosuppressants:</strong> This is the most common approach. The majority of patients in cohorts receive glucocorticoids and/or immunosuppressants (mycophenolate, azathioprine, rituximab...).
                    </li>
                     <li>
                        <strong>Antifibrotics:</strong> Historically underused, their role is being evaluated. They could be relevant for IPAF patients with a progressive fibrosing phenotype, especially if the radiological or histological pattern is UIP-like.
                    </li>
                     <li>
                        <strong>Lung transplantation:</strong> Should be considered for patients with advanced and progressive disease.
                    </li>
                </ul>
                 <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4 rounded-lg">
                    <p className="text-sm text-amber-800">
                        The therapeutic strategy is decided on a case-by-case basis in MDD, taking into account the clinical, serological, radiological profile, and especially the evolution of the disease.
                    </p>
                </div>
            </div>
        </Accordion>

        <div className="mt-8">
            <Accordion title="IPAF Classification Aid Tool (ERS/ATS 2015)" icon={<ClipboardPlus className="w-5 h-5 text-white" />} variant="danger">
                <div className="p-2 md:p-4">
                    <IPAFClassifierTool />
                </div>
            </Accordion>
        </div>
    </div>
  </div>
);

export default IPAFSection;
