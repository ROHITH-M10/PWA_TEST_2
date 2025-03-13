// if ('serviceWorker' in navigator) {
//     window.addEventListener('load' , () => {
//         navigator.serviceWorker.register('./sw.js')
//                   .then(registration => {
//             console.log('Service Worker registered with scope:' , registration.scope);
//         }).catch(error => {
//             console.log('Service Worker registration failed:' , error);
//         });
//     });
// }


document.addEventListener("DOMContentLoaded", function () {
    const pages = {
        "NAFLD/MASLD": "https://research.amritahospitals.org/nafld/masld/new",
        "Liver Health": "https://example.com/liver-health",
        "Symptoms": "https://example.com/symptoms",
        "Diagnosis": "https://example.com/diagnosis",
        "Treatment": "https://example.com/treatment",
        "Prevention": "https://example.com/prevention",
        "Diet Plan": "https://example.com/diet-plan",
        "Exercise Tips": "https://example.com/exercise-tips",
        "Medical Research": "https://example.com/research",
        "FAQ": "https://example.com/faq",
        "Contact Us": "https://example.com/contact-us",
        "About Us": "https://example.com/about-us",
        "Privacy Policy": "https://example.com/privacy-policy",
        "Terms of Service": "https://example.com/terms-of-service",
        "Blog": "https://example.com/blog",
        "News & Updates": "https://example.com/news",
        "Patient Stories": "https://example.com/patient-stories",
        "Clinical Trials": "https://example.com/clinical-trials",
        "Support Groups": "https://example.com/support-groups",
        "Mental Health & Liver": "https://example.com/mental-health-liver",
        "Liver Detox Myths": "https://example.com/liver-detox-myths",
        "Common Liver Diseases": "https://example.com/common-liver-diseases",
        "Liver Transplant": "https://example.com/liver-transplant",
        "Alcohol & Liver Damage": "https://example.com/alcohol-liver-damage",
        "Viral Hepatitis": "https://example.com/viral-hepatitis",
        "Fatty Liver vs Hepatitis": "https://example.com/fatty-liver-vs-hepatitis",
        "Pediatric Liver Health": "https://example.com/pediatric-liver-health",
        "Alternative Medicine": "https://example.com/alternative-medicine",
        "Liver Biopsy": "https://example.com/liver-biopsy",
        "Blood Tests for Liver": "https://example.com/blood-tests-liver",
        "Liver-Friendly Recipes": "https://example.com/liver-friendly-recipes",
        "Yoga for Liver Health": "https://example.com/yoga-liver-health",
        "Supplements & Liver": "https://example.com/supplements-liver",
        "Medication & Liver": "https://example.com/medication-liver",
        "Genetic Factors": "https://example.com/genetic-factors",
        "Liver Fibrosis": "https://example.com/liver-fibrosis",
        "Chronic Liver Conditions": "https://example.com/chronic-liver-conditions",
        "Non-Alcoholic Liver Issues": "https://example.com/non-alcoholic-liver",
        "Liver Function Tests": "https://example.com/liver-function-tests",
        "Liver Surgery & Risks": "https://example.com/liver-surgery-risks"
    };

    const buttonContainer = document.getElementById("buttonContainer");
    Object.keys(pages).forEach(name => {
        const link = document.createElement("a");
        link.classList.add("nav-button");
        link.textContent = name;
        link.href = pages[name];
        buttonContainer.appendChild(link);
    });
});
