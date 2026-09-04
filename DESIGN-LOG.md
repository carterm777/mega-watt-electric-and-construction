# Selection Log — Mega Watt Electric and Construction

Process per `section-style-repo.md`: Step 0 page inventory → per-section
layout → visual style → animation (each read from its own reference file),
with an element-inventory pass and a motion budget set before anything was
assigned. Both finishing passes run after every section existed once.

Art-direction row: **§8, `megawatt-electric`** in `_kit/ART-DIRECTION.md`.

---

## Step 0 — Page inventory

**Visual ambition:** maximal-and-layered, *engineered*. Not maximal in the
sense of ornament — maximal in the sense of hard structure: full-bleed colour
fields with no soft transitions between them, an accent used as a structural
plane rather than an outline, and a visible technical grid running under the
dark sections.

**Families:** bold-geometric dominant, industrial-utilitarian secondary.

**Rhythm (light / dark / accent cadence down the page).** This is the single
biggest driver of how different this page feels from its fifteen siblings, so
it was fixed before any section was designed:

| # | Section | Field |
|---|---|---|
| — | Header | void-black meta strip over an arctic-ink nav block |
| 1 | Hero | arctic ink **and** a duotoned photo field, split by a hard vertical seam; frost-steel stat band at the foot |
| 2 | Google Reviews | hoarfrost white, with an arctic-ink aggregate block set into it |
| 3 | Trust Badges | **arc-spark orange, full-bleed** — the page's one pure accent plane |
| 4 | Why Us | hoarfrost white |
| 5 | Services | arctic ink |
| 6 | Coverage | hoarfrost white, with an arctic-ink schematic plate |
| 7 | Our Story | void black |
| 8 | Final CTA | hard vertical split: arc-spark orange / void-black night photograph |
| 9 | FAQ | arctic ink |
| — | Footer | arctic ink with an arc-spark brand column, closing on a void-black bar |

Radius is zero everywhere. Depth (shadow) is used in exactly one place on the
whole page — the photo-diagnosis console. Everything else separates by colour
edge, hairline, or space.

**Imagery available per section** (from `_kit/IMAGE-CATALOG.md`, 14 images used):

- Hero — `panel-upgrade-hero` (duotoned into the right colour field)
- Reviews — none (deliberate: the aggregate figure is the visual)
- Trust badges — none (deliberate: four Lucide seals on a colour plane)
- Why Us — `explaining-panel`, `written-quote`, `van-paperwork`, `generator-hero`
- Services — `panel-new`, `rewire-rough-in`, `exterior-lighting`,
  `trench-conduit` (the farm feature), `pot-light-install`, `hottub-night`
- Coverage — none (deliberate: a hand-built schematic, see below)
- Story — `about-crew`
- Final CTA — `outage-night`
- FAQ / footer — none (deliberate)

**One duotone for the whole page.** Every photograph runs through the same
plate: void-black shadows lifting to a pale frost-steel highlight. That single
treatment is what makes fourteen shared stock images read as art direction
rather than a photo library.

---

## Per-section decisions

### Header / Navigation

- **Layout — Mega Menu Dropdown Nav** (`layouts/navigation.md`). Beats
  *Standard Horizontal Nav Bar* because the prompt's nav carries 15 service
  items and 10 service areas; a single-column dropdown of 15 items is a
  scrolling list, a 3-column mega panel is a contents page.
- **Visual style — Bold Color-Block Nav Bar** (assigned). A solid arctic-ink
  block with a void-black meta strip above it, and the click-to-call rendered
  as an orange block rather than a bordered button. *Avoid when* (muted
  palette) does not apply.
- **Animation — Underline Grow on Hover** + **CTA Button Magnetic Hover**
  (declined; see Pass 2). The nav link underline sweeps from the left
  (`Underline Sweep`, 260ms ease-out-quart) and the chevron rotates on open
  (`Icon Morph`, 260ms).
- **Element sequence:** no entrance — the header is present on load. Resting
  behaviours only: link underline sweep, chevron rotate, menu-item left-border
  slide, call-block fill shift. Reduced motion: all transitions off.
