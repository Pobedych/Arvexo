import { Button } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { ProductPanel } from "@/components/ProductPanel";
import { heroMetrics } from "@/lib/content";

export function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <p className="eyebrow">PRIVATE DIGITAL ECOSYSTEM</p>
        <h1>Arvexo — privacy tools, family technology and future care R&D</h1>
        <p>
          VPN, Telegram Bots, Family Ecosystem and Care Robot R&D — one digital platform for privacy,
          automation and future care technologies.
        </p>
        <div className="hero-actions">
          <Button href="/shop" className="px-6 py-3">
            <Icon name="bag" className="h-5 w-5" />
            Open Shop
          </Button>
          <Button href="/contacts" variant="secondary" className="px-6 py-3">
            Get in touch
          </Button>
        </div>
        <div className="hero-metrics" aria-label="Arvexo ecosystem directions">
          {heroMetrics.map((metric) => (
            <span key={metric}>{metric}</span>
          ))}
        </div>
      </div>
      <ProductPanel variant="command" />
    </section>
  );
}
