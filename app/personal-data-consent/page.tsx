import { LegalPage } from "@/components/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/personal-data-consent", "en");

const sections = [
  {
    title: "1. User consent",
    items: [
      "By submitting a form, registering, requesting early access, paying for a product or contacting support, the user consents to Arvexo processing personal data.",
      "The consent applies to communication, access delivery, request processing, support, payment, safety and product improvement.",
      "If the user does not agree to data processing, they should not submit forms, register or use features that require personal data."
    ]
  },
  {
    title: "2. Data that may be processed",
    items: [
      "Name, email, Telegram account, phone, organization, role, request text, product details, request status and communication history.",
      "Technical data: IP address, cookies, device and browser data, security logs, account actions and access identifiers.",
      "Payment data is processed by payment providers; Arvexo may receive payment status, amount, date and transaction identifier."
    ]
  },
  {
    title: "3. Processing purposes",
    items: [
      "Providing access to Arvexo Connect, AI Products, Arvexo Study, AI Consulting, Telegram bots and future products.",
      "Processing requests, communication, technical support, product status notifications, payment notices, security alerts and updates.",
      "Protecting the service from abuse, diagnosing errors, quality analytics and developing the Arvexo ecosystem."
    ]
  },
  {
    title: "4. Third-party transfers",
    items: [
      "Data may be transferred to hosting, payment systems, email and Telegram tools, analytics and technical providers only as needed for service operation.",
      "Arvexo does not sell user personal data.",
      "Data may be transferred when required by law, to protect Arvexo rights, investigate security incidents or perform an agreement."
    ]
  },
  {
    title: "5. Retention",
    items: [
      "Data is retained as long as needed for processing purposes, obligations, payment records, security and legal compliance.",
      "After processing purposes are met, data may be deleted, anonymized or retained in limited form when required for lawful interests or reporting.",
      "The user may request correction, deletion or restriction of processing through Arvexo contacts."
    ]
  },
  {
    title: "6. Withdrawal",
    items: [
      "The user may withdraw consent by contacting arvexoai@gmail.com or an Arvexo contact channel.",
      "Withdrawal may limit access to features that require personal data for operation, payment, support or security.",
      "Withdrawal does not affect the lawfulness of processing performed before the request was received."
    ]
  }
];

export default function EnglishPersonalDataConsentPage() {
  return (
    <LegalPage
      badge="Personal Data"
      title="Personal Data Processing Consent"
      subtitle="Data processing terms for requests, early access, Arvexo products, communication, payment, support and safety."
      updated="Updated: June 9, 2026"
      sections={sections}
      actionHref="/contacts"
      actionLabel="Contact Arvexo"
    />
  );
}
