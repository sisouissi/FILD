import React from 'react';
import { Lungs, AlertTriangle, Stethoscope, FlaskConical, RotateCcw, Info, Image } from './icons';
import { Accordion } from './Accordion';

const InfoCard = ({ title, content }: { title: string, content: string[] }) => (
    <div className="bg-slate-50 p-4 rounded-md border border-slate-200 h-full">
        <h4 className="font-semibold text-slate-700 mb-2">{title}</h4>
        <ul className="text-base text-slate-600 list-disc list-inside space-y-1">
            {content.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

export const FPIPathogenieCliniqueSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Lungs className="w-7 h-7 mr-3 text-blue-500" />
        Pathogenesis and Clinical Manifestations
      </h2>
       <p className="text-slate-600 mt-2 text-base">
        Understanding the underlying mechanisms and clinical signs of Idiopathic Pulmonary Fibrosis (IPF).
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <p className="text-slate-700 mb-4 text-base">
            Our understanding of IPF has evolved dramatically. Once considered a chronic inflammatory disease, it is now recognized as a complex, age-related condition resulting from an aberrant tissue repair process in response to repeated micro-injuries in genetically predisposed individuals. This section explores the complex mechanisms and clinical signs that define IPF.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-blue-800">Key Points to Remember</h3>
                <div className="mt-2 text-base text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>IPF is a disease of <strong>abnormal repair</strong>, not primary inflammation.</li>
                    <li>It affects a <strong>predisposed background</strong> (genetics, cellular aging).</li>
                    <li>Clinical manifestations are often <strong>insidious</strong>, leading to diagnostic delay.</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>

    <div className="space-y-4">
      <Accordion title="Pathogenesis of IPF: The Current Model" icon={<FlaskConical className="w-5 h-5 text-white" />}>
        <div className="p-4 space-y-4">
            <p className="text-slate-700 text-base">
                IPF is now understood as the result of an aberrant tissue repair process following repeated micro-injuries to the alveolar epithelium in a genetically predisposed individual. This process becomes self-sustaining and leads to progressive fibrosis.
            </p>
            <div className="space-y-3">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-800 flex items-center mb-2">
                        1. Micro-injuries and Abnormal Repair
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-base text-slate-700">
                        <li><strong>Repeated Epithelial Injuries:</strong> External factors (smoking, pollutants, viruses) and internal factors (GERD) damage the alveolar epithelial cells (AECs).</li>
                        <li><strong>Senescence and Epithelial Dysfunction:</strong> On a predisposed background (MUC5B genetics, short telomeres), type II AECs (progenitor cells) fail to regenerate a normal epithelium. They enter senescence and develop a pro-fibrotic senescence-associated secretory phenotype (SASP).</li>
                        <li><strong>Cellular Stress:</strong> Endoplasmic reticulum stress and mitochondrial dysfunction within AECs contribute to apoptosis and the release of pro-fibrotic mediators.</li>
                    </ul>
                </div>
                 <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                    <h4 className="font-semibold text-indigo-800 flex items-center mb-2">
                        2. Fibroblast Activation and Signaling Pathways
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-base text-slate-700">
                        <li><strong>Fibroblast Activation:</strong> Signals from senescent AECs activate fibroblasts, which differentiate into <strong>myofibroblasts</strong>, contractile cells that massively produce collagen.</li>
                        <li><strong>Fibroblastic Foci:</strong> These myofibroblasts accumulate in "fibroblastic foci," the active sites of fibrogenesis and histological hallmarks of IPF.</li>
                        <li><strong>Key Mediators:</strong> The <strong>TGF-β</strong> pathway is the central regulator. Other pathways like kinases (p38 MAPK, JNK, ERK5) and developmental signals (Wnt, Notch) are also involved.</li>
                    </ul>
                </div>
                 <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                    <h4 className="font-semibold text-teal-800 flex items-center mb-2">
                        <RotateCcw className="w-5 h-5 mr-2"/>
                        3. The Vicious Cycle of Fibrosis
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-base text-slate-700">
                        <li><strong>Matrix Stiffening:</strong> The excessive deposition of extracellular matrix (ECM) makes the lung tissue increasingly stiff.</li>
                        <li><strong>Mechanical Stress:</strong> This abnormal stiffness exerts mechanical tension (traction) on the alveoli, causing new epithelial injuries. <strong>Traction bronchiectasis</strong> is a radiological sign of this phenomenon.</li>
                        <li><strong>Self-perpetuation:</strong> These new injuries release pro-fibrotic mediators, activating even more fibroblasts and creating an inexorable vicious cycle.</li>
                    </ul>
                </div>
            </div>
        </div>
      </Accordion>

      <Accordion title="Clinical and Radiological Manifestations" icon={<Stethoscope className="w-5 h-5 text-white" />}>
         <div className="p-4 space-y-4">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                 <InfoCard title="Typical Patient Profile" content={[
                     "Male (over 70% of cases)",
                     "Age over 60 years",
                     "Former or current smoker"
                 ]}/>
                 <InfoCard title="Cardinal Symptoms" content={[
                     "Insidious and progressive exertional dyspnea (over 6 months)",
                     "Dry, chronic, and persistent cough (~85% of cases)",
                     "Fatigue, weight loss in advanced stages"
                 ]}/>
                 <InfoCard title="Physical Examination" content={[
                     "Fine, inspiratory, bibasilar dry crackles: 'Velcro crackles' (over 80% of cases)",
                     "Digital clubbing (25-50% of cases), often a late sign",
                     "Signs of pulmonary hypertension and right heart failure in advanced forms"
                 ]}/>
             </div>
             <div className="mt-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-2 flex items-center"><Image className="w-5 h-5 mr-2" /> Key Signs on HRCT</h4>
                <p className="text-base text-slate-600">The chest HRCT is fundamental and reveals characteristic signs:</p>
                <ul className="list-disc list-inside space-y-2 text-base text-slate-700 mt-2 pl-4">
                    <li><strong>Reticulation:</strong> Fine, interlacing linear opacities, predominantly subpleural and at the bases.</li>
                    <li><strong>Honeycombing:</strong> Layered, similarly sized cystic airspaces, a pathognomonic sign of a definite UIP pattern.</li>
                    <li><strong>Traction bronchiectasis and bronchiolectasis:</strong> Irregular dilation of bronchi and bronchioles, stretched by the surrounding fibrosis. This is a major sign of fibrosis and an <strong>important prognostic factor</strong>.</li>
                </ul>
             </div>
        </div>
      </Accordion>
    </div>
  </div>
);

export default FPIPathogenieCliniqueSection;