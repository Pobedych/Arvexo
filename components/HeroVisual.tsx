import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="platform platform-back" />
      <div className="cube-stage">
        <div className="cube cube-main">
          <div className="cube-face cube-front">
            <Logo compact />
          </div>
          <div className="cube-face cube-top">
            <Icon name="wifi" className="h-8 w-8" />
          </div>
          <div className="cube-face cube-side">
            <Icon name="bot" className="h-8 w-8" />
          </div>
        </div>
        <div className="orbit-card orbit-card-left">
          <Icon name="shield" className="h-8 w-8" />
        </div>
        <div className="orbit-card orbit-card-bottom">
          <Icon name="bot" className="h-8 w-8" />
        </div>
        <div className="orbit-card orbit-card-right">
          <Icon name="wifi" className="h-8 w-8" />
        </div>
      </div>
      <div className="platform platform-front" />
    </div>
  );
}
