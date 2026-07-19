import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const languages = {
  en: `${siteUrl}/en/`,
  fr: `${siteUrl}/fr/`,
  "x-default": `${siteUrl}/en/`,
};

const dawsassetLanguages = {
  en: `${siteUrl}/en/projects/dawsasset/`,
  fr: `${siteUrl}/fr/projects/dawsasset/`,
  "x-default": `${siteUrl}/en/projects/dawsasset/`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: languages.en,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: languages.fr,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: dawsassetLanguages.en,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: dawsassetLanguages },
    },
    {
      url: dawsassetLanguages.fr,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: dawsassetLanguages },
    },
  ];
}
