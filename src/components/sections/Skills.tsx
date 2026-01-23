import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCategory from "@/components/ui/SkillCategory";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategory key={category.name} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
