"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translate, type Locale } from "@/config/translations";

const LanguageContext = createContext({
  locale: "en" as Locale,
  setLocale: (_locale: Locale) => {},
  t: (text: string) => text,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-language");
      if (saved === "en" || saved === "fa-AF" || saved === "ps") setLocale(saved);
    } catch { /* Storage may be disabled. */ }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "en" ? "ltr" : "rtl";
  }, [locale]);

  function changeLocale(value: Locale) {
    setLocale(value);
    try { localStorage.setItem("portfolio-language", value); } catch { /* Optional preference. */ }
  }

  return <LanguageContext.Provider value={{ locale, setLocale: changeLocale, t: (text) => translate(text, locale) }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

export function TranslatedText({ children }: { children: string }) {
  return <>{useLanguage().t(children)}</>;
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  return (
    <select aria-label="Language / زبان / ژبه" value={locale} onChange={(event) => setLocale(event.target.value as Locale)} className="h-10 max-w-28 rounded-full border bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" dir="ltr">
      <option value="en" lang="en">English</option>
      <option value="fa-AF" lang="fa-AF">دری</option>
      <option value="ps" lang="ps">پښتو</option>
    </select>
  );
}
