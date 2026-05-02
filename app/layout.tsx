import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arvexo - VPN, Telegram Bots, Family Ecosystem and Care Robot R&D",
  description:
    "Arvexo is a private digital ecosystem for VPN access, Telegram automation, family technologies and Care Robot R&D.",
  openGraph: {
    title: "Arvexo - Private Digital Ecosystem",
    description:
      "VPN, Telegram Bots, Family Ecosystem and Care Robot R&D in one product-focused digital platform.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070A0C"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
