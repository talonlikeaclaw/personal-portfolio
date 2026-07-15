import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedIconProvider from "@/components/icons/AnimatedIconProvider";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("metadata");
  const canonicalUrl = `${siteUrl}/${locale}/`;

  return {
    title: {
      default: t("title"),
      template: "%s | Talon Dunbar",
    },
    description: t("description"),
    metadataBase: new URL(siteUrl),
    applicationName: "Talon Dunbar Portfolio",
    authors: [{ name: "Talon Dunbar", url: siteUrl }],
    creator: "Talon Dunbar",
    publisher: "Talon Dunbar",
    keywords: [
      "Talon Dunbar",
      "DevOps developer",
      "full-stack developer",
      "Montreal developer",
      "React developer",
      "Next.js developer",
      "infrastructure",
      "automation",
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}/en/`,
        fr: `${siteUrl}/fr/`,
        "x-default": `${siteUrl}/en/`,
      },
    },
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      url: canonicalUrl,
      siteName: "Talon Dunbar",
      locale: locale === "fr" ? "fr_CA" : "en_US",
      type: "website",
      images: ["/headshot.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description: t("twitter.description"),
      images: ["/headshot.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    other: {
      "theme-color": "#0a0a0f",
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AnimatedIconProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AnimatedIconProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
