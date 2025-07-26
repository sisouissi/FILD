import React, { useState } from 'react';
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  Stethoscope,
  Activity,
  History,
  ClipboardList,
  Image,
  Users,
  Microscope,
  Heart,
  FileText,
  AlertTriangle,
  Search
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
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <Stethoscope className="w-5 h-5 mr-2" />
                Initial assessment - History and physical exam
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-slate-800">Clinical evaluation:</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Acute onset of symptoms</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Subacute onset of symptoms</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Chronic onset of symptoms</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Occupational/environmental exposure</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Smoking history</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>History of connective tissue disease</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Family history of IPF</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-slate-800">Additional tests:</h4>
                  <div className="space-y-2 text-sm text-slate-700">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Chest HRCT (IPF protocol)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Comparison with previous imaging</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Spirometry, volumes, DLCO</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>Exercise test with oximetry</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>CBC, metabolic panel</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span>ANA, rheumatoid factor</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={() => navigateToStep('environmental')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                Continue assessment
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        );

      case 'environmental':
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Environmental or iatrogenic etiologies
              </h3>
              <p className="text-slate-700 mb-4">Are there probable environmental or iatrogenic etiologies?</p>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium mb-2 text-slate-800">Etiologies to consider:</h4>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• Hypersensitivity pneumonitis</li>
                  <li>• Pneumoconioses (silica, asbestos)</li>
                  <li>• Pneumotoxic drugs</li>
                  <li>• Chest radiotherapy</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => navigateToStep('removeCause')}
                className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
              >
                <div className="font-medium text-green-700">Yes</div>
                <div className="text-sm text-slate-600">Etiology identified</div>
              </button>
              <button
                onClick={() => navigateToStep('extrapulmonary')}
                className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
              >
                <div className="font-medium text-red-700">No</div>
                <div className="text-sm text-slate-600">No obvious etiology</div>
              </button>
            </div>
          </div>
        );

      case 'removeCause':
        return (
          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Etiologic management
              </h3>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Immediate actions:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Remove the identified cause</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">Consider systemic glucocorticoids</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h4 className="font-medium text-slate-800 mb-4">Is there clinical recovery?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => navigateToStep('noFurtherSteps')}
                  className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
                >
                  <div className="font-medium text-green-700">Yes</div>
                  <div className="text-sm text-slate-600">Clinical improvement</div>
                </button>
                <button
                  onClick={() => navigateToStep('extrapulmonary')}
                  className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
                >
                  <div className="font-medium text-red-700">No</div>
                  <div className="text-sm text-slate-600">No improvement</div>
                </button>
              </div>
            </div>
          </div>
        );

      case 'noFurtherSteps':
        return (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Diagnosis established
            </h3>
            <p className="text-slate-700 mb-4">No further diagnostic steps necessary.</p>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-medium text-slate-800 mb-2">Recommendations:</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Continue avoidance of the cause</li>
                <li>• Regular clinical follow-up</li>
                <li>• Treatment adjustment</li>
              </ul>
            </div>
          </div>
        );

      case 'extrapulmonary':
        return (
          <div className="space-y-6">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Suspected extra-pulmonary disease
              </h3>
              <p className="text-slate-700 mb-4">Does the patient show signs of extra-pulmonary disease?</p>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">To consider:</h4>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• Connective tissue disease</li>
                  <li>• Vasculitis</li>
                  <li>• Extra-pulmonary sarcoidosis</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => navigateToStep('serologyBiopsy')}
                className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
              >
                <div className="font-medium text-green-700">Yes</div>
                <div className="text-sm text-slate-600">Signs present</div>
              </button>
              <button
                onClick={() => navigateToStep('multidisciplinary')}
                className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
              >
                <div className="font-medium text-red-700">No</div>
                <div className="text-sm text-slate-600">No obvious signs</div>
              </button>
            </div>
          </div>
        );

      case 'serologyBiopsy':
        return (
          <div className="space-y-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center">
                <Microscope className="w-5 h-5 mr-2" />
                Further investigations
              </h3>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Recommended tests:</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Serologies for connective tissue diseases</li>
                  <li>• Biopsy of the affected extra-pulmonary site</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h4 className="font-medium text-slate-800 mb-4">Systemic disease confirmed?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => navigateToStep('systemicManagement')}
                  className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
                >
                  <div className="font-medium text-green-700">Yes</div>
                  <div className="text-sm text-slate-600">Disease confirmed</div>
                </button>
                <button
                  onClick={() => navigateToStep('multidisciplinary')}
                  className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
                >
                  <div className="font-medium text-red-700">No</div>
                  <div className="text-sm text-slate-600">No diagnosis confirmed</div>
                </button>
              </div>
            </div>
          </div>
        );

      case 'systemicManagement':
        return (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Management of the systemic disease
            </h3>
            <p className="text-slate-700 mb-4">Appropriate evaluation and management for the underlying disease.</p>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-medium text-slate-800 mb-2">Next steps:</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Collaboration with specialist</li>
                <li>• Specific treatment</li>
                <li>• Pulmonary monitoring</li>
              </ul>
            </div>
          </div>
        );

      case 'multidisciplinary':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Multidisciplinary discussion
              </h3>
              <p className="text-slate-700 mb-4">Evaluation of the radiological pattern with the team.</p>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Patterns to evaluate:</h4>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• IPF (definite or probable UIP)</li>
                  <li>• Chronic hypersensitivity pneumonitis</li>
                  <li>• Other IPF (NSIP, DIP, COP)</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h4 className="font-medium text-slate-800 mb-4">Confident clinical-radiological diagnosis?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => navigateToStep('empiricTherapy')}
                  className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
                >
                  <div className="font-medium text-green-700">Yes</div>
                  <div className="text-sm text-slate-600">Confident diagnosis</div>
                </button>
                <button
                  onClick={() => navigateToStep('clinicalRadiologic')}
                  className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
                >
                  <div className="font-medium text-red-700">No</div>
                  <div className="text-sm text-slate-600">Further investigation needed</div>
                </button>
              </div>
            </div>
          </div>
        );

      case 'empiricTherapy':
        return (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Empiric therapy
            </h3>
            <p className="text-slate-700 mb-4">Proceed with treatment based on the empiric diagnosis.</p>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-medium text-slate-800 mb-2">Recommendations:</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Initiate appropriate treatment</li>
                <li>• Close monitoring</li>
                <li>• Regular re-evaluation</li>
              </ul>
            </div>
          </div>
        );

      case 'clinicalRadiologic':
        return (
          <div className="space-y-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Specific clinical-radiological signs
              </h3>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Suggested pathologies:</h4>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• Pulmonary sarcoidosis</li>
                  <li>• Berylliosis</li>
                  <li>• Acute hypersensitivity pneumonitis</li>
                  <li>• Lymphangitic carcinomatosis</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => navigateToStep('bronchoscopy')}
                className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
              >
                <div className="font-medium text-green-700">Yes</div>
                <div className="text-sm text-slate-600">Suggestive signs</div>
              </button>
              <button
                onClick={() => navigateToStep('surgicalBiopsy')}
                className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
              >
                <div className="font-medium text-red-700">No</div>
                <div className="text-sm text-slate-600">Probable chronic HP/IPF</div>
              </button>
            </div>
          </div>
        );

      case 'bronchoscopy':
        return (
          <div className="space-y-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Bronchoscopy with BAL and TBB
              </h3>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Tests:</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• Bronchoalveolar lavage (BAL)</li>
                  <li>• Transbronchial biopsies (TBB)</li>
                  <li>• EBUS if indicated</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h4 className="font-medium text-slate-800 mb-4">Diagnosis established?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => navigateToStep('appropriateManagement')}
                  className="p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 transition-colors text-left"
                >
                  <div className="font-medium text-green-700">Yes</div>
                  <div className="text-sm text-slate-600">Diagnosis established</div>
                </button>
                <button
                  onClick={() => navigateToStep('surgicalBiopsy')}
                  className="p-4 border-2 border-red-500 rounded-lg hover:bg-red-50 transition-colors text-left"
                >
                  <div className="font-medium text-red-700">No</div>
                  <div className="text-sm text-slate-600">No diagnosis</div>
                </button>
              </div>
            </div>
          </div>
        );

      case 'appropriateManagement':
        return (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Appropriate management
            </h3>
            <p className="text-slate-700">Evaluation and management according to the identified disease.</p>
          </div>
        );

      case 'surgicalBiopsy':
        return (
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Surgical biopsy
            </h3>
            <p className="text-slate-700 mb-4">Surgical lung biopsy or cryo-TBB if appropriate candidate.</p>
            <div className="bg-white p-4 rounded-lg border">
              <p className="text-sm text-slate-600">
                Consensus diagnosis based on multidisciplinary discussion including radiology and lung pathology.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const titles: Record<string, string> = {
      assessment: 'Initial assessment',
      environmental: 'Environmental etiologies',
      removeCause: 'Cause removal',
      noFurtherSteps: 'Diagnosis established',
      extrapulmonary: 'Extra-pulmonary disease',
      serologyBiopsy: 'Further investigations',
      systemicManagement: 'Systemic management',
      multidisciplinary: 'Multidisciplinary discussion',
      empiricTherapy: 'Empiric therapy',
      clinicalRadiologic: 'Specific clinical-radiological signs',
      bronchoscopy: 'Bronchoscopy with BAL and TBB',
      appropriateManagement: 'Appropriate management',
      surgicalBiopsy: 'Surgical biopsy',
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">
            Detailed diagnostic process
        </h2>
        <button
            onClick={resetApp}
            className="px-4 py-2 text-sm font-medium bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
        >
            Restart
        </button>
      </div>

      <div className="bg-blue-50 border-y border-blue-200 p-3">
        <div className="text-sm text-blue-700">
          <span className="font-semibold">Current step:</span> {titles[currentStep] || ''}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
        <div className="animate-fade-in-fast min-h-[300px]">
          {renderContent()}
        </div>
        <div className="flex justify-between items-center pt-6 mt-8 border-t border-slate-200">
          <button
              onClick={goBack}
              disabled={history.length === 0}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm ${
                  history.length === 0
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
          >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
          </button>
          {['noFurtherSteps', 'systemicManagement', 'empiricTherapy', 'appropriateManagement', 'surgicalBiopsy'].includes(currentStep) && (
              <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Diagnostic pathway complete</span>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};