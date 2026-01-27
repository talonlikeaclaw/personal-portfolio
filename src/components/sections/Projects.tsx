import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeading
          title="What I've Built"
          subtitle="Team and solo projects I've worked on"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {other.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
