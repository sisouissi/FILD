

import React from 'react';
import { Stethoscope } from './icons';

export const FPISection: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 flex items-center">
        <Stethoscope className="w-7 h-7 mr-3 text-blue-500" />
        Idiopathic Pulmonary Fibrosis (IPF)
      </h2>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <p className="text-slate-600">The content for this section is currently under development.</p>
    </div>
  </div>
);