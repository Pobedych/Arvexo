import type { Metadata } from "next";
import { ArvexoLanding } from "@/components/ArvexoLanding";

export const metadata: Metadata = {
  title: "Arvexo — AI-экосистема для обучения, бизнеса и автоматизации",
  description:
    "Главная страница Arvexo: адаптивное обучение, AI-продукты, консалтинг, безопасность, партнерства и единая экосистема нейросетевых решений.",
  alternates: {
    canonical: "https://arvexo.ru/"
  }
};

export default function Home() {
  return <ArvexoLanding />;
}
