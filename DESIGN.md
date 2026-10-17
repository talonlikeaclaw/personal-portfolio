---
name: Talon Dunbar Portfolio
description: A dark operations-console portfolio where an engineer's shipped systems are the interface.
colors:
  console-black: "#0a0a0f"
  panel-graphite: "#18181b"
  hairline-graphite: "#27272a"
  chalk: "#e4e4e7"
  chalk-dim: "#a1a1aa"
  signal-green: "#22c55e"
  signal-green-tint: "#22c55e1a"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: "40px"
    letterSpacing: "normal"
  title:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "normal"
  subhead:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "32px"
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: "20px"
    letterSpacing: "0.2em"
  micro:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "16px"
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  gutter: "16px"
  grid-gap: "24px"
  card-pad: "24px"
  section-y: "80px"
  case-section-y: "112px"
  stack-gap: "64px"
  container: "1024px"
  container-wide: "1152px"
components:
  button-primary:
    backgroundColor: "{colors.signal-green-tint}"
    textColor: "{colors.signal-green}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.signal-green}"
    textColor: "{colors.console-black}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.console-black}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    typography: "{typography.label}"
  button-secondary-hover:
    textColor: "{colors.signal-green}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  action-compact:
    backgroundColor: "{colors.signal-green-tint}"
    textColor: "{colors.signal-green}"
    rounded: "{rounded.lg}"
    padding: "6px 12px"
    typography: "{typography.label}"
  pill-meta:
    backgroundColor: "{colors.panel-graphite}"
    textColor: "{colors.signal-green}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
    typography: "{typography.label}"
  chip-skill:
    backgroundColor: "{colors.console-black}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.full}"
    padding: "6px 16px"
    typography: "{typography.label}"
  card-panel:
    backgroundColor: "{colors.panel-graphite}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-callout:
    backgroundColor: "{colors.signal-green-tint}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.lg}"
    padding: "24px"
  nav-link:
    textColor: "{colors.chalk}"
    typography: "{typography.title}"
  nav-bar:
    backgroundColor: "{colors.console-black}"
    textColor: "{colors.chalk}"
    height: "80px"
---

# Design System: Talon Dunbar Portfolio

## Overview

**Creative North Star: "The Operations Console"**

The site is built to read like a well-run control surface rather than a brochure. Every fact about Talon's work — a role, a date, a stack, a deployment target, a platform still running in production — appears as data on a dark panel, separated from its neighbours by a 1px hairline, and marked with exactly one status color. Nothing floats, nothing glows, and nothing asks to be admired. The visitor reads a system that is already working, and the reading is the pitch.

Density is high but never crowded: sections step on a fixed 80px rhythm, panels carry 24px of internal padding, and the page holds exactly two content widths. Hierarchy is carried by **family, size, and weight — not by dimming**. Prose runs in Inter; everything the tool would say (headings, navigation, labels, buttons, captions, values, code, even section subtitles) runs in JetBrains Mono. Depth is a line and a tonal step, never a shadow.

Motion is close to absent by design: no entrance choreography, no parallax on content, no hover lift. What exists is functional — a scroll cue that bobs, an icon whose stroke draws itself on hover, and the WebGL terminal behind the hero. The incumbent world is committed to the dark, terminal-native register; the confirmed rejection is dev-portfolio maximalism (neon accents, emoji, sticker badges, decorative fake terminal chrome).

**Key Characteristics:**

- Hairline-delimited dark panels on a near-black field; zero box-shadows in flow.
- One signal color (Signal Green) for status, action, and inline emphasis — never for large surfaces.
- JetBrains Mono as the machine voice, Inter only for prose paragraphs.
- Two content widths, one 80px vertical step, 8px radius almost everywhere.
- Hover and focus are **color and line events**; nothing moves, scales, or lifts.
- Confirmed feel: *tactile and confident*, reached today through committed accent fills and hairline shifts rather than motion.

## Colors

A single-hue instrument palette: five near-black-to-chalk neutrals on a 285° hue, plus one high-chroma green at 149.6° that carries every signal in the interface.

### Primary

