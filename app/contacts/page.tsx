import { InnerPage } from "@/components/InnerPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/contacts", "en");

export default function ContactsPage() {
  return (
    <InnerPage
      badge="Contact"
      title={<>Talk to <em style={{ fontFamily: "var(--font-cormorant,'Cormorant')", fontStyle: "italic", color: "var(--accent)", fontWeight: 600 }}>Arvexo.</em></>}
      subtitle="Get in touch about AI consulting, early product access, partnerships or custom automation projects. We respond via Telegram or email."
      features={[
        { title: "Telegram", text: "Fastest way to reach us. DM @arvexoai for any inquiry." },
        { title: "Email", text: "Send to arvexoai@gmail.com for formal or business requests." },
        { title: "AI Consulting", text: "Book a session to discuss your automation or AI integration needs." },
        { title: "Partnerships", text: "Interested in building with Arvexo? Let's talk." }
      ]}
      ctaPrimary={{ label: "Open Telegram", href: "https://t.me/arvexoai" }}
      ctaSecondary={{ label: "Send email", href: "mailto:arvexoai@gmail.com" }}
    />
  );
}
