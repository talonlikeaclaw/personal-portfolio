---
target: critique
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
target_identity: "file:/home/talon/Code/active/personal-portfolio/src/app/[locale]/page.tsx"
target_fingerprint: "sha256:67c8a389466470c1000ffd32e3a27cbdbd239484cabe5f3f5a54b6118e1669c3"
target_path: /home/talon/Code/active/personal-portfolio/src/app/[locale]/page.tsx
timestamp: 2026-10-17T01-25-23Z
slug: src-app-locale-page-tsx
closed: true
---
# Critique — Talon Dunbar portfolio, home page

Target of record: `src/app/[locale]/page.tsx` — the home page and every component it composes. Case studies (`/[locale]/projects/{dawsasset,homelab,coral-reef}/`) reviewed as secondary evidence. Mode: **Experience** (portfolio / body of work).

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hash updates and `aria-expanded` on the drawer work; but a 7,208px page has no active-section indicator, and "Show 8 more projects" has no `aria-expanded`/`aria-controls` (`Projects.tsx:32-45`) so nothing announces the list grew 4→12. |
| 2 | Match System / Real World | 3 | Copy is plain and first-person where it matters; but Proxmox, TrueNAS, OpenTofu, LXCs, NixOS and `~/dev`/`~/approach`/`~/interests` are unglossed for the recruiter half of the audience, and the one explanation that exists (R-score) is a `title` attribute, unreachable on touch. |
| 3 | User Control and Freedom | 3 | The gallery lightbox is exemplary (dialog role, focus trap, Escape, focus return, scroll lock — all measured). The mobile drawer is its mirror image: no Escape handler, no backdrop dismissal (measured: tap at 180,600 left `#mobile-navigation` in the DOM), exit only via a 24×24 X. |
| 4 | Consistency and Standards | 3 | 36/36 focusables ringed, 0 `transition-all`, 0 in-flow shadows — but 4 of 14 card h3s render Inter where siblings render JetBrains Mono, the About panel trio measures 24/24/20px padding with blur on 2 of 3, and the Contact email card wears the primary accent recipe with a Chalk label. |
| 5 | Error Prevention | 3 | External links carry `rel="noopener noreferrer"`, images all have alt (0 unlabeled); but 10 of 12 project image paths emit a doubled slash (`/projects//coralreef.webp` → 308) and the award asset is ~5–9× oversized per dimension. |
| 6 | Recognition Rather Than Recall | 3 | Everything is labelled; but the DawsAsset study is 7,796px with 14 `h2` sections and no table of contents, and after expansion "Featured Projects" heads 12 visually identical cards with no featured marker. |
| 7 | Flexibility and Efficiency | n/a | Experience surface, one linear read-through; there is no repeated expert task to accelerate, and the browser's own find/zoom covers it. |
| 8 | Aesthetic and Minimalist Design | 3 | One chromatic hue (accent = 0.44% of home pixels), two text tones both clearing AA, hairlines carrying all structure; deducted for the typography drift, the About block repeating its own intro as 13 bullets, and screenshots ~10× brighter than the field (0.43 vs 0.04 luminance) dominating the eye. |
| 9 | Help Users Recognize, Diagnose, Recover from Errors | 2 | No `not-found` route exists; a mistyped URL ends on Next's bare white default with no nav and no anchor back. |
| 10 | Help and Documentation | n/a | Experience surface: the artifact is the documentation, and the case studies are already the depth layer. |
| **Total** | | **23/32 (72% — Good, low end)** | 8 heuristics scored; 7 and 10 `n/a`. |

Score honesty note: the band understates the single biggest problem. Nielsen's set has no row for "the page does not say where he is or whether he is available" — that gap sits under heuristics 1 and 2 and is reported as P0 below.

## Design Specificity Verdict

**Authored in content and voice; category-interchangeable in composition.** The words, the ordering and the evidence rules are unmistakably this product's. The skeleton a screener actually perceives — centered hero, card grid, chip cloud, one repeated section module — would drop into any infrastructure engineer's portfolio unchanged.

Product-grounded, cited: section order inverts the portfolio default (Projects above About, Skills second-to-last — `page.tsx:47-56`); Experience is one card about one real job, deep-linked to its study, titling the position rather than the role (`messages/en.json:100`); claims carry artifacts and honest status in the data layer (`projects.ts:29-32`, `:158-161`); Quebec credentialing is real (R-score + language badges, `Education.tsx:38-50`), not decoration; the homelab study's *Current Limitations* section ("no centralized metrics, service monitoring, or log aggregation", "no automated failover", "full restoration testing remains incomplete") is the most product-specific thing on the site; the mono/Inter split is operational (149 mono vs 34 Inter elements measured); the footer names its provenance (`Footer.tsx:4-11`).

