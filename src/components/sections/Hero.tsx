"use client";

import { useState, useEffect, useMemo, useRef, type ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Container from "@/components/ui/Container";
import FaultyTerminal from "@/components/ui/FaultyTerminal";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";

export default function Hero() {
  const t = useTranslations("hero");
  const caseStudy = useTranslations("dawsassetCaseStudy");
  const ui = useTranslations("ui");
  const locale = useLocale();
  const strong = (chunks: ReactNode) => <strong>{chunks}</strong>;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );
  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [heroInView, setHeroInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(
    () =>
      typeof document === "undefined" || document.visibilityState !== "hidden",
  );
  const paused = reduceMotion || !heroInView || !pageVisible;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      setHeroInView(entry.isIntersecting);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibilityChange = () =>
      setPageVisible(document.visibilityState !== "hidden");
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const gridMul = useMemo<[number, number]>(
    () => (isMobile ? [1.5, 3] : [3, 1.5]),
    [isMobile],
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center pt-24 pb-8"
    >
      {/* Background - offset for navbar */}
      <div className="absolute inset-0 -top-20 -z-10">
        <FaultyTerminal
          scale={1}
          gridMul={gridMul}
          digitSize={1.2}
          timeScale={0.2}
          scanlineIntensity={0.1}
          glitchAmount={0.4}
          flickerAmount={0.3}
          noiseAmp={1}
          curvature={0.1}
          tint="#338953"
          mouseReact={false}
          pause={paused}
          pageLoadAnimation={true}
          brightness={0.6}
          dpr={1}
        />
        {/* Gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <Container>
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-accent/30 sm:mb-6 sm:h-32 sm:w-32">
            <Image
              src="/headshot.webp"
              alt={t("photoAlt")}
              width={128}
              height={128}
              sizes="(max-width: 640px) 80px, 128px"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="font-mono text-3xl font-bold tracking-tight text-text sm:text-6xl">
            {t("name")}
          </h1>
          <p className="mt-2 font-mono text-lg text-accent font-semibold sm:text-2xl">
            <span className="sm:inline block">{t("role")}</span>
          </p>
          <p className="mt-2 font-mono text-sm text-muted sm:text-base">
            {t("meta")}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
            {t("tagline")}
          </p>

          <div className="mx-auto mt-6 max-w-xl rounded-lg border border-accent/60 bg-accent/10 p-4 text-left sm:p-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {caseStudy("meta.production")}
            </p>
            <p className="mt-1.5 font-mono text-xl font-semibold text-text">
              {caseStudy("title")}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              {caseStudy.rich("subtitle", { strong })}
            </p>
            <a
              href={`/${locale}/projects/dawsasset/`}
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-accent px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              <ExternalLinkIcon size={16} />
              <span>{ui("caseStudy")}</span>
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 font-mono text-sm">
            <a
              href="#projects"
              className="py-1 text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {t("ctaProjects")}
            </a>
            <a
              href="#about"
              className="py-1 text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {t("ctaAbout")}
            </a>
            <a
              href="#contact"
              className="py-1 text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {t("ctaContact")}
            </a>
          </div>

          <a
            href="#projects"
            className="group mt-6 flex flex-col items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
          >
            <span>{t("scrollCue")}</span>
            <ArrowDown
              size={16}
              aria-hidden="true"
              className="scroll-cue text-accent"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
