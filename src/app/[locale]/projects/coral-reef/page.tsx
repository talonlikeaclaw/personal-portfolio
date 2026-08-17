import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Cloud, Container, GitBranch, HeartPulse, ShieldCheck } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ContainerLayout from "@/components/ui/Container";
import CoralReefDeploymentDiagram from "@/components/ui/CoralReefDeploymentDiagram";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

const roleItems = ["pipeline", "azure", "local", "health"] as const;
const pipelineItems = ["test", "build", "archive", "deploy"] as const;
const learningItems = ["azure", "delivery", "local", "operations"] as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "coralReefCaseStudy" });
  const canonicalUrl = `${siteUrl}/${locale}/projects/coral-reef/`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    alternates: { canonical: canonicalUrl, languages: { en: `${siteUrl}/en/projects/coral-reef/`, fr: `${siteUrl}/fr/projects/coral-reef/`, "x-default": `${siteUrl}/en/projects/coral-reef/` } },
    openGraph: { title: t("metadata.openGraphTitle"), description: t("metadata.openGraphDescription"), url: canonicalUrl, siteName: "Talon Dunbar", locale: locale === "fr" ? "fr_CA" : "en_US", type: "website", images: ["/projects/coralreef.webp"] },
    twitter: { card: "summary_large_image", title: t("metadata.openGraphTitle"), description: t("metadata.openGraphDescription"), images: ["/projects/coralreef.webp"] },
    robots: { index: true, follow: true },
  };
}