Category-interchangeable: the hero is stock (172px ringed circular portrait, 60px name, accent role line, muted tagline, three near-equal buttons, bobbing cue — `Hero.tsx:51-101`); `SectionHeading` stamps all seven sections identically (7 h2s, all 36px/700 mono, all centered); the project card is the genre default; Achievements and Contact are stock. The strongest missed opportunity: the one claim PRODUCT.md calls defensible — "both halves terminate in something that runs" — has no visual form anywhere; Projects is a flat 12-card grid and the connective tissue appears only as a category label.

**Deterministic scan.** CLI over `src/`: **1 finding**, exit 0 — `design-system-font-size` at `src/components/ui/HomelabArchitectureDiagram.tsx:118` (the `text-[10px]` diagram caption). **False positive**: DESIGN.md documents that step explicitly ("Diagram arrow captions drop one more step to 10px at 0.1em — the floor of the ramp, used nowhere else"). The in-page run found more: home **2** (`line-length` ~100 chars across 2 of 3 prose lines in About; `radial-halo` on the 1% accent sheen, which DESIGN.md documents as intentional); homelab **17**, spanning `line-length`, `undersized functional text`, `hero eyebrow / pill chip`, and `nested cards`. Three of those rules the design review missed and they are worth taking seriously as a group: the 10px functional text, the pill-in-hero pattern, and card-inside-card containment in the diagram.

**Visual overlays.** Injection succeeded: `detect.js` (2.78 MB, 200) was loaded as a real `<script src>` into `:3100/en/`, `:3100/fr/` and `:3100/en/projects/homelab/`, the detector executed in-page, and overlay DOM (`.impeccable-overlay.impeccable-visible`, z 99999) was built. **No user-visible overlay is available to you**: the only working browser mode in this session is headless — the omp relay never connected ("extension never connected") and `headed: true` routes through that relay — so nothing was presented in a `[Human]` tab. Fallback signal: the in-page console lines and overlay labels quoted above. The live server was stopped (`live-server stop`; port 8400 refused afterwards) and the repo is clean (`git status --porcelain` empty).

## Overall Impression

This is a genuinely well-built site, and the evidence says so rather than the vibe: the two-tone text system clears AA on every surface it actually renders on, including text sitting over a live shader (worst case 5.27:1 for the muted tagline against the brightest pixel behind it); the focus ring is on 100% of focusables and the lightbox is the most correct interaction on the site. What holds it back is not craft, it is **consequence**: the hero — the only screen a 55-second screener is guaranteed to see — spends its entire budget on an ambient shader, a portrait and three near-equal buttons, while the two facts PRODUCT.md promises there (location, availability) first appear 7,000-10,700px down. The second-order problem is that everything else is a *card*: eight sections share one module, so eight kinds of evidence read as one kind, and the one composition that would make this site un-copyable (range joined by delivery) exists only as a sentence in PRODUCT.md.

## What's Working

1. **The color and depth system survives measurement, including the hard case.** 186 visible text nodes sampled with alpha-composited backgrounds: 0 failures, worst 5.47:1. Hero text was sampled against the true shader background (text hidden, re-shot): 5.27:1 muted, 10.58:1 chalk. One accent hue at 0.44% of page pixels; 0 `transition-all`; 0 in-flow shadows across 492 case-study elements; the only shadow on the site is the lightbox that genuinely floats.
2. **The gallery lightbox is the most correct interaction here.** `role="dialog"` + `aria-modal` + `aria-labelledby` → focus on close, Tab trapped, Escape closes, focus returns to the exact trigger, `body` scroll locked and released — all measured end-to-end.
3. **Honest evidence and a real French surface.** Status pills carry "Ongoing"/"In Progress"; the homelab study publishes its own limitations; `/fr/` is authored French (`lang="fr"`, ICU apostrophes intact, "Cote R : 34,8" with the French decimal comma, no English leakage). This is what makes the site credible to the technical reader, and it costs nothing to keep.

## Priority Issues

