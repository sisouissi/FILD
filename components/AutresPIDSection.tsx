
import React from 'react';
import { ListChecks, TrendingUp, Search, Pill, Stethoscope, Info } from './icons';
import { Accordion } from './Accordion';

const TableRow: React.FC<{ header?: boolean; cells: string[]; }> = ({ header = false, cells }) => (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-3 ${header ? 'bg-slate-100 font-bold text-slate-800' : 'border-t border-slate-200 text-slate-700'}`}>
        {cells.map((cell, index) => (
            <div key={index} className="text-base">
                <strong className="md:hidden font-semibold">{['Type of ILD', 'Characteristics', 'Prognosis'][index]}: </strong>
                {cell}
            </div>
        ))}
    </div>
);

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; color: 'blue' | 'green' | 'orange' | 'purple' }> = ({ title, children, icon, color }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        orange: 'border-orange-500 bg-orange-50 text-orange-800',
        purple: 'border-purple-500 bg-purple-50 text-purple-800',
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[color]}`}>
            <h4 className={`font-semibold flex items-center mb-2 ${colors[color]}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};


export const AutresPIDSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <ListChecks className="w-7 h-7 mr-3 text-blue-500" />
        Other Fibrosing ILDs
      </h2>
      <p className="text-slate-600 mt-2 text-base">
        This section covers fibrosing ILDs other than IPF, NSIP, HP, IPAF, and CTD-ILD.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">1. Definition and General Framework</h3>
        <p className="text-slate-700 text-base">
            Fibrosing interstitial lung diseases (ILDs) that do not fit into the most common categories (IPF, NSIP, HP, IPAF, connective tissue diseases) form a heterogeneous group. Their common feature is a tendency towards progressive fibrosis of the lung parenchyma. Identifying a specific cause (exposure, rare systemic disease) is a major challenge.
        </p>
    </div>

    <div className="space-y-4">
        <Accordion title="Main Entities" icon={<ListChecks className="w-5 h-5 text-white" />}>
            <div className="p-4">
                <p className="text-slate-600 mb-4 text-base">The following table summarizes the characteristics of the main remaining fibrosing entities.</p>
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <TableRow header cells={['Type of ILD', 'Main Characteristics', 'Prognostic Aspects']} />
                    <TableRow cells={['Pneumoconioses (asbestosis, silicosis, berylliosis)', 'Fibrosis resulting from prolonged occupational exposures (mineral particles, asbestos, silica, etc.).', 'Variable progression; risk of tumor complications (lung cancer, mesothelioma).']} />
                    <TableRow cells={['Fibrotic Sarcoidosis', '~10-20% of prolonged forms, predominance of nodules, mediastinal-hilar fibrosis, diffuse lesions.', 'Increased mortality related to respiratory involvement and complications (PAH, infections, aspergilloma).']} />
                    <TableRow cells={['Unclassifiable ILD', 'Indeterminate cases despite complete evaluation: clinical-radio-histological discordance or lack of actual biopsy.', 'High mortality if criteria for extensive fibrosis are met.']} />
                    <TableRow cells={['Smoking-related ILD (DIP/RB-ILD)', 'Lesions related to tobacco exposure: DIP (desquamative interstitial pneumonia) and RB-ILD (respiratory bronchiolitis with ILD).', 'Generally better prognosis, better response to corticosteroids and smoking cessation.']} />
                    <TableRow cells={['Drug-induced/Toxic', 'Various drugs (amiodarone, methotrexate…), radiation, toxic gases.', 'Stopping the toxin may stabilize the disease; sometimes irreversible fibrosis.']} />
                    <TableRow cells={['Langerhans Cell Histiocytosis', 'Mainly in young smokers, progression from nodules to cysts then fibrosis.', 'Risk of chronic respiratory failure; possible stabilization with smoking cessation.']} />
                    <TableRow cells={['LAM (Lymphangioleiomyomatosis)', 'Rare disease (mostly women), proliferation of smooth muscle cells, diffuse pulmonary cysts.', 'Progressive evolution, risk of pneumothorax and respiratory failure.']} />
                    <TableRow cells={['PPFE (Pleuroparenchymal Fibroelastosis)', 'Marked subpleural fibrosis, predominantly in the upper lobes.', 'Rare, slowly progressive course.']} />
                </div>
            </div>
        </Accordion>

        <Accordion title="Criteria for Fibrosis Progression" icon={<TrendingUp className="w-5 h-5 text-white" />}>
            <div className="p-4 text-slate-700 text-base">
                <p className="mb-3">Progression is defined by at least one of the following criteria, despite treatment or cessation of the causal factor:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Decline in forced vital capacity (FVC) <strong>greater than 10%</strong> over one year.</li>
                    <li>Decline in FVC of <strong>5-10%</strong> over one year, associated with <strong>worsening symptoms</strong> or <strong>radiological extension</strong> of fibrosis.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Diagnostic Approach" icon={<Search className="w-5 h-5 text-white" />}>
            <div className="p-4 space-y-4">
                <InfoCard title="HRCT Chest Scan" icon={<Search className="w-5 h-5"/>} color="blue">
                    <p>Key examination to determine the pattern of fibrosis, its distribution, and to look for signs pointing to a specific etiology.</p>
                </InfoCard>
                <InfoCard title="Search for Causes" icon={<Search className="w-5 h-5"/>} color="orange">
                    <p>Detailed history of environmental, occupational, and medication exposures.</p>
                </InfoCard>
                <InfoCard title="Specific Tests" icon={<Search className="w-5 h-5"/>} color="purple">
                    <p>Depending on the orientation: serologies, autoantibody testing, investigation of exposure (asbestos, silica).</p>
                </InfoCard>
                <InfoCard title="Lung Biopsy" icon={<Search className="w-5 h-5"/>} color="green">
                    <p>Reserved for cases where the diagnosis remains indeterminate or discordant after non-invasive evaluation.</p>
                </InfoCard>
            </div>
        </Accordion>
        
        <Accordion title="Management" icon={<Pill className="w-5 h-5 text-white" />}>
             <div className="p-4 space-y-4">
                <InfoCard title="Cessation of Exposure" icon={<Pill className="w-5 h-5"/>} color="blue">
                    <p>A crucial and indispensable step when a toxic or drug-related cause is identified.</p>
                </InfoCard>
                <InfoCard title="Specific Treatments" icon={<Pill className="w-5 h-5"/>} color="orange">
                    <p>Corticosteroids and/or immunosuppressants may be indicated in certain entities such as sarcoidosis or DIP.</p>
                </InfoCard>
                <InfoCard title="Antifibrotic Treatments" icon={<Pill className="w-5 h-5"/>} color="purple">
                    <p>Increasingly offered in cases of a progressive fibrosing phenotype (notably nintedanib).</p>
                </InfoCard>
                 <InfoCard title="Supportive Measures" icon={<Pill className="w-5 h-5"/>} color="green">
                    <p>Oxygen therapy, pulmonary rehabilitation, and discussion of lung transplantation for advanced forms.</p>
                </InfoCard>
            </div>
        </Accordion>
        
        <Accordion title="Follow-up" icon={<Stethoscope className="w-5 h-5 text-white" />}>
            <div className="p-4 text-slate-700 text-base">
                <p>Follow-up is essential and must be regular. It is based on:</p>
                <ul className="list-disc list-inside space-y-2 mt-3">
                    <li>Clinical evaluation of symptoms.</li>
                    <li>Monitoring of respiratory function by <strong>PFTs</strong> (FVC, DLCO).</li>
                    <li>Chest imaging in case of progression or for screening for complications.</li>
                </ul>
                <p className="mt-3">Treatment is adapted according to clinical and radiological evolution.</p>
            </div>
        </Accordion>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-slate-500">
      <h3 className="text-xl font-semibold text-slate-800 mb-2 flex items-center">
        <Info className="w-6 h-6 mr-3" />
        Conclusion
      </h3>
      <p className="text-slate-700 text-base">
        Outside of the major entities, fibrosing ILDs represent a diagnostic and therapeutic challenge. The common point is the risk of fibrosis progression. Identifying a treatable cause is paramount, and specific, often multidisciplinary management is necessary to slow the decline in respiratory function.
      </p>
    </div>

  </div>
);

export default AutresPIDSection;