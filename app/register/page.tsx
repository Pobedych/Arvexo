import type { Metadata } from "next";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = {
  title: "Sign up — Arvexo",
  description: "Create an Arvexo account or sign in through the FastAPI authentication proxy.",
  robots: {
    follow: false,
    index: false
  }
};

export default function RegisterPage() {
  return <AuthForm locale="en" />;
}
