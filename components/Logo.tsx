type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span
      className={compact ? "logo-text logo-text-compact" : "logo-text"}
      aria-label="Arvexo"
    >
      ARVEXO
    </span>
  );
}
