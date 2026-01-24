interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="font-mono text-3xl font-bold text-text sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 font-mono text-sm text-muted sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
