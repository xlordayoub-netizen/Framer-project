# Velora Drive — Framer Build Status

Framer project: https://framer.com/projects/Rotating-Shape--GEGWH3kdF063y7XJY7TJ-4yscR
Brief: `velora-drive-claude-code-package.md` (uploaded zip). Execution is step-gated by the user.

**Current position: STEP 3 built; Framer MCP DISCONNECTED mid-verification.
Reconnect (Framer → Cmd+K → "MCP"), then verify Accordion.tsx (`phRy3ZC`)
exports via getComponentInsertUrlAndTypes before resuming.**

## STEP 3 — CarCard + Accordion + Tokens refactor ✅ (pending 1 verification)

### Scope line (user-mandated, confirmed)
Code components ONLY for: Nav, Footer, ButtonPrimary, ButtonGhost,
WhatsAppButton, CarCard, /conditions Accordion. ALL page sections (HERO,
TRUST BAR, FLEET, COMMENT ÇA MARCHE, POURQUOI VELORA, DIVIDER, TÉMOIGNAGES,
CTA BAND) = native canvas frames with /H1 /H2 /Body /Eyebrow styles.
StatItem/StepItem/FeatureCard/TestimonialCard/CTABand/SectionHeading are
native frame patterns built in place (STEPs 4–6), NOT code. Scroll-reveal =
native Appear effect, applied manually in UI (MCP can't set effects — list
frames at STEP 8).

### Tokens refactor (user-mandated after STEP 2 critique)
- `Tokens.tsx` (`QhCN4wo`) = single source of truth. Exports TokenSheet
  component (visual swatch sheet) with `.tokens` static property.
- ⚠️ CRITICAL MCP LESSON: relative imports (`./Tokens`) DO NOT resolve —
  they silently break every importing component (exports vanish). Use
  framer.com module URLs: `import TokenSheet from
  "https://framer.com/m/Tokens-AVd7Km.js"` then
  `const tokens = (TokenSheet as any).tokens`.
- ⚠️ typecheck results in create/updateCodeFile responses LAG ONE UPDATE
  BEHIND. Ground truth = getComponentInsertUrlAndTypes (or CodeComponents
  list in getProjectXml).
- Nav CTA now renders `<ButtonPrimary />` (imported by URL). CarCard CTA
  renders `<WhatsAppButton />`.

### Code files (all verified exporting except Accordion)
| File | ID | Insert URL | Verified |
|---|---|---|---|
| Tokens.tsx | `QhCN4wo` | `https://framer.com/m/Tokens-AVd7Km.js` | ✅ |
| ButtonPrimary.tsx | `MYv7zxa` | `https://framer.com/m/ButtonPrimary-9U9So2.js` | ✅ |
| ButtonGhost.tsx | `NP8AS5u` | `https://framer.com/m/ButtonGhost-B4QQ1a.js` | ✅ |
| WhatsAppButton.tsx | `NGrsn4Y` | `https://framer.com/m/WhatsAppButton-XibTFm.js` | ✅ |
| Nav.tsx | `CZ_P2ec` | `https://framer.com/m/Nav-EghYkc.js` | ✅ |
| Footer.tsx | `XDwlUKT` | `https://framer.com/m/Footer-d298Cl.js` | ✅ |
| CarCard.tsx | `AE6nDaK` | `https://framer.com/m/CarCard-1nev8s.js` | ✅ |
| Accordion.tsx | `phRy3ZC` | `https://framer.com/m/Accordion-IPDRhK.js` | ⏳ verify after reconnect |

### CarCard notes
Props: image (empty → labelled placeholder "Photo — <model>"), model,
category (Citadine/Compacte/SUV), seats, transmission, fuel, pricePerDay,
ctaLabel, phone, message. Hover: lift 6px + gold border + image scale 1.04,
240ms, reduced-motion safe. Model 20px > price 18px (hierarchy rule).

