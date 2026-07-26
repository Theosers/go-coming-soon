# Therapiego — version post-client

Version corrigée après retour client : plus claire, plus sobre et orientée beige/épuré.

## Structure

```txt
post-client/
├── index.html
├── a-propos.html
├── ma-methode.html
├── contact.html
├── mentions-legales.html
├── cgv.html
├── confidentialite.html
├── README.md
└── assets/
    ├── site-system.css
    ├── site-footer.css
    ├── legal-pages.css
    ├── legal-pages.js
    ├── hero-go-overlay-v3.webp
    ├── about-prof-avatar.webp
    ├── dojo-coach-default.webp
    ├── therapiego.webp
    ├── method-bg-voir.webp
    ├── method-bg-lire.webp
    └── method-bg-jouer.webp
```

## Modifications intégrées

- Direction artistique globale adoucie : thème beige clair, moins immersif, moins solennel.
- Navbar rendue plus sobre, avec CTA principal : « Prendre contact ».
- Hero section éclaircie, avec bouton moins agressif et wording plus simple.
- Section À propos simplifiée : suppression des chiffres secondaires, conservation uniquement de « 12 années d'expérience ».
- Section Témoignages : suppression de la vidéo, remplacement par un carrousel infini de plusieurs avis visibles en même temps.
- Suppression complète de la section « Jouer pour progresser ».
- Section « Pour qui ? » conservée dans son esprit clair et épuré.
- Section Formations éclaircie pour rester cohérente avec le thème sobre.
- Section Contact / « Prêt à jouer ? » reliée aux CTA de réservation.
- Menu « À propos » transformé en menu déroulant vers les pages « Therapiego » et « Ma méthode ».
- Section « Ma méthode » structurée autour de six axes pédagogiques.
- Système visuel commun aux sept pages : couleurs, typographies, navigation, boutons, sommaires et appels à l’action.
- Footer commun avec l’avatar Therapiego, les liens principaux, Cal.com, Twitch, YouTube et Discord.
- Pages Contact, Mentions légales, Conditions générales de vente et Confidentialité ajoutées.

## Utilisation

Ouvre simplement `index.html` dans un navigateur.

Pour Webflow : importe les assets du dossier `/assets`, puis reproduis les classes et les sections dans le même ordre.


## Patch client — retours complémentaires

- Navbar : correction du lien actif pour qu’il reste lisible en thème clair.
- Navbar : retrait du badge “Cours disponibles”.
- Hero : sceau japonais remplacé par `囲碁の道`.
- Hero : appel à l’action principal recentré sur la réservation d’un cours.
- Hero : image de fond redimensionnée/repositionnée pour ne plus dépasser visuellement à droite.
- Section À propos : partie gauche conservée, partie droite enrichie avec le bloc coach, la citation et les 4 piliers pédagogiques.
