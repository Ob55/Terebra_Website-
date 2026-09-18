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

## Vercel — live

The site is deployed on Vercel (project `terebra`, scope `ob1`):

- Production: <https://terebra.africa>
- Also aliased at <https://terebra.africa>

Vercel ignores `_headers`/`_redirects`, so [`vercel.json`](../vercel.json) carries the
SPA rewrite, the same security headers as `public/_headers` (including the CSP), and
cache policy: hashed `/assets/*` immutable for a year, `/hero/*` for a day with
stale-while-revalidate so replacing a photograph takes effect quickly.

```bash
vercel --prod          # deploy this directory to production
vercel alias ls        # show the production URLs
vercel inspect <url>   # status of one deployment
```

Set `VITE_FORM_ENDPOINT` in the Vercel project's environment variables and redeploy —
it is read at build time, so changing it requires a new build, not just a restart.

## Verifying a deploy

- Every route loads on a hard refresh (SPA fallback working): `/`, `/about`,
  `/services`, `/platform`, `/where-we-work`, `/contact`, `/scoping-call`.
- Security headers present (check with browser devtools → Network → Response Headers).
- A test form submission arrives at your `VITE_FORM_ENDPOINT` inbox.
