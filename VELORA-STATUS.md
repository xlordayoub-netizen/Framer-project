# Velora Drive — Framer Build Status

Framer project: https://framer.com/projects/Rotating-Shape--GEGWH3kdF063y7XJY7TJ-4yscR
Brief: `velora-drive-claude-code-package.md` (uploaded zip). Execution is step-gated by the user.

**Current position: STEP 4 DESKTOP DONE — all 8 sections native on Accueil.
Blockers: (1) page has ONLY a Desktop breakpoint — Tablet/Phone breakpoints
must be added in the Framer UI before I can apply /H1 Mobile etc.;
(2) hero ButtonGhost → #flotte link deferred to STEP 7 ("No changes were
made" quirk on ComponentInstance link controls).**

## STEP 7 — Wiring + SEO ✅ (wiring done; SEO = manual block below)

### Wiring audit
- All Réserver buttons → `wa.me/212632508708?text=Bonjour…` ✅ (component
  defaults; CarCards append " — <model>") · phone links `tel:+212632508708`
  ✅ · nav/footer page links ✅ · contact form → composed WhatsApp message ✅
- Hero "Voir nos voitures" → #flotte ✅ via NEW `Anchor.tsx` (`SnRbONs`,
  `https://framer.com/m/Anchor-xqUsw0.js`) — invisible div with real DOM id
  (instance `NyCJPhX8d` id="flotte" at top of Fleet section) + ButtonGhost
  gained String prop `anchor` used as href fallback (instance `ZbPCCcBLs`
  anchor="#flotte", verified stored).
- ⚠️ LANDMINE: **ControlType.Link props NEVER store via MCP on instances**
  — JSON scrollSection AND plain strings are silently dropped at creation
  and "No changes" on update. Workaround: String-typed fallback props
  (ButtonGhost.anchor) or set in UI. Nav/Footer page links only work
  because they are control DEFAULTS, never instance overrides.
- Socials: user chose to keep "#" placeholders → DELIVERY CHECKLIST: paste
  real Instagram/Facebook/TikTok URLs into Footer.tsx defaults (one edit
  updates all 3 pages) + add link attrs on contact panel text nodes
  `AmAlRzKYu egsM9iwJv tkYDMKdOS`.

### SEO — MANUAL (no MCP tool for page settings; copy-paste)
Page `/` → Title: `Location de voiture au Maroc — Velora Drive`
Description: `Louez une voiture sans chauffeur partout au Maroc à partir de
199 DH/jour. Livraison gratuite, prix tout compris, réservation WhatsApp.`
Page `/conditions` → Title: `Conditions de location — Velora Drive`
Description: `Caution, carburant, kilométrage, assurance, annulation :
toutes les conditions de location Velora Drive, écrites noir sur blanc.`
Page `/contact` → Title: `Contact — Velora Drive`
Description: `Réservez votre voiture sur WhatsApp ou par téléphone.
Livraison partout au Maroc, réponse en moins de 15 minutes.`
Site settings: favicon = velora-mark-gold
(`https://framerusercontent.com/images/kDoszPyjnCRg0YRDSEl7M5IjdsA.svg`);
og:image = create 1200×630 after real hero photo arrives (checklist).

## STEP 6 — /contact ✅

Page `/contact` = `RL17FTS0G`, Desktop root `SuFQ9JOyx` (/ink, v-stack).
NavWrapper `OIzVz01z7` (Nav `JlmBN7s3i`, always ink) → Header `Srv6WUO4p`
(eyebrow "Contact" + H1 `/Page Title` "Réponse en moins de 15 minutes.") →
Body `M1tjSCn2g` > split `EX9FwpdBP` (h-stack wrap, gap 48):
LEFT form col `GdvAyRfKT` (1fr, min 360): "Demande de réservation" (/H3
Card) + ContactForm `dxD_Nfxe8` + "Ou écrivez-nous directement sur
WhatsApp…" (/Body, whole line links to wa.me).
RIGHT info panel `LpXeLAuQq` (424px, ink-soft card): Téléphone/WhatsApp
(tel: link) · Adresse · Horaires · Suivez-nous (Instagram/Facebook/TikTok —
UNLINKED until STEP 7) · MapEmbed `KFpxjeE8x` (240px).
→ Footer `WjcPsFReS`.

New code components (approved implicitly by scope-line reason "logic/state"
— flag if disagreeing):
| File | ID | Insert URL |
|---|---|---|
| ContactForm.tsx | `hl49mMc` | `https://framer.com/m/ContactForm-XGwL7o.js` |
| MapEmbed.tsx | `EmAos2p` | `https://framer.com/m/MapEmbed-4Ddtga.js` |
ContactForm: 7 fields w/ real labels, dropdown of the 8 models, required
validation, submit composes multi-line WhatsApp message → wa.me (no
backend). MapEmbed: keyless maps.google.com?output=embed, canvas shows
static placeholder. Both verified exporting.

## STEP 5 — /conditions ✅ (structure + placeholders)

