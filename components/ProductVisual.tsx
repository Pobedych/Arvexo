import { Icon } from "@/components/Icons";

const products = [
  { name: "VPN Access", meta: "Available", status: "Available", icon: "shield" as const },
  { name: "Telegram Bot Setup", meta: "Custom workflow", status: "Setup", icon: "bot" as const },
  { name: "Mini App", meta: "Service interface", status: "Coming soon", icon: "apps" as const }
];

export function ProductVisual() {
  return (
    <div className="product-visual" aria-hidden="true">
      <div className="mockup-topbar">
        <div>
          <span className="mockup-label">Arvexo Shop</span>
          <strong>Digital products</strong>
        </div>
        <span className="status-pill">Catalog</span>
      </div>
      <div className="shop-list">
        {products.map((product) => (
          <div key={product.name} className="shop-product-row">
            <span className="mini-icon">
              <Icon name={product.icon} className="h-5 w-5" />
            </span>
            <div>
              <strong>{product.name}</strong>
              <small>{product.meta}</small>
            </div>
            <span>{product.status}</span>
          </div>
        ))}
      </div>
      <div className="shop-summary">
        <span>Services</span>
        <strong>Personal and professional tasks</strong>
      </div>
    </div>
  );
}
