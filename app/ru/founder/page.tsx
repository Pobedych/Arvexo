import { FounderProfile } from "@/components/FounderProfile";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/founder", "ru");

export default function RuFounderPage() {
  return <FounderProfile locale="ru" />;
}
