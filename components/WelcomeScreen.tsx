

import React from 'react';
import { AlertTriangle } from './icons';

export const WelcomeScreen: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
        
        <div className="text-left bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold text-slate-900 leading-tight">Fibrosing Interstitial Lung Diseases at a Glance</h1>
          <h2 className="text-xl font-semibold text-slate-600 mt-2">Essential knowledge for clinical practice</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 md:p-8 text-slate-700 space-y-4 text-base">
          <h3 className="text-xl font-semibold text-slate-800 border-b pb-2">Welcome to this educational application</h3>
          <p>
            This application has been designed to assist healthcare professionals in the diagnostic and therapeutic approach to pulmonary fibrosis in its various aspects and clinical variants.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 pt-4 border-b pb-2">Educational Objective</h3>
          <p>
            This application has been developed for strictly educational purposes to facilitate the understanding and application of modern approaches to pulmonary fibrosis, covering the entire spectrum of fibrosing interstitial lung diseases.
          </p>

          <h3 className="text-xl font-semibold text-slate-800 pt-4 border-b pb-2">Scientific Content</h3>
          <p>
            All content presented has been developed based on the latest international and national recommendations for the management of pulmonary fibrosis, relying on reference guidelines (ATS/ERS/JRS/ALAT, HAS, scientific societies) and the most recent evidence-based data.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-6 rounded-r-sm">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-base font-medium text-red-800">Important Disclaimer</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    <strong>This educational tool does not replace the clinician's judgment.</strong>
                  </p>
                  <p className="mt-1">
                    The use of this site and its content must always be accompanied by appropriate clinical judgment. Each patient requires an individual and personalized evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-slate-500 italic py-4">
            <p>Explore the different sections using the menu to begin your learning.</p>
        </div>
      </div>
  );
};

export default WelcomeScreen;