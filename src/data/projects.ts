export interface Project {
  title: string;
  description: string;
  technologies: string[];
  type: "team" | "solo";
  status?: "in-progress" | "completed";
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  // Team projects first (more impressive for internships)
  {
    title: "Canadian Immigration Viz",
    description: "Interactive data visualization platform exploring Canadian immigration trends and statistics. Features dynamic charts and filtering capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    type: "team",
    status: "completed",
    liveUrl: "https://five20-project-safari-chiru-dunbar.onrender.com/",
    githubUrl: "https://github.com/talonlikeaclaw/canadian-immigration-visualization",
  },
  {
    title: "TrimTracker",
    description: "A salon booking and management system with appointment scheduling, client management, and service tracking. Containerized for easy deployment.",
    technologies: ["Flask", "PostgreSQL", "Docker", "Bootstrap"],
    type: "team",
    status: "completed",
    githubUrl: "https://github.com/talonlikeaclaw/trim-tracker",
  },
  {
    title: "Dawscorp Task Manager",
    description: "A Jira-like task management system built for team collaboration. Features include project boards, task assignment, progress tracking, and team management.",
    technologies: ["Java", "PostgreSQL", "JDBC"],
    type: "team",
    status: "completed",
    githubUrl: "https://github.com/talonlikeaclaw/dawscorp-task-manager",
  },
  {
    title: "Dawson Dial",
    description: "Event planning platform for Dawson College enabling scheduling of classes, office hours, and conferences. Built for professors and students to manage academic events and resources.",
    technologies: ["C#", "Avalonia", "Entity Framework"],
    type: "team",
    status: "completed",
    githubUrl: "https://github.com/talonlikeaclaw/dawson-dial",
  },
  {
    title: "Virtual Used Car Dealership",
    description: "Console-based dealership management system with vehicle browsing, advanced filtering/sorting, shopping cart, and transaction tracking. Supports both PostgreSQL and CSV persistence.",
    technologies: ["Java", "PostgreSQL", "Maven", "Strategy Pattern"],
    type: "team",
    status: "completed",
    githubUrl: "https://github.com/talonlikeaclaw/virtual-used-car-dealership",
  },
  // Solo projects - more technical/interesting ones first
  {
    title: "Godash",
    description: "A terminal user interface (TUI) dashboard for monitoring Proxmox virtual environments. Provides real-time stats and management capabilities.",
    technologies: ["Go", "Bubble Tea", "Proxmox API"],
    type: "solo",
    status: "in-progress",
    githubUrl: "https://github.com/talonlikeaclaw/godash",
  },
  {
    title: "PicnicGo",
    description: "Terminal-based deck-building card game inspired by Sushi Go. Features local multiplayer for 3-5 players, colorful ANSI graphics, and strategic card drafting mechanics.",
    technologies: ["Java", "ANSI", "CLI"],
    type: "solo",
    status: "completed",
    githubUrl: "https://github.com/talonlikeaclaw/picnic-go",
  },
  {
    title: "Thermostat Driver",
    description: "Python driver for the ADS7830 ADC to read thermistor and potentiometer values via I2C on Raspberry Pi. Calculates temperature from voltage readings using resistive divider math.",
    technologies: ["Python", "I2C", "Raspberry Pi", "ADS7830"],
    type: "solo",
    status: "completed",
    githubUrl: "https://github.com/talonlikeaclaw/thermostat-driver",
  },
  {
    title: "Tiny Task Manager",
    description: "A minimalist command-line task manager written in Rust. Features include task creation, completion tracking, and persistent storage.",
    technologies: ["Rust", "CLI", "Serde"],
    type: "solo",
    status: "completed",
    githubUrl: "https://github.com/talonlikeaclaw/tiny-task-manager",
  },
  {
    title: "Dotfiles",
    description: "Personal configuration files for Linux and macOS. Includes configs for Fish, Ghostty, Helix, Starship, Tmux, Zellij, and other developer tools.",
    technologies: ["Shell", "Fish", "Lua", "TOML"],
    type: "solo",
    status: "completed",
    githubUrl: "https://github.com/talonlikeaclaw/dotfiles",
  },
];
