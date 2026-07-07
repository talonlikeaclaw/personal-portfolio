import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCategory from "@/components/ui/SkillCategory";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
