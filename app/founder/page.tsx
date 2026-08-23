import { FounderProfile } from "@/components/FounderProfile";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/founder", "en");

export default function FounderPage() {
  return <FounderProfile locale="en" />;
}
