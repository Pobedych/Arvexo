import type { Metadata } from "next";
import { ArvexoLanding } from "@/components/ArvexoLanding";

export const metadata: Metadata = {
  title: "Arvexo — AI-экосистема для обучения, бизнеса и автоматизации",
  description:
    "Arvexo запускает экосистему AI-продуктов: тренажёр ЕГЭ, AI-инструменты, Telegram-магазин, боты и внедрение нейросетей в бизнес-процессы.",
  alternates: {
    canonical: "https://arvexo.ru/"
  }
};

export default function Home() {
  return <ArvexoLanding />;
}
