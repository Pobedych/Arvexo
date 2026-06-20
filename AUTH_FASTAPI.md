# Arvexo Account Auth

Registration and sign-in are handled by Arvexo Account, not by the main
Arvexo marketing site.

Main site behavior:

- Header "Sign in" / "Войти" links to `https://account.arvexo.ru`.
- `/register` redirects to `https://account.arvexo.ru`.
- `/ru/register` redirects to `https://account.arvexo.ru`.

The Next.js API auth proxy is kept only as an optional compatibility layer for
same-origin requests if Arvexo Account exposes an API backend.

Proxy routes:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

Preferred Account API variable:

```env
ARVEXO_ACCOUNT_API_URL=http://127.0.0.1:8001
```

Legacy fallback still supported:

```env
FASTAPI_AUTH_URL=http://127.0.0.1:8001
```

Production should point auth flows to the real Arvexo Account service. The main
site should not become the source of truth for users, sessions, subscriptions or
account data.
