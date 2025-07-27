export const connectivitesData = {
    immunologyWorkup: {
        title: "Which immunological workup should be ordered?",
        steps: [
            {
                id: 1,
                title: "STEP 1: First-line workup (systematic)",
                borderColor: "border-blue-500", bgColor: "bg-blue-50", textColor: "text-blue-800",
                sections: [
                    { title: "Screening Autoantibodies:", items: ["ANA (immunofluorescence on HEp-2): pattern and titer", "RF and ACPA (anti-CCP2): suspicion of rheumatoid arthritis", "Anti-Scl70 and anti-centromere: systemic sclerosis", "Anti-Ro52/Ro60, anti-La: Sjögren's syndrome, lupus"] },
                    { title: "Inflammatory Markers:", items: ["ESR, CRP, fibrinogen", "Serum protein electrophoresis", "Complement C3, C4, CH50"] }
                ]
            },
            {
                id: 2,
                title: "STEP 2: Orientation based on radiological pattern",
                borderColor: "border-teal-500", bgColor: "bg-teal-50", textColor: "text-teal-800",
                sections: [
                    { title: "If fibrotic NSIP pattern:", items: ["Extended myositis panel:\n- Anti-synthetases: Jo-1, PL-7, PL-12, OJ, EJ, KS\n- Anti-Mi-2α/β, anti-TIF1γ, anti-MDA5\n- Anti-SRP, anti-HMGCR\n- Anti-SAE1/2, anti-NXP2", "Scleroderma panel:\n- Anti-RNA polymerase III\n- Anti-PM/Scl75-100\n- Anti-Ku, anti-Th/To\n- Anti-U1RNP, anti-U3RNP"] },
                    { title: "If UIP-like pattern:", items: ["Workup for RA-ILD:\n- High-affinity ACPA\n- IgA RF\n- Extended anti-citrullinated peptide antibodies", "Workup for limited scleroderma:\n- Anti-centromere B\n- Nailfold capillaroscopy"] }
                ]
            },
            {
                id: 3,
                title: "STEP 3: Targeted complementary investigations",
                borderColor: "border-indigo-500", bgColor: "bg-indigo-50", textColor: "text-indigo-800",
                sections: [
                    { title: "If high suspicion of CTD with negative ANA:", items: ["Isolated anti-Ro52", "Repeat ANA in 6 months", "Lung biopsy if diagnosis is uncertain"] },
                    { title: "Activity and prognostic markers:", items: ["Ferritin: suspicion of anti-MDA5 myositis", "Aldolase, CK, LDH: muscle involvement", "KL-6, SP-D: pulmonary fibrosis markers"] }
                ]
            }
        ],
        interpretation: {
            title: "Interpretation based on clinical presentations",
            borderColor: "border-purple-500", bgColor: "bg-purple-50", textColor: "text-purple-800",
            presentations: [
                { title: `"Scleroderma-like"`, context: "Clinical signs: Raynaud's, sclerodactyly, telangiectasias", items: ["Priority workup:\n- Anti-Scl70 (high risk of severe ILD)\n- Anti-centromere (late ILD but PAH)\n- Anti-RNA pol III (scleroderma renal crisis)\n- Capillaroscopy (scleroderma pattern)"] },
                { title: `"Antisynthetase syndrome"`, context: "Triad: myositis + arthritis + ILD", items: ["Specialized workup:\n- Complete anti-synthetase panel\n- Look for \"mechanic's hands\"\n- CK, aldolase, EMG if myalgia"] },
                { title: `"RA-ILD"`, context: "Context: male, smoker, nodules", items: ["Specific workup:\n- ACPA + RF (double positivity = high risk)\n- Test for IgA rheumatoid factor\n- Clinical joint evaluation"] }
            ]
        },
        specialCases: {
            title: "Special cases, pitfalls, and emergencies",
            borderColor: "border-amber-500", bgColor: "bg-amber-50", textColor: "text-amber-800",
            cases: [
                { title: "ILD with negative ANA (15-20% of cases)", items: ["Test for isolated anti-Ro52", "Repeat ANA in 6 months", "Lung biopsy if diagnosis is uncertain"] },
                { title: "Overlap syndromes", items: ["Scleromyositis: Anti-PM/Scl + anti-Ku", "Lupus-scleroderma: Anti-U1RNP", "RA-scleroderma: ACPA + anti-Scl70"] },
                { title: "Rapidly progressive forms", isUrgent: true, items: ["Urgent workup (below 48h):\n- Anti-MDA5 (dermatomyositis)\n- Anti-RNA pol III (scleroderma)\n- Consumed complement (lupus)\n- Ferritin above 1000 (macrophage activation syndrome)"] }
            ]
        },
        followUp: {
            title: "Evolving biological follow-up",
            borderColor: "border-green-500", bgColor: "bg-green-50", textColor: "text-green-800",
            sections: [
                { title: "Activity monitoring (every 3 months):", items: ["Specific autoantibody titers", "CRP, ESR (inflammatory flares)", "KL-6 (fibrotic progression)", "CPK if associated myositis"] },
                { title: "Therapeutic monitoring:", items: ["CD19+ lymphocytes if rituximab", "Liver function tests if methotrexate", "Creatinine if cyclophosphamide"] }
            ]
        }
    }
};