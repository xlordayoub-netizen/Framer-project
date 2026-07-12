/**
 * Product catalogue.
 *
 * To add a watch: append an object here, then drop its photos into
 * /public/images/products/<id>/ and list their paths in `images`.
 * The first product in this array is the one featured on the landing page.
 */
export type Product = {
  id: string;
  name: string;
  price: number; // in MAD (DH)
  specs: string[];
  images: string[]; // first image = main photo (4:5), second = macro (1:1)
};

export const products: Product[] = [
  {
    id: "velira-39-noir",
    name: "VELIRA 39 Noir",
    price: 349,
    specs: [
      "Boîtier acier brossé 316L — 39 mm",
      "Cadran noir mat, index appliqués",
      "Verre saphir bombé, traitement anti-reflets",
      "Mouvement quartz japonais Miyota",
      "Bracelet cuir noir, boucle acier — 20 mm",
      "Étanchéité 5 ATM",
    ],
    images: [
      "/images/products/velira-39-noir/01-face.svg",
      "/images/products/velira-39-noir/02-macro.svg",
      "/images/products/velira-39-noir/03-poignet.svg",
    ],
  },
  {
    id: "velira-39-blanc",
    name: "VELIRA 39 Blanc",
    price: 349,
    specs: [
      "Boîtier acier brossé 316L — 39 mm",
      "Cadran blanc craie, index gravés",
      "Verre saphir bombé, traitement anti-reflets",
      "Mouvement quartz japonais Miyota",
      "Bracelet cuir gris, boucle acier — 20 mm",
      "Étanchéité 5 ATM",
    ],
    images: [
      "/images/products/velira-39-blanc/01-face.svg",
      "/images/products/velira-39-blanc/02-macro.svg",
      "/images/products/velira-39-blanc/03-poignet.svg",
    ],
  },
  {
    id: "velira-36-ardoise",
    name: "VELIRA 36 Ardoise",
    price: 329,
    specs: [
      "Boîtier acier brossé 316L — 36 mm",
      "Cadran gris ardoise, index peints",
      "Verre saphir plat, traitement anti-reflets",
      "Mouvement quartz japonais Miyota",
      "Bracelet cuir noir, boucle acier — 18 mm",
      "Étanchéité 5 ATM",
    ],
    images: [
      "/images/products/velira-36-ardoise/01-face.svg",
      "/images/products/velira-36-ardoise/02-macro.svg",
      "/images/products/velira-36-ardoise/03-poignet.svg",
    ],
  },
];

/** The watch featured in the landing hero, detail and buy sections. */
export const featured = products[0];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
