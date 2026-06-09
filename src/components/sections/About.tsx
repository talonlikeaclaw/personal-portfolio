"use client";

import { useEffect, useRef } from "react";
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
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-lg leading-relaxed text-muted">
            <strong>Computer Science graduate</strong> from{" "}
            <strong>Dawson College</strong> in Montr&eacute;al, Queb&eacute;c.
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
                  <span>
                    Builds full-stack apps with <strong>React</strong>,{" "}
                    <strong>Flask</strong>, <strong>Java</strong>, and{" "}
                    <strong>C#</strong>.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Server size={18} className="shrink-0 text-accent" />
                  <span>
                    Has a strong interest in <strong>infrastructure</strong> and{" "}
                    <strong>DevOps</strong>.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Monitor size={18} className="shrink-0 text-accent" />
                  <span>
                    Self-hosts services with <strong>Proxmox</strong> and{" "}
                    <strong>Docker</strong>.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Terminal size={18} className="shrink-0 text-accent" />
                  <span>
                    Is a <strong>Linux</strong> power user and administrator.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Heart size={18} className="shrink-0 text-accent" />
                  <span>
                    Is an <strong>open-source</strong> advocate.
                  </span>
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
                  <span>
                    Collaborates on team projects using <strong>Agile</strong>{" "}
                    workflows.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <GitBranch size={18} className="shrink-0 text-accent" />
                  <span>
                    Tracks issues and collaborates via <strong>Git</strong>{" "}
                    workflows.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Zap size={18} className="shrink-0 text-accent" />
                  <span>
                    Learns quickly and cares about <strong>details</strong>.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <BookOpen size={18} className="shrink-0 text-accent" />
                  <span>
                    Reads <strong>documentation</strong> to understand tools
                    deeply.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Bot size={18} className="shrink-0 text-accent" />
                  <span>
                    Uses <strong>AI tooling</strong> deliberately as part of an engineering workflow.
                  </span>
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
                  <span>
                    Always chases better <strong>coffee</strong>.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Box size={18} className="shrink-0 text-accent" />
                  <span>
                    Explores 3D rendering in <strong>Blender</strong>.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Music size={18} className="shrink-0 text-accent" />
                  <span>
                    Experiments with music production in{" "}
                    <strong>Ableton</strong>.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Earth size={18} className="shrink-0 text-accent" />
                  <span>
                    Is curious about <strong>meteorology</strong> and{" "}
                    <strong>astronomy</strong>.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Gamepad2 size={18} className="shrink-0 text-accent" />
                  <span>
                    Competes as a <strong>Grand Champion</strong> in Rocket
                    League.
                  </span>
                </li>
              </ul>
            </div>
          </div>
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
