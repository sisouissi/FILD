
import React from 'react';
import {
  Activity,
  Image,
  Search,
} from './icons';
import { Accordion } from './Accordion';
import { DiagnosticAlgorithm } from './DiagnosticAlgorithm';
import { DiagnosticProcessAlgorithm } from './DiagnosticProcessAlgorithm';

export const DiagnosticSection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Search className="w-7 h-7 mr-3 text-blue-500" />
        Diagnosis of Fibrosing ILDs
      </h2>
      <p className="text-slate-600 mt-2">
        This section provides interactive tools to guide the diagnostic process, from initial evaluation to the integration of complex results.
      </p>
    </div>

    <div className="space-y-4">
       <Accordion 
          title="Launch the diagnostic orientation algorithm"
          icon={<Activity className="w-6 h-6 text-white" />}
        >
          <DiagnosticAlgorithm />
        </Accordion>

        <Accordion 
          title="Launch the algorithm: Detailed diagnostic process"
          icon={<Image className="w-6 h-6 text-white" />}
        >
          <DiagnosticProcessAlgorithm />
        </Accordion>
    </div>
  </div>
);

export default DiagnosticSection;