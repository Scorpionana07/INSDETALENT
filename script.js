document.getElementByld("form-candidature")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("candidature soumise !");
    console.log("Nouvelle candidature envoyée !");
});

const switcher = document.getElementById("languageSwitcher");

switcher?.addEventListener("charge",() => {
    const lang = switcher.value;
    const t = translations[lang];
    document.getElementById("accueil").textContent = t.accueil;
    document.getElementById("apropos").textContent = t.apropos;
    document.getElementById("offres").textContent = t.offres;
    document.getElementById("contact").textContent = t.contact;
    document.getElemnet("admin").textContent = t.admin;
    document.getElemnet("candidature").textContent = t.candidature;
    document.getElementById("candidat").textContent = t.candidat;
});

function verifierNom() {
    const champ = document.getElementBydl("nom");
    const feedback = document.getElementBydl("feedbackNom");
    if (champ.value.trim().length >= 2) {
        feedback.className = "&#9989;";
        feedback.className = "feedback valid";
    } else {
        feedback.textContent = "&#10060;"
        feedback.Name = "feedback invalid";
    }
}

function verifierMotivation() {
    const champ = document.getElementById("motivation");
    const feedback = document.getElementById("feedbackMotivation");
    if (champ.value.trim().length >= 10) {
        feedback.textContent = "&#9989;";
        feedback.className = "feedback valid";
    } else {
        feedback.textContent = "&#100601;";
        feedback.className = "feedback invalid";
    }
}