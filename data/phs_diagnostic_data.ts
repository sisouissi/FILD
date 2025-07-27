import { PHSScoreVariable, PHSScoreResult } from '../types';

export const PHS_SCORE_VARIABLES: PHSScoreVariable[] = [
    {
        id: 'exposure',
        label: '1. Antigen Exposure',
        options: [
            { label: 'Identified', value: 'identified', points: 1 },
            { label: 'Indeterminate', value: 'intermediate', points: 0.5 },
            { label: 'Unidentified', value: 'unidentified', points: 0 },
        ],
    },
    {
        id: 'hrct',
        label: '2. High-Resolution CT (HRCT)',
        options: [
            { label: 'Typical for HP', value: 'typical', points: 1 },
            { label: 'Compatible with HP', value: 'compatible', points: 0.5 },
            { label: 'Indeterminate for HP', value: 'indeterminate', points: 0 },
        ],
    },
    {
        id: 'bal',
        label: '3. Bronchoalveolar Lavage (BAL)',
        options: [
            { label: 'Lymphocytosis present', value: 'yes', points: 1 },
            { label: 'Lymphocytosis absent', value: 'no', points: 0 },
        ],
    },
];

export const getPHSScoreResult = (score: number): PHSScoreResult => {
    if (score >= 2) {
        return {
            evaluation: 'High confidence for HP',
            recommendation: 'The diagnosis of HP is likely. Confirm in multidisciplinary discussion (MDD).',
            color: 'green',
        };
    }
    if (score >= 1) {
        return {
            evaluation: 'Low confidence for HP',
            recommendation: 'The diagnosis of HP is possible but uncertain. A lung biopsy should be discussed in MDD to refine the diagnosis.',
            color: 'yellow',
        };
    }
    return {
        evaluation: 'HP unlikely',
        recommendation: "The diagnosis of HP is unlikely. Consider other diagnoses. A biopsy may be discussed if uncertainty persists.",
        color: 'red',
    };
};