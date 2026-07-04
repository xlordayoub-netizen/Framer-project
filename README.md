# VELORA WATCHES — Landing Page

A premium, high-converting, **mobile-first** landing page for the watch brand
**VELORA**, built for a Moroccan Instagram audience.
Language: **Arabic + Darija**. Sales model: **COD (Cash on Delivery) + WhatsApp/DM**.

Luxury, editorial, dark, cinematic aesthetic (Apple / Awwwards inspired),
fully responsive with **RTL** support.

---

## 🚀 Quick start

It's a static site — no build step. Just open it or serve the folder:

```bash
# any static server works
python3 -m http.server 8000
# then open http://localhost:8000
```

Deploy the whole folder to Netlify, Vercel, GitHub Pages, Cloudflare Pages, or
any static host. That's it.

## ⚙️ Configure your contact details (important)

Open **`assets/js/main.js`** and edit the `CONFIG` block at the top:

```js
const CONFIG = {
  phone: "212600000000",   // WhatsApp number, international format, digits only
  instagram: "velora.watches", // Instagram username (without the @)
};
```

Every WhatsApp button, product "اطلب دابا" button, the floating WhatsApp
bubble, and the Instagram links are generated automatically from these two
values — including a **prefilled Arabic message** that already contains the
chosen product name.

---

## 🎨 Design system

| Token | Value |
|---|---|
| Background | `#0A0E1A` |
| Accent (gold) | `#C9A227` |
| Text | `#F0EEF8` |
| WhatsApp green | `#25D366` |
| Display font (Latin) | **Syne** |
| Body font (Latin) | **Inter** |
| Arabic font | **Tajawal** (auto-fallback for all Arabic glyphs) |

All tokens live as CSS variables in `assets/css/styles.css` (`:root`).

> **Why Tajawal?** Syne and Inter don't include Arabic glyphs. The font stacks
> are `"Syne", "Tajawal", …` and `"Inter", "Tajawal", …`, so Latin words
> (like *VELORA*) render in Syne/Inter while all Arabic text renders in
> Tajawal — cohesive and premium, with no missing-glyph fallbacks.

## 🧩 Sections

1. **Hero** — headline, sub, gold WhatsApp CTA, full-bleed Black Edition photo, trust stats
2. **Trust bar** — free delivery · COD · guaranteed quality
3. **Problem / Desire** — emotional editorial block
4. **Collection** — 10 product cards (2 cols mobile / 3 desktop), each with "اطلب دابا"
5. **Why VELORA** — 6 benefits
6. **How it works** — 3 steps
7. **Social proof** — 3 testimonials + stat row
8. **FAQ** — accessible accordion (4 questions)
9. **Final CTA** — headline + WhatsApp + DM
10. **Footer** — logo, Instagram, WhatsApp, tagline *VELORA — Timeless Presence.*

Plus: sticky blurred navbar, floating WhatsApp button, scroll-reveal animations
(respecting `prefers-reduced-motion`).

---

## 🖼️ Product photos — mapping (please read)

The brief listed **10 products** but only **5 photos** were supplied. Each real
photo is mapped to its exact match; the remaining colorways reuse the closest
photo with a **tasteful CSS finish tint** (`.f-*` classes in `styles.css`) so
every card still looks distinct. Swap in real photography anytime by replacing
the file (or the `src`) — the tint classes can then be removed.

| # | Product | Image file | Finish tint |
|---|---|---|---|
| 1 | VELORA Black Edition | `card-blackedition.jpg` | — (real) |
| 2 | Nautilus White | `card-nautilus-blue.jpg` | `.f-white` |
| 3 | Nautilus Black | `card-nautilus-blue.jpg` | `.f-black` |
| 4 | Nautilus Green | `card-nautilus-green.jpg` | — (real) |
| 5 | Nautilus Blue | `card-nautilus-blue.jpg` | — (real) |
| 6 | Datejust Silver | `card-datejust.jpg` | — (real) |
| 7 | Datejust Gold | `card-datejust.jpg` | `.f-gold` |
| 8 | Datejust White | `card-datejust.jpg` | `.f-bright` |
| 9 | PRX Blue | `card-prx-blue.jpg` | — (real) |
| 10 | PRX Silver | `card-prx-blue.jpg` | `.f-silver` |

The **hero** uses a clean, text-free crop of the supplied Black Edition creative
(`hero-blackedition.jpg`). `og-cover.jpg` is the social-share preview image.

To add a real photo for a product, drop a square (1:1) JPG into
`assets/img/`, point the card's `<img src>` at it, and delete its `.f-*` class.

---

## 📁 Structure

```
index.html
assets/
  css/styles.css     # design system + responsive/RTL layout
  js/main.js         # CONFIG (edit here) + interactions
  img/               # optimized photos (~690 KB total) + favicon.svg
```

## 📝 Notes

- **RTL** is set on `<html dir="rtl" lang="ar">`; layout uses logical
  properties (`inset-inline-*`, `margin-inline`, etc.).
- Total media weight is ~0.7 MB — deliberately light for mobile data.
- All copy is kept exactly as specified (Arabic / Darija), not translated.
- This was delivered as production-ready HTML/CSS/JS (the Framer MCP was not
  connected in the build environment). The design tokens, copy, section
  structure, and assets here transfer 1:1 into Framer if you rebuild there.
