import { telegramUrl } from "@/lib/content";
import { Icon } from "@/components/Icons";
import { ProductVisual } from "@/components/ProductVisual";
import { Section } from "@/components/Section";

export function Shop() {
  return (
    <Section id="shop">
      <div className="shop-card">
        <div className="relative z-10 max-w-2xl">
          <h2 className="section-title">Arvexo Shop</h2>
          <p className="mt-5 text-base leading-8 text-white/[0.68] sm:text-lg">
            Магазин цифровых продуктов: AI-подписки, VPN-доступ, сервисы и решения для личных и профессиональных задач.
          </p>
          <a href={telegramUrl} className="primary-button mt-8 inline-flex px-6 py-4" target="_blank" rel="noreferrer">
            <Icon name="bag" className="h-5 w-5" />
            Перейти в магазин
          </a>
        </div>
        <ProductVisual />
      </div>
    </Section>
  );
}
