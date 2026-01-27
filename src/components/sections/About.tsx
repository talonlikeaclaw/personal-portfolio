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
        <SectionHeading title="About Me" subtitle="From homelab to full-stack. I build things to understand them." />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a third-year Computer Science student at Dawson College in
            Montreal. I work across the full stack but I&apos;m most at home with Linux,
            infrastructure, and systems programming. I pick up new tools and stacks
            quickly, whether that&apos;s a new framework, a CI/CD pipeline, or leveraging
            AI to accelerate my workflow.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Beyond code, I&apos;m a homelab enthusiast and open source advocate.
            I stay curious about meteorology and astronomy, and I&apos;m always
            chasing better coffee. I also compete in Rocket League at Grand Champion, and cheer for the Habs.
          </p>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="mt-12">
          <h3 className="mb-6 text-center font-mono text-lg text-muted">GitHub Activity</h3>
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
