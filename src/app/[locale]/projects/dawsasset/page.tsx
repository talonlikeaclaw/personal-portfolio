import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardList, Cloud, FileText, HandHeart, MessagesSquare } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/ui/Container";
import CaseStudyGalleryFigure from "@/components/ui/CaseStudyGalleryFigure";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

const roleItems = ["item1", "item2", "item3", "item4", "item5"] as const;
const deliverySteps = ["step1", "step2", "step3", "step4", "step5", "step6", "step7"] as const;
const challengeItems = ["item1", "item2", "item3", "item4"] as const;
const impactItems = ["item1", "item2", "item3", "item4", "item5"] as const;

const galleryItems = [
  { key: "equipmentList", image: "equipment-list.webp" },
  { key: "consumableList", image: "consumable-list.webp" },
  { key: "equipmentDetails", image: "equipment-details.webp" },
  { key: "consumableDetails", image: "consumable-details.webp" },
] as const;

const featuredGalleryItem = { key: "studentKiosk", image: "student-kiosk.webp" } as const;

const technicalHighlights = [
  { key: "infrastructure", items: ["item1", "item2", "item3", "item4"] },
  { key: "development", items: ["item1", "item2", "item3", "item4"] },
  { key: "delivery", items: ["item1", "item2", "item3", "item4"] },
] as const;

