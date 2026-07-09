# Velora Drive — Framer Build Status

Framer project: https://framer.com/projects/Rotating-Shape--GEGWH3kdF063y7XJY7TJ-4yscR
Brief: `velora-drive-claude-code-package.md` (uploaded zip). Execution is step-gated by the user.

**Current position: STEP 1 DONE. Waiting for "STEP 2".**

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