### Accordion notes
Props: number, title, body (textarea, \n = paragraphs), anchor (TOC #id),
startOpen. Mobile ≤809px: collapsible button w/ chevron + aria-expanded.
Desktop: open block, h3 header, not interactive. Placeholder copy only, no
invented figures (real copy = STEP 5B).

## STEP 2 — Core components ✅ (all typecheck clean)

Approved by user: components are built as Framer **code components**
(createCodeFile) — MCP cannot create canvas components and XML has no
hover/scroll animation attributes. "Never code files" waived for components.

| Component | File ID | Insert URL |
|---|---|---|
| ButtonPrimary | `MYv7zxa` | `https://framer.com/m/ButtonPrimary-9U9So2.js` |
| ButtonGhost | `NP8AS5u` | `https://framer.com/m/ButtonGhost-B4QQ1a.js` |
| WhatsAppButton | `NGrsn4Y` | `https://framer.com/m/WhatsAppButton-XibTFm.js` |
| Nav | `CZ_P2ec` | `https://framer.com/m/Nav-EghYkc.js` |
| Footer | `XDwlUKT` | `https://framer.com/m/Footer-d298Cl.js` |

Notes:
- All buttons: radius 10px, min-height 48 (nav CTA 44), Inter 600, gold glow
  hover 240ms ease-out, focus ring 2px gold/2px offset, reduced-motion safe.
- WhatsAppButton props: label/phone/message/model — model appends " — <model>".
- Nav: transparent→ink after 40px scroll (prop `transparentAtTop`), centered
  links w/ active-page gold state, gold CTA always visible, ≤809px hamburger →
  full-screen overlay, body scroll lock. Logo = mark img 32px + native VELORA
  (Syne 800 24/gold) over DRIVE (Inter 500 10/paper), gaps 2/12.
- Footer: same lockup but VELORA /paper + DRIVE /muted; Pages/Contact/Social
  columns; socials default "#" until wiring (STEP 7).
- Fonts loaded per-component via Google Fonts @import (Syne 800, Inter 400-600).

## Adjustments accepted after STEP 1
- `/H1 Tablet` 56px and `/H2 Tablet` 36px created (apply on Tablet breakpoint).
- Lockup SVGs = Brand Assets reference ONLY, never placed on pages.
- Brand Assets page confirmed canvas-only (DesignPages, no path, not indexable).

## STEP 1 — Styles + logo assets ✅

### Color styles
| Path | Value |
|---|---|
| `/ink` | `#0A0A0A` |
| `/ink-soft` | `#131313` |
| `/gold` | `#C9A227` |
| `/gold-dim` | `rgba(201,162,39,0.14)` |
| `/paper` | `#FFFFFF` |
| `/muted` | `#A0A0A0` |
| `/hairline` | `rgba(255,255,255,0.08)` |

### Text styles
| Path | Spec |
|---|---|
| `/H1` | Syne 800 (`GF;Syne-800`), 76px, lh 1.02, ls -2%, /paper, tag h1 |
| `/H1 Mobile` | same, 38px — apply on 390px breakpoint trees |
| `/H2` | Syne 800, 48px, lh 1.1, ls -1.5%, /paper, tag h2 |
| `/H2 Mobile` | same, 28px |
| `/Body` | Inter 400 (`GF;Inter-regular`), 16px, lh 1.65, /muted, tag p |
| `/Eyebrow` | Inter 600, 12px, ls 14%, uppercase, /gold, tag p |

Note: Framer text styles reject `clamp()` (silently coerced), hence the
fixed desktop + Mobile variant pairs. Accepted decision: every page header
is an H1 (tag h1), styled at H2 scale — only one H1 per page.

### Logo assets (uploaded via data-URI import, live on Framer CDN)
| Asset | Framer URL |
|---|---|
| velora-mark-gold | `https://framerusercontent.com/images/kDoszPyjnCRg0YRDSEl7M5IjdsA.svg` |
| velora-lockup-gold | `https://framerusercontent.com/images/QYlXgSlbniYvDyQEqlDyHX0iecc.svg` |
| velora-lockup-white | `https://framerusercontent.com/images/sOJ5QpwepQmk3HFYbC4iXd8UPo.svg` |

They live on design page "Brand Assets" (`IT7zDWhSn`), nodes
`P7AbUohAR` (mark), `W7hSzMT_q` (lockup gold), `psWmh9BT5` (lockup white).

⚠️ Lockup SVGs draw VELORA/DRIVE with `<text>` — as `<img>`/backgroundImage the
Syne/Inter font-family will NOT load (falls back to Helvetica). For Nav/Footer
use inline SVG nodes (site loads Syne+Inter so inline text renders correctly),
or rebuild the wordmark as native Framer Text next to the mark SVG.

## Project facts
- Page `/` = `augiA20Il` (empty). No components yet.
- Fonts confirmed available: `GF;Syne-800`, `GF;Inter-regular/500/600/700`.
- Car photos: NOT uploaded yet — user uploads before STEP 4. Hero + divider get
  labelled empty image frames until then.
- catbox.moe is blocked by the sandbox proxy — upload assets as
  `data:image/svg+xml;base64,...` backgroundImage instead; Framer re-hosts them.

## Remaining steps (from brief)
2. Nav, Footer, ButtonPrimary, ButtonGhost, WhatsAppButton
3. CarCard + StatItem, StepItem, FeatureCard, TestimonialCard, CTABand, SectionHeading
4. Accueil (4 sub-messages: NAV+HERO / TRUST+FLEET / STEPS+POURQUOI / DIVIDER+TÉMOIGNAGES+CTA)
5. Conditions (structure + placeholders only — real copy comes as STEP 5B)
6. Contact
7. Wiring (wa.me/212632508708) + SEO
8. 390px review + CRAFT BAR verification
9. Arabic locale (RTL)