- **Mobile:** no hamburger (forbidden by the prompt). A horizontal shortcut
  strip that collapses to zero height once `useScrolled(48)` fires, leaving
  click-to-call only.

### 1. Hero

- **Layout — Hero with Embedded Trust Stat Bar** (assigned). *Avoid when* is
  "the business has no numbers worth leading with" — this one does: three real
  posted figures ($1,450 panel upgrades, $550 spa hookups, $100 off a missed
  same-day estimate). Nothing in the bar is invented, and no years-in-business
  figure appears anywhere on the page.
- **Visual style — Raw Industrial Grid Overlay** (assigned), combined with
  **Diagonal Split Panel**'s sibling from `image-and-visual-richness.md`,
  *Layered Depth Composition*: two hard vertical colour fields (arctic ink /
  duotoned photograph) divided by a 2px accent seam, with an 88px technical
  grid over the whole thing.
- **Animation — Staggered Load-In** (`animations/hero.md`) plus **Weighted Word
  Reveal** on the H1 — used once on the page, per the richness file.
- **Motion budget: 5 groups.** Element inventory:
  1. eyebrow — fade+rise 16px, 620ms ease-out-cubic, delay 60ms
  2. H1 — `WordReveal`, 62ms per word, 620ms each (delay 140ms)
  3. subheadline — fade+rise, delay 640ms
  4. badge strip — fade+rise as **one** unit, not four, delay 760ms
  5. CTA pair — fade+rise as one unit, delay 880ms
  Stat bar is a separate scroll group (`Staggered Rise`, 110ms step,
  threshold 0.18 / rootMargin -12%). Console has no entrance — it is present
  on load, because it must be above the fold.
  Reduced motion: all five collapse to final state, no transform, no delay.
- **Mandatory hero rules:** H1 wraps to 3 lines at 1440 (the copy column is
  deliberately *not* measure-capped — that cap was what produced near-single-word
  lines in the first build). The eyebrow's top edge sits on the console's top
  edge, its accent tick landing inside the console's 8px accent plane.

### Signature — the photo-diagnosis console

- **Layout — Quote or Estimate Request Form** (`layouts/forms.md`) crossed with
  **Configurator/Widget** framing from `layouts/interactive.md`.
- **Visual style — Bold Color-Blocked Interactive Panel**
  (`visual-styles/interactive.md`) with **Industrial Technical Interface
  Styling** for the field furniture (machined uppercase labels, hard 2px
  underlines under each input, no radius).
- **Animation — Field Focus Highlight**, **Inline Validation Feedback**,
  **Success State Confirmation** (`animations/forms.md`) and one
  **Cursor-Reactive Glow** — the only such element on the page, on the only
  dark panel that earns it.
- **Art-direction signature (assigned):** *the widget as a hard-edged intake
  console sitting half-out of the hero colour block, breaking the plane between
  two colour fields.* Built literally: the console is pulled left across the
  ink/photograph seam, and down far enough that its lower edge cuts through the
  hero's 8px accent plane and into the frost-steel stat band beneath it.
- Real behaviours: drag-and-drop with a live dragging state, a genuine local
  preview via `URL.createObjectURL` (revoked on replace and on unmount),
  MIME + 8 MB validation with written error copy, a labelled reading beat with
  a sweeping progress bar, and a confirmation state that answers with what
  happens next rather than a green tick. Full keyboard operation, real
  `<label>` elements, and a visually-hidden `aria-live` region carrying every
  state change.
- **Mobile:** a compact entry state — eyebrow, H2, labelled drop affordance,
  one CTA and the reassurance line. The rest of the console expands on
  interaction (or automatically once a photo is attached). This is what makes
  the zero-scroll fold requirement achievable at 390×844.

### 2. Google Reviews

- **Layout — Stat Counter and Testimonial Combo** (assigned). *Avoid when* is
  "the numbers aren't impressive enough" — 4.9 / 60+ carries a section.
- **Visual style — Star Rating Bold Color Accent** (assigned). The stars are
  the accent's only appearance in the light field, at 17px, beside a 72px
  aggregate numeral.
