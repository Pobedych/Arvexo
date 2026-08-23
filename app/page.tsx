import type { Metadata } from "next";
import { EcosystemLanding } from "@/components/EcosystemLanding";

export const metadata: Metadata = {
  title: "Arvexo — AI Products, Research and Consulting",
  description: "Arvexo builds Arvexo Radar and Arvexo AI Arena, conducts independent AI research and helps teams create effective AI systems.",
  alternates: {
    canonical: "https://arvexo.ru/"
  }
};

export default function Home() {
  return <EcosystemLanding defaultLang="en" />;
}
