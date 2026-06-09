import { LegalPage } from "@/components/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/refund-policy", "en");

const sections = [
  {
    title: "1. General rules",
    items: [
      "This policy describes how Arvexo reviews refunds for digital products, subscriptions, early access, access keys, AI services and consulting.",
      "Refunds are reviewed under applicable law, the public offer, the user agreement and the terms of the specific product.",
      "If special refund rules are published for a product, those special rules apply."
    ]
  },
  {
    title: "2. Digital products and access",
    items: [
      "After digital access, a key, token, subscription or service connection has been issued, refunds may be limited if the product has started being used.",
      "If access was not provided due to a technical issue on Arvexo's side, the user may request reconnection or a refund.",
      "Early access may include manual activation, a connection queue and test limits; those conditions alone are not treated as product defects."
    ]
  },
  {
    title: "3. Subscriptions",
    items: [
      "A user may cancel subscription renewal through an available interface, support or an Arvexo contact channel.",
      "A paid subscription period usually remains available until the end of that period unless the plan terms state otherwise.",
      "Refunds for an already started subscription period are reviewed individually if the service was unavailable due to Arvexo's fault or if a refund is required by law."
    ]
  },
  {
    title: "4. Consulting and implementation",
    items: [
      "For consulting, audits, integrations and AI implementation, refund terms depend on the agreed work scope, milestones and the completed part.",
      "If work has started, the refund may be reduced by the value of the completed stage, prepared materials and time spent.",
      "Individual commercial terms may be clarified in an invoice, correspondence, contract or proposal."
    ]
  },
  {
    title: "5. How to request a refund",
    items: [
      "Contact arvexoai@gmail.com or an Arvexo contact channel and include your name, contact details, product, payment date, amount and reason.",
      "Verification may require payment confirmation, email, Telegram account, order number or another access identifier.",
      "Arvexo reviews the request and responds through the specified contact channel within a reasonable time."
    ]
  },
  {
    title: "6. Disputed transactions",
    items: [
      "If a user believes a payment is mistaken, duplicated or unauthorized, they should contact Arvexo as soon as possible.",
      "Until the review is completed, access related to a disputed transaction may be temporarily limited to protect the user and the service.",
      "Arvexo may request additional information to identify the payment and prevent fraud."
    ]
  }
];

export default function EnglishRefundPolicyPage() {
  return (
    <LegalPage
      badge="Refunds"
      title="Arvexo Refund Policy"
      subtitle="Rules for reviewing refunds for digital products, subscriptions, early access, AI services and consulting."
      updated="Updated: June 9, 2026"
      sections={sections}
      actionHref="/contacts"
      actionLabel="Contact Arvexo"
    />
  );
}
