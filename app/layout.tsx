import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arvexo — VPN, Telegram Bots, Family Ecosystem and Care Robot R&D",
  description:
    "Arvexo is a digital ecosystem for privacy tools, Telegram automation, family technology and future Care Robot R&D.",
  openGraph: {
    title: "Arvexo — VPN, Telegram Bots, Family Ecosystem and Care Robot R&D",
    description:
      "Arvexo is a digital ecosystem for privacy tools, Telegram automation, family technology and future Care Robot R&D.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#191919"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
