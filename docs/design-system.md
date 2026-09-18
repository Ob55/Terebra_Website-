# Design system

Extracted from the Terebra desktop mockups. All tokens live in
[`tailwind.config.js`](../tailwind.config.js); use the Tailwind classes rather than raw
hex values so the system stays consistent.

## Layout principle

Content sits in a **centred max-width container** (`max-w-container`, 1152px) but stays
**left-aligned inside it**. Text is not centred and there is no extra left indent — the
container centres on the page, the content does not. The only intentionally centred
blocks are the hero copy, the "Ready to farm in Kenya, properly?" CTA band, and the
About Vision/Mission intro.

## Colour

| Token             | Hex       | Use                                          |
| ----------------- | --------- | -------------------------------------------- |
| `brand`           | `#7ed957` | Primary lime accent — CTAs, badges, checks   |
| `brand-600`       | `#57b733` | Accent text / icons on light                 |
| `brand-700`       | `#3f9a22` | Deeper accent                                |
| `forest`          | `#0e1f14` | Dark feature bands, footer                   |
| `forest-800`      | `#12271a` | Cards inside dark bands                       |
| `ink`             | `#111714` | Headings / near-black body                   |
| `body`            | `#5b6660` | Muted body text                              |
| `line`            | `#e7e9e4` | Subtle borders                               |
| `muted`           | `#f4f6f1` | Light section fills                          |
| `badge-bg/fg`     | `#e4f5de` / `#2f7d2f` | Status pills, icon chips         |

Keep the palette to these tokens. Derive new shades with `oklch()` if ever needed —
don't introduce new hues.

## Typography

- **Family:** Inter (400/500/600/700/800), self-hosted via `@fontsource/inter`.
- **Headings:** bold/extrabold, tight leading (`leading-[1.1]`), slight negative
  tracking (`tracking-tightish`, -0.02em).
- **Body:** 14–16px, `text-body`, relaxed leading.
- Type-scale contrast between h1 and body is intentionally large (≈3×).

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
- `Card`, `ServiceCard`, `StatItem`, `Badge`, `Field`, `CTABand`, `KenyaMap`, `Logo`.

When adding UI, compose these rather than re-styling from scratch, so new sections are
indistinguishable from the originals.
