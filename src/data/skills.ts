import type { LocalizedText } from "@/i18n/routing";

export type Skill = string | LocalizedText;

export interface SkillCategory {
  name: LocalizedText;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: { en: "Languages", fr: "Langages" },
    skills: ["Python", "C#", "Java", "Kotlin", "TypeScript", "JavaScript", "Go", "Rust", "Lua", "Bash", "PL/pgSQL"],
  },
  {
    name: { en: "Infrastructure & DevOps", fr: "Infrastructure & DevOps" },
    skills: ["Linux", "Docker", "CI/CD", "Ansible", "OpenTofu", "Grafana", "TrueNAS", "Proxmox", "AWS", "Cloudflare", "Nginx"],
  },
  {
    name: { en: "Databases", fr: "Bases de données" },
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Room", "EF Core", "JDBC", "Normalization", "LINQ"],
  },
  {
    name: { en: "Software Engineering", fr: "Génie logiciel" },
    skills: [
      { en: "Git Workflows", fr: "Flux de travail Git" },
      { en: "Code Reviews", fr: "Revue de code" },
      { en: "Design Patterns", fr: "Patrons de conception" },
      "OOP",
      "MVC",
      "TDD",
      "Multithreading",
      "Async",
    ],
  },
  {
    name: { en: "Web Development", fr: "Développement web" },
    skills: ["React", "Next.js", "Express.js", "Flask", "Tailwind CSS", "REST APIs", "WebSockets", "OAuth2", "JWT"],
  },
  {
    name: { en: "Developer Tooling", fr: "Outils de développement" },
    skills: ["Git", "GitLab", "Neovim", "Tmux", "VSCodium", "Bruno", "SSH", "Obsidian", { en: "Debugging", fr: "Débogage" }, { en: "AI Agents", fr: "Agents IA" }],
  },
];
