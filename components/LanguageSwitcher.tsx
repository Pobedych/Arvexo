"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLang, type Lang } from "@/context/LangContext";
import { stripLocale } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const router = useRouter();
  const activeLang: Lang = pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : lang;

  function handleSelect(l: Lang) {
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
        className={activeLang === "en" ? "lang-active" : ""}
        onClick={() => handleSelect("en")}
        aria-pressed={activeLang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={activeLang === "ru" ? "lang-active" : ""}
        onClick={() => handleSelect("ru")}
        aria-pressed={activeLang === "ru"}
      >
        RU
      </button>
    </div>
  );
}
