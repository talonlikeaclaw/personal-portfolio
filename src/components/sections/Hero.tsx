"use client";

import Container from "@/components/ui/Container";
import FaultyTerminal from "@/components/ui/FaultyTerminal";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-16">
      {/* Background - offset for navbar */}
      <div className="absolute inset-0 top-20 -z-10">
        <FaultyTerminal
          scale={0.8}
          gridMul={[10, 5]}
          digitSize={0.5}
          scanlineIntensity={0.1}
          glitchAmount={1}
          flickerAmount={0.5}
          curvature={0.2}
          tint="#22c55e"
          brightness={0.5}
          mouseReact={true}
          mouseStrength={0.5}
          dpr={1}
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-text sm:text-6xl">
            Talon Dunbar
          </h1>
          <p className="mt-4 text-xl text-text sm:text-2xl">
            Computer Science Student | Full-Stack Developer
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent/90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border bg-card px-6 py-3 font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
