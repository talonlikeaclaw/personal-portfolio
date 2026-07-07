"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { routing, type Locale } from "@/i18n/routing";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  const otherLocale = routing.locales.find((l) => l !== locale) ?? routing.defaultLocale;

  function handleToggle() {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length > 0 && routing.locales.includes(segments[0] as Locale)) {
      segments[0] = otherLocale;
    } else {
      segments.unshift(otherLocale);
    }

    router.push(`/${segments.join("/")}${hash}`);
  }

  return (
    <button
      onClick={handleToggle}
      aria-label={t("toggleLanguageAria")}
      className={`flex items-center gap-1.5 rounded-lg border border-border bg-card/50 p-2 font-mono text-sm text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${className}`}
    >
      <Globe size={18} />
      <span>{otherLocale.toUpperCase()}</span>
    </button>
  );
}
