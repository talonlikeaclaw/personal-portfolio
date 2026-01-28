import type { SkillCategory as SkillCategoryType } from "@/data/skills";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border bg-card p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
      <h3 className="mb-4 font-mono text-xl font-semibold text-accent">{category.name}</h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-background px-4 py-1.5 font-mono text-sm sm:text-base text-text transition-colors hover:text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
