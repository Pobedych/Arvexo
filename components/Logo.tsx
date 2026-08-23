import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className={compact ? "site-logo site-logo-compact" : "site-logo"} aria-label="Arvexo">
      <Image
        src="/images/arvexo-mark-v5.png"
        alt=""
        aria-hidden="true"
        className="site-logo-mark"
        width={1254}
        height={1254}
      />
      {!compact && (
        <span className="site-logo-wordmark" aria-hidden="true">ARVEXO</span>
      )}
    </span>
  );
}
