import { Stethoscope, FlaskConical, Image } from '../components/icons';
import { IPAFDomain } from '../types';

export const IPAF_CLASSIFIER_DATA: IPAFDomain[] = [
    {
        id: 'clinical',
        title: 'Clinical Domain',
        icon: Stethoscope,
        criteria: [
            { id: 'mechanic_hands', label: "Mechanic's hands" },
            { id: 'ulceration', label: 'Digital ulceration' },
            { id: 'arthritis', label: 'Inflammatory arthritis or morning stiffness ≥60 min' },
            { id: 'telangiectasia', label: 'Palmar telangiectasias' },
            { id: 'raynaud', label: "Raynaud's phenomenon" },
            { id: 'edema', label: 'Unexplained digital edema' },
            { id: 'gottron', label: 'Gottron sign (rash on finger extensors)' },
        ],
    },
    {
        id: 'serological',
        title: 'Serological Domain',
        icon: FlaskConical,
        criteria: [
            { id: 'ana_high', label: 'ANA ≥ 1:320 (diffuse, speckled, homogeneous)' },
            { id: 'ana_specific', label: 'ANA (any titer, nucleolar or centromere pattern)' },
            { id: 'rf_high', label: 'Rheumatoid Factor ≥ 2x ULN' },
            { id: 'anti_ccp', label: 'Anti-CCP' },
            { id: 'anti_dsdna', label: 'Anti-double-stranded DNA (dsDNA)' },
            { id: 'anti_ssa_ssb', label: 'Anti-Ro (SS-A) or Anti-La (SS-B)' },
            { id: 'anti_rnp', label: 'Anti-RNP' },
            { id: 'anti_smith', label: 'Anti-Smith' },
            { id: 'anti_scl70', label: 'Anti-Scl-70 (topoisomerase)' },
            { id: 'anti_synthetase', label: 'Antisynthetase (e.g., Jo-1, PL-7, PL-12)' },
            { id: 'anti_pmscl', label: 'Anti-PM-Scl' },
            { id: 'anti_mda5', label: 'Anti-MDA-5' },
        ],
    },
    {
        id: 'morphological',
        title: 'Morphological Domain',
        icon: Image,
        criteria: [
            { id: 'pattern_nsip_op_lip', label: 'HRCT or histological pattern of NSIP, OP, or LIP' },
            { id: 'histology_specific', label: 'Histology: lymphoid aggregates with germinal centers' },
            { id: 'histology_infiltrate', label: 'Histology: diffuse lymphoplasmacytic infiltrate' },
            { id: 'multicompartment_pleural', label: 'Multicompartment: unexplained pleural effusion/thickening' },
            { id: 'multicompartment_pericardial', label: 'Multicompartment: unexplained pericardial effusion/thickening' },
            { id: 'multicompartment_airways', label: 'Multicompartment: unexplained intrinsic airway disease' },
            { id: 'multicompartment_vascular', label: 'Multicompartment: unexplained pulmonary vasculopathy' },
        ],
    },
];