- **Signal Green** (`#22c55e`, canonical oklch(72.3% 0.192 149.6)): the only chromatic color in the system. It marks the role line under the hero name, card titles, section eyebrows, meta pills, inline `<strong>` emphasis, focus rings, `::selection`, and every icon that denotes state. As a surface it appears only as a ≤10% alpha tint (`#22c55e1a`) or a solid fill under the pointer.

### Neutral

- **Console Black** (`#0a0a0f`, oklch(14.7% 0.011 285)): the page field and the base of every glass panel (`bg-background/35`→`/60`), the fill behind skill chips, and the code-block surface.
- **Panel Graphite** (`#18181b`, oklch(21.0% 0.006 286)): the working surface for every card, diagram, gallery frame, and the navigation's translucent bar at 80%.
- **Hairline Graphite** (`#27272a`, oklch(27.4% 0.006 286)): the 1px border that separates every surface. It is the system's primary structural device — the thing that replaces shadow.
- **Chalk** (`#e4e4e7`, oklch(92.0% 0.004 286)): leading text — prose paragraphs, headings, card titles, and anything that carries the argument.
- **Chalk Dim** (`#a1a1aa`, oklch(71.2% 0.013 286.1)): supporting text — prose descriptions, section subtitles, list copy, footer text, and secondary links.

**The two-tone text rule.** Chalk leads, Chalk Dim supports. Chalk Dim clears AA on every surface in the palette (7.7:1 on Console Black, 6.9:1 on Panel Graphite, 7.4:1 on the translucent card wash). The token had been collapsed to `#e4e4e7` — identical to Chalk — which flattened 32 elements into one tone; polish restored it. Do not let the two values converge again, and never reach for opacity to approximate the second tone.

**The One Signal Rule.** Signal Green is for status, action, and emphasis. A surface may take it at 10% alpha or less; it fills only small interactive elements and their hover states. At most one solid green fill is visible at a time.

**The Emphasis-Is-Color Rule.** Inline `<strong>` and `<b>` are Signal Green at 600 weight — that is the system's emphasis mechanism, applied globally in `globals.css`. Never bold text and leave it chalk.

## Typography

**Display Font:** JetBrains Mono (with `ui-monospace, monospace`)
**Body Font:** Inter (with `system-ui, sans-serif`)

**Character:** A two-voice pair split by speaker, not by role. JetBrains Mono is the machine's voice — precise, letterspaced where it labels, tightly tracked where it announces. Inter is the human voice, used only in prose sentences at 1.5 line-height. The contrast between the two carries the personality: system readout, human explanation.

Both faces are self-hosted through `next/font/google` with `display: swap`, and note the pairing exposes no third face anywhere.

### Hierarchy

- **Display** (700, 30px → 60px at `sm`, line-height 1, letter-spacing -0.025em): the hero name, and case-study `h1`s at 36px → 60px. The tightest tracking in the system.
- **Headline** (700, 30px → 36px, line-height 40px): section `h2`s through `SectionHeading`. Case-study section `h2`s step down to 24px → 30px, and the closing CTA `h2` to 20px → 24px.
- **Title** (600, 20px, line-height 28px): card titles. Project-card titles render in Signal Green; panel titles (`h3` in case studies and About) render in Chalk at the same size and weight.
- **Subhead** (600, 24px, line-height 32px): the hero's role line at `sm`, and the closing CTA `h2` inside case studies. Case-study section `h2`s step through this size on the way up to 30px.
- **Body** (400, 16px, line-height 24px): all prose, in Inter. Case-study prose is constrained to `max-w-4xl`; hero and section ledes to `max-w-xl`/`max-w-3xl`.
- **Label** (400–600, 14px, letter-spacing 0.2em when uppercase): eyebrows, meta pills, buttons, captions, navigation, and the `font-mono text-sm sm:text-base` section subtitles.
- **Micro** (600, 12px, letter-spacing 0.14em, uppercase): diagram section labels, card metadata, technology tags, and the project-card status note. Diagram arrow captions drop one more step to 10px at 0.1em — the floor of the ramp, used nowhere else.

### Named Rules

