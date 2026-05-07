import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arvexo — AI Ecosystem for Digital Privacy and Family Technology",
  description:
    "Arvexo connects AI Shop products, Telegram automation, Family Ecosystem and future Robots R&D into one long-term technology platform.",
  openGraph: {
    title: "Arvexo — AI Ecosystem for Digital Privacy and Family Technology",
    description:
      "Arvexo connects AI Shop products, Telegram automation, Family Ecosystem and future Robots R&D into one long-term technology platform.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000"
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
