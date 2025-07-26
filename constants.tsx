
import React from 'react';
import { Home, Lungs, Search, Stethoscope, ListChecks, Pill, TrendingUp, Image, Activity, FlaskConical, Microscope, ClipboardCheck, AlertTriangle, FileMedical, ClipboardList, BrainCircuit, Wind } from './components/icons';
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  { id: 'welcome', title: 'Home', icon: Home },
  { id: 'definition', title: 'Definitions, Pathogenesis, and Classification', icon: Lungs },
  { 
    id: 'diagnostic-clinique', 
    title: 'Interactive Diagnostic Algorithms', 
    icon: Search
  },
  { 
    id: 'fpi', 
    title: 'Idiopathic Pulmonary Fibrosis (IPF)', 
    icon: Stethoscope,
    subItems: [
      { id: 'fpi-pathogenie-clinique', title: 'Pathogenesis and Clinical Manifestations', icon: Lungs },
      { id: 'diagnostic-fonctionnel', title: 'Initial Evaluation', icon: Activity },
      { id: 'diagnostic-tdm-algorithme', title: 'HRCT & Biopsy Algorithm', icon: ClipboardCheck },
      { id: 'diagnostic-biopsie', title: 'Lung Biopsy', icon: Microscope },
      { id: 'fpi-traitement', title: 'Treatment', icon: Pill },
      { id: 'fpi-exacerbation-aigue', title: 'Acute Exacerbation of IPF', icon: AlertTriangle },
      { id: 'fpi-suivi-pronostic', title: 'Prognosis and Follow-up', icon: TrendingUp },
    ]
  },
  { 
    id: 'pid-connectivites', 
    title: 'Connective Tissue Disease-Associated ILD', 
    icon: FileMedical 
  },
  {
    id: 'fpp',
    title: 'Progressive Pulmonary Fibrosis (PPF)',
    icon: TrendingUp
  },
    {
    id: 'ipaf',
    title: 'Interstitial Pneumonia with Autoimmune Features (IPAF)',
    icon: BrainCircuit
  },
  {
    id: 'pins-fibrosantes',
    title: 'Nonspecific Interstitial Pneumonia (NSIP)',
    icon: ClipboardList
  },
  {
    id: 'phs',
    title: "Hypersensitivity Pneumonitis (HP)",
    icon: Wind
  },
  { 
    id: 'autres-pid', 
    title: 'Other Fibrosing ILDs', 
    icon: ListChecks
  },
  { id: 'therapeutique', title: 'Therapeutic Management', icon: Pill },
  { id: 'suivi-pronostic', title: 'Follow-up, Prognosis, and Complications', icon: TrendingUp },
];