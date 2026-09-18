# Forms

Three forms share one implementation: **Contact** (`/contact`), **Register on the
platform** (`/platform`) and **Book a scoping call** (`/scoping-call`).

## How it works

All three use the [`useFormSubmit`](../src/hooks/useFormSubmit.js) hook and the shared
[`Field`](../src/components/Field.jsx) control:

1. **Client-side validation** — required fields + email format. Invalid fields show an
   inline, accessible error (`aria-invalid` + `aria-describedby`).
2. **Honeypot** — a hidden `company_website` field (`FormBits.Honeypot`). Bots fill it;
   real users can't see it. A filled honeypot is silently treated as success and never
   sent onward.
3. **Submission** — on success the form `POST`s JSON to `VITE_FORM_ENDPOINT`.

> Client-side validation is UX, not a security boundary. The receiving service (below)
> is responsible for server-side validation, spam filtering and rate limiting.

## Wiring a backend

Set `VITE_FORM_ENDPOINT` in `.env` to a static-friendly form service:

- **Formspree** — create a form, use `https://formspree.io/f/xxxxxxx`.
- **Getform**, **Basin**, **Web3Forms** — any endpoint that accepts a JSON `POST` works.

```env
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Rebuild/redeploy after changing it (Vite inlines env vars at build time).

When unset, the hook returns an `unconfigured` status and shows a friendly notice
instead of making a network request — so the UI works end-to-end in development without
a backend.

## Hardening notes

- No secrets are involved: `VITE_FORM_ENDPOINT` is a public POST URL, safe to expose.
- Tighten the `connect-src` in [`public/_headers`](../public/_headers) to your exact
  endpoint host once chosen.
- Enable the receiving service's own spam protection (reCAPTCHA/hCaptcha or built-in).
