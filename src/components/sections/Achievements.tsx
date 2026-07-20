import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award } from "lucide-react";
import Image from "next/image";
import TrophyIcon from "@/components/icons/TrophyIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";

export default function Achievements() {
  const t = useTranslations("achievements");
  const tUi = useTranslations("ui");

  return (
    <section id="achievements" className="py-20">
      <Container>
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="mx-auto max-w-2xl space-y-6">
          <div data-icon-trigger className="relative overflow-hidden rounded-lg border border-border bg-card p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-accent/10 p-3">
                <TrophyIcon size={24} className="text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text">
                  {t("dawshacksTitle")}
                </h3>
                <p className="mt-2 text-muted">
                  {t.rich("dawshacksDesc", {
                    strong: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent">
                    Node.js
                  </span>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent">
                    Twilio
                  </span>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent">
                    Google Gemini
                  </span>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent">
                    SQLite
                  </span>
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href="https://github.com/talonlikeaclaw/dawshacks-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-sm text-muted hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    <GithubIcon size={16} />
                    <span>{tUi("code")}</span>
                  </a>
                  <a
                    href="https://devpost.com/software/reachout-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-sm text-muted hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    <ExternalLinkIcon size={16} />
                    <span>{t("devpost")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-border bg-card p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-accent/10 p-3">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text">
                  {t("leadershipTitle")}
                </h3>
                <a
                  href="https://www.dawsoncollege.qc.ca/news/computer-science-technology-celebrates-its-2026-graduating-class/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 font-mono text-sm text-accent transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  <ExternalLinkIcon size={16} />
                  <span>{t("leadershipArticle")}</span>
                </a>
              </div>
            </div>
            <div className="relative mt-4 aspect-[3229/2480] w-full overflow-hidden rounded-md border border-border">
              <Image
                src="/leadership-award.webp"
                alt={t("leadershipTitle")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
