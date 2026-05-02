type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Arvexo">
      <svg className={compact ? "h-8 w-8" : "h-8 w-8"} viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="arvexo-logo-gradient" x1="9" y1="5" x2="55" y2="59">
            <stop offset="0%" stopColor="#F5F2EA" />
            <stop offset="48%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#1F6B4F" />
          </linearGradient>
        </defs>
        <path
          d="M31.8 5 56 55H44.7l-4.2-9.4H22.9L18.7 55H8L31.8 5Zm.1 18.3-6.2 14h12.4l-6.2-14Z"
          fill="url(#arvexo-logo-gradient)"
        />
        <path d="M20 45.6h20.5l-5.2-9.1H24.1L20 45.6Z" fill="#070A0C" opacity=".95" />
      </svg>
      {!compact && <span className="text-base font-semibold tracking-normal text-white">ARVEXO</span>}
    </span>
  );
}
