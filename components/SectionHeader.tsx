type SectionHeaderProps = {
  badge: string;
  subtitle: string;
  title: string;
  className?: string;
};

export function SectionHeader({ badge, className = "", subtitle, title }: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`}>
      <p className="section-badge">{badge}</p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
