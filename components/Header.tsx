"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { chromeContent, getLocaleFromPath, localizeHref, stripLocale } from "@/lib/i18n";

export function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const locale = mounted ? getLocaleFromPath(pathname) : "ru";
  const copy = chromeContent[locale];
  const navigation = [...copy.navigation];
  const mobileNavigation = [...navigation];
  const normalizedPath = mounted ? stripLocale(pathname) : "";
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (pathname === "/" || pathname === "/ru") {
    return null;
  }

  return (
    <>
      {menuOpen && (
        <div id="mobile-navigation" className="arx-mobile-panel arx-mobile-panel-refined">
          <button className="arx-icon-button" type="button" onClick={closeMenu} aria-label={copy.closeMenu}>
            <Icon name="close" className="h-5 w-5" />
          </button>
          <nav aria-label={copy.mobileNavLabel}>
            {mobileNavigation.map((item) => {
              const href = localizeHref(item.href, locale);

              return (
                <Link key={`${item.label}-${item.href}`} href={href} onClick={closeMenu}>
                  {item.label}
                </Link>
              );
            })}
            <Link href="https://account.arvexo.ru" onClick={closeMenu} className="arx-mobile-login">
              {copy.contactsLabel}
            </Link>
          </nav>
        </div>
      )}

      <header className="arx-header site-header">
        <Link href={localizeHref("/", locale)} className="arx-brand" onClick={closeMenu} aria-label={copy.homeLabel}>
          <Logo />
        </Link>

        <nav className="arx-nav" aria-label={copy.mainNavLabel}>
          {navigation.map((item) => {
            const href = localizeHref(item.href, locale);

            return (
              <Link
                key={`${item.label}-${item.href}`}
                href={href}
                className={normalizedPath === item.href ? "nav-link-active" : ""}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="arx-header-actions">
          <LanguageSwitcher />
          <Link href="https://account.arvexo.ru" className="arx-login" aria-label={copy.contactsAria}>
            {copy.contactsLabel}
          </Link>
          <button
            type="button"
            className="arx-menu-button"
            aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </header>
    </>
  );
}
