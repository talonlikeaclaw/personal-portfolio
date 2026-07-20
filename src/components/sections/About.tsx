"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
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
  Box,
  Music,
  Gamepad2,
  Earth,
} from "lucide-react";

type RichChunk = (chunks: React.ReactNode) => React.ReactNode;

export default function About() {
  const t = useTranslations("about");

  const strong: RichChunk = (chunks) => <strong>{chunks}</strong>;

  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="mx-auto mb-8 h-28 w-28 overflow-hidden rounded-full border border-accent/30 sm:h-32 sm:w-32">
          <Image
            src="/headshot.webp"
            alt={t("photoAlt")}
            width={128}
            height={128}
            sizes="(max-width: 640px) 112px, 128px"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="space-y-6">
            <p className="text-center text-lg leading-relaxed text-muted lg:text-left">
              {t.rich("intro", { strong })}
            </p>

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
          </div>

          <div className="mt-6 flex h-full flex-col lg:mt-0">
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

              </ul>
            </div>

            {/* ~/interests */}
            <div className="relative mt-10 overflow-hidden rounded-lg border border-border bg-card/50 p-5 lg:mt-auto">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
              <h3 className="mb-4 text-center font-mono text-base font-semibold text-accent">
                ~/interests
              </h3>

              <ul className="space-y-3 text-base leading-relaxed text-muted">
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

      </Container>
    </section>
  );
}
