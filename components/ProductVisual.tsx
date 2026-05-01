import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

export function ProductVisual() {
  return (
    <div className="product-visual" aria-hidden="true">
      <div className="product-platform" />
      <div className="shopping-bag">
        <span className="bag-handle" />
        <Logo compact />
      </div>
      <div className="floating-tile tile-bot">
        <Icon name="bot" className="h-6 w-6" />
      </div>
      <div className="floating-tile tile-vpn">
        <Icon name="shield" className="h-6 w-6" />
      </div>
      <div className="floating-tile tile-apps">
        <Icon name="apps" className="h-6 w-6" />
      </div>
    </div>
  );
}
