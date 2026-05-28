import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className={compact ? "site-logo site-logo-compact" : "site-logo"} aria-label="Arvexo">
      <Image
        src="/images/arvexo-mark.png"
        alt=""
        aria-hidden="true"
        className="site-logo-mark"
        width={495}
        height={480}
      />
      {!compact && (
        <span className="site-logo-text" aria-hidden="true">
          arvexo
        </span>
      )}
    </span>
  );
}
