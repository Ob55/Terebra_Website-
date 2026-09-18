/**
 * Base card surface used across the site.
 * `tone="dark"` renders the forest-green variant used in feature bands.
 */
export default function Card({ as: Tag = 'div', tone = 'light', className = '', children }) {
  const toneClasses =
    tone === 'dark'
      ? 'bg-forest-800 border-white/10 text-white/80'
      : 'bg-surface border-line'
  return (
    <Tag className={`rounded-card border p-6 ${toneClasses} ${className}`}>{children}</Tag>
  )
}