**The Machine Voice Rule.** JetBrains Mono speaks for the system: headings, navigation, buttons, labels, subtitles, meta, captions, numbers, and code. Inter speaks only for prose paragraphs. Mixing the two inside one element is a defect.

**The No-Dim Rule.** Hierarchy comes from family, size, and weight first; the Chalk/Graphite pair exists to demote supporting prose, not to fade copy into unreadability. Both tones clear AA on every surface — if a new text tone fails that, it is not a tone, it is a defect.

## Layout

One container primitive, used by ten components: `mx-auto max-w-5xl px-4 sm:px-6 lg:px-8` — a 1024px content column with 16/24/32px gutters. Projects alone widens to `max-w-6xl` (1152px) so cards can breathe in two columns. No other width is legitimate.

Vertical structure is a fixed step. The home page is eight `<section>` elements at `py-20` (80px), opened by a `min-h-screen` hero with `pt-24 pb-8`; anchor ids come from the sections themselves. Case studies use `<article className="py-28 sm:py-32">` (112/128px) with a local scaffold: back link → header with `mt-10 border-b pb-12` → section rail → content stack `mt-16 space-y-16` → closing CTA at `mt-16 border-t pt-8`. Measured page heights: home 7,832px at 1440 wide, 11,686px at 375 wide (FR 12,274px).

Grids are single-column below `sm` and use a consistent gap of 24px (`gap-6`). Two idioms cover almost every arrangement:

1. **Card grid** — `grid gap-6 md:grid-cols-2` (project cards, capability panels, gallery figures), with 3-column and 4-column variants for technical highlights and pipeline steps.
2. **Divider grid** — a parent `grid overflow-hidden rounded-lg border border-border` whose children carry `border-b border-border sm:border-r sm:border-b-0 sm:last:border-r-0` and a Panel Graphite fill, so internal lines come from child borders rather than gaps.

Long-form case-study pages hold a 4xl measure for prose (`max-w-4xl`) and let diagrams and figures break wider up to the container. The homelab page's trade-off list uses a two-column asymmetric split, `sm:grid-cols-[minmax(13rem,0.8fr)_1.7fr]`.

**The Two-Width Rule.** The page has exactly two content widths — 1024px and the projects' 1152px. A new section invents neither a third width nor its own padding scale.

**The 80px Step Rule.** Sections breathe on an 80px vertical step; only case studies escalate to 112/128px because they are read, not scanned.

## Elevation & Depth

The system is **flat in flow**: sampling both the home page and a case-study page at 1440 and 375 wide returns `box-shadow: none` on every element — no card shadows, no button shadows, no nav shadow. The single shipped exception is the full-screen gallery lightbox panel, which uses a large shadow (`shadow-2xl`) because it genuinely floats above the document.

Depth is instead built from three devices, in this order:

1. **Tonal steps** between Console Black and Panel Graphite, extended with translucent white-free layers (`bg-background/35`, `/45`, `/50`, `/60`, `bg-card/40`, `bg-card/50`, `bg-card/80`) that lighten or darken a plane without introducing a new hue.
2. **1px Hairline Graphite borders** on every surface edge — the primary structural signal, and the reason cards read as separate instruments rather than floating tiles.
3. **8px backdrop blur**, applied wherever a translucent plane has content passing behind it: the fixed navigation, the hero's secondary CTAs over the WebGL canvas, washed About cards, and hero imagery.

One signature wash sits at the edge of perception: several card tops carry `bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]` — a 1% Signal Green glow that reads as a faint instrument sheen rather than a gradient. It appears on project cards, About cards, Education, Achievements, and skill categories, and is always `pointer-events-none`.

Allowed going forward: soft shadows on overlays (modals, dropdowns, popovers, lightboxes) per the owner's decision. Not allowed: shadows on in-flow surfaces.

**The Hairline-First Rule.** If a surface needs to read as separate from the field, give it a 1px `#27272a` border and a tonal step. Reach for a shadow only when the element is genuinely above the document.

**The Blur-Means-Behind Rule.** Backdrop blur marks a translucent plane with moving or scrolling content behind it. It is not a decoration for static cards.

## Shapes

