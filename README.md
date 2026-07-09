# ORION Automobiles — site de démonstration

Site vitrine fictif d'un revendeur de véhicules d'occasion premium.
**Projet de démonstration : marque fictive, photographies générées par IA.**
Cette mention figure dans le footer des quatre pages et sur la page
collections — elle ne doit pas être retirée.

## Lancer le site

Aucun build, aucune dépendance. Ouvrez `index.html` directement dans un
navigateur (double-clic, ou `file://`). Pour un serveur local :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

Déploiement : glissez le dossier complet sur [Netlify Drop](https://app.netlify.com/drop).

## Structure

```
index.html            Accueil
collections.html      Grille + filtres (état partagé via l'URL)
car.html              Fiche produit (?id=…)
contact.html          Formulaire + infos + plan
assets/css/style.css  Tout le style — tokens en tête de fichier
assets/js/data.js     const CARS = [...] — source unique de vérité
assets/js/main.js     renderCard, filtres, galerie, validation, reveal
assets/img/           Images WebP (à déposer)
.claude/skills/car-site/SKILL.md   Règles de design du projet
```

## Changer le nom de la marque

Rechercher/remplacer `ORION` et `orion-automobiles` dans les quatre
fichiers HTML (wordmark du header, footer, balises `<title>`, meta et
adresse email). Le logo est purement typographique (Syne 700).

## Les tokens de design

Tout est déclaré dans le bloc `:root` en tête de `assets/css/style.css` :
couleurs, polices, rayon, échelle d'espacement (4/8/16/24/40/64/96/160),
courbe et durée d'animation. Aucune valeur n'est codée en dur ailleurs —
pour changer l'ambiance du site, ne modifiez que ce bloc.

Règle 90/7/3 : l'or (`--accent`) apparaît au maximum trois fois par
écran — prix, CTA principal, c'est tout.

## Ajouter un véhicule

Ajoutez un objet dans le tableau `CARS` de `assets/js/data.js` :

```js
{
  id: "marque-modele-annee",        // unique, utilisé dans l'URL car.html?id=…
  name: "Modèle",
  brand: "Marque",
  year: 2022,
  price: 500000,                    // MAD, sans séparateurs
  km: 40000,
  fuel: "Essence",                  // ou "Diesel"
  transmission: "Automatique",
  power: "300 ch",
  status: "disponible",             // "disponible" | "reserve" | "vendu"
  images: [ /* 4 chemins assets/img/… */ ],
  specs: { couleur: "…", sellerie: "…", origine: "…" },
  description: "Deux ou trois phrases factuelles."
}
```

Les images : WebP, 1600 px de large maximum, ratio 4/3, nommées
`marque-modele-annee-01.webp` … `-04.webp` dans `assets/img/`.
Tant qu'un fichier manque, un placeholder s'affiche automatiquement.
Les listes de filtres (marques, carburants) se mettent à jour toutes seules.

## Brancher un vrai backend de formulaire

Les deux formulaires (réservation d'essai dans `car.html`, contact dans
`contact.html`) n'envoient rien : ils loguent la charge utile en console
et affichent un état de succès. Les deux points d'intégration sont
marqués dans `assets/js/main.js` par :

```js
// TODO: connect Formspree endpoint here
```

Remplacez le `console.log` par un `fetch(endpoint, { method: "POST", … })`
vers Formspree, Netlify Forms ou votre API, puis affichez l'état de succès
dans le `.then()`.
