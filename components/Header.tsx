"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
          <button className="arx-panel-close" type="button" onClick={closeMenu} aria-label={copy.closeMenu}>
            <span aria-hidden="true">×</span>
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
            <Link href={localizeHref("/contacts", locale)} onClick={closeMenu} className="arx-mobile-login">
              {copy.contactsLabel}
            </Link>
          </nav>
          <LanguageSwitcher />
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
          <Link href={localizeHref("/contacts", locale)} className="arx-login" aria-label={copy.contactsAria}>
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
            <span className="arx-menu-label">{locale === "ru" ? "Меню" : "Menu"}</span>
            <span className="arx-menu-lines" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </header>
    </>
  );
}
