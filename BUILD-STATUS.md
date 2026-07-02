# Luxury E-commerce Framer Build — Status

Framer project: https://framer.com/projects/Lime-Happen--P2T5u8cmtymwNvonIpOP-citsP

**Status: PAUSED — Framer MCP connection dropped (project became read-only).
Reconnect in Framer via Cmd+K → search "MCP", then resume.**

## Design system (created in Framer ✅)

### Color styles
| Path | Value |
|---|---|
| `/Background` | `#0A0E1A` deep navy |
| `/Surface` | `#12172B` card background |
| `/Accent` | `#7C3AED` violet |
| `/Text` | `#F0EEF8` off-white |
| `/Border Subtle` | `rgba(240,238,248,0.08)` |
| `/WhatsApp Green` | `#25D366` |

Secondary text is used inline as `rgba(240,238,248,0.6)` (style creation for `/Text Secondary` was denied).

### Text styles
`/Heading XL` (Syne 700, 60px, h1) · `/Heading LG` (40px, h2) · `/Heading MD` (22px, h3)
`/Body LG` 18px · `/Body` 16px · `/Body Small` 14px (Inter, 60% off-white)
`/Price` (Inter 700, 18px) · `/Button` (Inter 600, 16px) · `/Nav Link` (Inter 500, 15px)
`/Eyebrow` (Inter 600, 13px, uppercase, letter-spacing 0.14em, #A78BFA)

Fonts: `GF;Syne-700` headings, `GF;Inter-regular/500/600/700` body.

## Code components (created ✅, all typecheck clean)

| Component | File ID | Insert URL |
|---|---|---|
| LuxButton | `BmoH2W5` | `https://framer.com/m/LuxButton-twRCU2.js` |
| Navbar | `avyeK97` | `https://framer.com/m/Navbar-4oMaLx.js` |
| ProductCard | `SYkzndH` | `https://framer.com/m/ProductCard-XAFfXl.js` |
| ProductGrid | `nXHNFrS` | `https://framer.com/m/ProductGrid-8YGqSm.js` |
| WhatsAppButton | `dp5JWVz` | `https://framer.com/m/WhatsAppButton-ArXYMo.js` |
| ContactForm | `sE2beJj` | `https://framer.com/m/ContactForm-SGXNE7.js` |
| GlowOrb | `ybhhEAE` | `https://framer.com/m/GlowOrb-23EgAH.js` |
| HeroVisual | `ZyCSlaJ` | `https://framer.com/m/HeroVisual-tWpBCM.js` |

All hover micro-interactions (0.25s ease, violet glow, lift/scale) live in these
components. ContactForm + WhatsAppButton open wa.me with prefilled text
(default number placeholder `212600000000` — replace with the real one).

## Pages

| Page | Node ID | Status |
|---|---|---|
| `/` Home | `augiA20Il` (Desktop root `WQLkyLRf1`) | In progress |
| `/collections` | `IJqVCLVGU` | Created, empty |
| `/contact` | `k025zBVNU` | Created, empty |

### Home page node map (so far)
- Root `WQLkyLRf1`: bg `/Background`, vertical stack, height fit-content ✅
- NavWrapper `UVhliwheL`: fixed top, zIndex 999, contains Navbar `bLujysbki` (all links set) ✅
- HeroSection `rhO8cfM3w` → HeroContent `iZYtjybV9` (horizontal wrap stack, padding 176/32/96)
  - HeroText `eZYZEifje`: eyebrow `chlywzijk`, H1 `imVyN3O2b` ("Timepieces That Command
    Respect"), subline `hMgo45SaZ`, ButtonRow `Hu6vj5a9i` with LuxButton `gOAmf5U8p` ✅
  - **NEXT STEP (interrupted here):** insert HeroVisual instance into `iZYtjybV9`
    after `eZYZEifje`, width/height 460px. The old placeholder frame was deleted.

## Remaining to build
1. Hero: add HeroVisual instance (interrupted by read-only error).
2. Home: social proof bar (Free Delivery / Cash on Delivery / 7-Day Returns / 500+ Happy Customers).
3. Home: Featured products — 3 × ProductCard in wrapping stack, maxWidth 1200.
4. Home: Why Us — 3 columns (Quality / Fast Delivery / Support) on `/Surface` cards.
5. Home: Final CTA — "Your next watch is waiting." + LuxButton → /collections.
6. Home: Footer — logo, page links, social + WhatsApp links, copyright.
7. Collections page: navbar + header + ProductGrid instance + footer.
8. Contact page: navbar + "Get In Touch" + ContactForm + WhatsAppButton + social links + footer.
9. Final pass: links, mobile layout, font/color consistency.

## MCP quirks discovered (avoid re-hitting)
- SVG nodes: creation always fails with "Can not set attributes on unknown node" — use
  code components for any vector/gradient decoration instead.
- ComponentInstance nodes: top/left pins can NOT be set or updated via XML — only place
  instances inside stack layouts (in-flow), never absolutely positioned. Wrap in a Frame
  if pinning is needed.
- Frame `backgroundImage` did not apply from framerusercontent URLs — use image props on
  code components instead.
- Updating a ComponentInstance by its own nodeId with only layout attrs returns
  "No changes were made".
- Custom Link control props pointing at not-yet-existing pages are silently dropped —
  create pages first, then set links.
