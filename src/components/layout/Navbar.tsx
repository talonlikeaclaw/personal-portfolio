"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { Menu, X } from "lucide-react";
import MailIcon from "@/components/icons/MailIcon";

const navLinks = [
  { id: "about", key: "about" },
  { id: "projects", key: "projects" },
  { id: "skills", key: "skills" },
  { id: "education", key: "education" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("nav");
  const homeHref = `/${locale}/`;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href={homeHref} className="font-mono text-xl font-bold text-text hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 sm:text-3xl">
            talonlikeaclaw
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`${homeHref}#${link.id}`}
                className="font-mono text-lg text-text hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {t(link.key)}
              </a>
            ))}
            <LanguageToggle />
            <a
              href={`${homeHref}#contact`}
              className="flex items-center justify-center rounded-lg border border-accent bg-accent/10 p-2 text-accent transition-colors hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              aria-label={t("contactMeAria")}
            >
              <MailIcon size={18} />
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <a
              href={`${homeHref}#contact`}
              className="flex items-center justify-center rounded-lg border border-accent bg-accent/10 p-2 text-accent transition-all hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              aria-label={t("contactMeAria")}
            >
              <MailIcon size={18} />
            </a>
            <button
              className="text-muted hover:text-text focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={t("toggleMenuAria")}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-navigation" className="md:hidden border-t border-border py-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`${homeHref}#${link.id}`}
                className="block py-2 font-mono text-lg text-text hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                onClick={() => setIsOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
}
