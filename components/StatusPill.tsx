import type { StatusTone } from "@/lib/content";

type StatusPillProps = {
  children: string;
  className?: string;
  tone?: StatusTone;
};

export function StatusPill({ children, className = "", tone = "muted" }: StatusPillProps) {
  return <span className={`status-pill status-pill-${tone} ${className}`}>{children}</span>;
}
