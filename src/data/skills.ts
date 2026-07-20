import type { LocalizedText } from "@/i18n/routing";

export type Skill = string | LocalizedText;

export interface SkillCategory {
  name: LocalizedText;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: { en: "Infrastructure & DevOps", fr: "Infrastructure & DevOps" },
    skills: ["Infrastructure as Code", "OpenTofu", "Ansible", "Proxmox", "Linux", "Docker", "CI/CD", "Cloudflare", "Azure", "AWS"],
  },
  {
    name: { en: "Languages", fr: "Langages" },
    skills: ["Python", "C#", "Java", "Kotlin", "TypeScript", "JavaScript", "Go", "Rust", "Lua", "XML", "Bash", "PL/pgSQL"],
  },
  {
    name: { en: "Web Development", fr: "Développement web" },
    skills: ["React", "Next.js", "Express.js", "Flask", "Tailwind CSS", "REST APIs", "WebSockets", "OAuth2", "JWT"],
  },
  {
    name: { en: "Developer Tooling", fr: "Outils de développement" },
    skills: ["Git", "GitHub", "GitLab", "OpenCode", "LazyGit", "Neovim", "WezTerm", "Tmux", "VSCodium", "Bruno", "Obsidian"],
  },
  {
    name: { en: "Databases & Data Access", fr: "Bases de données et accès aux données" },
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Room", "EF Core", "JDBC", "LINQ"],
  },
  {
    name: { en: "Software Engineering", fr: "Génie logiciel" },
    skills: [
      { en: "Git Workflows", fr: "Flux de travail Git" },
      { en: "Code Reviews", fr: "Revue de code" },
      { en: "Design Patterns", fr: "Patrons de conception" },
      "Multithreading",
    ],
  },
];