- **Richness technique — none/deliberate.** No photography: the aggregate block
  *is* the visual mass, set as a hard arctic-ink plane inside the hoarfrost
  field. Logged as a decision, not an omission.
- **Animation — Count-Up Stat Numbers on Scroll** (`<CountUp>` on 4.9, 1600ms
  ease-out-expo, threshold 0.4) + **Staggered Rise** across the five cards
  (110ms step).
- **Motion budget: 2 groups** — the aggregate counter, then the card cascade.
  Cards group icon+quote+attribution as one unit each. Resting behaviour: card
  hover swaps the fill and draws a 2px accent inset. Reduced motion: number
  renders final, cards fade only.
- Placeholder disclosure sits inside the aggregate block, quietly, with an
  `Info` icon — labelled honestly without a garish banner.

### 3. Trust Badges

- **Layout — Certification Badge Wall** (assigned). Four real credentials from
  the prompt; nothing fabricated, no BBB rating, no invented association.
- **Visual style — Badge or Seal Bold Treatment** (assigned). Full-bleed
  arc-spark plane — the one place the accent is a whole field rather than a
  rule. Four identical 54px ink seals, identical icon size and 1.7 stroke,
  divided by ink hairlines so the row reads as one system.
- **Icons:** Award / HardHat / Trophy / MapPin — distinct, meaning-matched, per
  the prompt.
- **Animation — Badge Fade and Scale-In on Scroll** (`rv--scale`, 95ms step).
  Resting behaviour: seal lifts 3px on hover. Reduced motion: opacity only.

### 4. Why Us

- **Layout — Alternating Benefit List** (assigned). *Avoid when* is "no
  supporting imagery per point" — four genuinely matched photographs exist.
- **Visual style — Filled Icon Badges** (assigned) plus *Overlapping or
  Bleeding Image*'s harder cousin: each row is a two-plane split with the
  duotone plate flush to the row edge and an 8px accent plane down its inner
  edge, flipping side row to row.
- **Animation — Sequential Reveal on Scroll**. Directional: the plate enters
  from the side it lives on (`rv--left` / `rv--right`, 700ms), the copy block
  rises. **Motion budget: 2 groups per row**, plate then copy — icon, heading
  and body move together, never itemised.
- Resting behaviour: plate zooms 1.045 on hover, icon badge flips from ink to
  accent. Reduced motion: no transform on either.
- **Numbered markers deliberately not used** — four reasons are not a sequence.

### 5. Services

- **Layout — Service Card Grid** (assigned), broken once. Six services in a
  3-column grid, with **Grid-Breaking Oversized Image**
  (`image-and-visual-richness.md`) applied to Farm & Agricultural Electrical:
  it takes a 2×2 cell and a full-height accent plane down its outer edge.
  *This is the art-direction risk* — the farm/acreage line is the one thing
  this business has that the other fifteen don't, so it gets structural weight
  rather than a place in a list.
- **Visual style — Duotone Image Treatment per Service** (assigned), with the
  AD's explicit instruction honoured: **one consistent duotone across all six**,
  the farm plate included. (First pass warmed the farm plate to the accent; the
  elevation sweep reverted it — see Pass 1.)
- **Animation — Staggered Grid Fade-In on Scroll** (110ms step, reading order)
  + **Image Zoom on Hover** and a card-top accent rule that appears on hover.
- **Motion budget: 6 groups** (one per card). Card image + title + body + price
  chip move as a single unit. Reduced motion: fade only, no zoom.

### 6. Service Area & Coverage

- **Layout — Interactive Location Finder** (assigned). *Avoid when* is "only
  one or two locations" — there are ten named towns plus a rural catch-all.
- **Visual style — Industrial Grid Coverage Map** (assigned). Hand-built:
  **no map embed, no tiles, no API key.** A deliberately abstract node diagram
  on a 52px technical grid, captioned in plain words as *a diagram of our run
  list, not a map, and not to scale* — so it never misrepresents real geography.
- **Animation — Location Search Live Filter** + **Sequential Line Draw**
  (`useDraw`, threshold 0.25, 650ms per run, 70ms apart) for the run lines.
