import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";

type FounderProfileProps = {
  locale: "en" | "ru";
};

const githubUrl = "https://github.com/Pobedych";

export function FounderProfile({ locale }: FounderProfileProps) {
  const isRu = locale === "ru";
  const profilePath = isRu ? "/ru/founder" : "/founder";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl("/founder")}#person`,
    name: isRu ? "Алексей Доборин" : "Alexey Doborin",
    alternateName: isRu ? "Alexey Doborin" : "Алексей Доборин",
    url: absoluteUrl(profilePath),
    sameAs: [githubUrl],
    jobTitle: isRu
      ? "Основатель и CEO Arvexo; начинающий исследователь в области искусственного интеллекта"
      : "Founder and CEO of Arvexo; early-career artificial intelligence researcher",
    knowsAbout: [
      "Artificial intelligence",
      "AI products",
      "Business process automation",
      "Human-centered AI"
    ],
    worksFor: {
      "@type": "Organization",
      "@id": `${absoluteUrl("/")}#organization`,
      name: "Arvexo",
      url: absoluteUrl("/")
    }
  };

  return (
    <div className="simple-page founder-profile" id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="simple-page-hero">
        <p className="section-badge">{isRu ? "Основатель Arvexo" : "Arvexo founder"}</p>
        <h1>{isRu ? "Алексей Доборин" : "Alexey Doborin"}</h1>
        <p>
          {isRu
            ? "Основатель и CEO Arvexo, начинающий исследователь в области искусственного интеллекта."
            : "Founder and CEO of Arvexo and an early-career researcher in artificial intelligence."}
        </p>
      </section>

      <div className="simple-page-grid">
        <ProfileCard
          title={isRu ? "Arvexo" : "Arvexo"}
          text={
            isRu
              ? "Развивает Arvexo как молодую AI-экосистему для цифровых продуктов, автоматизации и практического применения искусственного интеллекта."
              : "Develops Arvexo as an early-stage AI ecosystem for digital products, automation and practical applications of artificial intelligence."
          }
        />
        <ProfileCard
          title={isRu ? "Исследовательские интересы" : "Research interests"}
          text={
            isRu
              ? "Искусственный интеллект, AI-продукты, автоматизация бизнес-процессов и человеко-ориентированные AI-системы."
              : "Artificial intelligence, AI products, business process automation and human-centered AI systems."
          }
        />
        <ProfileCard
          title={isRu ? "Текущий этап" : "Current stage"}
          text={
            isRu
              ? "Начинающий исследователь: формирует направления работы и развивает практические проекты в рамках Arvexo."
              : "An early-career researcher defining research directions and developing practical projects through Arvexo."
          }
        />
      </div>

      <div className="simple-page-actions">
        <a href={githubUrl} className="arx-primary-cta" target="_blank" rel="me noreferrer">
          GitHub
        </a>
        <Link href={isRu ? "/ru/about" : "/about"} className="arx-secondary-cta">
          {isRu ? "Об Arvexo" : "About Arvexo"}
        </Link>
      </div>
    </div>
  );
}

function ProfileCard({ text, title }: { text: string; title: string }) {
  return (
    <article className="simple-feature-card">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}
