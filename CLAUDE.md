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
- **Dark Theme**: CSS variables defined in `src/app/globals.css` using Tailwind v4's `@theme inline` directive
- **Deployment**: `.gitlab-ci.yml` builds and deploys to GitLab Pages on push to main

### Structure

```
src/
├── app/           # Next.js App Router (layout.tsx, page.tsx, globals.css)
├── components/
│   ├── layout/    # Navbar, Footer
│   ├── sections/  # Hero, About, Skills, Projects, Education, Contact
│   └── ui/        # Reusable: Container, SectionHeading, SkillCategory, ProjectCard
├── data/          # projects.ts, skills.ts (content as typed arrays)
└── lib/           # utils.ts (cn() for class merging)
```

### Data Layer

Content is stored as TypeScript arrays in `src/data/`:
- `projects.ts`: Project entries with title, description, technologies, type (team/solo), status, URLs
- `skills.ts`: Skill categories with name and skills array

To add/edit projects or skills, modify these data files directly.

### Styling

Uses Tailwind CSS v4 with custom theme colors:
- `bg-background`, `bg-card`, `text-text`, `text-muted`, `text-accent`, `border-border`
- Colors defined as CSS variables in globals.css and exposed via `@theme inline`
