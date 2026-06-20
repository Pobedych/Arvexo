import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Account — Arvexo",
  description: "Registration and sign-in are handled by Arvexo Account.",
  robots: {
    follow: false,
    index: false
  }
};

export default function RegisterPage() {
  redirect("https://account.arvexo.ru");
}
