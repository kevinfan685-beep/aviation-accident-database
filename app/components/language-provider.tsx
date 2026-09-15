"use client";
import { createContext, useContext, useEffect, useState } from "react";
type Language = "en" | "zh";
const LanguageContext = createContext<{ language: Language; toggleLanguage: () => void }>({ language: "en", toggleLanguage: () => undefined });
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  useEffect(() => { const saved = localStorage.getItem("aerosafety-language"); if (saved === "en" || saved === "zh") setLanguage(saved); }, []);
  const toggleLanguage = () => setLanguage((current) => { const next = current === "en" ? "zh" : "en"; localStorage.setItem("aerosafety-language", next); return next; });
  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
