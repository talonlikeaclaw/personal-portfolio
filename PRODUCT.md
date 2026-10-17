# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: recruiters and HR screeners evaluating Talon Dunbar for full-time infrastructure, DevOps, platform, and software engineering roles.** They arrive from a resume, LinkedIn, or a referral, usually on mobile or a laptop between other tasks, and they are deciding whether to advance him. They are not reading closely: they scan for role, focus area, location, and evidence of real work, then leave or forward the link.

**Secondarily: Montreal and Quebec employers who hire in French.** The French version is a working surface for these visitors, not a courtesy translation.

Not a confirmed primary audience: engineers who read case studies end to end. That depth exists and is real, but it is supporting evidence for the screener's decision rather than a separate target.

## Product Purpose

A personal portfolio that converts a screening visit into a hiring conversation. It exists to answer four screener questions quickly and credibly — what role, what he has actually shipped, where he is based, and how to reach him — and to let anyone who wants the technical argument follow it into full case studies.

Success means an interview invite or recruiter outreach, sourced from this site.

## Positioning

**Range joined by delivery practice.** One person who does infrastructure work (Proxmox, TrueNAS, OpenTofu, Ansible, NixOS, backups, incident response) *and* full-stack application work (React, Next.js, Flask, Java, C#, PostgreSQL), with CI/CD, containerization, and deployment as the connective tissue between them rather than two unrelated skill lists.

The defensible part is not the list of tools: it is that both halves terminate in something that runs — a platform in production at Dawson College, an Azure-hosted service with a real pipeline, a homelab with documented recovery limits.

## Operating Context

- Read by screeners in a short pass, then revisited by technical interviewers who may open a specific case study.
- The site is the top of the funnel only; LinkedIn, GitHub, GitLab, and email are where the conversation continues.
- Maintained by editing TypeScript data files and JSON message files directly — no CMS, no admin surface, no editorial workflow.
- Published by pushing to `main`; GitLab CI builds a static export and deploys it to GitLab Pages.
- Authored in both languages by the same person, in the same pass. Content updates land in EN and FR together.
- Case studies are written to be truthful about what is not finished (the homelab documents missing monitoring, failover, and untested restores).

## Capabilities and Constraints

**Architecture constraints (verified in-repo):**

- Next.js 16 App Router with `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`. Pure static output: **no server runtime, no route handlers, no middleware, no server-side features**. Anything requiring a backend is out of scope by construction.
- i18n via `next-intl` with path-based routing: `en` and `fr`, default `en`, `/` redirects to `/en/`. All public pages live under `app/[locale]/`.
- Deployed to GitLab Pages from `.gitlab-ci.yml` on push to `main`. Canonical host: `https://portfolio.talonlikeaclaw.com` (`src/lib/site.ts`).
- Routes: one home page composing sections (hero, about, experience, projects, skills, education, achievements, contact), plus three case studies at `/[locale]/projects/{dawsasset,homelab,coral-reef}/`.
- Content model: project and skill entries are TypeScript arrays in `src/data/`; translatable fields use `LocalizedText` (`{ en, fr }`). All UI copy lives in `messages/{en,fr}.json` under namespaced keys.
- Assets are committed files under `public/` (headshot, 12 project images, DawsAsset diagrams and platform screenshots, leadership-award image). `cwebp` is the available image converter; the site ships WebP.
- Fonts self-hosted through `next/font/google`: Inter (body) and JetBrains Mono (headings, nav, code).
- Runtime third-party dependencies: the hero background is WebGL via `ogl` (ReactBits' FaultyTerminal), icons are `lucide-react` plus two adapted animated icons from Its Hover. No remote image, font, or data source is fetched at runtime — an earlier GitHub contribution chart loaded from `ghchart.rshah.org` was removed from the About section, and its stale footer credit was dropped in polish.
- No analytics, tag manager, or tracking script of any kind is installed. This is current state, not a documented policy.

**Terminology that must stay consistent:** "Infrastructure & Software Engineer" as the role label; EN and FR strings are the source of truth for all rendered copy, including data-layer text.

**Open decisions (not yet confirmed by the owner):**

- No stated availability window, start date, or notice period.
- Whether the site should speak to remote or non-local employers; the audience question returned recruiters, full-time roles, and Quebec employers, and nothing about remote-first companies.
- No documented accessibility standard or target (e.g. WCAG level) has been established for this project.
- Role-label scope: shipped copy says "Open to full-time infrastructure, DevOps, platform, and software engineering roles"; whether that list is exhaustive is unconfirmed. `CLAUDE.md` still describes a Spring 2026 internship availability window, which contradicts the shipped full-time copy and the 2023–2026 education dates — treat `CLAUDE.md` on this point as stale until the owner confirms.

## Brand Commitments

- **Name:** Talon Dunbar. The About copy deliberately keeps the "like a claw" mnemonic; it is a voice choice, not an accident.
- **Role label:** "Infrastructure & Software Engineer".
- **Voice:** plain, specific, first person, no marketing adjectives. Claims are attached to artifacts, and limitations are stated rather than hidden. Numbers appear only where they are verifiable (seven weeks, four departments, 2×4 TB mirror, R-score 34.8).
- **Visual identity already committed:** dark theme with a green accent (`#22c55e`); Inter + JetBrains Mono; "TD" favicon mark. No other logo or wordmark has been established.
- **Real identity assets only:** the committed headshot (`public/headshot.webp`) is the only portrait; no generated or illustrated stand-in should replace it.

## Evidence on Hand

- **DawsAsset** — shared asset-management platform on Odoo 17, delivered to production at Dawson College across four departments (Computer Science, Radiation Oncology, Mechanical Engineering Technologies, Civil Engineering Technology) in a seven-week internship (April–May 2026). Team of three: Talon Dunbar, Diego Bouda, Massi Djaiz, supervised by Victor Ponce. Full case study at `/[locale]/projects/dawsasset/` with copy in `messages/*.json`, an architecture diagram (`public/projects/dawsasset/architecture.webp`, source `architecture.drawio`), and five platform screenshots. Instrumentation: Docker, Nginx, PostgreSQL, backup planning, documentation, handoff.
- **The Coral Reef** — team capstone social card-game platform. Deployed to Azure App Service via a GitLab CI/CD pipeline (test, build, archive, deploy on tags) during the capstone; **the Azure deployment has since been taken down and `https://thecoralreef.club/` no longer serves the app**, so the site must not link to it or claim a live service. What remains runnable: the repository, the pipeline configuration, and the Docker Compose local stack (MongoDB + Azurite). Case study at `/[locale]/projects/coral-reef/`.
- **Homelab Infrastructure** — ongoing personal platform: Beelink SER6 Pro running Proxmox VE, TrueNAS SCALE mirror (2×4 TB), offsite VPS, OpenTofu + Ansible provisioning from a NixOS DevBox, Cloudflare Tunnel and Tailscale access, 3-2-1 backups. Includes a real incident traced to the `sp5100_tco` kernel watchdog, and a documented limitations list (no centralized monitoring, no log aggregation, no failover, no automated rollback, restores not comprehensively tested). Case study at `/[locale]/projects/homelab/`.
- **DawsHacks 2026 — 1st place:** Reachout AI, an SMS and voice assistant for feature phones, built with Twilio, Google Gemini API, and OpenWeatherMap. Code and DevPost links exist in the achievements section.
- **CS 2026 Leadership Award** at Dawson College, with a public announcement link and image (`public/leadership-award.webp`).
- **Education:** Dawson College, Diploma of College Studies — Computer Science Technology, 2023–2026, Montreal. R-score 34.8. English native, French conversational.
- **Twelve project entries** in `src/data/projects.ts` with repositories under `github.com/talonlikeaclaw`, including Godash (Go TUI for Proxmox), Canadian Immigration Viz, TrimTracker, Dawson Dial, Virtual Used Car Dealership, Dawscorp Task Manager, PicnicGo, Thermostat Driver, and Dotfiles.
- **Contact channels:** `talon@talonlikeaclaw.com`, LinkedIn (`/in/talon-dunbar`), GitHub (`talonlikeaclaw`), GitLab (`talonlikeaclaw`). There is no contact form, and no scheduling link.

**Absences that must not be fabricated:** no testimonials or reference quotes, no client or employer logos beyond Dawson College, no performance or business metrics for any project, no user research about site visitors, no published availability window, and no press coverage other than the leadership-award announcement.

## Product Principles

1. **The scan comes first.** A screener decides in seconds: role, focus area, location, and language switch must be legible before any interaction, and must not depend on scroll or hover.
2. **Depth is a follow-up, not a toll.** The case studies are there for whoever asks harder questions; nothing required to make the initial decision may be hidden behind them.
3. **Evidence over adjectives.** Every claim traces to an artifact — a repository, a live URL, a screenshot, a diagram, a named institution. No invented metrics, no mood adjectives standing where evidence should be.
4. **Range is one practice, not two lists.** Infrastructure and application work are presented as connected by delivery practice (CI/CD, containers, deployment), never as unrelated skill inventories.
5. **French is an audience, not a translation.** French content is written to be read as French by Quebec employers, and duplicate truths stay complete and consistent across both languages.
