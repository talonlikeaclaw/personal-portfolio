import {
  ArrowDown,
  Cloud,
  HardDrive,
  Laptop,
  LockKeyhole,
  Server,
  Users,
} from "lucide-react";

type DiagramLabels = {
  publicUsers: string;
  cloudflareEdge: string;
  privateDevices: string;
  tailscale: string;
  computeHost: string;
  serviceLxcs: string;
  devBox: string;
  storage: string;
  backupDestinations: string;
  backupFlows: string;
  localBackup: string;
  offsiteBackup: string;
  pbs: string;
};

export default function HomelabArchitectureDiagram({
  labels,
}: {
  labels: DiagramLabels;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card p-4 sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1.35fr_auto_1fr] lg:items-stretch">
        <DiagramColumn>
          <DiagramNode icon={Users} label={labels.publicUsers} />
          <DiagramNode icon={Cloud} label={labels.cloudflareEdge} accent />
          <DiagramNode icon={Laptop} label={labels.privateDevices} />
          <DiagramNode icon={LockKeyhole} label={labels.tailscale} accent />
        </DiagramColumn>
        <DiagramArrow />
        <DiagramColumn emphasis>
          <DiagramNode icon={Server} label={labels.computeHost} accent />
          <div className="grid gap-3 sm:grid-cols-2">
            <DiagramNode label={labels.serviceLxcs} />
            <DiagramNode label={labels.devBox} />
          </div>
          <DiagramNode icon={HardDrive} label={labels.storage} accent />
        </DiagramColumn>
        <DiagramArrow label={labels.backupFlows} />
        <DiagramColumn>
          <p className="px-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {labels.backupDestinations}
          </p>
          <DiagramNode icon={HardDrive} label={labels.localBackup} />
          <DiagramNode icon={Cloud} label={labels.offsiteBackup} />
          <DiagramNode icon={Server} label={labels.pbs} accent />
        </DiagramColumn>
      </div>
    </div>
  );
}

function DiagramColumn({
  children,
  emphasis = false,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`flex flex-col justify-center gap-3 rounded-lg border p-3 ${emphasis ? "border-accent/50 bg-accent/5" : "border-border bg-background/35"}`}
    >
      {children}
    </div>
  );
}

function DiagramNode({
  icon: Icon,
  label,
  accent = false,
}: {
  icon?: typeof Server;
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex min-h-16 items-center gap-3 rounded border px-3 py-2 font-mono text-sm font-semibold ${accent ? "border-accent/50 bg-accent/10 text-accent" : "border-border bg-card text-text"}`}
    >
      {Icon && (
        <Icon
          size={18}
          aria-hidden="true"
          className={accent ? "text-accent" : "text-muted"}
        />
      )}
      <span>{label}</span>
    </div>
  );
}

function DiagramArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <ArrowDown
        className="rotate-[-90deg] text-accent"
        size={22}
        aria-hidden="true"
      />
      {label && (
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
          {label}
        </span>
      )}
    </div>
  );
}
