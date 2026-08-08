"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { id, en } from "./i18n";
import type { Dict } from "./i18n/types";

type Lang = "id" | "en";

interface LanguageContextValue {
  lang: Lang;
  t: Dict;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: lang === "id" ? id : en, toggle }),
    [lang, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
