import type { ReactElement, SVGProps } from "react";

export type IconName =
  | "apps"
  | "bag"
  | "bolt"
  | "bot"
  | "brain"
  | "check"
  | "close"
  | "flask"
  | "gear"
  | "headphones"
  | "mail"
  | "menu"
  | "network"
  | "shield"
  | "telegram"
  | "wifi";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...common} {...props}>
      {paths[name]}
    </svg>
  );
}

const paths: Record<IconName, ReactElement> = {
  apps: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1.4" />
      <rect x="14" y="4" width="6" height="6" rx="1.4" />
      <rect x="4" y="14" width="6" height="6" rx="1.4" />
      <rect x="14" y="14" width="6" height="6" rx="1.4" />
    </>
  ),
  bag: (
    <>
      <path d="M7 8.5h10l1 11H6l1-11Z" />
      <path d="M9.5 8.5V7a2.5 2.5 0 0 1 5 0v1.5" />
    </>
  ),
  bolt: <path d="M13 2 5.5 13h5L9 22l9-13h-5l0-7Z" />,
  bot: (
    <>
      <rect x="5" y="8" width="14" height="10" rx="3" />
      <path d="M12 8V4" />
      <path d="M8.5 12h.01M15.5 12h.01" />
      <path d="M9.5 16h5" />
      <path d="M3.5 13.5h1.5M19 13.5h1.5" />
    </>
  ),
  brain: (
    <>
      <path d="M9 5.5a3 3 0 0 0-5 2.25 3.4 3.4 0 0 0 1.1 2.5 3.5 3.5 0 0 0 .45 6.9A3.2 3.2 0 0 0 9 20" />
      <path d="M15 5.5a3 3 0 0 1 5 2.25 3.4 3.4 0 0 1-1.1 2.5 3.5 3.5 0 0 1-.45 6.9A3.2 3.2 0 0 1 15 20" />
      <path d="M9 5.5V20M15 5.5V20" />
      <path d="M9 10H6.5M15 10h2.5M9 15H6.8M15 15h2.2" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v5.2L5.6 18.5A2 2 0 0 0 7.4 21h9.2a2 2 0 0 0 1.8-2.5L14 8.2V3" />
      <path d="M8 16h8" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2M12 19.2v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.8 12h2M19.2 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      <path d="m8.2 4.4 1.1 1.9M14.7 17.7l1.1 1.9M4.4 15.8l1.9-1.1M17.7 9.3l1.9-1.1" />
    </>
  ),
  headphones: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14a2 2 0 0 1 2-2h1v7H6a2 2 0 0 1-2-2v-3Z" />
      <path d="M20 14a2 2 0 0 0-2-2h-1v7h1a2 2 0 0 0 2-2v-3Z" />
      <path d="M17 19c0 1.3-1.2 2-3 2h-2" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m5 8 7 5 7-5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  network: (
    <>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.2 10.8 15.8 7.2M8.2 13.2l7.6 3.6" />
    </>
  ),
  shield: <path d="M12 3.5 19 6v5.4c0 4.4-2.8 7.7-7 9.1-4.2-1.4-7-4.7-7-9.1V6l7-2.5Z" />,
  telegram: (
    <>
      <path d="M21 4.5 3.7 11.2c-1 .4-1 1.8.1 2.1l4.3 1.3 1.7 4.9c.3.9 1.5 1.1 2 .3l2.4-3.2 4.4 3.3c.8.6 2 .1 2.2-.9L23 5.8c.2-1-.9-1.8-2-1.3Z" />
      <path d="m8.2 14.5 9.8-6.2-7.7 8.4" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 10.5a10 10 0 0 1 14 0" />
      <path d="M8.2 13.8a5.5 5.5 0 0 1 7.6 0" />
      <path d="M11.5 17.4h1" />
    </>
  )
};
