# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build (outputs to out/)
npm run lint     # ESLint
npx serve out    # Serve static export locally
```

## Architecture

This is a static portfolio site built with Next.js 16, TypeScript, and Tailwind CSS v4. It's configured for GitLab Pages deployment via static export.

### Key Configuration

- **Static Export**: `next.config.ts` sets `output: 'export'` - no server required. The next-intl plugin wraps the config (`withNextIntl`).
- **Internationalization**: Bilingual (English/French) via `next-intl` with path-based routing (`/en/`, `/fr/`). See the dedicated i18n section below.
- **Dark Theme Only**: CSS variables defined in `src/app/globals.css` using Tailwind v4's `@theme inline` directive
- **Deployment**: `.gitlab-ci.yml` builds and deploys to GitLab Pages on push to main
- **Fonts**: Inter (body) + JetBrains Mono (headings, nav, code elements) via `next/font/google`

### Structure

```
src/
├── app/
│   ├── layout.tsx          # Minimal pass-through root layout (no <html>)
│   ├── page.tsx            # Root redirect → /en
│   ├── globals.css         # Dark theme CSS variables, Tailwind config
│   ├── icon.svg            # TD favicon
│   └── [locale]/
│       ├── layout.tsx      # Locale layout: fonts, <html lang>, metadata, NextIntlClientProvider
│       └── page.tsx        # Main page composing all sections
├── i18n/
│   ├── routing.ts          # Locales (en, fr), defaultLocale, LocalizedText type
│   └── request.ts          # Static-export-safe request config (loads messages/<locale>.json)
├── components/
│   ├── layout/             # Navbar, Footer (attributions), LanguageToggle
│   ├── sections/           # Hero, About, Projects, Skills, Education, Achievements, Contact
│   └── ui/
│       ├── Container.tsx
│       ├── SectionHeading.tsx
│       ├── SkillCategory.tsx
│       ├── ProjectCard.tsx
│       └── FaultyTerminal.tsx  # WebGL terminal background (from ReactBits)
├── data/
│   ├── projects.ts         # Project entries (title/description/note are LocalizedText)
│   └── skills.ts           # Skill categories (name is LocalizedText)
└── lib/
    └── utils.ts            # cn() for class merging
messages/                   # Translation files (root level)
├── en.json
└── fr.json
```

### Data Layer

Content is stored as TypeScript arrays in `src/data/`. Translatable text fields (`title`, `description`, `note`, category `name`) use the `LocalizedText` type (`{ en: string; fr: string }`); components read `value[locale]` via `useLocale()`.
- `projects.ts`: Project entries with title, description, technologies, type (team/solo), status, featured flag, URLs. Featured projects display with a green left border accent.
- `skills.ts`: Skill categories with name and skills array. Balance item counts visually — longer skill names need fewer items per category for consistent spacing.

To add/edit projects or skills, modify these data files directly (provide both `en` and `fr` for translatable fields).

### Internationalization (i18n)

Bilingual EN/FR via `next-intl` with path-based routing. There is **no middleware** (static export forbids it) — the locale comes purely from the `[locale]` URL segment.

- **Routing**: `src/i18n/routing.ts` defines `locales: ["en", "fr"]`, `defaultLocale: "en"`. All pages live under `app/[locale]/`. Root `/` redirects to `/en/`.
- **Request config**: `src/i18n/request.ts` reads the locale via `requestLocale` (set by `setRequestLocale` in layout/page), falls back to `defaultLocale`, and dynamically imports `messages/<locale>.json`.
- **Translations**: `messages/en.json` and `messages/fr.json`, namespaced by section (`nav`, `hero`, `about`, `projects`, `skills`, `education`, `achievements`, `contact`, `footer`, `ui`, `metadata`). Edit these to change UI copy.
- **Usage in components**: `useTranslations("namespace")` + `t("key")`. Rich text with `<strong>` uses `t.rich("key", { strong: (chunks) => <strong>{chunks}</strong> })`. Interpolation uses `{count}`/`{year}` params.
- **ICU apostrophe escaping**: messages use ICU MessageFormat, where a single `'` starts a quoted section. Any literal apostrophe in a message MUST be doubled (`''`), e.g. `"What I''ve Built"`, `"d''équipe"`, `"l''<strong>infrastructure</strong>"`. Otherwise the apostrophe is dropped and following `<tags>`/`{interpolation}` break. This applies to ALL messages, not just rich text.
- **Language toggle**: `src/components/layout/LanguageToggle.tsx` — globe icon + target locale code in the Navbar; navigates to the same page in the other locale, preserving the current `#hash`.
- **Adding a locale**: add to `routing.locales`, create `messages/<locale>.json`, provide `fr`/`en` equivalents in data files (extend `LocalizedText`).

### Styling

Uses Tailwind CSS v4 with custom theme colors:
- `bg-background`, `bg-card`, `text-text`, `text-muted`, `text-accent`, `border-border`
- Colors defined as CSS variables in globals.css and exposed via `@theme inline`

**Color Palette (Dark Theme):**
| Purpose    | Variable       | Hex       |
|------------|----------------|-----------|
| Background | --background   | #0a0a0f   |
| Card       | --card         | #18181b   |
| Text       | --text         | #e4e4e7   |
| Muted      | --muted        | #a1a1aa   |
| Accent     | --accent       | #22c55e   |
| Border     | --border       | #27272a   |

### Design Principles

This portfolio is optimized for a ~55-second hiring manager scan. Key decisions:
- **Hero signals low risk**: role, focus area, availability, and soft skills (fast learner, team player, AI-literate) all visible above the fold
- **Featured projects**: 4 projects marked `featured: true` render first with a green left border; remaining projects follow in the same card format without the accent
- **Section headings are descriptive**, not generic (e.g. "What I've Built" not "Projects")
- **About section is concise**: first paragraph establishes developer identity and strengths; second paragraph is kept short with personality-defining hobbies only
- **Contact section creates urgency**: specific internship availability window (Spring 2026)
- **Education includes languages**: English (Native) / French (Conversational) badge alongside R-Score

### Special Components

**FaultyTerminal (Hero Background)**
- WebGL-based animated terminal effect from ReactBits
- Uses `ogl` library for rendering
- Configured with green tint (#338953) to match accent color
- Responsive grid sizing for mobile/desktop
- Mouse-reactive with page load animation

**GitHub Contribution Chart (About Section)**
- Uses ghchart.rshah.org to render contribution grid
- CSS filters (`invert hue-rotate-180`) for dark mode compatibility
- Horizontally scrollable on mobile, auto-scrolls to show recent commits

### External Dependencies

- `next-intl`: Internationalization (i18n) — bilingual EN/FR, routing, message formatting
- `ogl`: WebGL library for FaultyTerminal background
- `lucide-react`: Icons throughout the site
- `clsx` + `tailwind-merge`: Class name utilities