Form language is rectilinear and instrument-like, softened only at an 8px radius. A radius census across both sampled pages: **8px (`rounded-lg`) dominates** — cards, panels, buttons, figure frames, diagrams, code blocks, the lightbox panel. **4–6px is the inner tier**: diagram nodes and sub-cards, inline code, technology tags, the lightbox close button, and image frames nested inside a card take `rounded` (4px); the two small in-card links and the leadership-award image frame take `rounded-md` (6px). The tier exists so an element inside a card never wears the same corner as the card itself. `rounded-full` is reserved for data-shaped elements: meta pills, skill chips, and the timeline's numbered nodes.

Borders are always 1px, and accent borders are always translucent — `border-accent/50`, `/60`, `/70` — never solid. Filled accent surfaces pair with a matching tint: `border-accent/60 bg-accent/10` for callouts, `border-accent/50 bg-accent/5` for sub-surfaces inside diagrams, `border-accent/50 bg-accent/10 text-accent` for highlighted diagram nodes.

Portraits are circular with a Signal Green ring: 2px at 30% alpha on the hero portrait (`border-2 border-accent/30`), 1px at 30% on the About portrait (`border border-accent/30`). The hero ring was previously written at 1% alpha and rendered as nothing; polish restored the intended alpha.

**The 8px Rule.** Working surfaces are 8px. Pills are full. Diagram and inner sub-cards may take 4px. Nothing takes a bespoke radius.

**The Pill-For-Data Rule.** Fully round shapes are for short pieces of data — status, tool, tag, step number. Never for buttons, cards, or images.

## Components

### Hero

The first screen answers five questions in order, all centered in one 1024px column: portrait (80px, 128px at `sm`, 2px accent ring), name (Display), role (Signal Green, Subhead at `sm`), meta line (mono, Chalk Dim — location and availability), tagline (Inter, `max-w-xl`). Below them sits the **result panel** — the only tinted surface above the fold: the documented callout recipe (`border-accent/60`, `bg-accent/10`, 8px radius) holding a micro eyebrow (`PRODUCTION`), the flagship project's name, its one-sentence lede, and the single primary action ("Read case study"). Three secondary destinations follow as inline mono links, then the scroll cue. Everything is in flow: the cue no longer floats over the CTA block, which is what protects the 200%-zoom reflow. Reference heights with real copy: 812px (one screen) at 375 in EN, 900px at 1440; FR runs ~33px taller because its tagline and lede wrap further.

### Buttons and Actions

- **Shape:** 8px radius, 1px hairline border, `font-mono text-sm` label, no icon-only primary. Rows stack column-first below `sm`.
- **Primary:** Signal Green at 10% alpha on Console Black, Signal Green text, Signal Green border, `px-4 py-2` for the hero's result-panel CTA and case-study CTAs. Compact variant in the Experience card: `rounded-md px-3 py-1.5`. The hero's three destinations are no longer buttons — they are inline mono links at `py-1`, because only one action there is primary.
- **Primary Hover:** fills solid — `hover:bg-accent hover:text-black` — so the label flips to Console Black. This is the system's most tactile moment and its strongest signal of "this is the action."
- **Secondary:** Console Black at 40% over a backdrop blur, Chalk text, Hairline Graphite border; hover shifts only the border and text to Signal Green.
- **Focus:** `focus-visible:outline-2 focus-visible:outline-accent` with `outline-offset-2` as the default, `4` on the case-study back links and the hero scroll cue, and `[-2px]` on the gallery trigger, which sits flush inside its frame. 31 of 32 interactive elements carry the ring; the count is uniform enough that any element without one is a defect.
- **Navigation icon button:** circular-target square button, `border-accent bg-accent/10` with `p-2`, mail icon at 18px.

### Metadata Pills and Chips

- **Meta pill:** fully round, Panel Graphite fill, 1px Hairline Graphite border, `px-3 py-1.5`, `font-mono text-sm`, Signal Green text. Used for case-study meta (Internship, Team project, Production, Seven weeks, Odoo 17) inside a `flex flex-wrap gap-3` row.
- **Skill chip:** fully round, Console Black fill, `px-4 py-1.5`, `font-mono text-sm sm:text-base`, Chalk text — the only chip with a text-color hover (`hover:text-accent`). No border.
- **Status/tech badge:** fully round, `bg-accent/20`, `px-3 py-1`, `text-sm`, Signal Green — used for R-score and language badges in Education, and the four technology tags under DawsHacks.

