import type { LocalizedText } from "@/i18n/routing";

export interface Project {
  title: LocalizedText;
  description: LocalizedText;
  technologies: string[];
  type: "team" | "solo";
  status?: "in-progress" | "ongoing" | "completed";
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
      en: "Production asset-management platform delivered during a seven-week software engineering internship at Dawson College. Replaced spreadsheet tracking across four departments with barcode scanning, equipment loans, inventory workflows, and a student self-service kiosk.",
      fr: "Plateforme de gestion des actifs livrée en production lors d'un stage de sept semaines en ingénierie logicielle au Cégep Dawson. Remplace le suivi par tableurs dans quatre départements par numérisation de codes-barres, prêts d'équipement, flux d'inventaire et borne libre-service étudiante.",
    },
    technologies: ["Python", "Odoo", "PostgreSQL", "Docker"],
    type: "team",
    status: "completed",
    featured: true,
    image: "dawsasset/student-kiosk.webp",
    note: {
      en: "Deployed to production at Dawson College.",
      fr: "Déployé en production au Cégep Dawson.",
    },
    githubUrl: "https://github.com/talonlikeaclaw/dawsasset",
    caseStudyPath: "/projects/dawsasset/",
  },
  {
    title: { en: "Homelab Infrastructure", fr: "Infrastructure Homelab" },
    description: {
      en: "Personal infrastructure environment built on Proxmox and TrueNAS, with LXCs provisioned through OpenTofu and configured using Ansible. Includes secure remote access, layered backups, and documented operational workflows.",
      fr: "Environnement d'infrastructure personnel construit sur Proxmox et TrueNAS, avec des LXC provisionnés par OpenTofu et configurés avec Ansible. Comprend un accès distant sécurisé, des sauvegardes par couches et des flux opérationnels documentés.",
    },
    technologies: ["Proxmox", "TrueNAS", "Docker", "Ansible", "OpenTofu"],
    type: "solo",
    status: "ongoing",
    featured: true,
    image: "homelab.webp",
    note: {
      en: "Infrastructure as Code.",
      fr: "Infrastructure as Code.",
    },
    caseStudyPath: "/projects/homelab/",
  },
  {
    title: { en: "The Coral Reef", fr: "The Coral Reef" },
    description: {
      en: "Full-stack capstone platform built by a team around Tight Squeeze, a nautical card game inspired by Exploding Kittens. Features real-time multiplayer via Socket.IO, social auth, profile customization, friends, leaderboards, and an admin panel.",
      fr: "Plateforme de projet de fin d'études full-stack construite en équipe autour de Tight Squeeze, un jeu de cartes nautique inspiré d'Exploding Kittens. Comprend du multijoueur en temps réel via Socket.IO, l'authentification sociale, la personnalisation de profil, des amis, des classements et un panneau d'administration.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Socket.IO",
      "Better Auth",
    ],
    type: "team",
    status: "completed",
    featured: true,
    image: "/coralreef.webp",
    note: {
      en: "Team capstone project.",
      fr: "Projet de fin d'études en équipe.",
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
    title: { en: "Godash", fr: "Godash" },
    description: {
      en: "Go-based TUI for monitoring Proxmox virtual machines and containers through the Proxmox API, with live resource usage and lifecycle controls.",
      fr: "Interface terminal en Go pour surveiller les machines virtuelles et conteneurs Proxmox par l'API Proxmox, avec utilisation des ressources en direct et contrôles de cycle de vie.",
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
