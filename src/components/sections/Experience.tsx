import { BriefcaseBusiness } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";

export default function Experience() {
  const locale = useLocale();
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="mx-auto max-w-4xl rounded-lg border border-border bg-card p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-accent/10 p-3">
              <BriefcaseBusiness className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text">{t("role")}</h3>
              <p className="mt-1 font-mono text-sm text-accent">{t("period")}</p>
              <p className="mt-4 leading-relaxed text-muted">{t("description")}</p>
              <a
                href={`/${locale}/projects/dawsasset/`}
                className="group mt-4 inline-flex items-center gap-1.5 rounded-md border border-accent bg-accent/10 px-3 py-1.5 font-mono text-sm text-accent transition-all hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                <ExternalLinkIcon size={16} />
                <span>{t("caseStudy")}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
