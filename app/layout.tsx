import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arvexo — VPN, Telegram Bots, Family Ecosystem и Care Robot R&D",
  description:
    "Arvexo — цифровая экосистема сервисов, приватности, семейных технологий и будущих R&D-направлений: VPN, Telegram-боты, Family Ecosystem и Care Robot R&D.",
  openGraph: {
    title: "Arvexo — VPN, Telegram Bots, Family Ecosystem и Care Robot R&D",
    description:
      "Цифровая экосистема сервисов, приватности, семейных технологий и будущих R&D-направлений Arvexo.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F12"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
