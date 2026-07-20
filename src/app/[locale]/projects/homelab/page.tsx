import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, CircleAlert, Cloud, HardDrive, LockKeyhole, ServerCog } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/ui/Container";
import HomelabArchitectureDiagram from "@/components/ui/HomelabArchitectureDiagram";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

const architecturePrinciples = ["compute", "storage", "access"] as const;
const automationStages = ["declare", "provision", "publish", "document"] as const;
const backupLayers = ["redundancy", "snapshots", "copies", "workloads"] as const;
const operationsItems = ["public", "private", "dns", "maintenance", "ci", "visibility"] as const;
const decisionItems = ["lxc", "data", "automation"] as const;
const limitationItems = ["visibility", "recovery", "availability"] as const;
const principleIcons = [ServerCog, HardDrive, LockKeyhole];
const operationIcons = [Cloud, LockKeyhole, ServerCog, ServerCog, CheckCircle2, CircleAlert];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "homelabCaseStudy" });
  const canonicalUrl = `${siteUrl}/${locale}/projects/homelab/`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    alternates: { canonical: canonicalUrl, languages: { en: `${siteUrl}/en/projects/homelab/`, fr: `${siteUrl}/fr/projects/homelab/`, "x-default": `${siteUrl}/en/projects/homelab/` } },
    openGraph: { title: t("metadata.openGraphTitle"), description: t("metadata.openGraphDescription"), url: canonicalUrl, siteName: "Talon Dunbar", locale: locale === "fr" ? "fr_CA" : "en_US", type: "website", images: ["/projects/homelab.webp"] },
    twitter: { card: "summary_large_image", title: t("metadata.openGraphTitle"), description: t("metadata.openGraphDescription"), images: ["/projects/homelab.webp"] },
    robots: { index: true, follow: true },
  };
}

