"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLang, type Lang } from "@/context/LangContext";
import { stripLocale } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  function handleSelect(l: Lang) {
    if (l === "zh") {
      setLang("zh");
      return;
    }

    setLang(l);

    const base = stripLocale(pathname);

    if (l === "ru") {
      router.push(base === "/" ? "/ru" : `/ru${base}`);
    } else {
      router.push(base || "/");
    }
  }

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      <button
        type="button"
        className={lang !== "ru" && lang !== "zh" ? "lang-active" : ""}
        onClick={() => handleSelect("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={lang === "ru" ? "lang-active" : ""}
        onClick={() => handleSelect("ru")}
        aria-pressed={lang === "ru"}
      >
        RU
      </button>
      <button
        type="button"
        className={lang === "zh" ? "lang-active" : ""}
        onClick={() => handleSelect("zh")}
        aria-pressed={lang === "zh"}
      >
        ZH
      </button>
    </div>
  );
}
