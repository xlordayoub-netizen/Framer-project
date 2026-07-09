---
name: car-site
description: Design system and build rules for the ORION Automobiles demo site. Use for any HTML, CSS, or JS work in this project.
---

# ORION Automobiles — Build Rules

## What this is
A fictional luxury used-car dealership site. Portfolio/demo piece.
All vehicle photography is AI-generated. This must be disclosed in the footer
and on the collections page. Never remove that disclosure.

## Stack
Static HTML + CSS + vanilla JS. No frameworks. No build step. No npm.
Every page opens directly in a browser via file://.

## Files
```
index.html          Accueil
collections.html    Grid + filtres
car.html            Détail produit (?id=)
contact.html        Formulaire + infos
assets/css/style.css
assets/js/data.js   const CARS = [...]  — single source of truth
assets/js/main.js   renderCard, filters, gallery, validation, reveal
assets/img/
```

## Design tokens — declare at :root, never hardcode a value anywhere else

```css
--bg: #0B0B0D;          /* fond, ~90% de l'écran */
--surface: #131317;     /* cards, sections */
--surface-2: #1C1C22;   /* hover, inputs */
--line: rgba(255,255,255,0.08);
--text: #F2F2F3;        /* ~7% */
--muted: #8A8F98;
--accent: #C6A15B;      /* or — ~3%, jamais plus */
--accent-hover: #E3C88A;
--sold: #E63946;        /* uniquement pour "Vendu" */
```

### The 90/7/3 rule
Gold appears at most **three times per viewport**. Reserve it for:
price, primary CTA, active link. Nothing else. If a fourth gold element
appears, remove one.

### Type
- Headings: Syne, weight 700, letter-spacing -0.02em
- Body: Inter, 400/500
- Load from Google Fonts with `display=swap` and `preconnect`
- Scale: h1 `clamp(2.5rem, 6vw, 5rem)` · h2 `clamp(1.75rem, 3.5vw, 3rem)` · body 1rem/1.65

### Geometry
- `border-radius: 2px` — everywhere. Never 8px, never pills.
- Container: `max-width: 1280px; padding-inline: clamp(20px, 5vw, 64px)`
- Spacing scale only: 4 8 16 24 40 64 96 160px

### Motion
`400ms cubic-bezier(0.16, 1, 0.3, 1)`. No bounce, no spring, no scale > 1.05.
Wrap every animation in a `prefers-reduced-motion: no-preference` check.

## Image rules
- Cards: `aspect-ratio: 4/3`, `object-fit: cover`
- Hero: `aspect-ratio: 21/9` on desktop, `4/5` on mobile
- Every `<img>` has explicit width, height, alt, and `loading="lazy"` (hero excepted)
- WebP, max 1600px wide

## Prices
Format via `Intl.NumberFormat('fr-MA')` → `485 000 DH`.
Never psychological pricing (no 499 990). Never "promo" or discount badges.
Under the price, optional muted line: `Négociable` or `Reprise possible`.

## Copy tone
Calm, factual, French. No exclamation marks. No "Profitez !", no urgency.
CTA is `Réserver un essai`, never `Acheter`.

## Non-negotiable quality bar
- Semantic landmarks, one h1 per page, real alt text
- `:focus-visible` ring in --accent on every interactive element
- No layout shift, no console errors, no unused CSS or JS
- Works at 320 / 375 / 768 / 1024 / 1440 / 1920 with zero horizontal scroll
- Forms never POST anywhere. Log the payload, show a success state,
  leave `// TODO: connect endpoint` clearly marked.

## Disclosure (required, do not remove)
Footer, small, --muted:
`Projet de démonstration. Marque fictive. Photographies générées par IA.`
