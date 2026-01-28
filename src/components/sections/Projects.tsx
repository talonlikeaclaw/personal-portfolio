"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeading
          title="What I've Built"
          subtitle="Team and solo projects I've worked on."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {other.length > 0 && (
          <>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-8 mx-auto flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent"
            >
              {showMore ? (
                <>
                  Show less
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show {other.length} more projects
                  <ChevronDown size={16} />
                </>
              )}
            </button>

            {showMore && (
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {other.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
}
