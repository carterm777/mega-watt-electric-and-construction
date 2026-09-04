# Mega Watt Electric and Construction — demo site

A single-page redesign concept for **Mega Watt Electric and Construction**
(Edmonton, Alberta), an owner-operated residential, commercial and
farm/agricultural electrical contractor.

**This is an unsolicited demo.** It is not affiliated with, commissioned by, or
approved by the business. Every page carries
`<meta name="robots" content="noindex, nofollow">`, `public/robots.txt`
disallows all crawlers, and `vercel.json` sends an `X-Robots-Tag` header to
match. Do not remove any of the three.

## Stack

- Vite 6 + React 18
- `lucide-react` for icons (the only icon source; no emoji anywhere)
- No CSS framework, no runtime CSS-in-JS, no backend
- Google Fonts: Space Grotesk (display) + Source Sans 3 (body)

## Running it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # serve the built output
```

## Structure

```
src/
  data/site.js          all page copy in one exported object
  lib/motion.jsx        shared motion primitives (provided)
  styles/
    tokens.css          the entire token system — the ONLY file with raw colours
    base.css            reset + a11y floor + motion variants (provided)
    app.css             page scaffolding and shared patterns
  components/           one .jsx + one .css per section
DESIGN-LOG.md           the layout / visual-style / animation selection log
```

Every colour on the page resolves to a token in `src/styles/tokens.css`. No
component stylesheet contains a hex value, an `rgb()`, or an `!important`, and
every selector is a single class (bare element and attribute selectors are
wrapped in `:where()` so they contribute zero specificity).

## Things a reviewer should know

- **The Google reviews are placeholder content.** All five reviews, the 4.9
  aggregate and the "60+ reviews" count are realistic stand-ins written for this
  demo. They are labelled as such inside the reviews section itself. Replace
  them with real Google Business Profile reviews before any real launch.
- **The photo-diagnosis console has no backend.** File validation, the local
  preview (`URL.createObjectURL`, revoked on replace and unmount), the reading
  beat and the confirmation state are all client-side. Nothing is uploaded or
  sent anywhere.
- **Social links are placeholders.** No verifiable Instagram, Facebook or
  YouTube profile was found for this business, so all three footer icons point
  at the business's own site (`megawattpro.com`) rather than an invented handle.
  Point them at real profiles or remove them before launch.
- **The coverage graphic is a schematic, not a map.** It is a hand-built SVG
  node diagram with no tile service, no API key, and no geographic accuracy — it
  is captioned as such on the page so it cannot be mistaken for one.
- **No street address is shown.** The source site publishes none, so the header
  and footer say "Edmonton, Canada" rather than a fabricated address.
- **No years-in-business figure, no financing, no BBB or trade-association
  claim** appears anywhere. None of the three is confirmed for this business.
- Credentials shown (Certified Master Electrician, journeyman-certified crew,
  "Best in Edmonton" recognition, locally owned and operated) and the posted
  prices ($1,450 panel upgrades, $550 spa hookups, $100 off a missed same-day
  estimate) come from the business's own site.

## Accessibility and quality floor

- One `<h1>`; one `<h2>` per section; `<h3>` for sub-items; no skipped levels.
- Every `<section>` is labelled by its own heading via `aria-labelledby`.
- Nav dropdowns open on focus and on click, close on Escape and on outside
  pointer-down, and are fully keyboard operable. No hover-only traps.
- The FAQ is real `<button aria-expanded aria-controls>` pairs.
- The console has real `<label>` elements and a visually hidden `aria-live`
  region carrying every state change; errors also render visibly.
- Body text meets AA contrast on every surface; large display type meets AA
  Large. Anchor targets carry `scroll-margin-top` so the sticky header never
  covers a heading after a nav jump.
- `prefers-reduced-motion` is respected throughout — every entrance, hover,
  parallax and idle animation has a defined fallback.
- No horizontal scroll at 390 / 768 / 1024 / 1440 / 1920.
