import Container from "@/components/ui/Container";

const attributions = [
  { name: "Next.js", href: "https://nextjs.org" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com" },
  { name: "JetBrains Mono", href: "https://www.jetbrains.com/lp/mono" },
  { name: "ReactBits", href: "https://reactbits.dev" },
  { name: "Lucide", href: "https://lucide.dev" },
  { name: "ghchart", href: "https://ghchart.rshah.org" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="text-center font-mono text-sm text-muted">
          <p>&copy; {currentYear} Talon Dunbar. All rights reserved.</p>
          <p className="mt-4">
            Built with{" "}
            {attributions.map((attr, index) => (
              <span key={attr.name}>
                <a
                  href={attr.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-accent transition-colors"
                >
                  {attr.name}
                </a>
                {index < attributions.length - 1 && " · "}
              </span>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
}
