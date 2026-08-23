import Link from "next/link";
import type { ReactNode } from "react";

type FocusPageProps = {
  locale: "en" | "ru";
  label: string;
  title: string;
  lead: string;
  statement: string;
  sections: Array<{ title: string; text: string }>;
  primary?: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string; external?: boolean };
  children?: ReactNode;
};

function Action({ action, primary = false }: { action: NonNullable<FocusPageProps["primary"]>; primary?: boolean }) {
  const className = primary ? "eco-button eco-button-primary" : "eco-button eco-button-quiet";
  if (action.external) {
    const newTab = action.href.startsWith("http");
    return <a className={className} href={action.href} target={newTab ? "_blank" : undefined} rel={newTab ? "noreferrer" : undefined}>{action.label}<span aria-hidden="true">↗</span></a>;
  }
  return <Link className={className} href={action.href}>{action.label}<span aria-hidden="true">↗</span></Link>;
}

export function FocusPage({ children, label, lead, locale, primary, secondary, sections, statement, title }: FocusPageProps) {
  return (
    <div className="focus-page">
      <section className="focus-hero">
        <p className="eco-label">{label}</p>
        <h1>{title}</h1>
        <div className="focus-lead"><p>{lead}</p><span>{statement}</span></div>
        {(primary || secondary) && <div className="eco-buttons">{primary && <Action action={primary} primary />}{secondary && <Action action={secondary} />}</div>}
      </section>
      <section className="focus-grid">
        {sections.map((section, index) => (
          <article key={section.title}><span>0{index + 1}</span><h2>{section.title}</h2><p>{section.text}</p></article>
        ))}
      </section>
      {children}
      <section className="focus-footer-cta">
        <p>{locale === "ru" ? "Есть задача или исследовательский вопрос?" : "Have a problem or research question?"}</p>
        <a href="mailto:arvexoai@gmail.com">{locale === "ru" ? "Написать Arvexo" : "Contact Arvexo"}<span aria-hidden="true">↗</span></a>
      </section>
    </div>
  );
}
