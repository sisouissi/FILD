
import React from 'react';
import { Lungs, Microscope, ListChecks, TrendingUp, AlertTriangle, Activity, FlaskConical, RotateCcw } from './icons';
import { Accordion } from './Accordion';

export const DefinitionSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    {/* Header */}
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Lungs className="w-7 h-7 mr-3 text-blue-500" />
        Definitions, Pathogenesis, and Classification
      </h2>
      <p className="text-slate-600 mt-2">
        Fibrosing interstitial lung diseases (ILDs) comprise a large group of pathologies characterized by infiltration of the alveolar wall by inflammatory cells and fibrosis.
      </p>
    </div>

     {/* Epidemiology Card */}
     <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
        <TrendingUp className="w-6 h-6 mr-3 text-green-500" />
        Epidemiology and Risk Factors
      </h3>
      <div className="grid md:grid-cols-2 gap-8 text-slate-600">
        <div>
            <h4 className="font-semibold text-slate-700 mb-2">Key Figures</h4>
            <ul className="space-y-2 list-disc list-inside">
                <li>Although rare, the incidence and prevalence of IPF are increasing.</li>
                <li><strong>Prevalence:</strong> Up to 76 cases per 100,000 in Europe.</li>
                <li><strong>Prognosis:</strong> Without treatment, the median survival is 3 to 5 years after diagnosis, comparable to some cancers.</li>
            </ul>
        </div>
        <div>
            <h4 className="font-semibold text-slate-700 mb-2">Patient Profile and Risk Factors</h4>
            <ul className="space-y-2 list-disc list-inside">
                <li><strong>Age:</strong> Primarily affects adults over 60 years old.</li>
                <li><strong>Sex:</strong> Male predominance (M/F ratio ≈ 7:3).</li>
                <li><strong>Smoking:</strong> Major risk factor, current or past.</li>
                <li><strong>Genetics:</strong> A family history of pulmonary fibrosis is a significant risk factor.</li>
                <li><strong>Others:</strong> Gastroesophageal reflux disease (GERD), environmental/occupational exposures, chronic viral infections.</li>
            </ul>
        </div>
      </div>
    </div>

    {/* Pathogenesis Card */}
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
        <Microscope className="w-6 h-6 mr-3 text-purple-500" />
        Understanding Pathogenesis: Repair Gone Awry
      </h3>
      <p className="text-slate-600 mb-4">
        The modern view of pulmonary fibrosis, particularly IPF, has moved away from the concept of a primarily inflammatory disease. It is now considered an epithelial-driven disease, resulting from an abnormal tissue repair process in response to repeated micro-injuries to alveolar epithelial cells (AECs) in a predisposed individual.
      </p>
      
      <div className="mt-6 space-y-4">
          <h4 className="text-lg font-semibold text-slate-700 mb-2">Exploring pathogenesis in detail</h4>
          <Accordion title="Initiating Factors: Genetics and Environment" icon={<AlertTriangle className="w-6 h-6" />}>
              <div className="space-y-3 text-sm text-slate-700">
                  <p>IPF is initiated by repeated injuries to an alveolar epithelium made vulnerable by a combination of factors:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                      <li><strong>Genetic Predisposition:</strong> Genetic variants increase the risk. The most important include:
                          <ul className="list-['-_'] list-inside pl-6 mt-1 space-y-1">
                              <li><strong>MUC5B promoter:</strong> The most common genetic risk factor, associated with abnormal mucus production.</li>
                              <li><strong>Surfactant Proteins:</strong> Mutations in the <i>SFTPC</i> and <i>SFTPA2</i> genes can cause protein misfolding and cellular stress.</li>
                              <li><strong>Telomere Genes:</strong> Mutations in <i>TERT</i> or <i>TERC</i> lead to premature telomere shortening, resulting in accelerated cellular senescence.</li>
                          </ul>
                      </li>
                      <li><strong>Environmental and Endogenous Factors:</strong>
                          <ul className="list-['-_'] list-inside pl-6 mt-1 space-y-1">
                              <li>Smoking (major risk factor)</li>
                              <li>Occupational exposures (metal dust, wood dust)</li>
                              <li>Chronic viral infections (e.g., Epstein-Barr virus)</li>
                              <li>Gastric micro-aspirations due to gastroesophageal reflux disease (GERD)</li>
                          </ul>
                      </li>
                  </ul>
              </div>
          </Accordion>
          <Accordion title="The Controversial Role of Inflammation" icon={<Activity className="w-6 h-6" />}>
              <div className="space-y-3 text-sm text-slate-700">
                  <p>Initially considered a chronic inflammatory disease, this view has evolved:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                      <li><strong>Arguments against a central role for inflammation:</strong> IPF biopsies show little inflammation, and anti-inflammatory treatments (like corticosteroids) are ineffective or even harmful.</li>
                      <li><strong>A modulating role:</strong> Inflammation is not absent, but it is no longer seen as the main driver. Cells like alveolar macrophages can secrete pro-fibrotic cytokines and participate in perpetuating the process, but the fibrotic cascade seems capable of self-sustaining without continuous inflammatory stimulation.</li>
                  </ul>
              </div>
          </Accordion>
          <Accordion title="Cellular and Molecular Mechanisms" icon={<FlaskConical className="w-6 h-6" />}>
              <div className="space-y-3 text-sm text-slate-700">
                  <p>At the heart of IPF is an abnormal communication between epithelial cells and fibroblasts:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                      <li><strong>Abnormal Epithelial Repair:</strong> Alveolar type II (AEC2) cells, the stem cells of the alveolus, are unable to regenerate properly. They become senescent and release pro-fibrotic signals.</li>
                      <li><strong>Activation of Fibroblasts and Myofibroblasts:</strong> In response to these signals (notably TGF-β), fibroblasts are activated, proliferate, and differentiate into myofibroblasts. The latter are the "factories" for collagen.</li>
                      <li><strong>Fibroblastic Foci:</strong> These are clusters of active myofibroblasts that are the main site of extracellular matrix deposition. They represent the active "front" of the disease and are a histological hallmark of IPF.</li>
                      <li><strong>Key Mediators:</strong> The <strong>Transforming Growth Factor-beta (TGF-β)</strong> signaling pathway is the primary regulator of this process, stimulating collagen production and myofibroblast differentiation.</li>
                  </ul>
              </div>
          </Accordion>
          <Accordion title="Progression and Self-Sustaining Vicious Cycle" icon={<RotateCcw className="w-6 h-6" />}>
              <div className="space-y-3 text-sm text-slate-700">
                  <p>Once initiated, fibrosis becomes a self-sustaining process:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                      <li><strong>Matrix Stiffening:</strong> The excessive deposition of collagen makes the lung tissue increasingly stiff.</li>
                      <li><strong>Mechanical Stress:</strong> This abnormal stiffness exerts mechanical tension on the remaining healthy alveoli, causing new epithelial injuries.</li>
                      <li><strong>Signal Perpetuation:</strong> These new injuries, in turn, release pro-fibrotic mediators, activating even more fibroblasts and creating a vicious cycle. This mechanism explains the progressive and relentless nature of the disease.</li>
                       <li><strong>Biomarkers of Progression:</strong> The activity of this process can be monitored by blood biomarkers (e.g., KL-6, MMP-7, SP-D) that reflect epithelial injury and tissue remodeling.</li>
                  </ul>
              </div>
          </Accordion>
      </div>
    </div>

    {/* Classification Card */}
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
        <ListChecks className="w-6 h-6 mr-3 text-teal-500" />
        Classification of Interstitial Lung Diseases (ILDs)
      </h3>
      <p className="text-slate-600 mb-4">
        ILDs are classified into several major categories based on their cause or histological features.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-50 p-4 rounded-md border">
          <h4 className="font-medium text-slate-700 mb-2">ILDs of known cause or associated</h4>
          <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
            <li>Associated with connective tissue diseases (e.g., rheumatoid arthritis, scleroderma)</li>
            <li>Hypersensitivity pneumonitis (HP) due to exposure to organic antigens</li>
            <li>Pneumoconioses (exposure to mineral dusts)</li>
            <li>Induced by drugs or treatments (radiation)</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-md border">
          <h4 className="font-medium text-slate-700 mb-2">Idiopathic Interstitial Pneumonias (IIPs)</h4>
          <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
            <li><strong>Idiopathic Pulmonary Fibrosis (IPF):</strong> the most common and most severe.</li>
            <li>Idiopathic Nonspecific Interstitial Pneumonia (NSIP)</li>
            <li>Cryptogenic Organizing Pneumonia (COP)</li>
            <li>And other rarer forms...</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-md border">
          <h4 className="font-medium text-slate-700 mb-2">Granulomatous ILDs</h4>
           <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
            <li>Sarcoidosis</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-md border">
          <h4 className="font-medium text-slate-700 mb-2">Other rare ILDs</h4>
           <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
            <li>Lymphangioleiomyomatosis (LAM)</li>
            <li>Pulmonary Langerhans cell histiocytosis</li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* Progressive Fibrosing Phenotype Card */}
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
      <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
        <TrendingUp className="w-6 h-6 mr-3" />
        The Progressive Pulmonary Fibrosis (PPF) Phenotype
      </h3>
      <p className="text-slate-600 mb-4">
        Regardless of their initial diagnosis, a proportion of patients (13% to 40%) with ILDs other than IPF may develop a progressive behavior similar to that of IPF. This is known as the progressive pulmonary fibrosis (PPF) phenotype. This concept is crucial as it opens the door to antifibrotic treatments for these patients.
      </p>
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
        <h4 className="font-medium text-yellow-800 mb-2">Criteria for defining PPF (over 24 months, despite treatment)</h4>
        <p className="text-sm text-yellow-700">The patient must show progression of fibrosis and meet at least one of the following criteria:</p>
        <ul className="space-y-1 text-sm text-yellow-700 list-disc list-inside mt-2">
            <li><strong>Functional decline:</strong> Relative decline in FVC of 10% or more of the predicted value.</li>
            <li><strong>Functional decline and worsening symptoms/imaging:</strong> Relative decline in FVC of 5-10% <strong>AND</strong> worsening of respiratory symptoms <strong>OR</strong> worsening of fibrosis images on HRCT.</li>
            <li><strong>Worsening of symptoms and imaging:</strong> Worsening of respiratory symptoms <strong>AND</strong> significant worsening of fibrosis images on HRCT.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default DefinitionSection;