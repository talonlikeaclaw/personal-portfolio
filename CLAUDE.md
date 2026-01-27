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

This is a static portfolio site built with Next.js 15, TypeScript, and Tailwind CSS v4. It's configured for GitLab Pages deployment via static export.

### Key Configuration

- **Static Export**: `next.config.ts` sets `output: 'export'` - no server required
- **Dark Theme Only**: CSS variables defined in `src/app/globals.css` using Tailwind v4's `@theme inline` directive
- **Deployment**: `.gitlab-ci.yml` builds and deploys to GitLab Pages on push to main
- **Fonts**: Inter (body) + JetBrains Mono (headings, nav, code elements) via `next/font/google`

### Structure

```
src/
├── app/
│   ├── layout.tsx     # Root layout, fonts (Inter + JetBrains Mono), metadata
│   ├── page.tsx       # Main page composing all sections
│   ├── globals.css    # Dark theme CSS variables, Tailwind config
│   └── icon.svg       # TD favicon
├── components/
│   ├── layout/        # Navbar, Footer (with attributions)
│   ├── sections/      # Hero, About, Skills, Projects, Education, Contact
│   └── ui/
│       ├── Container.tsx
│       ├── SectionHeading.tsx
│       ├── SkillCategory.tsx
│       ├── ProjectCard.tsx
│       └── FaultyTerminal.tsx  # WebGL terminal background (from ReactBits)
├── data/
│   ├── projects.ts    # Project entries with title, description, technologies, type, status, URLs
│   └── skills.ts      # Skill categories with name and skills array
└── lib/
    └── utils.ts       # cn() for class merging
```

### Data Layer

Content is stored as TypeScript arrays in `src/data/`:
- `projects.ts`: Project entries with title, description, technologies, type (team/solo), status, featured flag, URLs. Featured projects display with a green left border accent.
- `skills.ts`: Skill categories with name and skills array. Balance item counts visually — longer skill names need fewer items per category for consistent spacing.

To add/edit projects or skills, modify these data files directly.

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

- `ogl`: WebGL library for FaultyTerminal background
- `lucide-react`: Icons throughout the site
- `clsx` + `tailwind-merge`: Class name utilities
