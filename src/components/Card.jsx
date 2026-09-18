/**
 * Base card surface used across the site.
 * `tone="dark"` renders the forest-green variant used in feature bands.
 * `hover` adds the standard lift-on-hover micro-interaction.
 */
export default function Card({
  as: Tag = 'div',
  tone = 'light',
  hover = false,
  className = '',
  children,
}) {
  const toneClasses =
    tone === 'dark'
      ? 'bg-forest-800 border-white/10 text-white/80'
      : 'bg-surface border-line'

  const hoverClasses = hover
    ? tone === 'dark'
      ? 'transition-all duration-ui ease-soft hover:-translate-y-1 hover:border-brand/40 motion-reduce:transform-none'
      : 'transition-all duration-ui ease-soft hover:-translate-y-1 hover:border-brand/50 hover:shadow-lift motion-reduce:transform-none'
    : ''

  return (
    <Tag className={`rounded-card border p-6 ${toneClasses} ${hoverClasses} ${className}`}>
      {children}
    </Tag>
  )
}
