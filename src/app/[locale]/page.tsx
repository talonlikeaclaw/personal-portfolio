import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import { siteProfiles, siteUrl } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Talon Dunbar",
    url: `${siteUrl}/${locale}/`,
    image: `${siteUrl}/headshot.jpg`,
    jobTitle:
      locale === "fr"
        ? "Développeur DevOps et Full-Stack"
        : "DevOps & Full-Stack Developer",
    description:
      locale === "fr"
        ? "Développeur DevOps et full-stack basé à Montréal."
        : "DevOps and full-stack developer based in Montreal.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montreal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    sameAs: siteProfiles,
    knowsAbout: [
      "DevOps",
      "Infrastructure",
      "React",
      "Next.js",
      "Go",
      "Docker",
      "Linux",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
    </>
  );
}
