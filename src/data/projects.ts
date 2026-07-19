import type { LocalizedText } from "@/i18n/routing";

export interface Project {
  title: LocalizedText;
  description: LocalizedText;
  technologies: string[];
  type: "team" | "solo";
  status?: "in-progress" | "completed";
  featured?: boolean;
  image?: string;
  note?: LocalizedText;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyPath?: string;
}

export const projects: Project[] = [
  {
    title: { en: "DawsAsset", fr: "DawsAsset" },
    description: {
      en: "Odoo 17-based asset and inventory platform for Dawson College. Replaced spreadsheet tracking across four departments with barcode scanning, equipment loans, and a student self-service kiosk.",
      fr: "Plateforme de gestion d'équipements et d'inventaire basée sur Odoo 17 pour le Cégep Dawson. Remplace le suivi par tableurs dans quatre départements par numérisation de codes-barres, prêts d'équipement et un kiosque en libre-service pour les étudiants.",
    },
    technologies: ["Python", "Odoo", "PostgreSQL", "Docker"],
    type: "team",
    status: "completed",
    featured: true,
    image: "/dawsasset.webp",
    note: {
      en: "Deployed to production at Dawson College.",
      fr: "Déployé en production au Cégep Dawson.",
    },
    githubUrl: "https://github.com/talonlikeaclaw/dawsasset",
    caseStudyPath: "/projects/dawsasset/",
  },
  {
    title: { en: "The Coral Reef", fr: "The Coral Reef" },
    description: {
      en: "Full-stack social platform built around Tight Squeeze, a nautical card game inspired by Exploding Kittens. Features real-time multiplayer via Socket.IO, social auth, profile customization, friends system, leaderboard, and admin panel.",
      fr: "Plateforme sociale full-stack construite autour de Tight Squeeze, un jeu de cartes nautique inspiré d'Exploding Kittens. Comprend du multijoueur en temps réel via Socket.IO, authentification sociale, personnalisation de profil, système d'amis, classement et panneau d'administration.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Socket.IO",
      "Better Auth",
      "Docker",
      "GitLab CI",
    ],
    type: "team",
    status: "completed",
    featured: true,
    image: "/coralreef.webp",
    note: {
      en: "620 capstone project. Live at thecoralreef.club.",
      fr: "Projet de fin d'études (620). En ligne au thecoralreef.club.",
    },
    liveUrl: "https://thecoralreef.club/",
    githubUrl: "https://github.com/talonlikeaclaw/the-coral-reef",
  },
  {
    title: { en: "Canadian Immigration Viz", fr: "Canadian Immigration Viz" },
    description: {
      en: "Interactive data visualization platform exploring Canadian immigration and language trends and statistics. Features dynamic charts and filtering capabilities.",
      fr: "Plateforme interactive de visualisation de données explorant les tendances et statistiques de l'immigration et des langues au Canada. Comprend des graphiques dynamiques et des capacités de filtrage.",
    },
    technologies: ["React", "Vite", "Express.js", "Mocha", "Chai"],
    type: "team",
    status: "completed",
    image: "/immigrationviz.webp",
    note: {
      en: "Data sourced from Statistics Canada census records.",
      fr: "Données tirées des recensements de Statistique Canada.",
    },
    liveUrl: "https://five20-project-safari-chiru-dunbar.onrender.com/",
    githubUrl:
      "https://github.com/talonlikeaclaw/canadian-immigration-visualization",
  },
  {
    title: { en: "TrimTracker", fr: "TrimTracker" },
    description: {
      en: "A salon booking and management system with appointment scheduling, client management, and service tracking. Containerized for easy deployment.",
      fr: "Système de réservation et de gestion pour salon avec planification de rendez-vous, gestion de clientèle et suivi des services. Conteneurisé pour un déploiement facile.",
    },
    technologies: ["Flask", "PostgreSQL", "Docker", "Jinja"],
    type: "team",
    status: "completed",
    image: "/trimtracker.webp",
    note: {
      en: "Built for a server-side programming course.",
      fr: "Réalisé pour un cours de programmation côté serveur.",
    },
    githubUrl: "https://github.com/talonlikeaclaw/trim-tracker",
  },
  {
    title: { en: "Dawson Dial", fr: "Dawson Dial" },
    description: {
      en: "Event planning platform for Dawson College enabling scheduling of classes, office hours, and conferences. Built for professors and students to manage academic events and resources.",
      fr: "Plateforme de planification d'événements pour le Cégep Dawson permettant la planification de cours, de permanences et de conférences. Conçue pour que les professeurs et les étudiants gèrent les événements et ressources académiques.",
    },
    technologies: ["C#", "Avalonia", "EF Core", "LINQ", "MSTest", "Moq"],
    type: "team",
    status: "completed",
    image: "/dawsondial.webp",
    githubUrl: "https://github.com/talonlikeaclaw/dawson-dial",
  },
  {
    title: { en: "Virtual Used Car Dealership", fr: "Virtual Used Car Dealership" },
    description: {
      en: "Console-based dealership management simulation system with vehicle browsing, advanced filtering/sorting, shopping cart, and transaction tracking. Supports both PostgreSQL and CSV persistence.",
      fr: "Système de simulation de gestion de concessionnaire en console avec navigation de véhicules, filtrage et tri avancés, panier d'achat et suivi des transactions. Prend en charge la persistance PostgreSQL et CSV.",
    },
    technologies: ["Java", "PostgreSQL", "Maven", "JUnit"],
    type: "team",
    status: "completed",
    image: "/dealership.webp",
    githubUrl: "https://github.com/talonlikeaclaw/virtual-used-car-dealership",
  },
  {
    title: { en: "Dawscorp Task Manager", fr: "Dawscorp Task Manager" },
    description: {
      en: "A Jira-like task management system built for team collaboration. Features include project boards, task assignment, progress tracking, and team management.",
      fr: "Système de gestion de tâches de type Jira conçu pour la collaboration d'équipe. Comprend des tableaux de projet, l'assignation de tâches, le suivi de progression et la gestion d'équipe.",
    },
    technologies: ["Java", "PostgreSQL", "PL/pgSQL", "JDBC", "JUnit"],
    type: "team",
    status: "completed",
    image: "/dawscorp.webp",
    githubUrl: "https://github.com/talonlikeaclaw/dawscorp-task-manager",
  },
  {
    title: { en: "Self-Hosted Homelab", fr: "Self-Hosted Homelab" },
    description: {
      en: "17+ self-hosted services on local physical hardware, managed as code with Ansible and OpenTofu. TrueNAS provides storage with a 3-2-1 backup strategy including offsite VPS sync.",
      fr: "Plus de 17 services auto-hébergés sur du matériel physique local, gérés comme code avec Ansible et OpenTofu. TrueNAS assure le stockage avec une stratégie de sauvegarde 3-2-1 incluant la synchronisation hors site vers un VPS.",
    },
    technologies: ["Proxmox", "TrueNAS", "Docker", "Ansible", "OpenTofu"],
    type: "solo",
    status: "in-progress",
    featured: true,
    image: "/homelab.webp",
    note: {
      en: "17+ services in production. No public repo.",
      fr: "Plus de 17 services en production. Aucun dépôt public.",
    },
  },
  {
    title: { en: "Godash", fr: "Godash" },
    description: {
      en: "A terminal user interface (TUI) dashboard for monitoring Proxmox virtual environments. Provides real-time stats and management capabilities.",
      fr: "Tableau de bord en interface terminal (TUI) pour surveiller les environnements virtuels Proxmox. Fournit des statistiques en temps réel et des capacités de gestion.",
    },
    technologies: ["Go", "Bubble Tea", "Proxmox API"],
    type: "solo",
    status: "in-progress",
    featured: true,
    image: "/godash.webp",
    note: {
      en: "Core monitoring features complete. Active development.",
      fr: "Fonctionnalités de surveillance de base complétées. Développement actif.",
    },
    githubUrl: "https://github.com/talonlikeaclaw/godash",
  },
  {
    title: { en: "PicnicGo", fr: "PicnicGo" },
    description: {
      en: "Terminal-based deck-building card game inspired by Sushi Go. Features local multiplayer for 3-5 players, colorful ANSI graphics, and strategic card drafting mechanics.",
      fr: "Jeu de cartes de construction de deck en terminal inspiré de Sushi Go. Comprend du multijoueur local pour 3 à 5 joueurs, des graphiques ANSI colorés et des mécaniques de tirage stratégique.",
    },
    technologies: ["Java", "ANSI", "CLI"],
    type: "solo",
    status: "completed",
    image: "/picnicgo.webp",
    githubUrl: "https://github.com/talonlikeaclaw/picnic-go",
  },
  {
    title: { en: "Thermostat Driver", fr: "Thermostat Driver" },
    description: {
      en: "Python driver for the ADS7830 ADC to read thermistor and potentiometer values via I2C on Raspberry Pi. Calculates temperature from voltage readings using resistive divider math.",
      fr: "Pilote Python pour le convertisseur ADS7830 afin de lire les valeurs de thermistance et de potentiomètre via I2C sur Raspberry Pi. Calcule la température à partir des lectures de tension grâce aux équations du diviseur résistif.",
    },
    technologies: ["Python", "I2C", "Raspberry Pi", "ADS7830"],
    type: "solo",
    status: "completed",
    image: "/thermostat.webp",
    githubUrl: "https://github.com/talonlikeaclaw/thermostat-driver",
  },
  {
    title: { en: "Dotfiles", fr: "Dotfiles" },
    description: {
      en: "Personal configuration files for Linux and macOS. Includes configs for Zsh, Kitty, Tmux, and other developer tools.",
      fr: "Fichiers de configuration personnels pour Linux et macOS. Comprend les configurations pour Zsh, Kitty, Tmux et d'autres outils de développement.",
    },
    technologies: ["Zsh", "JSON", "Lua", "TOML"],
    type: "solo",
    status: "completed",
    image: "/dotfiles.webp",
    githubUrl: "https://github.com/talonlikeaclaw/dotfiles",
  },
];