### [P0] The hero omits two of the four facts the product promises it will answer
- **What:** `Hero.tsx:51-101` renders portrait, name, role, tagline, three CTAs, cue — and nothing else; `messages/en.json:20-30` has no location or availability key. Measured at 375×812 (doc height 11,266px): the first visible "Montreal" is in Education at **y≈7,052**, the availability sentence is in Contact at **y≈10,699**. At 1440 the same first occurrence is 4,034px down.
- **Why it matters:** PRODUCT.md principle 1 — "role, focus area, location, and language switch must be legible before any interaction, and must not depend on scroll." Half of the promised set is missing from the only guaranteed screen, and this is the difference between a recruiter confirming "local, available, right shape" and a bounced tab.
- **Fix:** add one mono meta line under the role line (`Montréal, QC · Open to full-time infrastructure & software engineering roles`) from a new `hero.meta` key in both `messages/en.json` and `fr.json`, styled at the existing label recipe. No new component, no layout change.
- **Suggested command:** `$impeccable clarify`

### [P1] A mistyped URL ends the visit on an unstyled white page with no way back
- **What:** there is no `not-found.tsx` anywhere under `src/app` (verified by listing). The deployed artifact proves the consequence: `out/404.html` (7,399 B) carries **zero stylesheet references** and renders Next's bare default — `<title>404: This page could not be found.</title>`, system font, no nav, no anchor home. The dev-server render was measured the same way (white, serif, `lang=""`, 0 anchors, no nav; mean luminance 0.9807 vs 0.1042 for the home page).
- **Why it matters:** it is reachable by accident (case-study URLs typed without the canonical trailing slash, stale links) and it deletes the entire brand for a visitor who is already mid-decision. Every other screen on this site is a dark instrument; this one is a blank sheet.
- **Fix:** add `src/app/not-found.tsx` (static-export safe) rendering the site shell — fixed nav, `Container`, one display h1, two buttons to `/[locale]/` and `/[locale]/#projects` — so GitLab Pages serves a branded 404. Keep it dependency-light: it must not import locale-scoped providers that need `params`.
- **Suggested command:** `$impeccable harden`

### [P1] The full-viewport WebGL hero ignores `prefers-reduced-motion` and never idles
- **What:** `FaultyTerminal.tsx` contains no `matchMedia`, no `useReducedMotion`, no `document.hidden` check (grep: zero matches), while all nine animated icons use `useReducedMotion`. `Hero.tsx:45` passes `mouseReact={false}` but never `pause`, so the rAF loop runs unconditionally. Measured with `prefers-reduced-motion: reduce` active (`matchMedia(...).matches === true`, `.scroll-cue` computed `animation-name: none`): two frames 3.5s apart over the 1440×980 canvas differ in **24.58%** of pixels (mean channel delta 12.78) versus 32.34% under normal motion.
- **Why it matters:** DESIGN.md's own rule ("respect `prefers-reduced-motion` in every animation, including custom ones") is broken on the largest animated surface, on exactly the users who asked for less motion — and the same loop is the dominant GPU/battery cost for Casey through the whole session, in a canvas that keeps rendering 7,000px below the fold.
- **Fix:** subscribe to `matchMedia("(prefers-reduced-motion: reduce)")` and render a single static frame when it matches (re-arm on change); drive `pause` from an `IntersectionObserver` on the hero section, plus `visibilitychange`, so the loop halts off-screen and on tab switch.
- **Suggested command:** `$impeccable harden`

### [P2] Four of the system's own laws are broken in measurable places
- **What:** (a) **Typography** — 4 of 14 card h3s render Inter 20px/600 where siblings render JetBrains Mono (`Experience.tsx:21`, `Education.tsx:24`, `Achievements.tsx:29`, `:81`), against DESIGN.md's absolute rule; the first one is "Software Engineering Intern - Dawson College", the first heading after the hero. (b) **Recipe drift** — `About.tsx:121` (`~/interests`) takes `p-5` with no `backdrop-blur-sm` while `:53` and `:90` take `p-6` with blur, so one card in a three-card panel group is inset and unblurred. (c) **Primary label** — the Contact email card wears the accent border + 10% tint but labels itself Chalk `rgb(228,228,231)`, where the identical hero primary and nav mail button label themselves accent `rgb(34,197,94)` (`Contact.tsx:57-65`). (d) **Off-system text treatments** — `::selection` is white on accent = **2.28:1** (`globals.css:32-35`; should be `--background`, 8.67:1), and the hero scroll cue is `text-muted` at computed `opacity: 0.55` = **3.02:1** effective with `transition-property: opacity` (`Hero.tsx:99-103`), which is both below AA for 12px text and the one hover in the system that is neither a color nor a border event.
- **Why it matters:** the mono/Inter split and the two-tone text rule *are* this design's identity, and half-applied laws read as unfinished exactly where credentials are read. The two ratio failures sit under the documented No-Dim Rule ("never reach for opacity where Chalk Dim exists") and the Color-Event Rule.
- **Fix:** add `font-mono` to those four h3s; `p-6 backdrop-blur-sm` on `About.tsx:121`; `text-accent` on the Contact email span; `::selection { color: var(--background) }`; drop `opacity-55`/`transition-opacity` from the cue and let `text-muted` do the demotion (or use `text-muted` → `text-text` on hover/focus, which the Color-Event Rule allows).
- **Suggested command:** `$impeccable polish`

