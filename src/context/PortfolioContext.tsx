"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dictionary, type Language, type PortfolioCopy } from "@/data/dictionary";

type Theme = "dark" | "light";
type PortfolioContextValue = {
  language: Language;
  theme: Theme;
  copy: PortfolioCopy;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [language, setLanguage] = useState<Language>("es");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
  }, [language, theme]);

  const value = useMemo<PortfolioContextValue>(() => ({
    language,
    theme,
    copy: dictionary[language],
    setLanguage,
    toggleLanguage: () => setLanguage((current) => current === "es" ? "en" : "es"),
    toggleTheme: () => setTheme((current) => current === "dark" ? "light" : "dark"),
  }), [language, theme]);

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error("usePortfolio must be used within a PortfolioProvider.");
  return context;
}
