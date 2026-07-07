"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  BookOpen,
  Code,
  Server,
  Monitor,
  Terminal,
  Heart,
  Zap,
  GitBranch,
  Users,
  Bot,
  Box,
  Music,
  Coffee,
  Gamepad2,
  Earth,
} from "lucide-react";

type RichChunk = (chunks: React.ReactNode) => React.ReactNode;

export default function About() {
  const chartRef = useRef<HTMLAnchorElement>(null);
  const t = useTranslations("about");

  const strong: RichChunk = (chunks) => <strong>{chunks}</strong>;

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.scrollLeft = chartRef.current.scrollWidth;
    }
  }, []);

  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-lg leading-relaxed text-muted">
            {t.rich("intro", { strong })}
          </p>

          <div className="mt-8 mx-auto max-w-lg space-y-6">
            {/* ~/dev */}
            <div className="relative overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
              <h3 className="mb-4 text-center font-mono text-base font-semibold text-accent">
                ~/dev
              </h3>

              <ul className="space-y-3 text-base leading-relaxed text-muted">
                <li className="flex items-center gap-3">
                  <Code size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("dev0", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Server size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("dev1", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Monitor size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("dev2", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Terminal size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("dev3", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Heart size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("dev4", { strong })}</span>
                </li>
              </ul>
            </div>

            {/* ~/approach */}
            <div className="relative overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
              <h3 className="mb-4 text-center font-mono text-base font-semibold text-accent">
                ~/approach
              </h3>

              <ul className="space-y-3 text-base leading-relaxed text-muted">
                <li className="flex items-center gap-3">
                  <Users size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("approach0", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <GitBranch size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("approach1", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Zap size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("approach2", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <BookOpen size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("approach3", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Bot size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("approach4", { strong })}</span>
                </li>
              </ul>
            </div>

            {/* ~/interests */}
            <div className="relative overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
              <h3 className="mb-4 text-center font-mono text-base font-semibold text-accent">
                ~/interests
              </h3>

              <ul className="space-y-3 text-base leading-relaxed text-muted">
                <li className="flex items-center gap-3">
                  <Coffee size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("interests0", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Box size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("interests1", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Music size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("interests2", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Earth size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("interests3", { strong })}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Gamepad2 size={18} className="shrink-0 text-accent" />
                  <span>{t.rich("interests4", { strong })}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="mt-12">
          <h3 className="mb-6 text-center font-mono text-lg text-muted">
            {t("githubActivity")}
          </h3>
          <div className="flex justify-center">
            <a
              ref={chartRef}
              href="https://github.com/talonlikeaclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-x-auto rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/50"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/22c55e/talonlikeaclaw"
                alt={t("chartAlt")}
                className="min-w-[720px] invert hue-rotate-180"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
