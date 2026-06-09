import Image from "next/image";
import type { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden flex h-full flex-col rounded-lg border border-border bg-card transition-all hover:border-accent/50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />

      {project.image && (
        <div className="relative w-full overflow-hidden sm:h-60">
          <Image
            src={`/projects/${project.image}`}
            alt={`${project.title} screenshot`}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto sm:absolute sm:inset-0 sm:h-full sm:object-cover sm:object-top"
          />
        </div>
      )}

      <div className="flex flex-col flex-grow p-6">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="mr-4 font-mono text-xl font-semibold text-accent">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.status === "in-progress" && (
            <span className="rounded-full bg-accent/20 px-2 py-0.5 font-mono text-xs text-accent">
              In Progress
            </span>
          )}
          <span className="rounded-full bg-background px-2 py-0.5 font-mono text-s text-accent capitalize">
            {project.type}
          </span>
        </div>
      </div>

      <p className="mb-2 flex-grow text-muted leading-relaxed">{project.description}</p>

      {project.note && (
        <p className="mb-4 font-mono text-xs text-accent/80">{project.note}</p>
      )}

      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded bg-background px-2 py-1 font-mono text-sm text-text"
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
            className="flex items-center gap-1 font-mono text-sm text-muted hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
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
            className="flex items-center gap-1 font-mono text-sm text-muted hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
      </div>
    </div>
  );
}
