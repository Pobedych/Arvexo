import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Аккаунт — Arvexo",
  description: "Регистрация и вход находятся в Arvexo Account.",
  robots: {
    follow: false,
    index: false
  }
};

export default function RuRegisterPage() {
  redirect("https://account.arvexo.ru");
}
