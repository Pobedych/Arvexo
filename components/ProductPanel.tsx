import type { CSSProperties, ReactNode } from "react";
import { Icon } from "@/components/Icons";
import { StatusPill } from "@/components/StatusPill";
import { robotRoadmap, shopProducts, type ProductPanelVariant } from "@/lib/content";

type ProductPanelProps = {
  variant: ProductPanelVariant;
  className?: string;
};

const commandModules = [
  { title: "VPN", status: "Secure", tone: "secure" as const, progress: 92 },
  { title: "Telegram Bots", status: "Active", tone: "active" as const, progress: 84 },
  { title: "Family Ecosystem", status: "In development", tone: "development" as const, progress: 58 },
  { title: "Care Robot R&D", status: "Future R&D", tone: "future" as const, progress: 28 }
];

export function ProductPanel({ className = "", variant }: ProductPanelProps) {
  if (variant === "command") {
    return (
      <PanelFrame className={className} eyebrow="Command center" status="Private stack" title="Arvexo ecosystem">
        <div className="panel-module-grid">
          {commandModules.map((module) => (
            <div key={module.title} className="panel-module">
              <div className="panel-module-top">
                <span>{module.title}</span>
                <StatusPill tone={module.tone}>{module.status}</StatusPill>
              </div>
              <Progress value={module.progress} />
              <MiniChart value={module.progress} />
            </div>
          ))}
        </div>
        <div className="panel-console">
          <ConsoleRow active label="Privacy layer" value="Protected" />
          <ConsoleRow active label="Automation layer" value="Running" />
          <ConsoleRow label="Family platform" value="Build phase" />
          <ConsoleRow label="Care research" value="Concept track" />
        </div>
      </PanelFrame>
    );
  }

  if (variant === "vpn") {
    return (
      <PanelFrame className={className} eyebrow="VPN product panel" status="Secure" title="Private access layer">
        <div className="panel-split">
          <div className="panel-focus">
            <span className="panel-icon">
              <Icon name="shield" className="h-6 w-6" />
            </span>
            <strong>Protected connection</strong>
            <p>Stable access and privacy status for daily digital use.</p>
          </div>
          <div className="panel-stack">
            <MetricRow label="Secure access" value="On" />
            <MetricRow label="Data protection" value="High" />
            <MetricRow label="Private usage" value="Enabled" />
            <Progress value={90} />
          </div>
        </div>
      </PanelFrame>
    );
  }

  if (variant === "bots") {
    return (
      <PanelFrame className={className} eyebrow="Bot workflow panel" status="Active" title="Automation flows">
        <div className="workflow-lane">
          <WorkflowStep label="Request" value="Captured" />
          <WorkflowStep label="Route" value="Assigned" />
          <WorkflowStep label="Action" value="Automated" />
          <WorkflowStep label="Notify" value="Sent" />
        </div>
        <div className="panel-tags">
          <span>Support bots</span>
          <span>Notifications</span>
          <span>Business tools</span>
          <span>Automation flows</span>
        </div>
      </PanelFrame>
    );
  }

  if (variant === "family") {
    return (
      <PanelFrame className={className} eyebrow="Family dashboard" status="In development" title="Secure family space">
        <div className="family-panel-grid">
          <div className="family-main-card">
            <span>AI assistant</span>
            <strong>Assistant message</strong>
            <p>Shared reminder and service coordination.</p>
            <Progress value={68} />
          </div>
          <MiniInfo label="Profile" value="Parent profile" />
          <MiniInfo label="Profile" value="Child profile" />
          <MiniInfo label="Services" value="Shared dashboard" />
          <MiniInfo label="Privacy" value="Secure space" />
        </div>
      </PanelFrame>
    );
  }

  if (variant === "robot") {
    return (
      <PanelFrame className={className} eyebrow="Research concept" status="Future R&D" title="Care technology track">
        <div className="research-map">
          {robotRoadmap.slice(0, 4).map((item, index) => (
            <div key={item} className={`research-node ${index === 0 ? "research-node-active" : ""}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
        <div className="panel-console">
          <ConsoleRow active label="Care-focused AI" value="Research" />
          <ConsoleRow label="Prototype direction" value="Planned" />
          <ConsoleRow label="Device concepts" value="Future" />
        </div>
      </PanelFrame>
    );
  }

  if (variant === "shop") {
    return (
      <PanelFrame className={className} eyebrow="Arvexo Shop" status="Catalog" title="Digital products">
        <div className="shop-panel-list">
          {shopProducts.map((product) => (
            <div key={product.name} className="shop-panel-row">
              <span className="panel-icon panel-icon-small">
                <Icon name={product.icon} className="h-5 w-5" />
              </span>
              <div>
                <strong>{product.name}</strong>
                <small>{product.description}</small>
              </div>
              <StatusPill tone={product.tone}>{product.status}</StatusPill>
            </div>
          ))}
        </div>
      </PanelFrame>
    );
  }

  return (
    <PanelFrame className={className} eyebrow="Contacts" status="Open" title="Arvexo contact layer">
      <div className="panel-split">
        <div className="panel-focus">
          <span className="panel-icon">
            <Icon name="telegram" className="h-6 w-6" />
          </span>
          <strong>Telegram</strong>
          <p>Direct product questions, access requests and bot setup discussions.</p>
        </div>
        <div className="panel-stack">
          <MetricRow label="Telegram" value="Available" />
          <MetricRow label="Email" value="Available" />
          <MetricRow label="Format" value="Direct contact" />
        </div>
      </div>
    </PanelFrame>
  );
}

function PanelFrame({
  children,
  className,
  eyebrow,
  status,
  title
}: {
  children: ReactNode;
  className?: string;
  eyebrow: string;
  status: string;
  title: string;
}) {
  return (
    <div className={`product-panel ${className ?? ""}`} aria-hidden="true">
      <div className="panel-topbar">
        <div>
          <span>{eyebrow}</span>
          <strong>{title}</strong>
        </div>
        <StatusPill tone="secure">{status}</StatusPill>
      </div>
      {children}
    </div>
  );
}

function Progress({ value }: { value: number }) {
  return (
    <div className="progress-track">
      <span style={{ width: `${value}%` }} />
    </div>
  );
}

function MiniChart({ value }: { value: number }) {
  const chartStyle: CSSProperties & { "--chart-value": string } = {
    "--chart-value": `${value}%`
  };

  return (
    <div className="mini-chart" style={chartStyle}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="metric-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ConsoleRow({ active = false, label, value }: { active?: boolean; label: string; value: string }) {
  return (
    <div className="console-row">
      <span className={`console-dot ${active ? "" : "console-dot-muted"}`} />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function WorkflowStep({ label, value }: { label: string; value: string }) {
  return (
    <div className="workflow-step">
      <span />
      <div>
        <strong>{label}</strong>
        <small>{value}</small>
      </div>
    </div>
  );
}

function MiniInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="mini-info">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