### [P2] On the dominant visit context, the navigation is the smallest target and "full size" enlarges nothing
- **What:** at 375×812: the hamburger is **24×24**, the smallest interactive box on the page, in the corner farthest from a thumb; its drawer has **no Escape handler** (`Navbar.tsx` has no keydown listener) and **no backdrop close** (measured: a real tap at (180,600) left `#mobile-navigation` open), so the only exits are the 24px X or one of four links; the drawer also exposes 4 of 8 sections, which is why the location answer sits ~7,000px down. On a case-study page, "Open … full size" produces a **343×297** panel holding a **301×150** image against an inline figure of **302×149** — the mechanism is in `CaseStudyGalleryFigure.tsx:127` (`sizes="100vw"`, `max-h-[calc(100vh-10rem)]`, `object-contain`), so at 375 the dialog resolves the same srcset candidate and the same cap as the inline stage. Separately, the award image ships **273,404 B at 3229×2480** (`Achievements.tsx:95-98`, no `srcset`) into a ~343px slot — the largest asset on the page, against a 34 KB headshot.
- **Why it matters:** PRODUCT.md names mobile as the primary context, and the screenshots *are* the evidence — a mobile interviewer who taps to read a label gets a 1px difference, and one-handed Casey has to hit a 24px target to navigate and another 24px target to escape a state she entered by accident.
- **Fix:** give the menu button a ≥44×44 hit box without changing the icon (`p-2.5 -m-2.5`); add Escape + backdrop close to the drawer; make the dialog stage actually zoomable (drop `max-h` cap + allow pan, or add a scale transform) so "full size" is larger than the inline figure; compress and `srcset` the award image with `cwebp`.
- **Suggested command:** `$impeccable adapt`

## Persona Red Flags

**Jordan — the recruiter who does not know what Proxmox is.** Deciding whether to advance, then maybe opening DawsAsset. The hero answers 2 of 4 questions (no city, no availability, no start date). The Projects grid he reaches opens with "Replaced spreadsheet tracking across four departments" — good — then "built on Proxmox and TrueNAS", "LXCs provisioned through OpenTofu", "GitLab CI/CD to Azure Web Apps": nothing glosses them, and Skills offers 53 unranked chips including `LazyGit`, `WezTerm`, `Bruno`. The one credential he can evaluate (R-score) hides its explanation in a `title` attribute, invisible on touch. There is no résumé link and `mailto:` carries no prefilled subject, so forwarding it costs extra work.

**Casey — distracted mobile user (the dominant context per PRODUCT.md).** The hero genuinely works here: portrait, name, role, tagline, three 328×50 buttons and the cue all fit inside 812px with no scroll. Then the 24×24 hamburger at (332,40) — the smallest control is the one that opens navigation — a drawer that cannot be dismissed except by a link or a 24px X, a drawer that omits Education (where her location answer lives), a "full size" viewer that renders 301×150, and a WebGL loop that never stops plus a 273 KB image into a 343px slot.

**Sam — keyboard-only, screen reader, 200% zoom.** Among the strongest surfaces here: all 33 focusables in DOM order carry a visible 2px accent ring (offset 2, 4 on the cue); landmarks, one h1, h2→h3 without skips, every image with alt, 0 unlabeled controls; the lightbox traps and restores focus; the 200% zoom proxy (720×450 @ dsf 2) shows 0 overflowing elements with the nav correctly collapsed. Red flags: no skip link (the first 7 Tab stops are nav before the h1); the scroll cue announces "Explore featured projects" while displaying "Explore my work" (WCAG 2.5.3 Label in Name — voice control "click Explore my work" fails); "Show 8 more projects" announces nothing about the list growing; the R-score explanation is `title`-only; and the site's largest motion ignores the OS setting. Also measured: at 320 CSS px the header cluster overflows by 6.8px — the menu button spans 302.8→326.8, so its box (and the 24×24 icon's right edge) is partly clipped with no scroll region to recover it.

