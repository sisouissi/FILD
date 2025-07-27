import React, { useState } from 'react';
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  FileText,
  Stethoscope,
  Search,
  Activity,
} from './icons';

interface Step {
  title: string;
  icon: JSX.Element;
  content?: JSX.Element;
  question?: string;
  subQuestion?: JSX.Element;
  options?: {
    value: string;
    label: string;
    next: string;
    note?: string;
  }[];
  next?: string;
  isEnd?: boolean;
}

export const DiagnosticAlgorithm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState('initial');
  const [responses, setResponses] = useState<{ [key: string]: string }>({});
  const [history, setHistory] = useState(['initial']);

  const steps: Record<string, Step> = {
    initial: {
      title: "Initial patient assessment",
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Clinical examination and history</h3>
            <div className="space-y-4 text-slate-700">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-medium text-slate-800 mb-2">History</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Symptom onset (acute/subacute/chronic)</li>
                    <li>• Occupational/environmental exposure</li>
                    <li>• Smoking history</li>
                    <li>• History of connective tissue disease</li>
                    <li>• Family history of IPF</li>
                    <li>• Prior medications</li>
                    <li>• Radiation or malignancy</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-medium text-slate-800 mb-2">Clinical signs</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Signs of systemic inflammation</li>
                    <li>• Other extra-pulmonary manifestations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Additional tests</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Imaging</h4>
                <ul className="text-sm space-y-1">
                  <li>• Chest HRCT (IPF protocol)</li>
                  <li>• Comparison with previous imaging</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">PFTs</h4>
                <ul className="text-sm space-y-1">
                  <li>• Spirometry, volumes, DLCO</li>
                  <li>• Exercise test with oximetry</li>
                  <li>• Comparison with previous PFTs</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium text-slate-800 mb-2">Labs</h4>
                <ul className="text-sm space-y-1">
                  <li>• CBC, metabolic panel</li>
                  <li>• Liver tests, urea, creatinine</li>
                  <li>• ANA, rheumatoid factor</li>
                  <li>• Anti-cyclic citrullinated peptides</li>
                  <li>• Other appropriate serologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      next: 'environmental'
    },
    environmental: {
      title: "Environmental or iatrogenic etiologies",
      icon: <Search className="w-6 h-6 text-blue-600" />,
      question: "Are there probable environmental or iatrogenic etiologies?",
      options: [
        { value: 'yes', label: 'Yes', next: 'remove_cause' },
        { value: 'no', label: 'No', next: 'extrapulmonary' }
      ]
    },
    remove_cause: {
      title: "Etiologic management",
      icon: <AlertTriangle className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Recommended actions</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-orange-600 mt-0.5 flex-shrink-0" />
                Remove the identified cause
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-orange-600 mt-0.5 flex-shrink-0" />
                Systemic glucocorticoid treatment if appropriate based on severity and etiology
              </li>
            </ul>
          </div>
        </div>
      ),
      question: "Is there clinical recovery?",
      options: [
        { value: 'yes', label: 'Yes', next: 'no_further_steps' },
        { value: 'no', label: 'No', next: 'extrapulmonary' }
      ]
    },
    no_further_steps: {
      title: "Diagnosis established",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Conclusion</h3>
          <p className="text-slate-700">
            No further diagnostic steps are necessary. 
            Continue with appropriate follow-up and treatment.
          </p>
        </div>
      ),
      isEnd: true
    },
    extrapulmonary: {
      title: "Suspected extra-pulmonary disease",
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      question: "Does the patient show signs of suspected extra-pulmonary disease (e.g., connective tissue disease, vasculitis, extra-pulmonary sarcoidosis)?",
      options: [
        { value: 'yes', label: 'Yes', next: 'serology_biopsy' },
        { value: 'no', label: 'No', next: 'multidisciplinary' }
      ]
    },
    serology_biopsy: {
      title: "Further investigations",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Recommended tests</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                Serologies for connective tissue disease and myositis (if not already done)
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                Diagnostic biopsy of the affected extra-pulmonary site (skin, muscle, sinus, kidney, lymph node)
              </li>
            </ul>
          </div>
        </div>
      ),
      question: "Is the diagnosis of a specific systemic disease confirmed?",
      options: [
        { value: 'yes', label: 'Yes', next: 'systemic_disease' },
        { value: 'no', label: 'No', next: 'multidisciplinary' }
      ]
    },
    systemic_disease: {
      title: "Systemic disease confirmed",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Management</h3>
          <p className="text-slate-700">
            Appropriate further evaluation and management for the underlying disease.
          </p>
        </div>
      ),
      isEnd: true
    },
    multidisciplinary: {
      title: "Multidisciplinary discussion",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Multidisciplinary approach</h3>
            <p className="text-slate-700 mb-4">
              Multidisciplinary discussion with radiology to assess the radiological pattern and consider further diagnostic steps.
            </p>
          </div>
        </div>
      ),
      question: "Is there a relatively confident clinical-radiological diagnosis?",
      subQuestion: (
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <h4 className="font-medium text-slate-800 mb-2">Patterns considered:</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>• IPF (including definite or probable UIP on imaging)</li>
            <li>• Chronic HP</li>
            <li>• Other IPF (e.g., NSIP, DIP, COP)</li>
          </ul>
        </div>
      ),
      options: [
        { value: 'yes', label: 'Yes', next: 'empiric_therapy' },
        { value: 'no', label: 'No', next: 'clinical_radiologic' }
      ]
    },
    empiric_therapy: {
      title: "Empiric therapy",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Recommendation</h3>
          <p className="text-slate-700">
            Proceed with treatment based on the empiric diagnosis established during the multidisciplinary discussion.
          </p>
        </div>
      ),
      isEnd: true
    },
    clinical_radiologic: {
      title: "Evaluation of clinical-radiological signs",
      icon: <Search className="w-6 h-6 text-blue-600" />,
      question: "Do the clinical and radiological signs suggest pulmonary sarcoidosis, berylliosis, acute hypersensitivity pneumonitis, lymphangitic carcinomatosis, PLCH, or eosinophilic pneumonia?",
      options: [
        { value: 'yes', label: 'Yes', next: 'bronchoscopy' },
        { value: 'no', label: 'No', next: 'surgical_biopsy', note: 'Differential typically includes chronic HP and IPF' }
      ]
    },
    bronchoscopy: {
      title: "Bronchoscopy with BAL",
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">Recommended procedure</h3>
            <p className="text-slate-700">
              Bronchoscopy with BAL and TBB +/- EBUS
            </p>
          </div>
        </div>
      ),
      question: "Is a diagnosis established based on the results?",
      options: [
        { value: 'yes', label: 'Yes', next: 'appropriate_management' },
        { value: 'no', label: 'No', next: 'surgical_biopsy' }
      ]
    },
    appropriate_management: {
      title: "Appropriate management",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Conclusion</h3>
          <p className="text-slate-700">
            Appropriate further evaluation and management for the identified underlying disease.
          </p>
        </div>
      ),
      isEnd: true
    },
    surgical_biopsy: {
      title: "Surgical biopsy",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Surgical indication</h3>
            <p className="text-slate-700">
              Surgical lung biopsy or cryo-TBB if the patient is a candidate based on disease severity and other comorbidities.
            </p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> Consensus diagnosis based on multidisciplinary discussion including chest radiology and lung pathology.
            </p>
          </div>
        </div>
      ),
      isEnd: true
    }
  };

  const handleResponse = (value: string, next: string) => {
    setResponses({ ...responses, [currentStep]: value });
    if (next) {
      setHistory([...history, next]);
      setCurrentStep(next);
    }
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      setHistory(newHistory);
      setCurrentStep(newHistory[newHistory.length - 1]);
    }
  };

  const resetApp = () => {
    setCurrentStep('initial');
    setResponses({});
    setHistory(['initial']);
  };

  const currentStepData = steps[currentStep];

  const getButtonColor = (value: string) => {
    if (value === 'yes') {
      return 'bg-green-500 hover:bg-green-600 focus:ring-green-500';
    }
    if (value === 'no') {
      return 'bg-red-500 hover:bg-red-600 focus:ring-red-500';
    }
    return 'bg-sky-500 hover:bg-sky-600 focus:ring-sky-500';
  };

  return (
    <div>
        <div className="flex justify-end">
            <button
            onClick={resetApp}
            className="mb-4 flex-shrink-0 px-4 py-2 text-sm font-medium bg-white text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-sm hover:shadow-md"
            >
            Restart algorithm
            </button>
        </div>

      <div className="bg-blue-50 border-y border-blue-200">
        <div className="px-6 py-3">
          <div className="flex items-center space-x-2 text-sm text-blue-700">
            <span>Current step:</span>
            <div className="flex items-center space-x-2">
              <span className="p-1 bg-blue-100 rounded-md">{currentStepData.icon}</span>
              <span className="font-medium">{currentStepData.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200">
          <div className="p-8">
            {currentStepData.content && (
              <div className="mb-8">
                {currentStepData.content}
              </div>
            )}

            {currentStepData.question && (
              <div className="mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">
                    {currentStepData.question}
                  </h3>
                  {currentStepData.subQuestion && currentStepData.subQuestion}
                </div>
              </div>
            )}

            {currentStepData.options && (
              <div className="space-y-4 mb-8">
                {currentStepData.options.map((option, index) => (
                  <div key={index}>
                    <button
                      onClick={() => handleResponse(option.value, option.next)}
                      className={`w-full text-left p-4 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-0.5 ${getButtonColor(option.value)}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">
                          {option.label}
                        </span>
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </button>
                    {option.note && (
                      <p className="text-sm text-slate-600 mt-2 ml-4 italic">
                        {option.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center pt-6 border-t border-slate-200">
              <button
                onClick={goBack}
                disabled={history.length <= 1}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-sm ${
                  history.length <= 1
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300 hover:shadow-md'
                }`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>

              {currentStepData.isEnd && (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Diagnostic pathway complete</span>
                </div>
              )}

              {currentStepData.next && !currentStepData.question && (
                <button
                  onClick={() => handleResponse('continue', currentStepData.next!)}
                  className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};