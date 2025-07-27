import React, { useState } from 'react';
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  Activity,
  History,
  ClipboardList,
  Image,
  Users,
  Microscope,
  FileText,
} from './icons';

export const DiagnosticProcessAlgorithm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState('assessment');
  const [patientData, setPatientData] = useState({});
  const [history, setHistory] = useState<string[]>([]);

  const navigateToStep = (nextStep: string) => {
    if (nextStep && nextStep !== currentStep) {
      setHistory(prev => [...prev, currentStep]);
      setCurrentStep(nextStep);
    }
  };

  const goBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousStep = newHistory.pop() as string;
      setHistory(newHistory);
      setCurrentStep(previousStep);
    }
  };

  const resetApp = () => {
    setCurrentStep('assessment');
    setPatientData({});
    setHistory([]);
  };

  const renderContent = () => {
    switch (currentStep) {
      case 'assessment':
        return (
          <div className="space-y-6 animate-fade-in-fast w-full">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <History className="w-5 h-5 mr-2" />
                Step 1: History and Physical Exam
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-slate-800">Clinical Evaluation:</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <label className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><span>Acute onset of symptoms</span></label>
                    <label className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><span>Subacute onset of symptoms</span></label>
                    <label className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><span>Chronic onset of symptoms</span></label>
                    <label className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><span>"Velcro" crackles on auscultation</span></label>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-slate-800">History:</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <label className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><span>Occupational/environmental exposure</span></label>
                    <label className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><span>Smoking history</span></label>
                    <label className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><span>History of connective tissue disease</span></label>
                    <label className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><span>Family history of IPF</span></label>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
                <button onClick={() => navigateToStep('tests')} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center mx-auto">
                    Proceed to Tests <ChevronRight className="w-4 h-4 ml-2" />
                </button>
            </div>
          </div>
        );
      case 'tests':
        return (
          <div className="space-y-6 animate-fade-in-fast w-full">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <ClipboardList className="w-5 h-5 mr-2" />
                Step 2: Additional Tests
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <h4 className="font-medium text-slate-800 flex items-center"><Image className="w-4 h-4 mr-2"/>HRCT Findings:</h4>
                    <div className="space-y-2 text-sm text-slate-700">
                        <label className="flex items-center space-x-2"><input type="radio" name="hrct" className="rounded-full" /><span>Definite UIP pattern</span></label>
                        <label className="flex items-center space-x-2"><input type="radio" name="hrct" className="rounded-full" /><span>Probable UIP pattern</span></label>
                        <label className="flex items-center space-x-2"><input type="radio" name="hrct" className="rounded-full" /><span>Indeterminate for UIP</span></label>
                        <label className="flex items-center space-x-2"><input type="radio" name="hrct" className="rounded-full" /><span>Alternative Diagnosis pattern</span></label>
                    </div>
                </div>
                 <div className="space-y-3">
                    <h4 className="font-medium text-slate-800 flex items-center"><Activity className="w-4 h-4 mr-2"/>PFTs:</h4>
                    <div className="space-y-2 text-sm text-slate-700">
                        <label className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><span>Restrictive pattern (low FVC/TLC)</span></label>
                        <label className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><span>Reduced DLCO</span></label>
                        <label className="flex items-center space-x-2"><input type="checkbox" className="rounded" /><span>Exertional desaturation</span></label>
                    </div>
                </div>
              </div>
            </div>
             <div className="text-center">
                <button onClick={() => navigateToStep('mdd')} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center mx-auto">
                    Proceed to MDD <ChevronRight className="w-4 h-4 ml-2" />
                </button>
            </div>
          </div>
        );
    case 'mdd':
        return (
             <div className="space-y-6 text-center animate-fade-in-fast">
                 <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center justify-center">
                        <Users className="w-5 h-5 mr-2" />
                        Step 3: Multidisciplinary Discussion (MDD)
                    </h3>
                    <p className="text-slate-700 max-w-prose mx-auto">A multidisciplinary team (pulmonologist, radiologist, pathologist) reviews all data. Does the MDD reach a confident diagnosis?</p>
                </div>
                 <div className="flex justify-center gap-4">
                    <button onClick={() => navigateToStep('diagnosis')} className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">Yes, diagnosis is confident</button>
                    <button onClick={() => navigateToStep('biopsy')} className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600">No, diagnosis is uncertain</button>
                </div>
            </div>
        );
    case 'biopsy':
        return (
             <div className="space-y-6 text-center animate-fade-in-fast">
                 <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center justify-center">
                        <Microscope className="w-5 h-5 mr-2" />
                        Step 4: Consider Lung Biopsy
                    </h3>
                    <p className="text-slate-700 max-w-prose mx-auto">If the diagnosis is uncertain after MDD, a lung biopsy (surgical or cryobiopsy) may be considered if the patient is a suitable candidate.</p>
                </div>
                <button onClick={() => navigateToStep('diagnosis')} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center mx-auto">
                    Proceed to Final Diagnosis <ChevronRight className="w-4 h-4 ml-2" />
                </button>
            </div>
        );
     case 'diagnosis':
         return (
             <div className="space-y-6 text-center animate-fade-in-fast">
                 <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-teal-800 mb-4 flex items-center justify-center">
                        <FileText className="w-5 h-5 mr-2" />
                        Step 5: Final Diagnosis
                    </h3>
                    <p className="text-slate-700 max-w-prose mx-auto">Based on all available data (clinical, radiological, +/- histological), a final diagnosis is established (e.g., IPF, fibrotic HP, CTD-ILD, unclassifiable ILD).</p>
                </div>
                 <div className="flex items-center justify-center text-green-600 font-semibold p-4 bg-green-100 rounded-lg">
                    <CheckCircle className="w-6 h-6 mr-2" />
                    Diagnostic process complete.
                </div>
            </div>
         );
      default:
        return <div>Unknown step</div>;
    }
  };

  const StepIndicator = () => {
    const steps = ['assessment', 'tests', 'mdd', 'biopsy', 'diagnosis'];
    const currentIdx = steps.indexOf(currentStep);
    return (
        <nav className="flex items-center justify-center mb-8" aria-label="Progress">
            <ol className="flex items-center space-x-2">
                {steps.map((stepId, index) => (
                    <li key={stepId} className="flex items-center">
                        <div className={`flex items-center ${index <= currentIdx ? 'text-blue-600' : 'text-slate-500'}`}>
                            <span className={`h-8 w-8 rounded-full flex items-center justify-center font-bold ${index <= currentIdx ? 'bg-blue-600 text-white' : 'bg-slate-200'}`}>
                                {index < currentIdx ? <CheckCircle className="w-5 h-5"/> : index + 1}
                            </span>
                            <span className="ml-2 text-sm font-medium hidden sm:block">{stepId.charAt(0).toUpperCase() + stepId.slice(1)}</span>
                        </div>
                        {index < steps.length - 1 && <ChevronRight className="w-5 h-5 text-slate-300 mx-2" />}
                    </li>
                ))}
            </ol>
        </nav>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="flex justify-end">
            <button onClick={resetApp} className="mb-4 px-4 py-2 text-sm font-medium bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
                Restart
            </button>
        </div>
        
        <StepIndicator />
        
        <div className="min-h-[300px] flex items-center justify-center">
            {renderContent()}
        </div>

        <div className="flex justify-between items-center pt-6 mt-8 border-t border-slate-200">
            <button
                onClick={goBack}
                disabled={history.length === 0}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors shadow-sm ${
                history.length === 0
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
            </button>
        </div>
    </div>
  );
};
