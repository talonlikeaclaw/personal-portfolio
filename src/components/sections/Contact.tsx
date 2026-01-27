import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Github, Linkedin, Mail, GitlabIcon } from "lucide-react";

const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/talonlikeaclaw",
    icon: Github,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/talonlikeaclaw",
    icon: GitlabIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/talon-dunbar-181b17300",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:talon.dunbar@dawsoncollege.qc.ca",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading
          title="Let's Work Together"
          subtitle="Available for Summer 2026 internships. Ready to hit the ground running."
        />
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center justify-center gap-3 rounded-lg border border-border bg-card px-6 py-4 transition-all hover:border-accent/50 hover:bg-card/80"
            >
              <link.icon className="h-5 w-5 text-accent" />
              <span className="font-mono text-text">{link.name}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
