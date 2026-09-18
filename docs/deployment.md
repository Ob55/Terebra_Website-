# Deployment

The site is a static SPA (`npm run build` → `dist/`). It can be hosted on any static
host. Two things every host needs: an **SPA fallback** and **security headers**.

## Build

```bash
npm ci
npm run build   # outputs dist/
```

Set `VITE_FORM_ENDPOINT` in the host's environment (build-time) before building — see
[`docs/forms.md`](forms.md).

## Netlify / Cloudflare Pages

Works out of the box — [`public/_redirects`](../public/_redirects) provides the SPA
fallback and [`public/_headers`](../public/_headers) provides the security headers. Both
are copied into `dist/` by Vite.

- Build command: `npm run build`
- Publish directory: `dist`

## Vercel

Vercel ignores `_headers`/`_redirects`. Add a `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains" }
      ]
    }
  ]
}
```

Mirror the `Content-Security-Policy` value from `public/_headers` if you want CSP on
Vercel too.

## Verifying a deploy

- Every route loads on a hard refresh (SPA fallback working): `/`, `/about`,
  `/services`, `/platform`, `/where-we-work`, `/contact`, `/scoping-call`.
- Security headers present (check with browser devtools → Network → Response Headers).
- A test form submission arrives at your `VITE_FORM_ENDPOINT` inbox.
