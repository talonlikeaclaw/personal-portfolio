import type { SkillCategory as SkillCategoryType } from "@/data/skills";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold text-accent">{category.name}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-background px-3 py-1 text-sm text-muted transition-colors hover:text-text"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
