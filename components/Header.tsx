"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { mobileNavigation, navigation } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-bar">
        <Link href="/" className="focus-ring" onClick={closeMenu} aria-label="Arvexo home">
          <Logo />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-cta">
          <Button href="/contacts" className="header-cta px-5 py-2.5" aria-label="Open contacts page">
            Contacts
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring mobile-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="mobile-menu mobile-menu-open">
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {mobileNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${pathname === item.href ? "mobile-nav-link-active" : ""}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
