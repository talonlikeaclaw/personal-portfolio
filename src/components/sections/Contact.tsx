import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Github, Linkedin, Mail, GitlabIcon } from "lucide-react";

const contactLinks = [
  {
    key: "github",
    href: "https://github.com/talonlikeaclaw",
    icon: Github,
  },
  {
    key: "gitlab",
    href: "https://gitlab.com/talonlikeaclaw",
    icon: GitlabIcon,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/talon-dunbar",
    icon: Linkedin,
  },
  {
    key: "email",
    href: "mailto:talonlikeaclaw@proton.me",
    icon: Mail,
  },
];

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 transition-all hover:border-accent/50 hover:bg-card/80 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 sm:gap-3 sm:px-6 sm:py-4"
            >
              <link.icon className="h-5 w-5 text-accent" />
              <span className="font-mono text-text">{t(`links.${link.key}`)}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