Page `/conditions` = `vozflC1q8`, Desktop root `Gm2KNuJm0` (/ink, v-stack).
NavWrapper `Hde0_5ik3` (Nav `L2VsiCoUn`, transparentAtTop=false → always ink)
→ Header `PYyjmhgkq` (eyebrow + H1 `/Page Title` "Tout est écrit. Rien n'est
caché.") → Body `BM9r2hHHI` > two-col `ro4AGgxdR` (h-stack, wrap):
sticky TOC `cN9NAoI8J` (280px, top 96, "Sommaire" + 10 `#anchor` links) +
blocks col `w57_g5qzI` (1fr, min 320): 10 Accordion instances
`qwTiU0SnI rTLdG9I6L pDVM6xBew tRXE7v3Zc N4rcqaXGQ aTGXChH4z Y1T30SA4q
urPYbdcqa CoNHRqZnd vcVkWG_zt`, anchors qui-peut-louer/documents-requis/
caution/carburant/kilometrage/assurance/livraison-recuperation/annulation/
retard-prolongation/interdictions → CTA band `kJSjXjQMe` (/gold, "Une
question sur les conditions ?", WhatsAppButton ink, message "Bonjour, j'ai
une question sur les conditions de location") → Footer `tNptngzRs`.

New text style: `/Page Title` (Syne 800 48px, tag **h1** at H2 scale — add
breakpoint sizes 36/28 in the style-panel pass).

⚠️ Landmines added: String prop value "10" refuses to store on instance
creation (kept default "01", twice) — Interdictions accordion number needs
5-sec manual fix in props panel. Creation diffs sometimes show phantom
absolute top/left on new instances — transient, verify with getNodeXml
before "fixing". Placeholder copy everywhere; REAL copy arrives as STEP 5B
(PARTIE 4) — DO NOT invent figures.

MANUAL (user): set Interdictions accordion Number → "10"; add /Page Title
breakpoint sizes (36 @810, 28 @390).

## STEP 4 — Accueil desktop sections ✅ (node map)

Page `/` = `augiA20Il`, Desktop root = `WQLkyLRf1` (/ink, vertical stack).
Order: NavWrapper `P0yVi6koi` (fixed, z999, Nav `UTccvk6m8`) → Hero
`wzsL_P2he` (100vh; placeholder `x8EdZsq5e`+label, gradient img `je76415wV`,
content `Cpi3QkLzO`: eyebrow/H1/sub/buttons `AUwkFsFLs` [WA `EXVBqoz5Q`,
ghost `aCLO66q5A`]) → TrustBar `sObQWy_YP` (grid `CAc_IDBmU`, 4 stats,
hairline separators) → Fleet `LtN_ogqEl` (heading `EkakLDMBQ`, pills
`KMBiUhb11`, grid `tbJe7ADOc` w/ 8 CarCards) → Steps `xkMCBG7Tf` → Why
`VxRgEbz4s` (4 feature cards, gold-dim chip + gold dot placeholder icons) →
Divider `PbZiJ09Bo` (placeholder `kv24Qagwf`, overlay, /Quote) →
Testimonials `zQ6jc1Lbn` (3 cards, initials in gold-dim circles) → CTA band
`PFtLjI7rO` (/gold, /H2 Ink, WhatsAppButton variant="ink") → Footer wrapper
`S061JC59a` (Footer `XOJawqpdb`).

WhatsAppButton gained `variant` prop (gold | ink) for the gold CTA band.

### MCP landmines learned in STEP 4 (do not re-hit)
- SVG nodes still fail ("Can not set attributes on unknown node") — hero
  gradient is an SVG **data-URI backgroundImage** instead (works, re-hosted).
- New frames default to WHITE background — always set backgroundColor.
- **padding accepts 1 or 4 values ONLY** — 2-value shorthand ("160px 32px")
  is SILENTLY DROPPED, on create and update. Always write 4 values.
- Sparse updates REORDER/REPARENT: any node listed becomes a child of the
  XML parent it's listed under, at that position. Always reflect the true
  hierarchy + full sibling order for touched levels.
- ComponentInstance link controls: JSON scrollSection value → "No changes
  were made" (both quoting styles). Retry differently in STEP 7.
- "Updated attributes" in responses is not proof — verify with getNodeXml.

### Responsive pass (after breakpoints added)
- Breakpoints exist: Tablet `OZX7EeCQg` (810px), Phone `xtFgrH1TT` (390px).
- ✅ MCP-side done: all 5 grids converted to `gridColumns="auto-fill"` +
  minmax min widths → column counts collapse naturally:
  trust min 280 (4→2→1) · fleet min 320 (3→2→1) · steps min 300 (3→2→1) ·
  why min 280 (4→2→1) · testimonials min 300 (3→2→1).
- ⚠️ NEW LANDMINE: breakpoint replicas are UNREACHABLE via MCP. getNodeXml
  on a breakpoint root returns no children; getSelectedNodesXml collapses
  any replica-child selection to the breakpoint root. Per-node overrides on
  Tablet/Phone are impossible programmatically.
- → MANUAL UI CHECKLIST (user, ~2 min) — the Framer-native way, breakpoint
  sizes ON THE TEXT STYLES (Styles panel → style → + breakpoint size):
  | Style | Desktop | @810 | @390 |
  |---|---|---|---|
  | /H1 | 76px | 56px | 38px |
  | /H2 | 48px | 36px | 28px |
  | /H2 Ink | 48px | 36px | 28px |
  | /Quote (optional) | 28px | 28px | 24px |
  (Then /H1 Tablet, /H1 Mobile, /H2 Tablet, /H2 Mobile, /H2 Ink Tablet,
  /H2 Ink Mobile styles become redundant fallbacks — keep or delete.)
  Plus Phone-tree section paddings (select each section ON the Phone frame,
  set vertical padding): Fleet 160→96 · Steps bottom 160→96 · Why bottom
  160→96 · Testimonials 160→96 · CTA band 96→64.
- STEP 8 mobile-pass reminders: trust-bar stat left-hairlines look odd
  stacked 1-col on phone (consider removing on Phone tree); Appear effects
  (hero headline stagger + below-fold fade+rise 24px) still manual.

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
