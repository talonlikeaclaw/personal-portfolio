import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="text-center text-sm text-muted">
          <p>&copy; {currentYear} Talon Dunbar. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
