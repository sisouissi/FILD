import React from 'react';
import { Shield, Pill, PlusCircle, HandHeart, Wind } from '../components/icons';
import { TherapeuticAlgorithmData, TreatmentStep } from '../types';

export const THERAPEUTIC_ALGORITHM_DATA: TherapeuticAlgorithmData = [
    {
        id: 'ipf',
        label: 'Idiopathic Pulmonary Fibrosis (IPF)',
        pathway: [
            {
                title: 'First-Line Treatment',
                treatments: ['Antifibrotic agents', 'Pirfenidone or Nintedanib'],
                icon: Pill,
                color: 'red',
                note: 'Antifibrotic therapy is recommended at the time of diagnosis.'
            },
        ]
    },
    {
        id: 'ssc-ild',
        label: 'Systemic Sclerosis-Associated ILD (SSc-ILD)',
        pathway: [
            {
                title: 'First-Line Immunomodulation',
                treatments: ['MMF, CPM, TCL', '(Alternative: AZA, RTX)'],
                icon: Shield,
                color: 'blue',
            },
            {
                title: 'In Case of Progression',
                treatments: ['Consider antifibrotic agents', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    },
    {
        id: 'ra-ild',
        label: 'Rheumatoid Arthritis-Associated ILD (RA-ILD)',
        pathway: [
            {
                title: 'First-Line Immunomodulation',
                treatments: ['Glucocorticoids', 'Then: RTX, ABA, MMF'],
                icon: Shield,
                color: 'blue',
            },
            {
                title: 'In Case of Progression',
                treatments: ['Consider antifibrotic agents', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    },
    {
        id: 'sarcoidosis',
        label: 'Fibrotic Sarcoidosis',
        pathway: [
            {
                title: 'First-Line Immunomodulation',
                treatments: ['Glucocorticoids', 'Then: MTX', '(Alternative: AZA, IFX, ADA)'],
                icon: Shield,
                color: 'blue',
            },
             {
                title: 'In Case of Progression',
                treatments: ['Consider antifibrotic agents', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    },
    {
        id: 'phs',
        label: "Chronic Fibrotic Hypersensitivity Pneumonitis",
        pathway: [
            {
                title: "Step 1: Antigen Avoidance",
                treatments: ["Identification and avoidance of the causative agent"],
                icon: Wind,
                color: 'orange'
            },
            {
                title: 'Immunomodulation',
                treatments: ['Glucocorticoids', 'Then: MMF', '(Alternative: AZA)'],
                icon: Shield,
                color: 'blue',
            },
             {
                title: 'In Case of Progression',
                treatments: ['Consider antifibrotic agents', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    },
    {
        id: 'insip',
        label: 'Idiopathic Nonspecific Interstitial Pneumonia (NSIP)',
        pathway: [
            {
                title: 'Immunomodulation',
                treatments: ['Glucocorticoids', 'Then: MMF, AZA, or other immunosuppressants'],
                icon: Shield,
                color: 'purple',
            },
             {
                title: 'In Case of Progression',
                treatments: ['Consider antifibrotic agents', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    },
    {
        id: 'unclassifiable',
        label: 'Unclassifiable ILD',
        pathway: [
            {
                title: 'Immunomodulation',
                treatments: ['Glucocorticoids', 'Then: MMF, AZA, or other immunosuppressants'],
                icon: Shield,
                color: 'purple',
            },
             {
                title: 'In Case of Progression',
                treatments: ['Consider antifibrotic agents', 'Nintedanib'],
                icon: PlusCircle,
                color: 'green',
            }
        ]
    }
];

export const NON_PHARMACOLOGIC_TREATMENT: TreatmentStep = {
    title: 'Non-Pharmacologic Management (for all ILDs)',
    treatments: [
        'Supplemental oxygen therapy',
        'Psychosocial support',
        'Smoking cessation',
        'Pulmonary rehabilitation',
        'Palliative care',
        'End-of-life care'
    ],
    icon: HandHeart,
    color: 'teal'
};