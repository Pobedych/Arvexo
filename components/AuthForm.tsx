"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n";

type AuthMode = "register" | "login";
type AuthMessage = {
  tone: "error" | "success";
  text: string;
};

const authCopy = {
  en: {
    badge: "Account access",
    title: "Create your Arvexo account.",
    subtitle:
      "One secure account gives you access to Arvexo services, including Arvexo Study.",
    register: "Register",
    login: "Login",
    fullName: "Full name",
    email: "Email",
    password: "Password",
    passwordHint: "Use at least 8 characters.",
    submitRegister: "Create account",
    submitLogin: "Sign in",
    loading: "Sending...",
    successRegister: "Registration request completed.",
    successLogin: "Login request completed.",
    error: "Authentication request failed.",
    unavailable: "Account service is temporarily unavailable. Please try again later.",
    contractTitle: "One account for the Arvexo ecosystem",
    contractItems: [
      "Access to Arvexo Study",
      "Shared profile and session",
      "Secure sign-in",
      "Ready for future Arvexo services"
    ],
    proxyNote: "Your account data is stored in the shared Arvexo user system."
  },
  ru: {
    badge: "Доступ к аккаунту",
    title: "Создайте аккаунт Arvexo.",
    subtitle:
      "Один безопасный аккаунт открывает доступ к сервисам Arvexo, включая Arvexo Study.",
    register: "Регистрация",
    login: "Вход",
    fullName: "Имя",
    email: "Email",
    password: "Пароль",
    passwordHint: "Используйте минимум 8 символов.",
    submitRegister: "Создать аккаунт",
    submitLogin: "Войти",
    loading: "Отправляем...",
    successRegister: "Запрос регистрации выполнен.",
    successLogin: "Запрос входа выполнен.",
    error: "Запрос аутентификации не прошел.",
    unavailable: "Сервис аккаунтов временно недоступен. Попробуйте позже.",
    contractTitle: "Один аккаунт для экосистемы Arvexo",
    contractItems: [
      "Доступ к Arvexo Study",
      "Общий профиль и сессия",
      "Безопасный вход",
      "Готово для будущих сервисов Arvexo"
    ],
    proxyNote: "Данные аккаунта хранятся в общей пользовательской системе Arvexo."
  }
} as const;

function getResponseMessage(data: unknown) {
  if (data && typeof data === "object") {
    const record = data as Record<string, unknown>;
    const detail = record.detail ?? record.message ?? record.error;

    if (typeof detail === "string") {
      return detail;
    }
  }

  return null;
}

export function AuthForm({ locale = "en" }: { locale?: Locale }) {
  const copy = authCopy[locale];
  const [mode, setMode] = useState<AuthMode>("register");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<AuthMessage | null>(null);
  const [loading, setLoading] = useState(false);

  async function submitAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const payload =
      mode === "register"
        ? { email: email.trim(), name: fullName.trim(), password }
        : { email: email.trim(), password };

    try {
      const response = await fetch(`/api/auth/${mode}`, {
        body: JSON.stringify(payload),
        credentials: "include",
        headers: {
          "content-type": "application/json"
        },
        method: "POST"
      });
      const data: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        setMessage({
          tone: "error",
          text: getResponseMessage(data) ?? (response.status === 503 ? copy.unavailable : copy.error)
        });
        return;
      }

      setMessage({
        tone: "success",
        text: mode === "register" ? copy.successRegister : copy.successLogin
      });
    } catch {
      setMessage({ tone: "error", text: copy.unavailable });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="auth-page" aria-labelledby="auth-title">
      <div className="auth-copy">
        <p className="section-badge">{copy.badge}</p>
        <h1 id="auth-title">{copy.title}</h1>
        <p>{copy.subtitle}</p>
        <div className="auth-contract">
          <strong>{copy.contractTitle}</strong>
          <div>
            {copy.contractItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <small>{copy.proxyNote}</small>
        </div>
      </div>

      <form className="auth-form" onSubmit={submitAuth}>
        <div className="auth-tabs" aria-label={copy.badge}>
          <button
            type="button"
            className={mode === "register" ? "auth-tab-active" : ""}
            onClick={() => {
              setMode("register");
              setMessage(null);
            }}
          >
            {copy.register}
          </button>
          <button
            type="button"
            className={mode === "login" ? "auth-tab-active" : ""}
            onClick={() => {
              setMode("login");
              setMessage(null);
            }}
          >
            {copy.login}
          </button>
        </div>

        {mode === "register" && (
          <label>
            <span>{copy.fullName}</span>
            <input
              autoComplete="name"
              name="name"
              onChange={(event) => setFullName(event.target.value)}
              required
              type="text"
              value={fullName}
            />
          </label>
        )}

        <label>
          <span>{copy.email}</span>
          <input
            autoComplete="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            value={email}
          />
        </label>

        <label>
          <span>{copy.password}</span>
          <input
            autoComplete={mode === "register" ? "new-password" : "current-password"}
            minLength={8}
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            value={password}
          />
          <small>{copy.passwordHint}</small>
        </label>

        <button className="primary-button auth-submit" disabled={loading} type="submit">
          {loading ? copy.loading : mode === "register" ? copy.submitRegister : copy.submitLogin}
        </button>

        {message && <p className={`auth-message auth-message-${message.tone}`}>{message.text}</p>}
      </form>
    </section>
  );
}
