# Terebra Website

Marketing website for **Terebra Agri Services** — integrated agricultural development
in Kenya, covering the full value chain: land strategy, tenure, enabling infrastructure,
farm management and post-harvest delivery.

## Developer

**Brian Mwangi**

## Tech stack

A deliberately light front-end stack — no backend, no framework runtime beyond React.

| Concern   | Choice                          |
| --------- | ------------------------------- |
| Build     | [Vite](https://vitejs.dev)      |
| UI        | React 18 (JavaScript / JSX)     |
| Routing   | react-router-dom (client-side)  |
| Styling   | Tailwind CSS + design tokens    |
| Fonts     | Inter (self-hosted via Fontsource) |
| Icons     | Inline SVG (no icon dependency) |
| Motion    | CSS transitions + IntersectionObserver (no animation library) |

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Environment variables

Copy `.env.example` to `.env` and set:

| Variable             | Purpose                                                                 |
| -------------------- | ----------------------------------------------------------------------- |
| `VITE_FORM_ENDPOINT` | Endpoint that receives form submissions (e.g. a Formspree/Getform URL). |

If unset, forms validate and show a friendly "captured, delivery not wired up" notice
instead of making a network request — handy in development. See
[`docs/forms.md`](docs/forms.md).

## Project structure

```
src/
  main.jsx            # entry — mounts <App/> inside <BrowserRouter>
  App.jsx             # routes
  index.css           # Tailwind layers + base styles
  components/         # shared UI primitives (Button, Card, Field, Navbar, Footer, …)
    icons/Icons.jsx   # inline SVG icon set
  hooks/
    useFormSubmit.js  # shared form validation + submission logic
    useReveal.js      # scroll-reveal observer (+ prefers-reduced-motion helper)
    useSlideshow.js   # hero photo rotation (pauses when hidden / reduced motion)
    useCountUp.js     # stat figures that count up when they scroll into view
    useSeo.js         # per-route <title>, description, canonical and OG tags
  data/               # page copy & datasets (nav, services, locations, faqs, site meta)
    kenyaGeo.js       # real Kenya county geometry + lon/lat projection
    heroImages.js     # hero slideshow manifest and credits
  pages/              # one file per route
public/
  logo.png            # supplied wordmark (light backgrounds)
  logo-light.png      # same mark, white text, for the forest-green footer
  hero/               # the photographs that cycle behind the hero (+ CREDITS.txt)
  hero-field.jpg      # farm photo from the mockup — source for og-image.jpg
  og-image.jpg        # 1200×630 social preview card
  favicon-32.png, icon-192.png, icon-512.png, apple-touch-icon.png
  robots.txt, sitemap.xml
  _headers            # security headers for static hosting
  _redirects          # SPA fallback for client-side routing
```

## The map

`Where we work` draws Kenya from real geometry, not a decorative silhouette:

- County outlines come from **geoBoundaries gbOpen KEN ADM1** (public domain),
  simplified and projected into `src/data/kenyaGeo.js`. Regenerate that file
  only if the source data changes.
- Sites and assessment areas carry real coordinates (geocoded via OpenStreetMap
  Nominatim) in `src/data/locations.js`, and `project(lon, lat)` places them —
  no hand-positioned pins. Move a site by editing its coordinates.

## Motion

Motion is hand-rolled — no animation library. One easing curve and four
durations are declared as CSS custom properties in `src/index.css`
(`--ease-out`, `--dur-micro|ui|section|hero`) and everything else reuses them:

- `<Reveal>` fades and rises content the first time it enters the viewport.
- The hero runs a staggered entrance on mount, with the photograph on a slow
  scroll parallax.
- Stats count up, the platform meters grow, the navbar condenses on scroll and
  shows a reading-progress line, and cards lift on hover.

Everything is suppressed under `prefers-reduced-motion: reduce` — content stays
visible and in place.

## Pages

| Route            | Page                                             |
| ---------------- | ------------------------------------------------ |
| `/`              | Home                                             |
| `/about`         | About                                            |
| `/services`      | Services (value-chain overview)                  |
| `/platform`      | Platform (features, live-data panel, register)   |
| `/where-we-work` | Where we work (map + locations)                  |
| `/contact`       | Contact (enquiry form)                           |
| `/scoping-call`  | Standalone "Book a scoping call" landing page    |
| `/privacy`       | Privacy notice (**draft** — see below)           |
| `/terms`         | Terms of use (**draft** — see below)             |
| `/credits`       | Photography and map-data attribution             |

## Documentation

- [`docs/design-system.md`](docs/design-system.md) — colours, type, spacing, components.
- [`docs/forms.md`](docs/forms.md) — how form submission works and how to wire a backend.
- [`docs/deployment.md`](docs/deployment.md) — deploying to a static host.

## Before launch

- **Domain** — the site is `https://www.terebra.africa`. `SITE_URL` in
  `src/data/site.js`, `index.html`, `public/robots.txt` and
  `public/sitemap.xml` all point there; change all four together if it ever
  moves. Note the apex currently 308-redirects to `www.terebra.africa` in the
  Vercel project settings — make the apex the primary domain there so the
  canonical URL serves directly instead of redirecting.
- **Contact address** — the published email is `info@terebra.africa`
  (Contact page, privacy notice, terms). Make sure that mailbox is receiving
  before launch: the contact, register and scoping forms all point people
  there.
- **Legal pages** — `/privacy` and `/terms` are drafts. Every `[BRACKETED]`
  placeholder needs a real value, and the text should be reviewed by someone
  qualified before launch.
- **Hero photographs** — the four images cycling behind the hero are openly
  licensed placeholders (see `public/hero/CREDITS.txt` and `/credits`), used
  until Terebra's own photography exists. To swap one: export it at 1600×900
  and 800×450 as WebP **under 300 KB each**, save as
  `public/hero/<slug>-1600.webp` and `-800.webp`, and update
  `src/data/heroImages.js`. Once every placeholder is replaced, delete the
  photography half of `/credits`. After swapping, re-check that the hero copy
  still clears contrast against the new frames.
- **LinkedIn** — the footer link was removed because it pointed at
  `linkedin.com` rather than a company page. Add the real URL to
  `footerContactLinks` in `src/data/nav.js`.
- **Stats** — the four figures in `src/data/stats.js` and the platform panel in
  `src/data/platformStats.js` came from the mockup. Replace with audited numbers.
- **Analytics** — none is installed, which is why the site sets no cookies and
  needs no consent banner. Adding analytics changes both of those.
