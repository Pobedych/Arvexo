import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { PageIntro } from "@/components/PageIntro";
import { contactCards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacts — Arvexo",
  description: "Contact Arvexo through Telegram or email for VPN, Telegram Bots, Family Ecosystem and Care Robot R&D."
};

export default function ContactsPage() {
  return (
    <>
      <PageIntro
        actionHref="https://t.me/arvexoai"
        actionLabel="Open Telegram"
        eyebrow="CONTACTS"
        panel="contact"
        points={["Telegram", "Email", "Product questions", "Partnership discussions"]}
        subtitle="Contact Arvexo about active products, startup direction, future research and ecosystem collaboration."
        title="Talk to Arvexo"
      />

      <section className="content-grid-section">
        <div className="section-heading">
          <p className="eyebrow">CONTACT OPTIONS</p>
          <h2>Direct channels</h2>
        </div>
        <div className="contact-card-grid">
          {contactCards.map((card) => (
            <article key={card.title} className="contact-card">
              <span className="section-icon">
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Button
                href={card.href}
                className="mt-4 px-5 py-3"
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {card.label}
              </Button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
