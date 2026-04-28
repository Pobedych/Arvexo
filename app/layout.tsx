import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arvexo - AI, VPN и автоматизация",
  description:
    "Arvexo - цифровая экосистема AI-сервисов, VPN, Telegram-ботов, mini apps и автоматизации.",
  openGraph: {
    title: "Arvexo - цифровая экосистема",
    description:
      "AI-подписки, приватный доступ, Telegram-боты, mini apps и цифровые решения в одной технологической экосистеме.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030711"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
