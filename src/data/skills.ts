export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Front-End",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"],
  },
  {
    name: "Back-End",
    skills: ["Node.js", "Flask", "Django", "PostgreSQL", "MongoDB", "REST APIs", "AWS"],
  },
  {
    name: "Programming",
    skills: ["OOP", "Python", "C#", "Java", "Kotlin", "Jetpack Compose", "TDD"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitLab", "Jira", "CI/CD", "Docker", "Proxmox", "Bash"],
  },
  {
    name: "Infrastructure",
    skills: ["Raspberry Pi", "MQTT", "I2C", "UNIX/Linux"],
  },
  {
    name: "Exploring",
    skills: ["Rust", "Golang", "Local LLMs"],
  },
];
