import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading title="About Me" />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a third-year Computer Science student at Dawson College in Montreal,
            passionate about building software that solves real problems. My interests
            span full-stack web development, with a growing focus on Golang and systems
            programming.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            When I&apos;m not coding, you&apos;ll find me tinkering with Linux systems,
            exploring self-hosting solutions, or learning about new technologies. I enjoy
            working on projects that challenge me to learn and grow as a developer.
          </p>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="mt-12">
          <h3 className="mb-6 text-center font-mono text-lg text-muted">GitHub Activity</h3>
          <div className="flex justify-center">
            <a
              href="https://github.com/talonlikeaclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-lg border border-border bg-card p-4 transition-all hover:border-accent/50"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ghchart.rshah.org/22c55e/talonlikeaclaw"
                alt="GitHub Contribution Chart"
                className="w-full max-w-4xl invert hue-rotate-180"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
