"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
      <div className="absolute inset-0 -top-20 -z-10">
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
          mouseReact={false}
          pageLoadAnimation={true}
          brightness={0.6}
          dpr={1}
        />
        {/* Gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>

      <Container>
        <div className="text-center">
          <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-accent/1 sm:h-40 sm:w-40">
            <Image
              src="/headshot.jpg"
              alt="Talon Dunbar"
              width={160}
              height={160}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="font-mono text-3xl font-bold tracking-tight text-text sm:text-6xl">
            Talon Dunbar
          </h1>
          <p className="mt-4 font-mono text-lg text-accent font-semibold sm:text-2xl">
            <span className="sm:inline block">Full-Stack Developer</span>
            <span className="hidden sm:inline text-text"> | </span>
            <span className="sm:inline block">Infrastructure Enthusiast</span>
          </p>
          <p className="mt-3 max-w-xl mx-auto text-sm text-muted sm:text-base">
            Fast learner, detail-oriented, curious, collaborative.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#about"
              className="rounded-lg border border-accent bg-accent/10 backdrop-blur-sm px-6 py-3 font-mono font-medium text-accent transition-all hover:bg-accent hover:text-black"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-border bg-background/40 backdrop-blur-sm px-6 py-3 font-mono font-medium text-text transition-all hover:border-accent hover:text-accent"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border bg-background/40 backdrop-blur-sm px-6 py-3 font-mono font-medium text-text transition-all hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