export default async function CoralReefCaseStudy({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "coralReefCaseStudy" });
  const homeHref = `/${locale}/`;
  const strong = (chunks: ReactNode) => <strong>{chunks}</strong>;
  const code = (chunks: ReactNode) => <code className="inline-block whitespace-nowrap rounded bg-background px-1 font-mono text-[0.9em] text-text">{chunks}</code>;

  return (
    <article className="py-28 sm:py-32">
      <ContainerLayout>
        <a href={`${homeHref}#projects`} className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"><ArrowLeft size={16} aria-hidden="true" />{t("backToProjects")}</a>
        <header className="mt-10 border-b border-border pb-12">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent">{t("eyebrow")}</p>
          <h1 className="mt-4 font-mono text-4xl font-bold tracking-tight text-text sm:text-6xl">{t("title")}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">{t.rich("subtitle", { strong })}</p>
          <div className="mt-8 flex flex-wrap gap-3">{["team", "azure", "environments", "live"].map((key) => <span key={key} className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-sm text-accent">{t(`meta.${key}`)}</span>)}</div>
        </header>

        <div className="mt-16 space-y-16">
          <section aria-labelledby="overview"><Heading id="overview">{t("overview.title")}</Heading><p className="mt-5 max-w-4xl leading-relaxed text-muted">{t.rich("overview.body", { strong })}</p></section>

          <section aria-labelledby="role"><Heading id="role">{t("role.title")}</Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("role.intro", { strong })}</p><ul className="mt-6 grid gap-4 sm:grid-cols-2">{roleItems.map((item) => <li key={item} className="flex gap-3 rounded-lg border border-border bg-card p-5 text-sm leading-relaxed text-muted"><CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={18} aria-hidden="true" /><span className="min-w-0">{t.rich(`role.${item}`, { strong, code })}</span></li>)}</ul></section>

          <section aria-labelledby="delivery"><Heading id="delivery">{t("delivery.title")}</Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("delivery.intro", { strong })}</p><div className="mt-8"><CoralReefDeploymentDiagram labels={{ pipeline: t("diagram.pipeline"), push: t("diagram.push"), ci: t("diagram.ci"), checks: t("diagram.checks"), build: t("diagram.build"), artifact: t("diagram.artifact"), deploy: t("diagram.deploy"), production: t("diagram.production"), local: t("diagram.local"), cloudflare: t("diagram.cloudflare"), appService: t("diagram.appService"), mongodb: t("diagram.mongodb"), blobStorage: t("diagram.blobStorage"), docker: t("diagram.docker"), nextServer: t("diagram.nextServer"), azurite: t("diagram.azurite") }} /></div><p className="mt-3 font-mono text-xs leading-relaxed text-muted">{t("diagram.caption")}</p></section>

          <section aria-labelledby="pipeline"><Heading id="pipeline">{t("pipeline.title")}</Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("pipeline.intro", { strong })}</p><div className="mt-8 grid overflow-hidden rounded-lg border border-border sm:grid-cols-2 lg:grid-cols-4">{pipelineItems.map((item, index) => <section key={item} className="border-b border-border bg-card p-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"><span className="font-mono text-sm font-semibold text-accent">0{index + 1}</span><h3 className="mt-3 font-mono font-semibold text-text">{t(`pipeline.${item}.title`)}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{t(`pipeline.${item}.body`)}</p></section>)}</div><CodeSnippet>{"stages:\n  - test\n  - build\n  - archive\n  - deploy\n\naz login --service-principal -u $AZ_SP_ID -p $AZ_SP_SECRET --tenant $AZ_TENANT\naz webapp deploy --src-path $RELEASE_FILE --type zip"}</CodeSnippet></section>
          <section aria-labelledby="environments"><Heading id="environments">{t("environments.title")}</Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("environments.body", { strong })}</p><div className="mt-8 grid gap-4 md:grid-cols-3"><FeatureCard icon={Cloud} title={t("environments.azure.title")} body={t("environments.azure.body")} /><FeatureCard icon={Container} title={t("environments.docker.title")} body={t("environments.docker.body")} /><FeatureCard icon={GitBranch} title={t("environments.config.title")} body={t("environments.config.body")} /></div></section>

          <section aria-labelledby="reliability"><Heading id="reliability">{t("reliability.title")}</Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("reliability.body", { strong })}</p><div className="mt-6 rounded-lg border border-border bg-card p-5"><HeartPulse className="text-accent" size={22} aria-hidden="true" /><h3 className="mt-3 font-mono font-semibold text-text">{t("reliability.health.title")}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{t("reliability.health.body")}</p></div></section>

          <section aria-labelledby="learned" className="rounded-lg border border-accent/60 bg-accent/10 p-5 sm:p-6"><Heading id="learned"><span className="flex items-center gap-2"><ShieldCheck className="text-accent" size={22} aria-hidden="true" />{t("learned.title")}</span></Heading><p className="mt-4 max-w-4xl leading-relaxed text-muted">{t.rich("learned.intro", { strong })}</p><ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted sm:grid-cols-2">{learningItems.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={16} aria-hidden="true" />{t(`learned.${item}`)}</li>)}</ul></section>
        </div>

        <section aria-labelledby="case-study-cta" className="mt-16 border-t border-border pt-8"><h2 id="case-study-cta" className="max-w-2xl font-mono text-xl font-bold text-text sm:text-2xl">{t("ctaTitle")}</h2><div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"><a href={`${homeHref}#projects`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">{t("viewOtherProjects")}<ArrowRight size={16} aria-hidden="true" /></a><a href="https://thecoralreef.club/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2">{t("viewLive")}<ArrowRight size={16} aria-hidden="true" /></a></div></section>
      </ContainerLayout>
    </article>
  );
}

function Heading({ id, children }: { id: string; children: ReactNode }) {
  return <h2 id={id} className="font-mono text-2xl font-bold text-text sm:text-3xl">{children}</h2>;
}

function FeatureCard({ icon: Icon, title, body }: { icon: typeof Cloud; title: string; body: string }) {
  return <section className="rounded-lg border border-border bg-card p-5"><Icon className="text-accent" size={21} aria-hidden="true" /><h3 className="mt-3 font-mono font-semibold text-text">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{body}</p></section>;
}

function CodeSnippet({ children }: { children: string }) {
  return <pre className="mt-6 overflow-x-auto rounded-lg border border-border bg-background p-5 font-mono text-xs leading-relaxed text-muted"><code>{children}</code></pre>;
}
