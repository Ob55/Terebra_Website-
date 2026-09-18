import Eyebrow from './Eyebrow.jsx'

/**
 * Left-aligned section header: optional eyebrow, a title, and optional intro.
 * `tone="light"` recolours for dark feature bands.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = 'dark',
  as: TitleTag = 'h2',
  className = '',
  titleClassName = '',
}) {
  const titleColor = tone === 'light' ? 'text-white' : 'text-ink'
  const introColor = tone === 'light' ? 'text-white/70' : 'text-body'

  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <TitleTag
        className={`mt-3 text-3xl leading-[1.1] sm:text-4xl ${titleColor} ${titleClassName}`}
      >
        {title}
      </TitleTag>
      {intro && <p className={`mt-4 text-base leading-relaxed ${introColor}`}>{intro}</p>}
    </div>
  )
}