- **Element sequence:** schematic plate fades in, run lines draw outward from
  the Edmonton hub in sequence, then the index responds to typing in real time
  with no full re-stagger per keystroke. Reduced motion: lines render whole.
- **Resting state discipline (Pass 2):** with an empty field the schematic sits
  quiet — steel run lines, outlined nodes, and one lit hub. The accent is the
  *answer to a query*, not the default. Non-matching search gets real copy and
  a phone number, not a shrug.

### 7. Our Story

- **Layout — Values-Led Story Block** (assigned). **Logged deviation:** the
  entry wants "3-4 value statements", and the prompt's story copy is three
  fixed paragraphs that ship verbatim. Rather than switch layouts, the three
  paragraphs are set as three value blocks with short added labels (*How It
  Started / Who Shows Up / Where We Go*) — connective microcopy of the kind the
  build brief permits, drawn directly from what each paragraph already says.
  Not one word of the story copy is rewritten, trimmed or reordered.
- **Timeline treatments were ruled out** per the AD's standing rule: the story
  contains no dates, and inventing one is forbidden.
- **Visual style — Dark Cinematic Narrative Band** (assigned). Void-black
  full-bleed band; the crew plate bleeds past the container to the viewport's
  left edge with an accent plane on its inner edge.
- **Animation — Photo Slow Zoom** replaced by a very slow **Layered Parallax
  Drift** (`useParallax(0.08)`, desktop only, static under 900px and under
  reduced motion) + **Staggered Rise** on the three blocks (140ms step). The
  plate itself uses `rv--clip`.
- **Motion budget: 4 groups** — plate, then three blocks (label + paragraph
  together each).

### 8. Final CTA

- **Layout — Urgent or Emergency CTA Banner** (assigned). Genuinely earned:
  24/7 availability is confirmed on the source site.
- **Visual style — Dark Cinematic CTA Background** (assigned), **built as a hard
  vertical split.** Logged reason: the Story band immediately above is also a
  dark cinematic field, and two adjacent dark cinematic sections read as one
  long tunnel. Splitting the banner — accent plane takes the ask, the night
  photograph takes the atmosphere, hard seam between — keeps the assigned
  visual style while restoring the page's colour-block rhythm.
- **Animation — Staggered Rise** on the ask (eyebrow → headline → support →
  button pair, 120ms step) plus one idle **Pulse** on the "lines open now"
  marker. **Motion budget: 4 groups + 1 idle.** No ambient drift stacked behind
  it — the section already has active foreground motion.

### 9. FAQ

- **Layout — Grid of Question Cards** (assigned). Its *Avoid when* is "answers
  are long", and these answers run ~50 words — so each card carries a real
  accordion inside it (`<button aria-expanded>` + `aria-controls` panel) rather
  than truncating. That is how the grid survives the caution.
- **Visual style — Dark Mode Technical FAQ** (assigned). Void-black cards on an
  arctic-ink field, machined `Q01…Q06` reference marks. Numbering is earned
  here: an FAQ index genuinely is a lookup list, which is the exception the
  "no 01/02/03" rule allows.
- **Animation — Accordion Expand/Collapse** + **Icon Morph** (plus→minus with a
  180° rotation, 260ms) + **Active Question Highlight** (accent left border and
  a raised fill on the open card) + **Staggered Fade-In on Scroll** (90ms step).
- **Motion budget: 6 groups + per-card interaction.** Reduced motion: no
  rotation, instant state.

### Footer

- **Layout — Mega Footer** (four columns per the prompt).
- **Visual style — Bold Color-Block Footer** (assigned), read as colour
  *blocking* rather than a wall of orange: the brand column sits on a solid
  arc-spark plane, the three link columns on arctic ink, the base bar on void
  black. The industrial grid carries down behind it so the page's structure
  doesn't stop before the end.
- **Animation — Link Column Staggered Fade-In on Scroll** (110ms per column,
  heading + links as one unit) + **Underline Sweep** on every link (a
  `background-size` draw, not a border toggle) + social icon lift on hover.
