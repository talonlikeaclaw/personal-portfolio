import { useTranslations } from "next-intl";

type CaseStudyNavProps = {
  items: { id: string; label: string }[];
};

export default function CaseStudyNav({ items }: CaseStudyNavProps) {
  const t = useTranslations("ui");

  return (
    <nav
      aria-label={t("sectionsAria")}
      className="mt-8 border-b border-border pb-3 lg:sticky lg:top-[81px] lg:z-30 lg:bg-background/80 lg:pb-2 lg:backdrop-blur-sm"
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-xs lg:flex lg:flex-wrap lg:gap-x-5 lg:gap-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="py-1 text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
