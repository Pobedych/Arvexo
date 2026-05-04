import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { PageIntro } from "@/components/PageIntro";
import { ProductPanel } from "@/components/ProductPanel";
import { StatusPill } from "@/components/StatusPill";
import { shopProducts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Arvexo Shop — VPN Access, Telegram Bots and Digital Services",
  description: "Arvexo Shop lists digital products including VPN access, Telegram bot setup, mini apps and coming soon family services."
};

export default function ShopPage() {
  return (
    <>
      <PageIntro
        actionHref="/contacts"
        actionLabel="Get in touch"
        eyebrow="ARVEXO SHOP"
        panel="shop"
        points={["VPN Access", "Telegram Bot Setup", "Telegram Mini Apps", "Family Dashboard"]}
        subtitle="Digital products by Arvexo: VPN access, Telegram bots, mini apps and services for personal and professional tasks."
        title="Digital products inside the Arvexo ecosystem"
      />

      <section className="detail-section">
        <div className="detail-section-copy">
          <p className="eyebrow">PRODUCT LIST</p>
          <h2>Available and upcoming services</h2>
          <p>
            The shop page keeps the active commercial directions visible while showing where the platform is
            developing next.
          </p>
          <Button href="/contacts" className="mt-2 px-6 py-3">
            Request product details
          </Button>
        </div>
        <ProductPanel variant="shop" />
      </section>

      <section className="content-grid-section">
        <div className="shop-product-grid">
          {shopProducts.map((product) => (
            <article key={product.name} className="shop-product-card">
              <span className="section-icon">
                <Icon name={product.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <StatusPill tone={product.tone}>{product.status}</StatusPill>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
