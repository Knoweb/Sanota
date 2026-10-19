"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, LanguageCode, Translations } from "@/locales/translations";

export type { LanguageCode };

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
}

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", dir: "ltr" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇦🇪", dir: "rtl" },
];

interface LanguageContextType {
  language: LanguageCode;
  currentLanguage: Language;
  setLanguage: (code: LanguageCode) => void;
  isRTL: boolean;
  t: Translations;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");
  const [mounted, setMounted] = useState(false);

  const applyLanguage = (code: LanguageCode) => {
    const langObj = LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];
    const root = document.documentElement;
    root.setAttribute("lang", code);
    root.setAttribute("dir", langObj.dir);
    if (langObj.dir === "rtl") {
      root.classList.add("rtl");
    } else {
      root.classList.remove("rtl");
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("sanota-lang") as LanguageCode | null;
    const validCodes: LanguageCode[] = ["en", "es", "ja", "de", "ar"];
    if (saved && validCodes.includes(saved)) {
      setLanguageState(saved);
      applyLanguage(saved);
    } else {
      // Default to English
      setLanguageState("en");
      applyLanguage("en");
    }
    setMounted(true);
  }, []);

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    localStorage.setItem("sanota-lang", code);
    applyLanguage(code);
  };

  const currentLanguage = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
  const isRTL = currentLanguage.dir === "rtl";
  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        currentLanguage,
        setLanguage,
        isRTL,
        t,
        languages: LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
