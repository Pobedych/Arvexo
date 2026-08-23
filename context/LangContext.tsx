"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "ru";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({ lang: "en", setLang: () => {} });

export function LangProvider({ children, defaultLang }: { children: ReactNode; defaultLang: Lang }) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  function setLang(l: Lang) {
    setLangState(l);
  }

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
