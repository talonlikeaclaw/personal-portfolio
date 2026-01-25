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
    skills: ["Linux", "Docker", "Docker Compose", "Proxmox", "AWS", "CI/CD", "Nginx", "Cloudflare", "Reverse Proxy", "Load Balancing", "Rate Limiting", "CDN", "DNS", "SSL/TLS", "SSH", "SFTP", "Self-Hosting"],
  },
  {
    name: "Web Development",
    skills: ["React", "Next.js", "Express.js", "Vite", "Flask", "REST APIs", "WebSockets", "OAuth2", "ROPC", "JWT", "Performance Optimization"],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Entity Framework Core", "Room", "Normalization", "LINQ"],
  },
  {
    name: "Software Engineering",
    skills: ["Git Workflows", "Code Reviews", "Design Patterns", "OOP", "MVC", "TDD", "Multithreading"],
  },
  {
    name: "Developer Tooling",
    skills: ["Git", "GitLab", "Debugging", "Logging", "Neovim", "tmux", "VSCodium", "Bruno", "Local LLMs"],
  },
];