**Marie-Claude — Quebec employer reading `/fr/` (from PRODUCT.md's audience).** The French surface holds up: `lang="fr"`, idiomatic copy, correct ICU apostrophes, French decimal comma, no leakage. But she hits the same two gaps in her own language: no "Montréal" in the hero and no availability line before Contact — "Basé à Montréal" is the single most useful sentence to her and it is ~7,000px down. The FR nav also omits Formation and Réalisations although `messages/fr.json:22-27` has the strings. And EN "French: Conversational" vs FR "Français : Intermédiaire" are not the same claim; decide which one is true.

**Devon — technical interviewer opening a case study (from PRODUCT.md's audience).** He gets the lightbox, the architecture diagram with real alt text, and Homelab's *Current Limitations* — the strongest trust signal on the site. Then DawsAsset: 7,796px, 14 `h2` sections, every id already present, and no table of contents or in-page nav; the six-item "Platform Capabilities" enumeration and seven timeline rows are the likely abandonment points. The only wayfinding is a fixed nav pointing at home-page sections and a "Back to projects" link.

## Minor Observations

1. **10 of 12 project images emit a doubled slash.** Leading-slash values in `projects.ts:69,87,105,121,133,145,158,174,186,198` concatenate as `/projects/${project.image}` → `/projects//coralreef.webp` (measured 308; the clean path is 200). One extra round trip where the host normalises, a broken image where it does not. Fix: strip the leading slash from those 10 entries.
2. **"Featured Projects" heads 12 cards once expanded, and nothing marks the featured four** — all four carry identical `1px #27272a` borders and 8px radius. `CLAUDE.md` still documents a green left-border accent that no longer exists in `ProjectCard.tsx`; restore a marker or rename the heading on expansion.
3. **Documentation drift that will mislead the next reviewer.** DESIGN.md's measured heights (7,774px @1440, 11,037px @375) no longer match today's (7,208px @1440; 11,266-11,310px @375); its focus-ring census says "31 of 32" where the code now measures 36/36; `CLAUDE.md` still describes the Spring 2026 internship window, the removed GitHub contribution chart, and the featured-card green border — all three contradicted by shipped code.
4. **Duplicate controls.** The language toggle and mail button exist twice in the DOM (desktop `hidden lg:flex` group and the `lg:hidden` group). They are `display:none` and unfocusable, but they duplicate accessible names "Switch language" / "Contact me" and inflate DOM-based audits.
5. **The nav omits 2 of 8 sections** (`Navbar.tsx:10-15`: projects, experience, about, skills). Education and Achievements are unreachable from the bar — which is why the location answer is 7,000px away, and a direct argument for the P0 fix rather than a nav change.
6. **Two hero controls share one destination.** "View Projects" (`Hero.tsx:78`) and the cue (`:99`) both target `#projects`; the cue could carry a distinct payload.
7. **The mobile drawer is not full-width as documented** — measured 328×209 inside the `Container`, where DESIGN.md describes a full-width drawer on the bar's translucent surface.
8. **One unbacked claim.** About's "Competes as a Grand Champion in Rocket League" (`messages/en.json:58`) is the only statement on the page with no artifact behind it — an edge case against PRODUCT.md principle 3, in the densest card.
9. **The case-study meta row holds 5 pills** (Internship · Team project · Production · Seven weeks · Odoo 17) — data rather than decisions, so a soft flag only.
10. **Desktop nav holds 7 controls** (wordmark + 4 links + locale + mail), and the first Projects viewport holds 8 (card links + disclosure). Both exceed the ≤4 working-memory guide, though neither forces a decision.

## Questions to Consider

1. The hero is the only screen a 55-second screener is guaranteed to see. What does it look like if the DawsAsset card's first sentence — "Production asset-management platform… four departments… seven weeks" — *is* the hero, and the shader becomes the ground rather than the subject?
2. PRODUCT.md calls the defensible claim "both halves terminate in something that runs". Where is that join in the composition? Would ordering projects by deployment reality (production → ongoing → local-only) with each card naming its deploy target do more than any copy change?
3. The most trustworthy surface on the site is the homelab page's list of what does *not* work. Why is that honesty 5,669px deep on a secondary page — and what does the home page's Homelab card look like if it carries one limitation line the way it already carries "Infrastructure as Code."?
4. If 375 is the primary context, what survives a 375-first redesign — the 24×24 hamburger, a four-link drawer that skips Education, a "full size" viewer that renders 301×150? Which of those was a desktop decision that mobile inherited?
5. Every section is the same module: centered mono h2, mono subtitle, card stack. Is that an 80px rhythm holding a system together, or a habit making eight kinds of evidence look like one kind — what would Education look like composed as a transcript, or Achievements as a record rather than a card?