### Cards, Panels, Callouts

- **Card:** 8px radius, 1px Hairline Graphite border, Panel Graphite fill, 24px padding, optional 1% radial sheen. Project cards open with a delivery eyebrow (macro type, 12px/0.14em, uppercase: `DELIVERY · TYPE`, e.g. `PRODUCTION · TEAM`), then the mono title, description, note, tech chips, and links. The image stage is fixed at `h-48` and `sm:h-60` with `object-cover object-top`, so cards in a row start at the same height regardless of screenshot aspect. Hover shifts the border to `border-accent/50` — the card's only hover state.
- **Panel:** the same recipe at `p-5` for grid children and `p-6 sm:p-8` for case-study set pieces (incident, delivery).
- **Callout:** Signal Green border at 60% alpha on a 10% tint, `p-6`, Chalk text — reserved for impact, lessons, and retention notes. Diagram sub-surfaces use the lighter 5% tint.
- **Sub-card:** 4px radius, Hairline Graphite border, `bg-background/50` — for inner timeline steps and incident details.

### Timeline Rail

The delivery timeline is the one signature list: `<ol className="border-l border-border">`, each step a `relative mb-5 pl-8` row with a numbered node at `absolute -left-3 h-6 w-6 rounded-full border border-accent bg-background font-mono text-xs font-bold text-accent`, and the step itself a `rounded border border-border bg-background/50 px-4 py-3 font-mono text-sm` bar. Vertical structure, not horizontal decoration.

### Navigation

Fixed bar, `h-20`, `bg-background/80 backdrop-blur-sm`, 1px bottom hairline. Wordmark is the site handle `talonlikeaclaw` in `font-mono text-xl font-bold sm:text-3xl`. Desktop links (`hidden lg:flex`, `gap-6`) are mono at 18px, hover to Signal Green. The language toggle sits beside a square accent-tinted mail button. Below `lg`, links collapse into a menu button (`text-muted hover:text-text`, 24px icon) opening a full-width drawer on the bar's translucent surface. No scroll-driven state change, no shrinking bar, no active-link underline.

### Case Study Section Rail

Each case study opens with `CaseStudyNav`: a list of plain anchors to the page's `h2[id]` targets, labelled from the same translation keys as the headings themselves. It is in flow below `lg` (a two-column grid of 12px mono links, 24px target height), and becomes a sticky rail at `lg` (`top-[81px]`, `z-30`, `bg-background/80` + `backdrop-blur-sm`) so the reader keeps a map through 7,000–12,000px of argument. There is no scroll-spy and no active state — DESIGN.md allows no scroll-driven state changes. Every case-study `h2[id]` carries `scroll-mt-24 lg:scroll-mt-40` so an anchor lands clear of the fixed navbar (and the rail at `lg`); the global `scroll-padding-top: 1rem` still applies on top.

### Gallery Figures and Lightbox

A figure is a Panel Graphite card with an 8px radius and hairline border: a trigger button (`bg-background/60`, hover `bg-background/80`) holding the image inside a staged aspect (`aspect-video` by default, `aspect-[16/8.5]` when featured, natural aspect for diagrams), then a `border-t` figcaption — a mono title plus a 14px `leading-relaxed` description in Chalk-ish text, or a single mono caption line for text-mode figures. Clicking opens a fixed `z-[60]` dialog: `bg-black/85` backdrop button, centered panel at `max-w-6xl` with the system's one shadow, an 8px-radius hairline border, a square close button, and a scrollable stage at `bg-background/60`. Escape closes, focus is trapped on the close button, body scroll is locked, and focus returns to the trigger.

### Diagrams

