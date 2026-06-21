"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ru" | "zh";

const STORAGE_KEY = "arx-lang";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({ lang: "en", setLang: () => {} });

export function LangProvider({ children, defaultLang }: { children: ReactNode; defaultLang: Lang }) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "zh") setLangState("zh");
    } catch {}
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    try {
      if (l === "zh") {
        localStorage.setItem(STORAGE_KEY, "zh");
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {}
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
