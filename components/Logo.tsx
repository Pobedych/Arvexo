type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Arvexo">
      <svg className={compact ? "h-8 w-8" : "h-8 w-8"} viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="arvexo-logo-gradient" x1="8" y1="4" x2="56" y2="60">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="42%" stopColor="#7084ff" />
            <stop offset="100%" stopColor="#3dd6f5" />
          </linearGradient>
        </defs>
        <path
          d="M31.8 5 56 55H44.7l-4.2-9.4H22.9L18.7 55H8L31.8 5Zm.1 18.3-6.2 14h12.4l-6.2-14Z"
          fill="url(#arvexo-logo-gradient)"
        />
        <path d="M20 45.6h20.5l-5.2-9.1H24.1L20 45.6Z" fill="#191919" opacity=".95" />
      </svg>
      {!compact && <span className="text-base font-semibold tracking-normal text-white">Arvexo</span>}
    </span>
  );
}
