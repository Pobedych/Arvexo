import { Icon } from "@/components/Icons";
import type { DirectionVisual, ProcessVisual, VisionVisual } from "@/lib/content";

const heroProducts = [
  { title: "VPN", status: "Secure", progress: 92 },
  { title: "Telegram Bots", status: "Active", progress: 84 },
  { title: "Family Ecosystem", status: "In development", progress: 58 },
  { title: "Care Robot R&D", status: "Future R&D", progress: 36 }
];

export function HeroDashboard() {
  return (
    <div className="dashboard-frame hero-dashboard" aria-hidden="true">
      <div className="mockup-topbar">
        <div>
          <span className="mockup-label">Arvexo Control</span>
          <strong>Private ecosystem</strong>
        </div>
        <span className="status-pill">Secure stack</span>
      </div>

      <div className="hero-product-grid">
        {heroProducts.map((item) => (
          <div key={item.title} className="product-status-card">
            <div className="flex items-start justify-between gap-3">
              <span>{item.title}</span>
              <small>{item.status}</small>
            </div>
            <Progress value={item.progress} />
          </div>
        ))}
      </div>

      <div className="task-console">
        <div className="console-row">
          <span className="console-dot" />
          <span>Privacy gateway</span>
          <strong>Protected</strong>
        </div>
        <div className="console-row">
          <span className="console-dot" />
          <span>Bot workflows</span>
          <strong>12 active</strong>
        </div>
        <div className="console-row">
          <span className="console-dot muted" />
          <span>Family assistant</span>
          <strong>Roadmap</strong>
        </div>
        <div className="console-row">
          <span className="console-dot muted" />
          <span>Care R&D</span>
          <strong>Concept</strong>
        </div>
      </div>
    </div>
  );
}

export function DirectionMockup({ visual }: { visual: DirectionVisual }) {
  if (visual === "vpn") {
    return (
      <div className="mini-ui">
        <div className="mini-ui-header">
          <span className="mini-icon">
            <Icon name="shield" className="h-5 w-5" />
          </span>
          <span className="status-pill">Protected</span>
        </div>
        <MetricRow label="Connection" value="Stable" />
        <MetricRow label="Privacy level" value="High" />
        <MetricRow label="Access" value="Private" />
        <Progress value={88} />
      </div>
    );
  }

  if (visual === "bots") {
    return (
      <div className="mini-ui">
        <div className="bot-thread">
          <div className="bot-message">Support request received</div>
          <div className="bot-message is-user">Auto reply sent</div>
        </div>
        <div className="mini-list">
          <ChecklistItem label="Support" />
          <ChecklistItem label="Sales" />
          <ChecklistItem label="Notifications" />
        </div>
        <span className="status-pill">Running</span>
      </div>
    );
  }

  if (visual === "family") {
    return (
      <div className="mini-ui">
        <div className="profile-strip">
          <span>AM</span>
          <span>SK</span>
          <span>AI</span>
        </div>
        <MetricRow label="Shared dashboard" value="Online" />
        <MetricRow label="Assistant" value="Draft" />
        <div className="mini-card-row">
          <span>Reminder</span>
          <strong>18:30</strong>
        </div>
        <span className="status-pill soft">In development</span>
      </div>
    );
  }

  return (
    <div className="mini-ui">
      <div className="rd-timeline">
        <TimelineItem label="Sensors" active />
        <TimelineItem label="Assistant" active />
        <TimelineItem label="Care tasks" />
      </div>
      <MetricRow label="Prototype" value="Concept" />
      <MetricRow label="R&D track" value="Future" />
      <span className="status-pill muted">Future R&D</span>
    </div>
  );
}

export function ProcessMockup({ visual }: { visual: ProcessVisual }) {
  if (visual === "checklist") {
    return (
      <div className="process-ui">
        <ChecklistItem label="VPN Access live" />
        <ChecklistItem label="Bot setup pipeline" />
        <ChecklistItem label="Mini app services" />
      </div>
    );
  }

  if (visual === "dashboard") {
    return (
      <div className="process-ui">
        <div className="profile-strip compact">
          <span>F1</span>
          <span>F2</span>
          <span>AI</span>
        </div>
        <Progress value={62} />
        <MetricRow label="Profiles" value="Building" />
      </div>
    );
  }

  if (visual === "research") {
    return (
      <div className="process-ui">
        <CodeBlock lines={["sensor.scan()", "assistant.intent()", "care.task.sync()"]} />
        <Progress value={34} />
      </div>
    );
  }

  return (
    <div className="process-ui">
      <div className="platform-nodes">
        <span>VPN</span>
        <span>Bots</span>
        <span>Family</span>
        <span>Care</span>
      </div>
      <Progress value={48} />
    </div>
  );
}

export function FamilyDashboardMockup() {
  return (
    <div className="dashboard-frame family-dashboard" aria-hidden="true">
      <div className="mockup-topbar">
        <div>
          <span className="mockup-label">Family space</span>
          <strong>Shared dashboard</strong>
        </div>
        <span className="status-pill">Private</span>
      </div>
      <div className="family-grid">
        <div className="profile-card large">
          <span>AI Assistant</span>
          <strong>3 reminders today</strong>
          <Progress value={76} />
        </div>
        <div className="profile-card">
          <span>Profiles</span>
          <strong>4 members</strong>
        </div>
        <div className="profile-card">
          <span>Privacy</span>
          <strong>Protected</strong>
        </div>
      </div>
      <div className="task-console light">
        <div className="console-row">
          <span className="console-dot" />
          <span>School reminder</span>
          <strong>08:15</strong>
        </div>
        <div className="console-row">
          <span className="console-dot" />
          <span>Shared services</span>
          <strong>Synced</strong>
        </div>
      </div>
    </div>
  );
}

export function VisionMockup({ visual }: { visual: VisionVisual }) {
  if (visual === "privacy") {
    return (
      <div className="vision-ui">
        <MetricRow label="Access" value="Private" />
        <Progress value={94} />
      </div>
    );
  }

  if (visual === "automation") {
    return (
      <div className="vision-ui">
        <ChecklistItem label="Support" />
        <ChecklistItem label="Notifications" />
      </div>
    );
  }

  if (visual === "family") {
    return (
      <div className="vision-ui">
        <div className="profile-strip compact">
          <span>A</span>
          <span>S</span>
          <span>AI</span>
        </div>
        <MetricRow label="Dashboard" value="Shared" />
      </div>
    );
  }

  return (
    <div className="vision-ui">
      <div className="rd-timeline compact">
        <TimelineItem label="R&D" active />
        <TimelineItem label="Prototype" />
      </div>
      <MetricRow label="Status" value="Future" />
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

function Progress({ value }: { value: number }) {
  return (
    <div className="progress-track">
      <span style={{ width: `${value}%` }} />
    </div>
  );
}

function ChecklistItem({ label }: { label: string }) {
  return (
    <div className="check-row">
      <Icon name="check" className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}

function TimelineItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className={`timeline-item ${active ? "active" : ""}`}>
      <span />
      <strong>{label}</strong>
    </div>
  );
}

function CodeBlock({ lines }: { lines: string[] }) {
  return (
    <div className="code-block">
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </div>
  );
}
