"use client";

import { useState } from "react";
import { navigation, telegramUrl } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="focus-ring rounded-lg">
          <Logo />
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-white/[0.82] lg:flex" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={telegramUrl} className="secondary-button px-5 py-3" target="_blank" rel="noreferrer">
            <Icon name="telegram" className="h-4 w-4" />
            Написать в Telegram
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.06] text-white lg:hidden"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-menu mobile-menu-open lg:hidden">
          <nav className="grid gap-2 px-5 pb-5" aria-label="Мобильная навигация">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="mobile-nav-link" onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a href={telegramUrl} className="primary-button mt-2 justify-center py-3" target="_blank" rel="noreferrer" onClick={closeMenu}>
              <Icon name="telegram" className="h-4 w-4" />
              Написать в Telegram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
