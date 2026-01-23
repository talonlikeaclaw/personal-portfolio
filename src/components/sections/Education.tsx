import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <Container>
        <SectionHeading title="Education" />
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-accent/10 p-3">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text">Dawson College</h3>
                <p className="text-muted">DEC in Computer Science Technology</p>
                <p className="mt-1 text-sm text-muted">2023 - 2026 | Montreal, QC</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent">
                    R Score: 34.35
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