export default async function HomelabCaseStudy({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "homelabCaseStudy" });
  const homeHref = `/${locale}/`;
  const strong = (chunks: ReactNode) => <strong>{chunks}</strong>;
  const code = (chunks: ReactNode) => <code className="rounded bg-card px-1 font-mono text-[0.9em] text-text">{chunks}</code>;

  return (
    <article className="py-28 sm:py-32">
      <Container>
        <a href={`${homeHref}#projects`} className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"><ArrowLeft size={16} aria-hidden="true" />{t("backToProjects")}</a>
        <header className="mt-10 border-b border-border pb-12">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
          <h1 className="mt-4 font-mono text-4xl font-bold tracking-tight text-text sm:text-6xl">{t("title")}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{t.rich("subtitle", { strong })}</p>
          <div className="mt-8 flex flex-wrap gap-3">{["ongoing", "iac", "stack"].map((key) => <span key={key} className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-sm text-accent">{t(`meta.${key}`)}</span>)}</div>
        </header>

        <div className="mt-16 space-y-16">
          <section aria-labelledby="overview"><Heading id="overview">{t("overview.title")}</Heading><p className="mt-5 max-w-4xl leading-relaxed text-muted">{t.rich("overview.body1", { strong })}</p><p className="mt-5 max-w-4xl leading-relaxed text-muted">{t("overview.body2")}</p></section>

          <section aria-labelledby="architecture"><Heading id="architecture">{t("architecture.title")}</Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("architecture.intro", { strong })}</p><div className="mt-8"><HomelabArchitectureDiagram labels={{ publicUsers: t("architecture.nodes.publicUsers"), cloudflareEdge: t("architecture.nodes.cloudflareEdge"), privateDevices: t("architecture.nodes.privateDevices"), tailscale: t("architecture.nodes.tailscale"), computeHost: t("architecture.nodes.computeHost"), serviceLxcs: t("architecture.nodes.serviceLxcs"), devBox: t("architecture.nodes.devBox"), storage: t("architecture.nodes.storage"), backupDestinations: t("diagram.backupDestinations"), backupFlows: t("diagram.backupFlows"), localBackup: t("diagram.localCopy"), offsiteBackup: t("diagram.offsiteDatasetCopy"), pbs: t("diagram.offsitePbs") }} /></div><p className="mt-3 font-mono text-xs leading-relaxed text-muted">{t("architecture.caption")}</p><div className="mt-6 grid gap-4 md:grid-cols-3">{architecturePrinciples.map((item, index) => { const Icon = principleIcons[index]; return <Card key={item}><Icon className="text-accent" size={21} aria-hidden="true" /><h3 className="mt-3 font-mono font-semibold text-text">{t(`architecture.principles.${item}.title`)}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{t(`architecture.principles.${item}.body`)}</p></Card>; })}</div></section>

          <section aria-labelledby="automation"><Heading id="automation">{t("automation.title")}</Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("automation.intro", { strong })}</p><div className="mt-8 grid overflow-hidden rounded-lg border border-border sm:grid-cols-4">{automationStages.map((item, index) => <section key={item} className="border-b border-border bg-card p-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"><span className="font-mono text-sm font-semibold text-accent">0{index + 1}</span><h3 className="mt-3 font-mono font-semibold text-text">{t(`automation.${item}.title`)}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{t(`automation.${item}.body`)}</p></section>)}</div><Card className="mt-6"><h3 className="font-mono font-semibold text-accent">{t("automation.manualTitle")}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{t.rich("automation.manual", { strong })}</p></Card></section>

          <section aria-labelledby="backups"><Heading id="backups">{t("backupTitle")}</Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("resilience.intro", { strong })}</p><div className="mt-8 grid overflow-hidden rounded-lg border border-border sm:grid-cols-2">{backupLayers.map((item) => <section key={item} className="border-b border-border bg-card p-5 even:border-b-0 sm:border-r sm:even:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0"><h3 className="font-mono text-sm font-semibold text-accent">{item === "copies" ? t("backupStrategyTitle") : t(`resilience.${item}.title`)}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{t(`resilience.${item}.body`)}</p></section>)}</div><p className="mt-5 rounded-lg border border-accent/50 bg-accent/5 p-5 text-sm leading-relaxed text-muted">{t.rich("resilience.retention", { strong })}</p></section>

          <section aria-labelledby="operations"><Heading id="operations">{t("operations.title")}</Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("operations.intro", { strong })}</p>{[["accessModel", operationsItems.slice(0, 3), 0], ["operationsModel", operationsItems.slice(3), 3]].map(([group, items, offset]) => <div key={group as string} className="mt-8 first:mt-8"><h3 className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-accent">{t(group as string)}</h3><div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{(items as readonly string[]).map((item, index) => { const Icon = operationIcons[(offset as number) + index]; return <Card key={item}><Icon className="text-accent" size={21} aria-hidden="true" /><h4 className="mt-3 font-mono font-semibold text-text">{t(`operations.${item}.title`)}</h4><p className="mt-2 text-sm leading-relaxed text-muted">{item === "visibility" ? t("operationalVisibility") : t(`operations.${item}.body`)}</p></Card>; })}</div></div>)}</section>

          <section aria-labelledby="incident" className="rounded-lg border border-border bg-card p-6 sm:p-8"><Heading id="incident">{t("incidentShortTitle")}</Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("incident.intro", { strong })}</p><div className="mt-8 grid gap-4 md:grid-cols-3">{["symptom", "investigation", "resolution"].map((item, index) => <section key={item} className="relative rounded border border-border bg-background/50 p-4"><span className="font-mono text-xs font-semibold text-accent">0{index + 1}</span><h3 className="mt-2 font-mono text-sm font-semibold text-text">{t(`incident.${item}.title`)}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{item === "symptom" ? t("incidentSymptom") : t.rich(`incident.${item}.body`, { strong, code })}</p></section>)}</div></section>

          <section aria-labelledby="tradeoffs" className="pt-2"><Heading id="tradeoffs">{t("tradeoffsShortTitle")}</Heading><div className="mt-8 divide-y divide-border rounded-lg border border-border bg-card">{decisionItems.map((item) => <section key={item} className="p-5 sm:grid sm:grid-cols-[minmax(13rem,0.8fr)_1.7fr] sm:gap-8"><h3 className="font-mono font-semibold text-accent">{t(`tradeoffs.${item}.title`)}</h3><p className="mt-2 text-sm leading-relaxed text-muted sm:mt-0">{t.rich(`tradeoffs.${item}.body`, { strong })}</p></section>)}</div></section>

          <section aria-labelledby="limitations"><Heading id="limitations">{t("limitations.title")}</Heading><ul className="mt-6 grid gap-4 text-sm leading-relaxed text-muted md:grid-cols-3">{limitationItems.map((item) => <li key={item} className="flex gap-3 rounded-lg border border-border bg-card p-5"><CircleAlert className="mt-0.5 shrink-0 text-accent" size={16} aria-hidden="true" />{t(`limitations.grouped.${item}`)}</li>)}</ul></section>

          <section aria-labelledby="lessons" className="rounded-lg border border-accent/60 bg-accent/10 p-5 sm:p-6"><Heading id="lessons"><span className="flex items-center gap-2"><CheckCircle2 className="text-accent" size={22} aria-hidden="true" />{t("lessons.title")}</span></Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("lessons.body", { strong })}</p></section>
        </div>

        <section aria-labelledby="case-study-cta" className="mt-16 border-t border-border pt-8"><h2 id="case-study-cta" className="max-w-2xl font-mono text-xl font-bold text-text sm:text-2xl">{t("ctaShortTitle")}</h2><div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"><a href={`${homeHref}#projects`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">{t("viewOtherProjects")}<ArrowRight size={16} aria-hidden="true" /></a><a href="https://www.linkedin.com/in/talon-dunbar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">{t("contactCta")}<ArrowRight size={16} aria-hidden="true" /></a></div></section>
      </Container>
    </article>
  );
}

function Heading({ id, children }: { id: string; children: ReactNode }) {
  return <h2 id={id} className="font-mono text-2xl font-bold text-text sm:text-3xl">{children}</h2>;
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-lg border border-border bg-card p-5 ${className}`}>{children}</section>;
}
