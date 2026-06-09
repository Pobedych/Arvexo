import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { SEO_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, structuredData } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: SEO_IMAGE,
        width: 767,
        height: 682,
        alt: "Arvexo AI ecosystem"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SEO_IMAGE]
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/images/arvexo-apple-icon.png"
  },
  formatDetection: {
    telephone: false
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#040d1b"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollAnimator />
      </body>
    </html>
  );
}
