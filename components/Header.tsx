"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { chromeContent, getLocaleFromPath, localeSwitchHref, localizeHref, stripLocale, type Locale } from "@/lib/i18n";

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const copy = chromeContent[locale];
  const navigation = [...copy.navigation];
  const mobileNavigation = [...navigation, ...copy.mobileExtra];
  const normalizedPath = stripLocale(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link href={localizeHref("/", locale)} className="focus-ring" onClick={closeMenu} aria-label={copy.homeLabel}>
          <Logo />
        </Link>

        <nav className="desktop-nav" aria-label={copy.mainNavLabel}>
          {navigation.map((item) => {
            const href = localizeHref(item.href, locale);

            return (
              <Link
                key={item.href}
                href={href}
                className={`nav-link ${normalizedPath === item.href ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="desktop-cta">
          <LanguageSwitch locale={locale} pathname={pathname} />
          <Button href={localizeHref("/contacts", locale)} className="header-cta px-5 py-2.5" aria-label={copy.contactsAria}>
            {copy.contactsLabel}
          </Button>
        </div>

        <div className="mobile-header-actions">
          <LanguageSwitch locale={locale} pathname={pathname} compact />
          <button
            type="button"
            className="focus-ring mobile-menu-button"
            aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-menu mobile-menu-open">
          <nav className="mobile-nav" aria-label={copy.mobileNavLabel}>
            {mobileNavigation.map((item) => {
              const href = localizeHref(item.href, locale);

              return (
                <Link
                  key={item.href}
                  href={href}
                  className={`mobile-nav-link ${normalizedPath === item.href ? "mobile-nav-link-active" : ""}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

function LanguageSwitch({
  compact = false,
  locale,
  pathname
}: {
  compact?: boolean;
  locale: Locale;
  pathname: string;
}) {
  return (
    <div className={`language-switch ${compact ? "language-switch-compact" : ""}`} aria-label="Language switcher">
      {(["en", "ru"] as const).map((item) => (
        <Link
          key={item}
          href={localeSwitchHref(pathname, item)}
          className={locale === item ? "language-switch-active" : ""}
          aria-current={locale === item ? "true" : undefined}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
