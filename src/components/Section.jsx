import Container from './Container.jsx'

/**
 * Vertical section with consistent rhythm.
 * `tone`: 'default' | 'muted' | 'forest' sets the background.
 * `bleed` renders full-bleed background while keeping content in the container.
 */
const tones = {
  default: 'bg-surface',
  muted: 'bg-muted',
  forest: 'bg-forest text-white',
}

export default function Section({ tone = 'default', className = '', containerClassName = '', children }) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
