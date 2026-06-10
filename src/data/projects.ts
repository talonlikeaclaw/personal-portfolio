export interface Project {
  title: string;
  description: string;
  technologies: string[];
  type: "team" | "solo";
  status?: "in-progress" | "completed";
  featured?: boolean;
  image?: string; // Path to image in /public/projects/ (e.g., "trim-tracker.png")
  note?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  // Team projects first (more impressive for internships)
  {
    title: "TrimTracker",
    description: "A salon booking and management system with appointment scheduling, client management, and service tracking. Containerized for easy deployment.",
    technologies: ["Flask", "PostgreSQL", "Docker", "Jinja"],
    type: "team",
    status: "completed",
    image: "/trimtracker.jpg",
    note: "Built for a server-side programming course.",
    githubUrl: "https://github.com/talonlikeaclaw/trim-tracker",
  },
  {
    title: "DawsAsset",
    description: "Odoo 17-based asset and inventory platform for Dawson College. Replaced spreadsheet tracking across four departments with barcode scanning, equipment loans, and a student self-service kiosk.",
    technologies: ["Python", "Odoo", "PostgreSQL", "Docker"],
    type: "team",
    status: "completed",
    featured: true,
    image: "/dawsasset.jpg",
    note: "Live production deployment at Dawson College.",
    githubUrl: "https://github.com/talonlikeaclaw/dawsasset",
  },
  {
    title: "Canadian Immigration Viz",
    description: "Interactive data visualization platform exploring Canadian immigration and language trends and statistics. Features dynamic charts and filtering capabilities.",
    technologies: ["React", "Vite", "Express.js", "Mocha", "Chai"],
    type: "team",
    status: "completed",
    featured: true,
    image: "/immigrationviz.jpg",
    note: "Data sourced from Statistics Canada census records.",
    liveUrl: "https://five20-project-safari-chiru-dunbar.onrender.com/",
    githubUrl: "https://github.com/talonlikeaclaw/canadian-immigration-visualization",
  },
  {
    title: "Dawson Dial",
    description: "Event planning platform for Dawson College enabling scheduling of classes, office hours, and conferences. Built for professors and students to manage academic events and resources.",
    technologies: ["C#", "Avalonia", "EF Core", "LINQ", "MSTest", "Moq"],
    type: "team",
    status: "completed",
    image: "/dawsondial.jpg",
    githubUrl: "https://github.com/talonlikeaclaw/dawson-dial",
  },
  {
    title: "Virtual Used Car Dealership",
    description: "Console-based dealership management simulation system with vehicle browsing, advanced filtering/sorting, shopping cart, and transaction tracking. Supports both PostgreSQL and CSV persistence.",
    technologies: ["Java", "PostgreSQL", "Maven", "JUnit"],
    type: "team",
    status: "completed",
    image: "/dealership.jpg",
    githubUrl: "https://github.com/talonlikeaclaw/virtual-used-car-dealership",
  },
  {
    title: "Dawscorp Task Manager",
    description: "A Jira-like task management system built for team collaboration. Features include project boards, task assignment, progress tracking, and team management.",
    technologies: ["Java", "PostgreSQL", "PL/pgSQL", "JDBC", "JUnit"],
    type: "team",
    status: "completed",
    image: "/dawscorp.jpg",
    githubUrl: "https://github.com/talonlikeaclaw/dawscorp-task-manager",
  },
  // Solo projects - more technical/interesting ones first
  {
    title: "Self-Hosted Homelab",
    description: "17+ self-hosted services on local physical hardware, managed as code with Ansible and OpenTofu. TrueNAS provides storage with a 3-2-1 backup strategy including offsite VPS sync.",
    technologies: ["Proxmox", "TrueNAS", "Docker", "Ansible", "OpenTofu"],
    type: "solo",
    status: "in-progress",
    featured: true,
    image: "/homelab.jpg",
    note: "17+ services in production. No public repo.",
  },
  {
    title: "Godash",
    description: "A terminal user interface (TUI) dashboard for monitoring Proxmox virtual environments. Provides real-time stats and management capabilities.",
    technologies: ["Go", "Bubble Tea", "Proxmox API"],
    type: "solo",
    status: "in-progress",
    featured: true,
    image: "/godash.jpg",
    note: "Core monitoring features complete. Active development.",
    githubUrl: "https://github.com/talonlikeaclaw/godash",
  },
  {
    title: "PicnicGo",
    description: "Terminal-based deck-building card game inspired by Sushi Go. Features local multiplayer for 3-5 players, colorful ANSI graphics, and strategic card drafting mechanics.",
    technologies: ["Java", "ANSI", "CLI"],
    type: "solo",
    status: "completed",
    image: "/picnicgo.jpg",
    githubUrl: "https://github.com/talonlikeaclaw/picnic-go",
  },
  {
    title: "Thermostat Driver",
    description: "Python driver for the ADS7830 ADC to read thermistor and potentiometer values via I2C on Raspberry Pi. Calculates temperature from voltage readings using resistive divider math.",
    technologies: ["Python", "I2C", "Raspberry Pi", "ADS7830"],
    type: "solo",
    status: "completed",
    image: "/thermostat.jpg",
    githubUrl: "https://github.com/talonlikeaclaw/thermostat-driver",
  },
  {
    title: "Tiny Task Manager",
    description: "A minimalist command-line task manager written in Rust. Features include task creation, completion tracking, and persistent JSON storage.",
    technologies: ["Rust", "CLI", "Serde"],
    type: "solo",
    status: "completed",
    image: "/tinytask.jpg",
    githubUrl: "https://github.com/talonlikeaclaw/tiny-task-manager",
  },
  {
    title: "Dotfiles",
    description: "Personal configuration files for Linux and macOS. Includes configs for Zsh, Kitty, Tmux, and other developer tools.",
    technologies: ["Zsh", "JSON", "Lua", "TOML"],
    type: "solo",
    status: "completed",
    image: "/dotfiles.jpg",
    githubUrl: "https://github.com/talonlikeaclaw/dotfiles",
  },
];
