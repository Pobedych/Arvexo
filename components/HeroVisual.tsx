import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-core">
        <Logo compact />
        <span>Private platform</span>
      </div>
      <div className="visual-node visual-node-shield">
        <Icon name="shield" className="h-7 w-7" />
      </div>
      <div className="visual-node visual-node-bot">
        <Icon name="bot" className="h-7 w-7" />
      </div>
      <div className="visual-node visual-node-family">
        <Icon name="network" className="h-7 w-7" />
      </div>
      <div className="visual-node visual-node-rd">
        <Icon name="flask" className="h-7 w-7" />
      </div>
    </div>
  );
}