const engineeringItems = [
  { key: "projectCoordination", icon: ClipboardList },
  { key: "infrastructure", icon: Cloud },
  { key: "requirements", icon: MessagesSquare },
  { key: "documentation", icon: FileText },
  { key: "stakeholders", icon: MessagesSquare },
  { key: "handoff", icon: HandHeart },
] as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "dawsassetCaseStudy" });
  const canonicalUrl = `${siteUrl}/${locale}/projects/dawsasset/`;

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/en/projects/dawsasset/`,
        fr: `${siteUrl}/fr/projects/dawsasset/`,
        "x-default": `${siteUrl}/en/projects/dawsasset/`,
      },
    },
    openGraph: {
      title: t("metadata.openGraphTitle"),
      description: t("metadata.openGraphDescription"),
      url: canonicalUrl,
      siteName: "Talon Dunbar",
      locale: locale === "fr" ? "fr_CA" : "en_US",
      type: "website",
      images: ["/headshot.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.openGraphTitle"),
      description: t("metadata.openGraphDescription"),
      images: ["/headshot.webp"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function DawsAssetCaseStudy({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "dawsassetCaseStudy" });
  const homeHref = `/${locale}/`;

  return (
    <article className="py-28 sm:py-32">
      <Container>
        <a
          href={`${homeHref}#projects`}
          className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {t("backToProjects")}
        </a>

        <header className="mt-10 border-b border-border pb-12">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent">{t("organization")}</p>
          <h1 className="mt-4 font-mono text-4xl font-bold tracking-tight text-text sm:text-6xl">{t("title")}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{t("subtitle")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["internship", "team", "production", "duration", "platform"].map((key) => (
              <span key={key} className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-sm text-accent">
                {t(`meta.${key}`)}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-16 space-y-16">
          <section aria-labelledby="overview">
            <h2 id="overview" className="font-mono text-2xl font-bold text-text sm:text-3xl">{t("overview.title")}</h2>
            <p className="mt-5 leading-relaxed text-muted">{t("overview.body")}</p>
          </section>

          <section aria-labelledby="architecture">
            <h2 id="architecture" className="font-mono text-2xl font-bold text-text sm:text-3xl">{t("architecture.title")}</h2>
            <p className="mt-4 leading-relaxed text-muted">{t("architecture.intro")}</p>
            <div className="mt-8">
              <CaseStudyGalleryFigure
                naturalAspect
                captionMode="text"
                src="/projects/dawsasset/architecture.webp"
                alt={t("architecture.alt")}
                title={t("architecture.title")}
                description={t("architecture.caption")}
                sizes="(max-width: 768px) 100vw, 1024px"
                openLabel={t("architecture.openFullSize")}
                closeLabel={t("gallery.closeImage")}
              />
            </div>
          </section>

          <section aria-labelledby="gallery">
            <h2 id="gallery" className="font-mono text-2xl font-bold text-text sm:text-3xl">{t("gallery.title")}</h2>
            <p className="mt-4 leading-relaxed text-muted">{t("gallery.intro")}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {galleryItems.map(({ key, image }) => (
                <CaseStudyGalleryFigure
                  key={key}
                  src={`/projects/dawsasset/${image}`}
                  alt={t(`gallery.${key}.alt`)}
                  title={t(`gallery.${key}.title`)}
                  description={t(`gallery.${key}.caption`)}
                  openLabel={t("gallery.openImage", { title: t(`gallery.${key}.title`) })}
                  closeLabel={t("gallery.closeImage")}
                />
              ))}
            </div>
            <div className="mt-6">
              <CaseStudyGalleryFigure
                className="mx-auto max-w-[900px]"
                src={`/projects/dawsasset/${featuredGalleryItem.image}`}
                alt={t(`gallery.${featuredGalleryItem.key}.alt`)}
                title={t(`gallery.${featuredGalleryItem.key}.title`)}
                description={t(`gallery.${featuredGalleryItem.key}.caption`)}
                sizes="(max-width: 768px) 100vw, 1024px"
                stageClassName="aspect-[16/8.5]"
                openLabel={t("gallery.openImage", { title: t(`gallery.${featuredGalleryItem.key}.title`) })}
                closeLabel={t("gallery.closeImage")}
              />
            </div>
          </section>

          <section aria-labelledby="technical-highlights">
            <h2 id="technical-highlights" className="font-mono text-2xl font-bold text-text sm:text-3xl">{t("technicalHighlights.title")}</h2>
            <p className="mt-4 leading-relaxed text-muted">{t("technicalHighlights.intro")}</p>
            <div className="mt-6 grid overflow-hidden rounded-lg border border-border sm:grid-cols-3">
              {technicalHighlights.map(({ key, items }) => (
                <section key={key} className="border-b border-border bg-card p-4 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0">
                  <h3 className="border-b border-border pb-2 font-mono text-sm font-semibold text-accent">{t(`technicalHighlights.${key}.title`)}</h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted">
                    {items.map((item) => <li key={item}>{t(`technicalHighlights.${key}.${item}`)}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section aria-labelledby="problem">
            <h2 id="problem" className="font-mono text-2xl font-bold text-text sm:text-3xl">{t("problem.title")}</h2>
            <p className="mt-5 leading-relaxed text-muted">{t("problem.body")}</p>
          </section>

          <section aria-labelledby="requirements">
            <h2 id="requirements" className="font-mono text-2xl font-bold text-text sm:text-3xl">{t("requirements.title")}</h2>
            <p className="mt-5 leading-relaxed text-muted">{t("requirements.body")}</p>
          </section>

          <section aria-labelledby="role">
            <h2 id="role" className="font-mono text-2xl font-bold text-text sm:text-3xl">{t("role.title")}</h2>
            <p className="mt-5 leading-relaxed text-muted">{t("role.intro")}</p>
            <ul className="mt-6 space-y-3">
              {roleItems.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted">
                  <CheckCircle2 className="mt-1 shrink-0 text-accent" size={18} aria-hidden="true" />
                  <span>{t(`role.${item}`)}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="delivery" className="mt-16 rounded-lg border border-border bg-card p-6 sm:p-8">
          <h2 id="delivery" className="font-mono text-2xl font-bold text-text sm:text-3xl">{t("delivery.title")}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">{t("delivery.intro")}</p>
          <ol className="mt-8 border-l border-border">
            {deliverySteps.map((step, index) => (
              <li key={step} className="relative pb-5 pl-8 last:pb-0">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-accent bg-background text-xs font-bold text-accent">{index + 1}</span>
                <div className="rounded border border-border bg-background/50 px-4 py-3 font-mono text-sm text-text">
                  <h3 className="font-semibold">
                    <span className="text-accent">{t("delivery.week", { week: index + 1 })}</span>
                    <span>{" - "}{t(`delivery.${step}Title`)}</span>
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{t(`delivery.${step}Description`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="engineering" className="mt-16">
          <h2 id="engineering" className="font-mono text-2xl font-bold text-text sm:text-3xl">{t("engineering.title")}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">{t("engineering.intro")}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringItems.map(({ key, icon: Icon }) => (
              <section key={key} className="rounded-lg border border-border bg-card p-5">
                <Icon className="text-accent" size={22} aria-hidden="true" />
                <h3 className="mt-4 font-mono font-semibold text-text">{t(`engineering.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(`engineering.${key}.body`)}</p>
              </section>
            ))}
          </div>
        </section>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <section aria-labelledby="challenges" className="rounded-lg border border-border bg-card p-6">
            <h2 id="challenges" className="font-mono text-2xl font-bold text-text">{t("challenges.title")}</h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
              {challengeItems.map((item) => <li key={item}>{t(`challenges.${item}`)}</li>)}
            </ul>
          </section>
          <section aria-labelledby="impact" className="rounded-lg border border-accent/60 bg-accent/10 p-6">
            <h2 id="impact" className="flex items-center gap-2 font-mono text-2xl font-bold text-text">
              <CheckCircle2 className="text-accent" size={20} aria-hidden="true" />
              {t("impact.title")}
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
              {impactItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={16} aria-hidden="true" />
                  <span>{t(`impact.${item}`)}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="takeaways" className="mt-16 border-t border-border pt-12">
          <h2 id="takeaways" className="font-mono text-2xl font-bold text-text sm:text-3xl">{t("takeaways.title")}</h2>
          <p className="mt-5 leading-relaxed text-muted">{t("takeaways.body")}</p>
        </section>

        <section aria-labelledby="case-study-cta" className="mt-16 border-t border-border pt-8">
          <h2 id="case-study-cta" className="max-w-2xl font-mono text-xl font-bold text-text sm:text-2xl">{t("ctaTitle")}</h2>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`${homeHref}#projects`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm text-text transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {t("viewOtherProjects")}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/talon-dunbar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent bg-accent/10 px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              {t("contactCta")}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
      </Container>
    </article>
  );
}
