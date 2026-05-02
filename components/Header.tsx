"use client";

import { useState } from "react";
import { mobileNavigation, navigation, telegramUrl } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="focus-ring rounded-lg" onClick={closeMenu}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contacts" className="secondary-button header-cta px-4 py-2">
            Contacts
          </a>
          <a href={telegramUrl} className="primary-button header-cta px-5 py-2.5" target="_blank" rel="noreferrer">
            <Icon name="telegram" className="h-4 w-4" />
            Написать в Telegram
          </a>
        </div>

        <button
          type="button"
          className="focus-ring mobile-menu-button lg:hidden"
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
          <nav className="grid gap-2 px-5 pb-5 pt-2" aria-label="Mobile navigation">
            {mobileNavigation.map((item) => (
              <a key={item.href} href={item.href} className="mobile-nav-link" onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a href={telegramUrl} className="primary-button justify-center px-5 py-3" onClick={closeMenu} target="_blank" rel="noreferrer">
              <Icon name="telegram" className="h-4 w-4" />
              Написать в Telegram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
