"use client";

import { useState, useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Container from "@/components/ui/Container";
import FaultyTerminal from "@/components/ui/FaultyTerminal";

export default function Hero() {
  const t = useTranslations("hero");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const gridMul = useMemo<[number, number]>(
    () => (isMobile ? [1.5, 3] : [3, 1.5]),
    [isMobile]
  );

  return (
    <section className="relative flex min-h-screen items-center pt-12">
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
          pageLoadAnimation={true}
          brightness={0.6}
          dpr={1}
        />
        {/* Gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <Container>
        <div className="-translate-y-4 text-center lg:-translate-y-8">
          <div className="mx-auto mb-6 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-2 border-accent/1 sm:h-44 sm:w-44">
            <Image
              src="/headshot.webp"
              alt={t("photoAlt")}
              width={176}
              height={176}
              sizes="(max-width: 640px) 144px, 176px"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="font-mono text-3xl font-bold tracking-tight text-text sm:text-6xl">
            {t("name")}
          </h1>
          <p className="mt-4 font-mono text-lg text-accent font-semibold sm:text-2xl">
            <span className="sm:inline block">{t("role")}</span>
          </p>
          <p className="mt-3 max-w-xl mx-auto text-sm text-muted sm:text-base">
            {t("tagline")}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#projects"
              className="rounded-lg border border-accent bg-accent/10 px-6 py-3 font-mono font-medium text-accent transition-all hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {t("ctaProjects")}
            </a>
            <a
              href="#about"
              className="rounded-lg border border-border bg-background/40 backdrop-blur-sm px-6 py-3 font-mono font-medium text-text transition-all hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {t("ctaAbout")}
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border bg-background/40 backdrop-blur-sm px-6 py-3 font-mono font-medium text-text transition-all hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {t("ctaContact")}
            </a>
          </div>
        </div>
      </Container>
      <a
        href="#projects"
        aria-label={t("scrollCueAria")}
        className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-xs text-muted opacity-55 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
      >
        <span>{t("scrollCue")}</span>
        <ArrowDown
          size={16}
          aria-hidden="true"
          className="scroll-cue text-accent"
        />
      </a>
    </section>
  );
}
