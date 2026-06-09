export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "C#", "Java", "Kotlin", "TypeScript", "JavaScript", "Go", "Rust", "Lua", "Bash", "PL/pgSQL"],
  },
  {
    name: "Infrastructure & DevOps",
    skills: ["Linux", "Docker", "CI/CD", "Ansible", "OpenTofu", "Grafana", "TrueNAS", "Proxmox", "AWS", "Cloudflare", "Nginx"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Room", "EF Core", "JDBC", "Normalization", "LINQ"],
  },
  {
    name: "Software Engineering",
    skills: ["Git Workflows","Code Reviews", "Design Patterns", "OOP", "MVC", "TDD", "Multithreading", "Async"],
  },
  {
    name: "Web Development",
    skills: ["React", "Next.js", "Express.js", "Flask", "Tailwind CSS", "REST APIs", "WebSockets", "OAuth2", "JWT"],
  },
  {
    name: "Developer Tooling",
    skills: ["Git", "GitLab", "Neovim", "Tmux", "VSCodium", "Bruno", "SSH", "Obsidian", "Debugging", "AI Agents"],
  },
];