import type { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/50">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.status === "in-progress" && (
            <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs text-accent">
              In Progress
            </span>
          )}
          <span className="rounded-full bg-background px-2 py-0.5 text-xs text-muted capitalize">
            {project.type}
          </span>
        </div>
      </div>

      <p className="mb-4 text-muted leading-relaxed">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded bg-background px-2 py-1 text-xs text-text"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}
