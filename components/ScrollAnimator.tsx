"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = [
  ".arx-section-head-refined",
  ".arx-info-card",
  ".arx-direction-card",
  ".arx-integration-note",
  ".arx-security-flow",
  ".arx-faq-card",
  ".arx-footer-inner > div",
  ".arx-footer-links > div",
  ".arx-footer-bottom",
  ".page-intro-copy",
  ".page-intro-panel",
  ".detail-section",
  ".content-grid-section > *",
  ".large-info-card",
  ".product-panel",
  ".auth-page > *",
  ".simple-page > *",
  ".not-found-copy",
  ".not-found-visual",
  ".legal-hero",
  ".legal-section-card",
  ".legal-action",
  ".footer-brand",
  ".footer-column",
  ".footer-bottom"
].join(",");

export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector)).filter(
      (element) => !element.closest("[data-no-scroll-reveal]")
    );

    elements.forEach((element, index) => {
      element.classList.remove("is-visible");
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min((index % 7) * 55, 330)}ms`);

      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        element.classList.add("is-visible");
      }
    });

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12
      }
    );

    elements.forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
