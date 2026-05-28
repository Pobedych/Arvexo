# Arvexo Auth Uses Arvexo Study

The main Arvexo site uses the same FastAPI authentication backend and user
database as `Arvexo-Study`.

Next.js exposes same-origin proxy routes:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

Set the Arvexo Study API base URL:

```env
FASTAPI_AUTH_URL=http://127.0.0.1:8001
```

Without this variable, the proxy uses `http://127.0.0.1:8001`, which matches
the local `Arvexo-Study/docker-compose.yml` backend port.

In production, point `FASTAPI_AUTH_URL` to the real Study backend URL. If this
Next.js app runs inside Docker, do not use container-local `127.0.0.1` unless
the Study backend is in the same container.

The proxy forwards requests to FastAPI:

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/logout`
- `GET /auth/me`

Expected JSON payloads:

```json
{
  "name": "Alex",
  "email": "alex@example.com",
  "password": "strong-password"
}
```

```json
{
  "email": "alex@example.com",
  "password": "strong-password"
}
```

Arvexo Study sets the `arvexo_study_session` HttpOnly cookie. Next.js forwards
the `Set-Cookie` header back to the browser, so the account/session is shared
between the main site and Arvexo Study when they are served on the same host or
properly configured domain.
