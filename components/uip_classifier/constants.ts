import { UIPClassifierSection } from '../../types';

export const SECTIONS: UIPClassifierSection[] = [
  {
    id: 1,
    title: "Presence of Honeycombing",
    questions: [
      {
        id: 1,
        name: 'honeycombing',
        text: 'Is honeycombing present?',
        options: [
          { label: 'Yes', value: 'yes', helper: 'Presence of clustered, subpleural cystic airspaces, typically of similar size (3-10mm).' },
          { label: 'No', value: 'no' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Characteristics of Reticulation and Bronchiectasis",
    questions: [
        {
            id: 2,
            name: 'reticulation',
            text: 'What is the predominant sign in the absence of honeycombing?',
            options: [
              { label: 'Reticulation', value: 'reticulation', helper: 'Fine interlacing linear opacities.' },
              { label: 'Other signs', value: 'other', helper: 'Ground-glass opacity, consolidation, nodules...' },
            ],
        },
        {
            id: 3,
            name: 'traction_bronchiectasis',
            text: 'Is traction bronchiectasis or bronchiolectasis present?',
            options: [
              { label: 'Yes', value: 'yes', helper: 'Irregular bronchial or bronchiolar dilation due to retractile fibrosis.' },
              { label: 'No', value: 'no' },
            ],
        },
    ]
  },
  {
    id: 3,
    title: "Distribution of Lesions",
    questions: [
      {
        id: 4,
        name: 'distribution',
        text: 'What is the distribution of the fibrotic abnormalities?',
        options: [
          { label: 'Typical (subpleural and basal predominant)', value: 'typical' },
          { label: 'Atypical (peribronchovascular, upper lobe, diffuse)', value: 'atypical' },
        ],
      },
    ],
  },
    {
    id: 4,
    title: "Signs Suggesting an Alternative Diagnosis",
    questions: [
      {
        id: 5,
        name: 'alternative_signs',
        text: 'Are there signs strongly suggesting an alternative diagnosis?',
        options: [
          { label: 'Yes', value: 'yes', helper: 'Predominant ground-glass opacity, multiple cysts, nodules, multi-lobar air trapping...' },
          { label: 'No', value: 'no' },
        ],
      },
    ],
  },
];
export const TOTAL_QUESTIONS = SECTIONS.flatMap(s => s.questions).length;