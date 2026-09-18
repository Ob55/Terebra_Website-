/**
 * Page container: centred max-width with horizontal padding.
 * Content inside stays LEFT-aligned by default (per design guardrail) —
 * the container centres on the page, not the text.
 * The measure is deliberately wide (2000px) with generous gutters, so on a
 * large monitor the page reaches towards the viewport edges instead of
 * floating as one centred column. Text blocks inside cap their own width, so
 * nothing stretches past a readable line length.
 */
export default function Container({
  as: Tag = 'div',
  width = 'default',
  className = '',
  children,
}) {
  const measure = width === 'wide' ? 'max-w-wide' : 'max-w-container'

  return (
    <Tag
      className={`mx-auto w-full ${measure} px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-20 ${className}`}
    >
      {children}
    </Tag>
  )
}
