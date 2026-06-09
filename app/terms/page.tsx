import { LegalPage } from "@/components/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/terms", "en");

const sections = [
  {
    title: "1. Purpose",
    items: [
      "This user agreement governs access to the Arvexo website, account, early access, AI tools, Telegram bots, digital products and future ecosystem services.",
      "The agreement works together with the public offer, privacy policy, product-specific rules and the terms of a selected plan.",
      "If a user does not agree with these terms, they should stop using the Arvexo website and services."
    ]
  },
  {
    title: "2. Account and early access",
    items: [
      "Some features may require registration, a request, manual approval, a Telegram account or access through a future Arvexo Account.",
      "The user is responsible for keeping contact details up to date, protecting access and all actions performed through their account.",
      "Early access is limited and may include test features, temporary limits, manual support and changes before a public release."
    ]
  },
  {
    title: "3. Usage rules",
    items: [
      "Arvexo services may only be used lawfully, without violating third-party rights, platform rules or technical restrictions.",
      "Unauthorized access attempts, interference with the website, bypassing limits, infrastructure scanning and malicious use are prohibited.",
      "Paid access, keys, tokens or accounts may not be transferred to third parties without written approval."
    ]
  },
  {
    title: "4. AI features and outputs",
    items: [
      "AI features may produce inaccurate, incomplete or outdated outputs, so users must independently verify important results.",
      "Arvexo does not replace legal, medical, financial, educational or engineering expertise unless explicitly agreed in a separate contract.",
      "The user is responsible for submitted materials, lawful processing and further use of AI tool outputs."
    ]
  },
  {
    title: "5. Content and intellectual property",
    items: [
      "Arvexo logos, design, texts, interfaces, software code, service structure and brand assets belong to Arvexo rights holders or are used lawfully.",
      "Users retain rights to their materials, while granting Arvexo the technical ability to process them for service operation, support, safety and product improvement.",
      "Copying, reselling, publishing closed materials or creating derivative services based on closed Arvexo elements is prohibited without approval."
    ]
  },
  {
    title: "6. Availability and changes",
    items: [
      "Arvexo aims to keep services stable but does not guarantee continuous availability of all features, especially during MVP and early access.",
      "Services may be temporarily unavailable for updates, bug fixes, security protection or product changes.",
      "Arvexo may change interfaces, feature scope, access rules and product directions as the ecosystem develops."
    ]
  },
  {
    title: "7. Limitation of liability",
    items: [
      "Arvexo is not responsible for user decisions made solely on the basis of AI outputs, test features or unverified materials.",
      "For paid products, Arvexo liability is limited to the amount actually paid by the user for the disputed access period unless law requires otherwise.",
      "Arvexo is not responsible for failures of third-party platforms, banks, hosting providers, Telegram, payment systems, AI model providers or other external services."
    ]
  },
  {
    title: "8. Feedback and support",
    items: [
      "Questions about access, documents, bugs, refunds and partnerships can be sent through website contacts or to arvexoai@gmail.com.",
      "Bug reports and suggestions may be used to improve products without separate compensation unless otherwise agreed."
    ]
  }
];

export default function EnglishTermsPage() {
  return (
    <LegalPage
      badge="Agreement"
      title="Arvexo User Agreement"
      subtitle="Rules for using the website, early access, AI tools, Telegram bots, digital products and future ecosystem services."
      updated="Updated: June 9, 2026"
      sections={sections}
      actionHref="/contacts"
      actionLabel="Contact Arvexo"
    />
  );
}
