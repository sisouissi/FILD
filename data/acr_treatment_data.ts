type RecommendationDetails = {
    title: string;
    recommended?: string;
    options?: string[];
    against?: string[];
    strong_against?: string;
    note?: string;
};

type SARDType = 'SSc' | 'RA' | 'MII' | 'SjD' | 'MCTD' | 'Autre';
type TreatmentContext = 'firstLine' | 'progression' | 'rp-ild';

export const SARD_LABELS: Record<string, string> = {
    SSc: 'Systemic Sclerosis (SSc)',
    RA: 'Rheumatoid Arthritis (RA)',
    MII: 'Inflammatory Myopathies (IIM)',
    SjD: "Sjögren's Disease (SjD)",
    MCTD: 'Mixed Connective Tissue Disease (MCTD)',
    Autre: 'Other SARD-ILD'
};

export const TREATMENT_DATA: Record<TreatmentContext, Record<SARDType, RecommendationDetails>> = {
    firstLine: {
        SSc: {
            title: "First-line treatment for SSc-ILD",
            options: ["Mycophenolate (MMF)", "Tocilizumab", "Rituximab", "Nintedanib"],
            strong_against: "Glucocorticoids (risk of renal crisis)",
            note: "MMF is often preferred. Nintedanib is an option, especially if the pattern is fibrotic."
        },
        RA: {
            title: "First-line treatment for RA-ILD",
            options: ["Mycophenolate (MMF)", "Azathioprine", "Rituximab"],
            against: ["Leflunomide, Methotrexate, anti-TNF", "Pirfenidone"],
            note: "Consensus was not reached to recommend Nintedanib as a first-line treatment."
        },
        MII: {
            title: "First-line treatment for IIM-ILD",
            options: ["Mycophenolate (MMF)", "Azathioprine", "Rituximab", "Calcineurin Inhibitors (CNI)", "JAK inhibitors (JAKi)"],
            against: ["Nintedanib"],
        },
        SjD: {
            title: "First-line treatment for Sjögren's-ILD",
            options: ["Mycophenolate (MMF)", "Azathioprine", "Rituximab", "Glucocorticoids"],
             against: ["Nintedanib"],
        },
        MCTD: {
            title: "First-line treatment for MCTD-ILD",
            options: ["Mycophenolate (MMF)", "Azathioprine", "Rituximab", "Tocilizumab", "Glucocorticoids"],
            against: ["Nintedanib"],
        },
        Autre: {
            title: "First-line treatment for other SARD-ILDs",
            recommended: "Glucocorticoids",
            options: ["Mycophenolate (MMF)", "Azathioprine", "Rituximab", "Cyclophosphamide"],
            against: ["Leflunomide, Methotrexate, anti-TNF", "JAK inhibitors (except IIM)", "Pirfenidone"],
        }
    },
    progression: {
        SSc: {
            title: "Progression of SSc-ILD on treatment",
            options: ["Mycophenolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib", "Tocilizumab"],
            strong_against: "Long-term glucocorticoids",
            note: "A switch or addition of treatment is recommended. Referral for transplantation should be discussed."
        },
        RA: {
            title: "Progression of RA-ILD on treatment",
            options: ["Mycophenolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib", "Tocilizumab", "Pirfenidone (add-on)"],
            against: ["Long-term glucocorticoids"],
        },
        MII: {
            title: "Progression of IIM-ILD on treatment",
            options: ["Mycophenolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib", "Calcineurin Inhibitors (CNI)", "JAK inhibitors (JAKi)", "IVIG"],
            against: ["Long-term glucocorticoids"],
        },
        SjD: {
            title: "Progression of Sjögren's-ILD on treatment",
            options: ["Mycophenolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib"],
            against: ["Long-term glucocorticoids", "Tocilizumab"],
        },
        MCTD: {
            title: "Progression of MCTD-ILD on treatment",
            options: ["Mycophenolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib", "Tocilizumab", "IVIG"],
            against: ["Long-term glucocorticoids"],
        },
        Autre: {
            title: "Progression of other SARD-ILDs on treatment",
            options: ["Mycophenolate (MMF)", "Rituximab", "Cyclophosphamide", "Nintedanib"],
            against: ["Long-term glucocorticoids", "Pirfenidone (add-on)", "Tocilizumab (except SSc, MCTD, RA)"],
        }
    },
    'rp-ild': {
        SSc: {
            title: "Rapidly Progressive ILD (RP-ILD) in SSc",
            recommended: "Combination therapy (double or triple therapy)",
            options: ["IV Methylprednisolone pulse (with caution)", "Rituximab", "Cyclophosphamide", "IVIG", "Mycophenolate", "Calcineurin Inhibitors (CNI)", "JAK inhibitors (JAKi)"],
            against: ["Methotrexate, Leflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfenidone"],
            note: "The use of corticosteroids is very controversial (risk of renal crisis). Discussion in an expert center is essential."
        },
        RA: {
             title: "Rapidly Progressive ILD (RP-ILD) in RA",
            recommended: "IV Methylprednisolone pulse",
            options: ["Rituximab", "Cyclophosphamide", "IVIG", "Mycophenolate", "Calcineurin Inhibitors (CNI)", "JAK inhibitors (JAKi)"],
            against: ["Methotrexate, Leflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfenidone"],
        },
        MII: {
             title: "Rapidly Progressive ILD (RP-ILD) in IIM",
            recommended: "IV Methylprednisolone pulse",
            options: ["Rituximab", "Cyclophosphamide", "IVIG", "Mycophenolate", "Calcineurin Inhibitors (CNI)", "JAK inhibitors (JAKi)"],
            against: ["Methotrexate, Leflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfenidone"],
             note: "Triple therapy is recommended if anti-MDA5 antibodies are suspected or confirmed."
        },
        SjD: {
             title: "Rapidly Progressive ILD (RP-ILD) in Sjögren's",
            recommended: "IV Methylprednisolone pulse",
            options: ["Rituximab", "Cyclophosphamide", "IVIG", "Mycophenolate", "Calcineurin Inhibitors (CNI)", "JAK inhibitors (JAKi)"],
            against: ["Methotrexate, Leflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfenidone"],
        },
        MCTD: {
             title: "Rapidly Progressive ILD (RP-ILD) in MCTD",
            recommended: "IV Methylprednisolone pulse",
            options: ["Rituximab", "Cyclophosphamide", "IVIG", "Mycophenolate", "Calcineurin Inhibitors (CNI)", "JAK inhibitors (JAKi)"],
            against: ["Methotrexate, Leflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfenidone"],
        },
        Autre: {
             title: "Rapidly Progressive ILD (RP-ILD) in other SARDs",
            recommended: "IV Methylprednisolone pulse",
            options: ["Rituximab", "Cyclophosphamide", "IVIG", "Mycophenolate", "Calcineurin Inhibitors (CNI)", "JAK inhibitors (JAKi)"],
            against: ["Methotrexate, Leflunomide, anti-TNF, Abatacept, Tocilizumab, Nintedanib, Pirfenidone"],
        }
    }
};