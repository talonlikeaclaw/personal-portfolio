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
  CloudSun,
  Box,
  Music,
  Coffee,
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
            Third-year Computer Science student at Dawson College in
            Montr&eacute;al, Queb&eacute;c.
          </p>
          <div className="mt-8 mx-auto max-w-lg space-y-6">
            <div className="relative overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
              <h3 className="mb-4 text-center font-mono text-base font-semibold text-accent">~/dev</h3>
              <ul className="space-y-3 text-base leading-relaxed text-muted">
                <li className="flex items-center gap-3">
                  <Code size={18} className="shrink-0 text-accent" />
                  <span>I build full-stack apps with React, Flask, Java, and C#.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Server size={18} className="shrink-0 text-accent" />
                  <span>Strong interest in infrastructure and DevOps.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Monitor size={18} className="shrink-0 text-accent" />
                  <span>I self-host services with Proxmox.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Terminal size={18} className="shrink-0 text-accent" />
                  <span>Linux and Docker power user.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Heart size={18} className="shrink-0 text-accent" />
                  <span>Open source advocate.</span>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
              <h3 className="mb-4 text-center font-mono text-base font-semibold text-accent">~/approach</h3>
              <ul className="space-y-3 text-base leading-relaxed text-muted">
                <li className="flex items-center gap-3">
                  <Users size={18} className="shrink-0 text-accent" />
                  <span>Collaborative on team projects using Agile workflows.</span>
                </li>
                <li className="flex items-center gap-3">
                  <GitBranch size={18} className="shrink-0 text-accent" />
                  <span>Track issues and collaborate via GitLab/GitHub.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap size={18} className="shrink-0 text-accent" />
                  <span>I learn quickly and care about the details.</span>
                </li>
                <li className="flex items-center gap-3">
                  <BookOpen size={18} className="shrink-0 text-accent" />
                  <span>Read documentation to understand tools deeply.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Bot size={18} className="shrink-0 text-accent" />
                  <span>Draft with AI, architect manually.</span>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-border bg-card/50 backdrop-blur-sm p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
              <h3 className="mb-4 text-center font-mono text-base font-semibold text-accent">~/interests</h3>
              <ul className="space-y-3 text-base leading-relaxed text-muted">
                <li className="flex items-center gap-3">
                  <CloudSun size={18} className="shrink-0 text-accent" />
                  <span>Curious about meteorology and astronomy.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Box size={18} className="shrink-0 text-accent" />
                  <span>I explore 3D rendering in Blender.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Music size={18} className="shrink-0 text-accent" />
                  <span>I experiment with music production in Ableton.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Coffee size={18} className="shrink-0 text-accent" />
                  <span>Always chasing better coffee.</span>
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
