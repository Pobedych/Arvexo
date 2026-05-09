import type { CSSProperties, ReactNode } from "react";
import { Icon } from "@/components/Icons";
import { StatusPill } from "@/components/StatusPill";
import { robotRoadmap, shopProducts, type ProductPanelVariant } from "@/lib/content";

type ProductPanelProps = {
  variant: ProductPanelVariant;
  className?: string;
};

const commandModules = [
  { title: "VPN", status: "Защищено", tone: "secure" as const, progress: 92 },
  { title: "Telegram-боты", status: "Активно", tone: "active" as const, progress: 84 },
  { title: "Семейная экосистема", status: "В разработке", tone: "development" as const, progress: 58 },
  { title: "Care Robot R&D", status: "Будущее R&D", tone: "future" as const, progress: 28 }
];

export function ProductPanel({ className = "", variant }: ProductPanelProps) {
  if (variant === "command") {
    return (
      <PanelFrame className={className} eyebrow="Центр управления" status="Приватный стек" title="Экосистема Arvexo">
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
          <ConsoleRow active label="Слой приватности" value="Защищен" />
          <ConsoleRow active label="Слой автоматизации" value="Работает" />
          <ConsoleRow label="Семейная платформа" value="Этап разработки" />
          <ConsoleRow label="Care-исследования" value="Концепт-трек" />
        </div>
      </PanelFrame>
    );
  }

  if (variant === "vpn") {
    return (
      <PanelFrame className={className} eyebrow="Панель VPN-продукта" status="Защищено" title="Слой приватного доступа">
        <div className="panel-split">
          <div className="panel-focus">
            <span className="panel-icon">
              <Icon name="shield" className="h-6 w-6" />
            </span>
            <strong>Защищенное подключение</strong>
            <p>Стабильный доступ и статус приватности для ежедневного цифрового использования.</p>
          </div>
          <div className="panel-stack">
            <MetricRow label="Безопасный доступ" value="Включен" />
            <MetricRow label="Защита данных" value="Высокая" />
            <MetricRow label="Приватное использование" value="Активно" />
            <Progress value={90} />
          </div>
        </div>
      </PanelFrame>
    );
  }

  if (variant === "bots") {
    return (
      <PanelFrame className={className} eyebrow="Панель bot-сценариев" status="Активно" title="Потоки автоматизации">
        <div className="workflow-lane">
          <WorkflowStep label="Запрос" value="Получен" />
          <WorkflowStep label="Маршрут" value="Назначен" />
          <WorkflowStep label="Действие" value="Автоматизировано" />
          <WorkflowStep label="Уведомление" value="Отправлено" />
        </div>
        <div className="panel-tags">
          <span>Боты поддержки</span>
          <span>Уведомления</span>
          <span>Бизнес-инструменты</span>
          <span>Потоки автоматизации</span>
        </div>
      </PanelFrame>
    );
  }

  if (variant === "family") {
    return (
      <PanelFrame className={className} eyebrow="Семейная панель" status="В разработке" title="Безопасное семейное пространство">
        <div className="family-panel-grid">
          <div className="family-main-card">
            <span>AI-ассистент</span>
            <strong>Сообщение ассистента</strong>
            <p>Общее напоминание и координация сервисов.</p>
            <Progress value={68} />
          </div>
          <MiniInfo label="Профиль" value="Профиль родителя" />
          <MiniInfo label="Профиль" value="Профиль ребенка" />
          <MiniInfo label="Сервисы" value="Общая панель" />
          <MiniInfo label="Приватность" value="Защищенное пространство" />
        </div>
      </PanelFrame>
    );
  }

  if (variant === "robot") {
    return (
      <PanelFrame className={className} eyebrow="Исследовательский концепт" status="Будущее R&D" title="Трек care-технологий">
        <div className="research-map">
          {robotRoadmap.slice(0, 4).map((item, index) => (
            <div key={item} className={`research-node ${index === 0 ? "research-node-active" : ""}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
        <div className="panel-console">
          <ConsoleRow active label="Care AI" value="Исследование" />
          <ConsoleRow label="Направление прототипа" value="Запланировано" />
          <ConsoleRow label="Концепты устройств" value="Будущее" />
        </div>
      </PanelFrame>
    );
  }

  if (variant === "shop") {
    return (
      <PanelFrame className={className} eyebrow="Arvexo Shop" status="Каталог" title="Цифровые продукты">
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
    <PanelFrame className={className} eyebrow="Контакты" status="Открыто" title="Контактный слой Arvexo">
      <div className="panel-split">
        <div className="panel-focus">
          <span className="panel-icon">
            <Icon name="telegram" className="h-6 w-6" />
          </span>
          <strong>Telegram</strong>
          <p>Прямые вопросы по продуктам, запросы доступа и обсуждение настройки ботов.</p>
        </div>
        <div className="panel-stack">
          <MetricRow label="Telegram" value="Доступен" />
          <MetricRow label="Email" value="Доступен" />
          <MetricRow label="Формат" value="Прямой контакт" />
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
