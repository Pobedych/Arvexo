import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Регистрация — Arvexo",
  description: "Создайте аккаунт Arvexo или войдите через FastAPI auth proxy.",
  robots: {
    follow: false,
    index: false
  }
};

export default function RuRegisterPage() {
  return <AuthForm locale="ru" />;
}
