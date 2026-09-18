# Design system

Extracted from the Terebra desktop mockups. All tokens live in
[`tailwind.config.js`](../tailwind.config.js); use the Tailwind classes rather than raw
hex values so the system stays consistent.

## Layout principle

Content sits in a **wide max-width container** (`max-w-container`, 2000px) with fluid
gutters (`px-5 → 2xl:px-20`) and stays **left-aligned inside it**. The measure is
deliberately wide so a large monitor does not leave a centred column floating in the
middle of the screen; text blocks cap their own width instead, so nothing stretches
past a readable line length:

- headings `max-w-3xl`, section intros `max-w-xl`, hero copy `max-w-xl`
- two-column sections push their halves to the two edges (`justify-self-end` plus a
  hairline rule), rather than sitting side by side in the centre

Sections are **asymmetric by default** so the measure is occupied edge to edge rather
than reading as one narrow column:

- `SectionHeading` splits into title (left) and intro or action (right), divided by a
  hairline rule.
- The hero is full-bleed photography with the copy on the left gutter and a supporting
  panel on the right edge. The green is a scrim, not a panel: a horizontal
  `from-forest/90 → via-forest/45 → to-forest/10` gradient plus a vertical vignette,
  so the photographs carry the band and the type still clears AA contrast.
- `CTABand` puts the headline left and the button right.

Nothing on the site is centre-aligned except the 404 page.

## Colour

| Token             | Hex       | Use                                          |
| ----------------- | --------- | -------------------------------------------- |
| `brand`           | `#7ed957` | Primary lime accent — CTAs, badges, checks   |
| `brand-600`       | `#57b733` | Accent text / icons on light                 |
| `brand-700`       | `#3f9a22` | Icons and graphics on light (≥3:1)           |
| `brand-800`       | `#2f7d2f` | Green **text** on light — eyebrows, links (AA) |
| `forest`          | `#0e1f14` | Dark feature bands, footer                   |
| `forest-800`      | `#12271a` | Cards inside dark bands                       |
| `ink`             | `#111714` | Headings / near-black body                   |
| `body`            | `#5b6660` | Muted body text                              |
| `line`            | `#e7e9e4` | Subtle borders                               |
| `muted`           | `#f4f6f1` | Light section fills                          |
| `badge-bg/fg`     | `#e4f5de` / `#2f7d2f` | Status pills, icon chips         |

Keep the palette to these tokens. Derive new shades with `oklch()` if ever needed —
don't introduce new hues.

**Contrast rule:** `brand`/`brand-600` are too light for text on white (2.5:1). Use
`brand-800` for small green text, `brand-700` for icons and other non-text graphics,
and the full `brand` only on the forest-green bands, where it reaches 9.8:1.

## Typography

- **Family:** Inter (400/500/600/700/800), self-hosted via `@fontsource/inter`.
- **Headings:** bold/extrabold, tight leading (`leading-[1.1]`), slight negative
  tracking (`tracking-tightish`, -0.02em).
- **Body:** 14–16px, `text-body`, relaxed leading.
- Type-scale contrast between h1 and body is intentionally large (≈3×).

## Motion

Tokens live on `:root` in `src/index.css`: one easing curve (`--ease-out`) and four
durations — `--dur-micro` 160ms (hover/press), `--dur-ui` 240ms (state change),
`--dur-section` 620ms (scroll reveals), `--dur-hero` 900ms (hero beats). Tailwind
exposes them as `ease-soft`, `duration-micro` and `duration-ui`.

Patterns:

- **Entrance** — `<Reveal delay={n}>` fades and rises an element once, on
  intersection. Stagger siblings 60–90ms. Variants: `up` (default), `left`, `right`,
  `scale`, `none`.
- **Hero** — beats run on mount (`.beat` with `--reveal-delay`), not on scroll.
- **Hover** — cards and buttons lift 2–4px with a soft shadow; icon chips scale.
- **Feedback** — stats count up, meters grow to `--meter`, the navbar condenses and
  draws a reading-progress line.
- **Hero slideshow** — frames cross-fade over 1.4s every 6.5s, the active frame drifting
  from `scale(1.02)` to `scale(1.1)`. It holds when the tab is hidden, and shows a single
  still frame (with working dots) under reduced motion. Only the first frame is in the
  markup on load; the next mounts on `requestIdleCallback`, so the first view costs one
  photograph rather than four.

**Type over photography:** the hero scrim is tuned so the copy clears WCAG AA against the
brightest frame — measured at the rendered pixels, the headline sits at ~11:1 and the body
copy at ~4.8:1. If you change the scrim or swap in lighter photographs, re-measure before
shipping.

Every one of these is disabled under `prefers-reduced-motion: reduce`; content stays
visible and in place. Animate `transform` and `opacity` only, and batch scroll reads in
a `requestAnimationFrame` (see the scroll handler in `Navbar`).

## Shape & elevation

- **Radius:** `rounded-card` (14px) for cards/panels; `rounded-full` for pill buttons.
- **Borders:** 1px `line` on light cards; `white/10` on dark cards.
- **Shadow:** subtle `shadow-card` on hover only; the design is mostly flat.

## Components

Reusable primitives in `src/components/`:

- `Button` — pill; variants `primary` / `dark` / `outline` / `ghostLight`; renders a
  router `Link`, external `<a>`, or `<button>` from its props.
- `Container` / `Section` — layout + vertical rhythm; `Section` tones: default / muted / forest.
- `SectionHeading` + `Eyebrow` — left-aligned section header with green eyebrow label.
- `Card`, `ServiceCard`, `StatItem`, `Badge`, `Field`, `CTABand`, `KenyaMap`, `Prose`.
- `Logo` — renders `public/logo.png`; `tone="light"` swaps in `logo-light.png` for dark
  bands.
- `Reveal` — the scroll-entrance primitive. `HeroSlideshow` — the hero's photo stack.
- `KenyaMap` — real county geometry with sites plotted from coordinates.

When adding UI, compose these rather than re-styling from scratch, so new sections are
indistinguishable from the originals.
