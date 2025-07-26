import { ConnectiviteType, RiskFactor, Symptom } from './types';

export const connectiviteTypes: ConnectiviteType[] = [
  { value: 'RA', label: 'Rheumatoid Arthritis (RA)', risk: 'moderate' },
  { value: 'SSc', label: 'Systemic Sclerosis (SSc)', risk: 'high' },
  { value: 'IIM', label: 'Idiopathic Inflammatory Myopathies (IIM)', risk: 'high' },
  { value: 'MCTD', label: 'Mixed Connective Tissue Disease (MCTD)', risk: 'moderate' },
  { value: 'SjD', label: 'Sjögren\'s Disease (SjD)', risk: 'moderate' },
  { value: 'autre', label: 'Other Connective Tissue Disease', risk: 'low' },
];

export const riskFactors: RiskFactor[] = [
  { value: 'anti-scl70', label: 'Anti-Scl-70 (topoisomerase I) positive' },
  { value: 'anti-synthetase', label: 'Antisynthetase antibody (e.g., anti-Jo1)' },
  { value: 'anti-mda5', label: 'Anti-MDA5 antibody positive' },
  { value: 'age', label: 'Age > 60 years' },
  { value: 'sexeM', label: 'Male sex' },
  { value: 'tabac', label: 'Smoking (current or past)' },
  { value: 'rgo', label: 'Gastroesophageal reflux (GERD)' },
  { value: 'exposition', label: 'Occupational exposure (dusts)' },
  { value: 'familiaux', label: 'Family history of pulmonary fibrosis' },
];

export const symptoms: Symptom[] = [
    { value: 'dyspnee', label: "Progressive exertional dyspnea" },
    { value: 'toux', label: 'Persistent dry cough' },
    { value: 'crepitants', label: '"Velcro" crackles on auscultation' },
    { value: 'hippocratisme', label: 'Digital clubbing' },
    { value: 'desaturation', label: "Exertional desaturation" },
    { value: 'faiblesse', label: 'Proximal muscle weakness' },
    { value: 'arthralgies', label: 'Arthralgia or arthritis' },
    { value: 'raynaud', label: 'Raynaud\'s phenomenon' },
    { value: 'rash', label: 'Skin rash (Gottron, heliotrope)' },
    { value: 'fatigue', label: 'Unusual fatigue' },
    { value: 'douleur-thoracique', label: 'Chest pain' },
];