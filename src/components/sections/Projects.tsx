"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronUp } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const t = useTranslations("projects");
  const primary = projects.filter(
    (p) => p.delivery !== "local" && p.delivery !== "in-progress",
  );
  const rest = projects.filter(
    (p) => p.delivery === "local" || p.delivery === "in-progress",
  );

  return (
    <section id="projects" className="py-20">
      <Container className="max-w-6xl">
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {primary.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {rest.length > 0 && (
          <>
            <button
              onClick={() => setShowMore(!showMore)}
              aria-expanded={showMore}
              aria-controls="more-projects"
              className="mt-8 mx-auto flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {showMore ? (
                <>
                  {t("showLess")}
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  {t("showMore", { count: rest.length })}
                  <ChevronDown size={16} />
                </>
              )}
            </button>

            {showMore && (
              <div id="more-projects" className="mt-6 grid gap-6 md:grid-cols-2">
                {rest.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
}
