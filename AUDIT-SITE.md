# Audit complet du site Therapiego

Date de l’audit : 26 juillet 2026

Périmètre : page d’accueil, Therapiego, Ma méthode, Contact, Mentions légales, CGV et Confidentialité.

## Synthèse

Le site dispose désormais d’un système visuel cohérent et d’une navigation homogène sur ses sept pages. Aucun lien local cassé, identifiant dupliqué, saut anormal dans la hiérarchie des titres ou contrôle ARIA sans cible n’a été détecté.

Les principales corrections de cette passe concernent la performance des images, l’accessibilité de la page d’accueil, la navigation dans les pages longues, les états actifs des sommaires et la qualité des aperçus lors du partage.

## Design et expérience utilisateur

### Corrigé

- Palette, typographies, rayons, ombres et surfaces partagés entre toutes les pages.
- Hiérarchie plus nette entre héros, titres de sections, textes et appels à l’action.
- Cohérence renforcée entre les cartes de l’accueil, de la page Contact et les documents juridiques.
- Appels à l’action de fin de page enrichis avec des motifs inspirés des pierres de Go.
- Bouton « Haut de page » disponible sur toutes les pages longues.
- Sommaires de lecture avec état actif plus visible.
- Mise en page adaptée aux écrans de 760 px et 980 px.
- Styles d’impression simplifiés pour les pages éditoriales et juridiques.

### À surveiller

- La page d’accueil contient encore plusieurs générations de styles intégrés dans le fichier HTML. Le rendu est consolidé par le système partagé, mais une future refonte technique pourrait extraire et supprimer les règles historiques devenues inutiles.

## Performance

### Corrigé

- Photo principale convertie en AVIF : environ 6,9 Mo vers 205 Ko.
- Trois images de la section Méthode converties en AVIF : environ 5,8 Mo vers 118 Ko au total.
- Réduction d’environ 97 % du poids des quatre grandes images chargées par la version moderne du site.
- Préchargement de la photo principale sur les pages où elle apparaît immédiatement.
- Chargement différé des images situées sous la ligne de flottaison.
- Dimensions intrinsèques ajoutées aux images pour limiter les décalages de mise en page.
- Le PNG original de la photo reste disponible comme solution de repli.

## Accessibilité

### Conforme ou corrigé

- Un seul titre `h1` et un seul élément `main` par page.
- Hiérarchie des titres sans saut de niveau détecté.
- Lien d’évitement « Aller au contenu » présent sur les sept pages.
- Boutons de navigation nommés et reliés à leur menu avec `aria-controls`.
- Fermeture des menus avec la touche Échap.
- Fermeture des menus mobiles après activation d’un lien.
- États `aria-current` synchronisés dans les sommaires éditoriaux et juridiques.
- Focus clavier visible sur les boutons, cartes interactives et liens importants.
- Animations réduites lorsque la préférence système `prefers-reduced-motion` est activée.
- Le bouton de retour en haut est retiré de l’ordre de tabulation lorsqu’il n’est pas visible.

## Référencement et partage

### Corrigé

- Titres et descriptions uniques sur les sept pages.
- Favicon et couleur du navigateur cohérents.
- Métadonnées Open Graph ajoutées à chaque page.
- Métadonnée Twitter Card ajoutée à chaque page.
- Langue française déclarée dans le document.

### Dépend de la mise en ligne

- Ajouter une URL canonique à chaque page lorsque le domaine définitif sera connu.
- Générer un sitemap avec les URL de production.
- Ajouter une image sociale Open Graph dédiée lorsque l’URL publique et le format de déploiement seront définis.

## Contenu et obligations

- Les CTA utilisent la formulation « Prendre contact ».
- Les informations de contact et réseaux sont cohérentes entre la page Contact et le footer.
- Les pages juridiques restent volontairement signalées comme incomplètes tant que le statut juridique, le SIRET, l’adresse professionnelle, l’hébergeur et le médiateur ne sont pas fournis.

## Validation technique

- Sept pages vérifiées.
- Aucun lien ou fichier local manquant.
- Aucune ancre interne cassée.
- Aucun identifiant HTML dupliqué.
- Aucun `aria-controls` sans cible.
- Scripts JavaScript analysés sans erreur de syntaxe.
- Feuilles de style vérifiées avec accolades équilibrées.
