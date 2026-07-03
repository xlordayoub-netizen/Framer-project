# Build Prompts — Luxury Watches Framer Site

Copy-paste prompts to finish the build. Each one is self-contained. Run them
in order in a Claude session with the Framer MCP connected.

> Before anything: in Framer press **Cmd+K → "MCP"** to reconnect (project went
> read-only). Confirm the MCP is live before running a prompt.

---

## 0 · Context header (paste once at the start of every new session)

```
You are building a luxury watch e-commerce site in Framer via the MCP.

DESIGN SYSTEM (already created — reuse, don't recreate):
- Colors: /Background #0A0E1A · /Surface #12172B · /Accent #7C3AED ·
  /Text #F0EEF8 · /Border Subtle rgba(240,238,248,0.08) · /WhatsApp Green #25D366
  Secondary text inline: rgba(240,238,248,0.6)
- Text styles: /Heading XL, /Heading LG, /Heading MD, /Body LG, /Body,
  /Body Small, /Price, /Button, /Nav Link, /Eyebrow

CODE COMPONENTS (already created — insert by URL):
- LuxButton      https://framer.com/m/LuxButton-twRCU2.js
- Navbar         https://framer.com/m/Navbar-4oMaLx.js
- ProductCard    https://framer.com/m/ProductCard-XAFfXl.js
- ProductGrid    https://framer.com/m/ProductGrid-8YGqSm.js
- WhatsAppButton https://framer.com/m/WhatsAppButton-ArXYMo.js
- ContactForm    https://framer.com/m/ContactForm-SGXNE7.js
- GlowOrb        https://framer.com/m/GlowOrb-23EgAH.js
- HeroVisual     https://framer.com/m/HeroVisual-tWpBCM.js

PAGES: / Home (augiA20Il, root WQLkyLRf1) · /collections (IJqVCLVGU) ·
/contact (k025zBVNU)

HARD RULES (MCP quirks — do not fight these):
- Never create SVG nodes → use code components for any vector/gradient.
- Never absolutely-position a ComponentInstance → only place instances inside
  stack layouts (in-flow). Wrap in a Frame first if pinning is needed.
- Don't use Frame backgroundImage → pass image props to code components.
- Create pages BEFORE setting Link controls, or the link is dropped silently.
- Keep every section in the Home root's vertical stack (WQLkyLRf1).
Reply "ready" and wait for the next step.
```

---

## 1 · Hero visual  *(interrupted here — do this first)*

```
In the Home page, insert a HeroVisual instance
(https://framer.com/m/HeroVisual-tWpBCM.js) into the HeroContent stack
iZYtjybV9, positioned AFTER the HeroText node eZYZEifje. Set width 460 and
height 460. It must sit in-flow inside the horizontal stack (no pinning).
```

## 2 · Social proof bar

```
In the Home root WQLkyLRf1, directly below the hero, add a horizontal stack
"SocialProof": full width, bg /Surface, padding 20/32, space-between, wraps on
mobile. Four items, each an icon-less text pair using /Body Small:
Free Delivery · Cash on Delivery · 7-Day Returns · 500+ Happy Customers.
Separate items with 1px /Border Subtle dividers.
```

## 3 · Featured products

```
In the Home root WQLkyLRf1, add a section "Featured": vertical stack, centered,
padding 96/32, maxWidth 1200. Header: /Eyebrow "Bestsellers" + /Heading LG
"Watches People Love". Below it a horizontal wrapping stack, gap 24, with three
ProductCard instances (https://framer.com/m/ProductCard-XAFfXl.js). Give each a
name, price (/Price) and a placeholder image via the component's image prop.
Each card links to /collections.
```

## 4 · Why Us

```
In the Home root WQLkyLRf1, add a section "WhyUs": padding 96/32, centered,
maxWidth 1200. /Heading LG "Why Buy From Us". Below, a horizontal wrapping
stack of three /Surface cards (radius 16, padding 32, 1px /Border Subtle), each
with a /Heading MD title + /Body text:
Uncompromising Quality · Fast Nationwide Delivery · Support That Answers.
```

## 5 · Final CTA

```
In the Home root WQLkyLRf1, add a section "FinalCTA": full width, bg /Surface,
padding 120/32, centered. /Heading LG "Your next watch is waiting." + one
LuxButton (https://framer.com/m/LuxButton-twRCU2.js) labelled "Shop the
Collection" linking to /collections.
```

## 6 · Footer

```
In the Home root WQLkyLRf1, add a "Footer": full width, bg /Background, top
border 1px /Border Subtle, padding 64/32. Row 1 (space-between): logo/wordmark
left; nav links (Home /, Collections /collections, Contact /contact) using
/Nav Link; social links + a WhatsAppButton
(https://framer.com/m/WhatsAppButton-ArXYMo.js) right. Row 2 centered:
/Body Small © 2026 copyright line.
```

## 7 · Collections page

```
On the /collections page IJqVCLVGU build, top to bottom in a vertical stack on
/Background: Navbar instance (https://framer.com/m/Navbar-4oMaLx.js, all links
set) → header section (/Eyebrow "The Collection" + /Heading LG "Every Watch,
One Place") → a ProductGrid instance
(https://framer.com/m/ProductGrid-8YGqSm.js), maxWidth 1200, centered →
the same Footer pattern from step 6.
```

## 8 · Contact page

```
On the /contact page k025zBVNU build, in a vertical stack on /Background:
Navbar instance (https://framer.com/m/Navbar-4oMaLx.js) → header /Heading LG
"Get In Touch" + /Body subline → a two-column row (wraps on mobile): left a
ContactForm instance (https://framer.com/m/ContactForm-SGXNE7.js), right a
column with a WhatsAppButton (https://framer.com/m/WhatsAppButton-ArXYMo.js) +
social links + /Body Small contact details → the Footer from step 6.
Replace the WhatsApp placeholder number 212600000000 with the real number.
```

## 9 · Final pass

```
Do a QA pass across /, /collections, /contact:
1. Every Navbar/footer/CTA link points to the correct existing page.
2. Add mobile variants: hero stack + all wrapping stacks collapse to single
   column; check padding on <768px.
3. Fonts and colors match the design system everywhere (no hard-coded hex that
   should be a style).
4. Replace all placeholder images and the 212600000000 WhatsApp number.
Report anything still broken.
```

---

### Tips for better results
- Run **one prompt per message** — the MCP is more reliable on small, scoped edits.
- If an edit returns "No changes were made", re-state the exact nodeId + the
  attribute you want changed.
- After each step, ask: *"screenshot the current Home page"* to verify before moving on.
