"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { Menu, X, Mail } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="font-mono text-3xl font-bold text-text hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">
            talonlikeaclaw
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-lg text-text hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="#contact"
              className="flex items-center justify-center rounded-lg border border-accent bg-accent/10 p-2 text-accent transition-all hover:bg-accent hover:text-black"
              aria-label="Contact me"
            >
              <Mail size={20} />
            </a>
            <button
              className="text-muted hover:text-text focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 font-mono text-lg text-text hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
}
