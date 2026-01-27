"use client";

import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import FaultyTerminal from "@/components/ui/FaultyTerminal";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center pt-12">
      {/* Background - offset for navbar */}
      <div className="absolute inset-0 top-20 -z-10">
        <FaultyTerminal
          scale={1}
          gridMul={isMobile ? [1.5, 3] : [3, 1.5]}
          digitSize={1.2}
          timeScale={0.2}
          scanlineIntensity={0.1}
          glitchAmount={0.4}
          flickerAmount={0.3}
          noiseAmp={1}
          curvature={0.1}
          tint="#338953"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={true}
          brightness={0.6}
          dpr={1}
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <Container>
        <div className="text-center">
          <h1 className="font-mono text-4xl font-bold tracking-tight text-text sm:text-6xl">
            Talon Dunbar
          </h1>
          <p className="mt-4 font-mono text-base text-text sm:text-2xl">
            <span className="sm:inline block">Systems-Oriented</span>
            <span className="hidden sm:inline"> </span>
            <span className="sm:inline block">Full-Stack Developer</span>
          </p>
          <p className="mt-3 max-w-xl mx-auto text-sm text-muted sm:text-base">
            Linux, infrastructure, and systems programming.
          </p>
          <p className="mt-2 max-w-xl mx-auto text-xs text-muted sm:text-sm">
            Fast learner, team player, curious, AI-literate. Seeking Spring 2026 internships.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#about"
              className="rounded-lg border border-accent px-6 py-3 font-mono font-medium text-accent transition-colors hover:bg-accent hover:text-black"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-border bg-card px-6 py-3 font-mono font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border bg-card px-6 py-3 font-mono font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
