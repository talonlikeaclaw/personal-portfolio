import {
  Archive,
  ArrowRight,
  Box,
  Cloud,
  Container,
  Database,
  GitBranch,
  TestTube2,
} from "lucide-react";

type DiagramLabels = {
  pipeline: string;
  push: string;
  ci: string;
  checks: string;
  build: string;
  artifact: string;
  deploy: string;
  production: string;
  local: string;
  cloudflare: string;
  appService: string;
  mongodb: string;
  blobStorage: string;
  docker: string;
  nextServer: string;
  azurite: string;
};

const pipelineIcons = [GitBranch, TestTube2, Box, Archive, Cloud];

export default function CoralReefDeploymentDiagram({ labels }: { labels: DiagramLabels }) {
  const pipeline = [labels.push, labels.ci, labels.checks, labels.build, labels.artifact, labels.deploy];

  return (
    <div className="space-y-6 rounded-lg border border-border bg-card p-4 sm:p-6">
      <section aria-label={labels.pipeline}>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">{labels.pipeline}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {pipeline.map((label, index) => {
            const Icon = pipelineIcons[Math.min(index, pipelineIcons.length - 1)];
            return (
              <div key={label} className="relative flex min-h-20 items-center gap-3 rounded border border-border bg-background/45 p-3 lg:block">
                <Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold text-text lg:mt-3 lg:block">{label}</span>
                {index < pipeline.length - 1 && <ArrowRight size={16} className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-accent lg:block" aria-hidden="true" />}
              </div>
            );
          })}
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <DiagramEnvironment title={labels.production} accent>
          <DiagramNode icon={Cloud} label={labels.cloudflare} accent />
          <DiagramNode icon={Cloud} label={labels.appService} accent />
          <div className="grid gap-3 sm:grid-cols-2">
            <DiagramNode icon={Database} label={labels.mongodb} />
            <DiagramNode icon={Archive} label={labels.blobStorage} />
          </div>
        </DiagramEnvironment>
        <DiagramEnvironment title={labels.local}>
          <DiagramNode icon={Container} label={labels.docker} accent />
          <div className="grid gap-3 sm:grid-cols-2">
            <DiagramNode icon={Box} label={labels.nextServer} />
            <DiagramNode icon={Database} label={labels.mongodb} />
            <DiagramNode icon={Archive} label={labels.azurite} />
          </div>
        </DiagramEnvironment>
      </div>
    </div>
  );
}

function DiagramEnvironment({ children, title, accent = false }: { children: React.ReactNode; title: string; accent?: boolean }) {
  return (
    <section className={`rounded-lg border p-3 ${accent ? "border-accent/50 bg-accent/5" : "border-border bg-background/35"}`}>
      <p className="mb-3 px-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">{title}</p>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function DiagramNode({ icon: Icon, label, accent = false }: { icon: typeof Cloud; label: string; accent?: boolean }) {
  return (
    <div className={`flex min-h-14 items-center gap-3 rounded border px-3 py-2 font-mono text-xs font-semibold ${accent ? "border-accent/50 bg-accent/10 text-accent" : "border-border bg-card text-text"}`}>
      <Icon size={17} className={accent ? "text-accent" : "text-muted"} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
