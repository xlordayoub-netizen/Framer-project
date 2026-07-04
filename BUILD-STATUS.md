# Build status

**Current build:** VELORA Watches landing page, delivered twice:

1. **Framer project (primary)** — built via Framer MCP, all 10 sections ✅
   https://framer.com/projects/Compassionate-Lifecycle--86t5pY0VEsSXmj7XR7yP-hui8m
2. **Static site (this repo)** — production-ready HTML/CSS/JS mirror of the same
   design; also hosts the product images used by the Framer build.

➡️ See **[README.md](./README.md)** for the design system, section list,
product-photo mapping, and how to set your WhatsApp number / Instagram handle.

```
index.html            → the landing page (10 sections)
assets/css/styles.css → design system (#0A0E1A · gold #C9A227 · #F0EEF8)
assets/js/main.js     → CONFIG (edit contact details here) + interactions
assets/img/           → optimized product photos + favicon
```

---

# Framer build (Compassionate-Lifecycle project)

**Status: COMPLETE ✅ — all 10 sections on the home page (`/`).
Not yet published — click Publish in Framer to go live.**

## Design system (created in Framer ✅)

### Color styles
| Path | Value |
|---|---|
| `/Background` | `#0A0E1A` deep navy |
| `/Surface` | `#12172B` card background |
| `/Gold` | `#C9A227` accent |
| `/Gold Soft` | `rgba(201,162,39,0.12)` icon chips |
| `/Text` | `#F0EEF8` |
| `/Text Secondary` | `#9A9AB0` |
| `/Border Subtle` | `rgba(240,238,248,0.08)` |

### Text styles
`/Heading XL` (Syne 700, 60px, h1) · `/Heading LG` (42px, h2) · `/Heading MD` (22px, h3)
`/Body LG` 19px · `/Body` 16px · `/Body Small` 14px (Inter, secondary color)
`/Quote` + `/Quote Author` (right-aligned, RTL) · `/Gold Label` (eyebrows, 13px uppercase)
`/Trust Item` · `/Stat` · `/Step Number` · `/Wordmark` · `/Benefit Label`

Fonts: `GF;Syne-700` headings, `GF;Inter-regular` / `GF;Inter-700` body.
All Arabic-carrying styles use `letterSpacing: 0` (negative tracking breaks Arabic joining).

## Code components (created ✅, typecheck clean)

| Component | File ID | Insert URL |
|---|---|---|
| GoldButton | `nGknMwm` | `https://framer.com/m/GoldButton-6GzO51.js` |
| ProductGrid | `mq8gv0l` | `https://framer.com/m/ProductGrid-3zBZjp.js` |
| FAQAccordion | `rWlYAlU` | `https://framer.com/m/FAQAccordion-OUKDa1.js` |
| HowItWorksSteps | `XnVQEbi` | `https://framer.com/m/HowItWorksSteps-ladmy9.js` |

- **GoldButton**: solid/outline gold CTA, hover lift + glow; label/link/newTab props.
- **ProductGrid**: 10 products hardcoded (name, Darija tagline, image), RTL CSS grid,
  2 cols mobile / 3 cols ≥810px, hover zoom + gold border, per-product wa.me link with
  prefilled Darija message. Props: `phone`, `buttonLabel`, `messagePrefix`.
- **FAQAccordion**: 4 Q&A (editable via Array prop), RTL, animated expand, gold accents.
- **HowItWorksSteps**: RTL grid so step 1 is rightmost on desktop, first on mobile.

## Page `/` node map (Desktop root `WQLkyLRf1`)

| Section | Node ID |
|---|---|
| 1. Hero (bg image + overlay + H1 + WhatsApp CTA) | `DU4BflQHi` |
| 2. Trust bar (3 items) | `Aua2BdiKh` |
| 3. Desire | `zuP0IV5XX` |
| 4. Collection (title + ProductGrid `MrExNkhbO`) | `pJvhyJfiQ` |
| 5. Why VELORA (6 benefit cards) | `KQZh_tRyJ` |
| 6. How it works (steps instance `I7fIMVAz3`) | `n3O789SqL` |
| 7. Social proof (3 testimonials + stat) | `v1tZG67vX` |
| 8. FAQ (accordion instance `dvQkS0TuT`) | `GXKQXsfHD` |
| 9. Final CTA (2 GoldButtons) | `MCCOdB2ZO` |
| 10. Footer | `aW8vFlZTs` |

Hero image was uploaded to Framer CDN:
`https://framerusercontent.com/images/DcAFkNHQXewS9CUF61DgMy4Ak.jpg`

Product card images load from this repo (pinned to commit `710186d`):
`https://raw.githubusercontent.com/xlordayoub-netizen/Framer-project/710186d9da988d5a34935b16d76d4b7e5bbe9711/assets/img/card-*.jpg`
⚠️ Keep the repo public (or replace with Framer-hosted images) or the grid photos break.

## Placeholders to replace before launch
- WhatsApp number `212600000000` — hero CTA, ProductGrid `phone` prop, final CTA
  buttons, footer WHATSAPP link.
- Instagram links `instagram.com/velora.watches` + `ig.me/m/velora.watches`.
- Testimonials are placeholder copy.
- Note: Syne has no Arabic glyphs — Arabic headlines render via fallback; Latin text
  (VELORA, product names) renders in Syne. Swap headings to an Arabic display font
  (e.g. Cairo/Almarai) if a fully custom Arabic look is wanted.

## Framer MCP quirks discovered (avoid re-hitting)
- `backgroundImage` is dropped when set on a Frame that also has `layout` attrs at
  creation — create a plain absolute Frame child with only `backgroundImage` instead
  (it becomes an Image node; external URLs upload to Framer CDN fine).
- `padding` accepts 1 or 4 values only ("22px 32px" is silently dropped).
- `minHeight`/`maxWidth` need explicit `px` units.
- Creating many sections in ONE updateXmlForNode call can misplace some text nodes
  into a neighboring container (they appear with `font="Inter"` instead of the given
  inlineTextStyle). Build 1–2 sections per call and verify with getNodeXml after.
- Default text styles get negative letterSpacing (-0.02/-0.04em) — reset to 0 for Arabic.
