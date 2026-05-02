import { telegramUrl } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { ProductVisual } from "@/components/ProductVisual";
import { Section } from "@/components/Section";

export function Shop() {
  return (
    <Section id="shop">
      <div className="shop-card">
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow">Digital products</p>
          <h2 className="section-title">Arvexo Shop</h2>
          <p className="mt-5 text-base leading-8 text-white/[0.68] sm:text-lg">
            Digital products by Arvexo: VPN access, Telegram bots, mini apps and services for personal
            and professional tasks.
          </p>
          <a href={telegramUrl} className="primary-button mt-7 inline-flex px-5 py-3" target="_blank" rel="noreferrer">
            <Icon name="bag" className="h-5 w-5" />
            Open shop
          </a>
        </div>
        <ProductVisual />
      </div>
    </Section>
  );
}
