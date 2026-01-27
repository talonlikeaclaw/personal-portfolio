"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const chartRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.scrollLeft = chartRef.current.scrollWidth;
    }
  }, []);

  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="I build things to understand them."
        />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a third-year Computer Science student at Dawson College in
            Montreal. I build full-stack applications with React, Flask, Java,
            and C#, and I have a strong interest in infrastructure and DevOps. I
            run a homelab with Proxmox, self-host services, and enjoy working
            with Linux and Docker as an open source advocate.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            I learn quickly and care about the details—whether I&apos;m picking
            up a new framework, collaborating on a team project, or leveraging
            AI to speed up my workflow.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Outside of tech, I stay curious about science, particularly
            meteorology and astronomy. I compete in Rocket League, explore
            photography and 3D rendering in Blender, experiment with music
            production in Ableton, and am always chasing better coffee.
          </p>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="mt-12">
          <h3 className="mb-6 text-center font-mono text-lg text-muted">
            GitHub Activity
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
                alt="GitHub Contribution Chart"
                className="min-w-[720px] invert hue-rotate-180"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
