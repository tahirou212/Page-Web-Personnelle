// Sélection des éléments nécessaires
const dots = document.querySelectorAll('.dot');
const slider = document.querySelector('.slider');

// Liste des images de fond
const backgrounds = [
    'imag/banner-item-01.jpg',
    'imag/banner-item-02.jpg',
    'imag/banner-item-03.jpg'
];

let currentSlide = 0; 
const totalSlides = backgrounds.length; 

// Fonction pour changer l'image de fond
function changeBackground(slideIndex) {
    slider.style.backgroundImage = `url(${backgrounds[slideIndex]})`; 
    dots.forEach(dot => dot.classList.remove('active')); 
    dots[slideIndex].classList.add('active'); 
    currentSlide = slideIndex; 
}

// Fonction pour passer à l'image suivante
function nextBackground() {
    const nextIndex = (currentSlide + 1) % totalSlides; 
    changeBackground(nextIndex);
}

// Initialisation
changeBackground(currentSlide);

// Ajouter des événements pour les dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => changeBackground(index));
});

// Démarrer l'animation automatique
setInterval(nextBackground, 3000); 


document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.getElementById("popup-container");
    const popupText = document.getElementById("popup-text");
    const closeBtn = document.querySelector(".close-btn");

    // Contenu des pop-ups
    const popupContents = {
        metasploit: ` À travers l'utilisation de Metasploit, j'ai mené des tests d'intrusion pour identifier et exploiter des vulnérabilités dans des systèmes informatiques. Voici comment j'ai procédé pour évaluer la sécurité d'un site web : J'ai configuré mon environnement de travail avec Kali Linux, une distribution incluant Metasploit, pour m'assurer que tout était prêt. Ensuite, j'ai utilisé des outils comme Nmap pour scanner le site web cible et identifier les services et ports ouverts, ce qui m'a donné une idée claire de la surface d'attaque potentielle. J'ai ensuite utilisé Nikto et Burp Suite pour analyser le site web et trouver des vulnérabilités potentielles. Une fois les vulnérabilités identifiées, j'ai utilisé Metasploit pour chercher et configurer les exploits appropriés, puis j'ai exécuté les exploits pour tester si je pouvais accéder au système cible. Après avoir réussi à exploiter les vulnérabilités, j'ai évalué les résultats pour voir l'étendue de l'accès obtenu et j'ai utilisé des payloads pour maintenir l'accès et exécuter des commandes supplémentaires. Enfin, j'ai documenté toutes les étapes du test d'intrusion et rédigé un rapport détaillant les vulnérabilités trouvées, les exploits utilisés et les recommandations pour améliorer la sécurité du site web. Ce projet m'a permis de mettre en pratique mes compétences en cybersécurité et de contribuer à la sécurisation des systèmes informatiques, tout en m'offrant une expérience enrichissante et gratifiante. `,
        webDev: `Pour m'entraîner au développement web, j'ai réalisé un projet de création d'un site web statique en HTML et CSS pour présenter mon CV. Ce projet m'a permis de mettre en pratique mes compétences en codage et de créer quelque chose de concret et utile. 

J'ai commencé par structurer le contenu de mon CV en utilisant HTML, en organisant les sections telles que l'expérience professionnelle, la formation, et les compétences. J'ai veillé à ce que le contenu soit clair et bien structuré pour une lecture facile. 

Ensuite, j'ai stylisé le site en utilisant CSS pour rendre mon CV plus attrayant visuellement. J'ai choisi une palette de couleurs sobre et professionnelle, ainsi que des polices de caractères lisibles. J'ai également utilisé des techniques de mise en page en CSS pour aligner les éléments de manière cohérente et esthétique. 

Pour finaliser le projet, j'ai testé le site sur différents navigateurs pour m'assurer qu'il s'affichait correctement partout. J'ai également optimisé le code pour améliorer les performances et garantir une expérience utilisateur fluide. 

Ce projet m'a non seulement aidé à renforcer mes compétences en HTML et CSS, mais il m'a également permis de créer un CV en ligne attrayant que je peux partager avec des employeurs potentiels. `,
        passion: `Depuis que j'ai découvert l'informatique, j'ai développé une passion pour la cybersécurité et le développement web. Ces deux domaines me captivent par leurs défis constants et leurs possibilités infinies. Ils ne sont pas juste un travail, mais une véritable vocation. 

La cybersécurité est au cœur de mon intérêt, avec la lutte contre les cyberattaques et la protection des informations sensibles. Cette bataille constante pour sécuriser les données est ce qui me motive. 

Le développement web, quant à lui, me permet d'exprimer ma créativité tout en résolvant des problèmes complexes. Créer des sites web, du concept à la mise en ligne, est un processus gratifiant, surtout lorsqu'un projet prend forme et est utilisé par un large public. 

L'intersection entre cybersécurité et développement web est passionnante. Un site bien conçu doit être à la fois esthétique, fonctionnel et sécurisé. Cette combinaison me permet de travailler sur des projets innovants et robustes. `,
        objectif: `Mon objectif principal est de devenir un expert polyvalent dans les domaines du développement web et de la cybersécurité. Je souhaite créer des sites web innovants et performants tout en garantissant leur sécurité contre les menaces en ligne. En combinant mes compétences en développement web et en cybersécurité, je vise à concevoir des solutions qui non seulement répondent aux besoins des utilisateurs, mais qui protègent également leurs données personnelles et sensibles. Mon but est de rester constamment à jour avec les dernières technologies et pratiques en matière de sécurité, afin de pouvoir anticiper et neutraliser les nouvelles menaces. En fin de compte, je veux contribuer à un internet plus sûr et plus fiable, tout en offrant des expériences utilisateur exceptionnelles.`
    };

    // Fonction pour afficher le pop-up
    function showPopup(contentKey) {
        popupText.textContent = popupContents[contentKey];
        popupContainer.style.display = "flex";
    }

    // pour ajouter des événements aux boutons
    document.getElementById("more-intro").addEventListener("click", () => showPopup("passion"));
    document.querySelectorAll(".voir-plus").forEach(button => {
        button.addEventListener("click", () => showPopup(button.dataset.target));
    });
    document.getElementById("goal-button").addEventListener("click", () => showPopup("objectif"));

    // Pout la fermeture du pop-up
    closeBtn.addEventListener("click", () => popupContainer.style.display = "none");
    popupContainer.addEventListener("click", (event) => {
        if (event.target === popupContainer) popupContainer.style.display = "none";
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const responseDiv = document.getElementById("form-response");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        
        if (name && email && message) {
            // Affichage du message de succès
            responseDiv.textContent = "Votre message a bien été envoyé ! Je reviendrai vers vous sous peu.";
            responseDiv.classList.add("success");
            responseDiv.classList.remove("error");

            // Masque le message après 4 secondes
            setTimeout(function() {
                responseDiv.classList.add("hide");
            }, 4000);

            // Réinitialise le formulaire après envoi
            form.reset();
        } else {
            // Message d'erreur si les champs sont incomplets
            responseDiv.textContent = "Veuillez remplir tous les champs.";
            responseDiv.classList.add("error");
            responseDiv.classList.remove("success");
        }
    });
});


// citation #################
const quotes = [
    "La sécurité, c'est une course sans fin. Ceux qui arrêtent de courir deviennent des cibles.",
    "Un site web bien protégé est un site web qui inspire confiance.",
    "L'innovation en cybersécurité commence par la vigilance.",
    "Le meilleur pare-feu, c'est une bonne connaissance des menaces.",
    "Dans le monde numérique, la prudence est la clé de la survie."
];

let index = 0;

function changeQuote() {
    const quoteElement = document.getElementById("quote");
    
    // Disparition du texte
    quoteElement.style.opacity = "0";

    setTimeout(() => {
        // Changement de citation
        index = (index + 1) % quotes.length;
        quoteElement.textContent = quotes[index];

        // Apparition du texte
        quoteElement.style.opacity = "1";
    }, 1000); // Correspond au temps de l'animation CSS
}

// Changer la citation toutes les 5 secondes
setInterval(changeQuote, 5000);
