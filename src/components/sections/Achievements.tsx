import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Trophy, Award, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <Container>
        <SectionHeading
          title="Achievements"
          subtitle="Recognition for impactful work."
        />
        <div className="mx-auto max-w-2xl space-y-6">
          <div className="relative overflow-hidden rounded-lg border border-border bg-card p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-accent/10 p-3">
                <Trophy className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text">
                  DawsHacks 2026 - 1st Place
                </h3>
                <p className="mt-2 text-muted">
                  <strong>Reachout AI</strong>: SMS and voice-based AI assistant
                  bridging the digital divide for 2.7 billion people without
                  smartphones or reliable internet. Built with Twilio, Google
                  Gemini API, and OpenWeatherMap for feature phones and rural
                  communities.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent">
                    Node.js
                  </span>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent">
                    Twilio
                  </span>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent">
                    Google Gemini
                  </span>
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent">
                    SQLite
                  </span>
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href="https://github.com/talonlikeaclaw/dawshacks-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-sm text-muted hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href="https://devpost.com/software/reachout-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-sm text-muted hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    <ExternalLink size={16} />
                    <span>DevPost</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-border bg-card p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-[0.01]" />
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-accent/10 p-3">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text">
                  CS 2026 Leadership Award
                </h3>
              </div>
            </div>
            <div className="relative mt-4 aspect-[3229/2480] w-full overflow-hidden rounded-md border border-border">
              <Image
                src="/leadership-award.jpg"
                alt="CS 2026 Leadership Award"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
