import type { FAQItem } from "@/lib/content";

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={item.question} className="faq-item" open={index === 0}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
