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
  data/               # page copy & datasets (nav, services, locations, faqs, …)
  pages/              # one file per route
public/
  _headers            # security headers for static hosting
  _redirects          # SPA fallback for client-side routing
```

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

## Documentation

- [`docs/design-system.md`](docs/design-system.md) — colours, type, spacing, components.
- [`docs/forms.md`](docs/forms.md) — how form submission works and how to wire a backend.
- [`docs/deployment.md`](docs/deployment.md) — deploying to a static host.

## Assets to replace

- `public/hero.jpg` — drop a real farm photo here; the hero shows a dark-green gradient
  fallback until you do.
