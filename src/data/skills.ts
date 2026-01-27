export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Go", "Python", "C#", "Java", "Kotlin", "TypeScript", "JavaScript", "Rust", "Lua", "Bash", "PL/pgSQL"],
  },
  {
    name: "Infrastructure & DevOps",
    skills: ["Linux", "Docker", "CI/CD", "AWS", "Cloudflare", "Nginx", "Proxmox", "Self-Hosting"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Room", "EF Core", "JDBC", "Normalization", "LINQ"],
  },
  {
    name: "Software Engineering",
    skills: ["Git Workflows","Code Reviews", "Design Patterns", "OOP", "MVC", "TDD"],
  },
  {
    name: "Web Development",
    skills: ["React", "Next.js", "Express.js", "Flask", "REST APIs", "WebSockets", "OAuth2", "JWT"],
  },
  {
    name: "Developer Tooling",
    skills: ["Git", "GitLab", "Neovim", "tmux", "VSCodium", "Bruno", "Debugging"],
  },
];