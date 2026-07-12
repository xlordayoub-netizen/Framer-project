# VELIRA

Site e-commerce pour VELIRA — montres monochromes, marché marocain COD.
Les commandes passent par **WhatsApp** : pas de checkout, pas de backend,
pas de base de données.

**Stack** : Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion.
Mobile-first, déployable sur Vercel tel quel.

---

## Démarrage

```bash
npm install
npm run dev        # http://localhost:3000
```

Build de production :

```bash
npm run build
npm start
```

**Déploiement Vercel** : importez le repo sur vercel.com — aucun réglage
nécessaire (framework détecté automatiquement).

---

## 1 · Changer le numéro WhatsApp (obligatoire avant mise en ligne)

Ouvrez [`src/lib/config.ts`](src/lib/config.ts) :

```ts
export const WHATSAPP_NUMBER = "212XXXXXXXXX";
```

Remplacez par le vrai numéro : **indicatif pays + numéro, chiffres
uniquement** — pas de `+`, pas d'espaces. Exemple : `"212612345678"`.

Le message prérempli (en darija) se trouve dans
[`src/lib/whatsapp.ts`](src/lib/whatsapp.ts) :

```
مرحبا، بغيت نطلب: {nom du produit} — {prix} DH. (من موقع VELIRA)
```

---

## 2 · Ajouter ou modifier un produit

Tout le catalogue vit dans [`src/lib/products.ts`](src/lib/products.ts).
Un produit :

```ts
{
  id: "velira-39-noir",          // → URL /product/velira-39-noir
  name: "VELIRA 39 Noir",
  price: 349,                     // en DH
  specs: ["Boîtier acier…", "…"], // une ligne par spec
  images: ["/images/products/velira-39-noir/01-face.svg", …],
}
```

- Ajoutez un objet au tableau `products` → sa page `/product/<id>` est
  générée automatiquement, et il apparaît dans le footer.
- **Le premier produit du tableau** est celui mis en avant sur la page
  d'accueil (hero, fiche technique, section achat).

## 3 · Remplacer les images placeholders par vos photos

Chaque emplacement d'image est un fichier SVG étiqueté (le chemin du
fichier est imprimé dessus). Pour le remplacer :

1. Déposez votre photo dans `/public/images/…`
   (ex. `public/images/products/velira-39-noir/01-face.jpg`).
2. Mettez à jour le chemin correspondant :
   - photos produits → `images: […]` dans `src/lib/products.ts`
   - image d'ambiance (16:9) → `LIFESTYLE_IMAGE` dans `src/lib/config.ts`

Ratios attendus : face **4:5** · macro **1:1** · ambiance **16:9**.
Les photos sont recadrées automatiquement (`object-cover`) et optimisées
par `next/image` (WebP/AVIF) dès que vous utilisez des `.jpg`/`.png` —
rien d'autre à configurer.

---

## Structure

```
src/
  lib/
    config.ts        ← numéro WhatsApp, Instagram, image d'ambiance
    products.ts      ← catalogue (source unique)
    whatsapp.ts      ← construction du lien wa.me + message darija
  components/
    OrderButton.tsx  ← CTA réutilisable <OrderButton product={…} />
    Nav.tsx          ← nav sticky + heure de Casablanca en direct
    Footer.tsx       ← contact, modèles, ©
    Gallery.tsx      ← galerie photos de la page produit
    ImageFrame.tsx   ← slot image à ratio fixe (zéro layout shift)
    FadeIn.tsx       ← apparition au scroll (fade + 16px, sans rebond)
  app/
    page.tsx         ← landing (hero → trust bar → détail → ambiance
                        → histoire → achat)
    product/[id]/    ← page produit générée pour chaque entrée du catalogue
```

## Système de design

Défini dans [`tailwind.config.ts`](tailwind.config.ts) — **strictement
monochrome** : `ink #111111` · blanc · `gray-light #F5F5F5` ·
`gray-medium #D9D9D9` · `gray-dark #666666`. Typo : Cormorant (titres)
+ Inter (texte). Rayons ≤ 2 px. Pas d'or, pas de dégradés, pas d'ombres
lourdes — merci de garder cette discipline en ajoutant des sections.
