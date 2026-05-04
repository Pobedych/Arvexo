import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirection } from "@/lib/content";

export const metadata: Metadata = {
  title: "Arvexo VPN — Private Access and Digital Protection",
  description: "Arvexo VPN is an active commercial direction for private access, data protection and stable connection."
};

export default function VpnPage() {
  const direction = getDirection("vpn");

  if (!direction) {
    notFound();
  }

  return <DirectionPage direction={direction} />;
}