- Social links are placeholders pointing at the business's own site — no
  invented handles. Noted in `README.md`.

### Sticky mobile call bar

- **Sticky Bar Slide-In on Scroll Threshold** (`useScrolled(420)`), the whole
  bar entering as one unit. Page padding reserves its height so it never
  covers the footer.

---

## Pass 1 — Elevation sweep

Section by section, against each entry's own *Avoid when*:

| Section | Outcome |
|---|---|
| Header | Left as-is. Already at the assigned ambition; a magnetic-hover CTA would be a second cursor-linked effect competing with the console's glow. |
| Hero | **Upgraded.** The console originally stopped politely above the stat band. Increased its bottom pull and its own internal height so it genuinely cuts through the accent plane — the assigned signature was only half-built. Also reserved the badge strip's right edge so its rule terminates in open ink instead of vanishing under the console. |
| Reviews | **Upgraded.** The aggregate block left a hole beneath it in the light field; added the repeated primary CTA there (an ask the page owes at this point anyway) so the block carries its column. |
| Trust badges | Left as-is. A colour plane with four matched seals is the whole idea; anything more would dilute the one pure accent field on the page. |
| Why Us | Left as-is. Four alternating rows with directional entrances and hover on both plate and icon is already the full inventory. |
| Services | **Walked back, not up** — see Pass 2. |
| Coverage | **Upgraded.** Added `useDraw` run lines out from the hub and a closing CTA under the schematic; made the rural catch-all row span the index so the plate ends square. |
| Story | **Upgraded.** The plate now bleeds to the viewport edge rather than merely past the gutter, and a stray steel bar under it was replaced with the same accent plane the Why Us plates carry. |
| Final CTA | Left as-is at Pass 1; restructured at Pass 2 for coherence. |
| FAQ | **Fixed.** `align-items: start` was leaving the grid's gutter colour showing as blocks beside a taller open card. |
| Footer | **Upgraded.** Industrial grid carried down behind it. |

## Pass 2 — Coherence sweep

Four things changed because of what Pass 1 introduced or exposed:

1. **The farm plate's accent duotone was reverted.** Warming that one photo to
   arc-spark made the Services grid read as two treatments, contradicting the
   AD's explicit "a consistent duotone across all six so the grid reads as one
   system", and at 2×2 it swamped the page. The farm line keeps its weight
   through scale, a full-height accent plane, and oversized type — structure,
   not a second filter. The photograph itself was also swapped
   (`service-mast` → `trench-conduit`) because a mostly-blank stucco wall does
   not survive being the largest image on the page.
2. **Final CTA split.** Two consecutive dark cinematic bands (Story, CTA) read
   as one section; the hard accent/photograph split restores the cadence.
3. **The coverage accent was rationed.** Every node lit orange by default, so
   the filter interaction had nothing to say. Accent now means "this matched".
4. **Type scale pulled back.** The first build set the H1 at 92px against a
   measure-capped column, producing six lines including single words — the
   exact failure the hero rules name. Display max is now 3.45rem with the
   column uncapped: three lines, no orphan words. The same `ch`-on-a-body-font
   bug was collapsing four section headings into single-word stacks; those
   caps were removed too.

Contrast was re-checked at this point rather than assumed. Three tokens failed
AA at small sizes (`--c-steel-lift` on ink and on void, `--ink-on-accent-muted`
on the accent plane); a new `--c-steel-mid` step (5.5:1 on ink, 6.0:1 on void)
and a heavier accent-muted alpha (4.6:1) replaced them.

---

## What was deliberately not done

- **No embedded map.** Forbidden by the AD and unnecessary — the schematic is
  better design and makes no geographic claim.
- **No timeline in the story.** No dates exist; inventing one is forbidden.
- **No numbered markers** on Why Us or Services — neither is a sequence. The
  FAQ index is the one place numbering carries information.
- **No `useCursorGlow` outside the console**, no ambient drift stacked behind an
  animating section, and `WordReveal` used exactly once.
- **No financing element, no years-in-business figure, no invented credential,
  no fabricated social handle** — all four are explicitly ruled out by the
  prompt's fact summary.