Architecture diagrams are server-rendered panels (`rounded-lg border border-border bg-card p-4 sm:p-6`). Inside: uppercase mono section labels at 12px / 0.14em in Signal Green; nodes as `rounded border px-3 py-2 font-mono text-xs sm:text-sm font-semibold` chips, either neutral (`border-border bg-card text-text`) or emphasis (`border-accent/50 bg-accent/10 text-accent`); connectors as Signal Green lucide arrows with `-translate-y-1/2` on horizontal rails or `rotate-[-90deg]` on vertical ones. Environment panels use the 5% tint for the emphasized side and `bg-background/35` for the neutral side. The homelab diagram lays out as `lg:grid-cols-[1fr_auto_1.35fr_auto_1fr]`; the Coral Reef pipeline as `sm:grid-cols-2 lg:grid-cols-6`.

### Code

Inline code: `rounded bg-card px-1 font-mono text-[0.9em] text-text` (the homelab page) or `rounded bg-background px-1 font-mono text-[0.9em] text-text` (Coral Reef). Blocks: `<pre className="mt-6 overflow-x-auto rounded-lg border border-border bg-background p-5 font-mono text-xs leading-relaxed text-muted">`. Monospace is never decorative here — it always wraps a real value.

### Motion

Two functional motions exist. A CSS `scroll-cue` keyframe bobs the hero's arrow on a 1.8s `ease-in-out` loop, disabled under `prefers-reduced-motion`. Icons installed through the `motion/react` `LazyMotion` provider draw a single stroke path (`pathLength: [0,1]`, opacity fade, 0.35s `easeInOut`) when hovered or when their parent card is hovered, and skip entirely under `useReducedMotion`. The hero's WebGL terminal canvas is the only ambient animation, tinted `#338953` at 1.5–3 grid spacing with the mouse reaction disabled. No other component animates — content never fades, slides, or lifts on entry.

**The Color-Event Rule.** Hover and focus change color, border, and outline — never size, position, or shadow. Use `transition-colors`; `transition-all` is a defect here, because it also animates `outline-width` and `outline-offset`, so the focus ring grows in from `medium` (3px) instead of appearing at its measured 2px with a 2px offset. Every interactive element carries `focus-visible:outline-2 focus-visible:outline-accent`: offset 2 by default, 4 on case-study back links and the hero scroll cue, `[-2px]` on the gallery trigger.

## Do's and Don'ts

### Do:

- **Do** build every working surface as 8px radius, 1px `#27272a` border, Panel Graphite `#18181b` fill, 24px padding — the recipe is the system.
- **Do** keep JetBrains Mono for anything the system would say and Inter for prose sentences, following the Machine Voice Rule.
- **Do** tint Signal Green surfaces at ≤10% alpha (`#22c55e1a`) and reserve the solid fill for the primary action's hover state.
- **Do** express emphasis with Signal Green at 600 weight, inline, as `globals.css` already does for `<strong>`.
- **Do** use `focus-visible:outline-2 outline-accent` with an offset of 2 on controls and 4 on inline links; it is uniform across the codebase and must stay that way.
- **Do** carry structure with hairlines, tonal steps, and divider grids before considering any other device.
- **Do** keep the page at exactly two content widths and one 80px section step.
- **Do** respect `prefers-reduced-motion` in every animation, including custom ones.

### Don't:

- **Don't** add box-shadows to in-flow surfaces. The rendered system has none; shadows belong to overlays that genuinely float.
- **Don't** dim body copy to fake hierarchy, and don't reach for opacity where Chalk Dim exists. The two text tones clear AA on every surface; a third tone that fails that is not a tone.
- **Don't** use `transition-all`. It animates the focus ring along with the colors; the system transitions color only.
- **Don't** ship an interactive text link shorter than 24px. Isolated link rows carry `py-1` so their target box clears WCAG 2.2 target size on touch.
- **Don't** introduce neon, emoji, sticker badges, gradient text, or decorative fake terminal chrome — the confirmed anti-reference for this world.
- **Don't** add a second accent color, a second dark hue family, or a third content width.
- **Don't** use fully round shapes for buttons, cards, or images; pills are for data.
- **Don't** animate content on entry, on scroll, or on hover beyond the documented scroll cue, icon stroke, and WebGL canvas.
- **Don't** letter-space or uppercase prose; uppercase tracking is reserved for eyebrows and diagram labels.
- **Don't** replace the committed headshot with an illustration, silhouette, or generated stand-in.
