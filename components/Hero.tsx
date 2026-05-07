import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-stars" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-badge">New</p>
        <h1 id="hero-title">Building the AI ecosystem for digital privacy and family technology.</h1>
        <p>
          Arvexo connects VPN products, Telegram automation, Family Ecosystem and future Care Robot
          R&D into one long-term technology platform.
        </p>
        <div className="hero-actions">
          <Button href="/shop" className="px-5 py-2.5" aria-label="Open Arvexo shop">
            Open shop
          </Button>
          <Button
            href="#directions"
            variant="secondary"
            className="px-5 py-2.5"
            aria-label="View Arvexo directions"
          >
            View directions
          </Button>
        </div>
      </div>
    </section>
  );
}
