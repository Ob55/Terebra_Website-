import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

/**
 * Section header. Two layouts:
 *  - `stack` (default): eyebrow, title and intro in one left-aligned column.
 *  - `split`: title hugs the left edge while the intro (or `aside`) sits over
 *    on the right, so wide sections read edge-to-edge instead of as a narrow
 *    centred column.
 * `tone="light"` recolours for dark feature bands.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  aside,
  layout = 'split',
  tone = 'dark',
  as: TitleTag = 'h2',
  className = '',
  titleClassName = '',
}) {
  const titleColor = tone === 'light' ? 'text-white' : 'text-ink'
  const introColor = tone === 'light' ? 'text-white/70' : 'text-body'
  const ruleColor = tone === 'light' ? 'lg:border-white/15' : 'lg:border-line'

  const heading = (
    <>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <TitleTag
        className={`mt-3 text-3xl leading-[1.1] sm:text-4xl ${titleColor} ${titleClassName}`}
      >
        {title}
      </TitleTag>
    </>
  )

  if (layout === 'stack' || (!intro && !aside)) {
    return (
      <Reveal className={`max-w-2xl ${className}`}>
        {heading}
        {intro && <p className={`mt-4 text-base leading-relaxed ${introColor}`}>{intro}</p>}
        {aside && <div className="mt-6">{aside}</div>}
      </Reveal>
    )
  }

  // With an intro the right column is a text block against a rule; with only
  // an action it sits on the far right, level with the title.
  const asideOnly = !intro && aside

  return (
    <div className={`grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16 ${className}`}>
      <Reveal className="max-w-3xl">{heading}</Reveal>
      <Reveal
        delay={90}
        className={
          asideOnly
            ? 'lg:justify-self-end lg:self-end'
            : `lg:max-w-xl lg:justify-self-end lg:border-l lg:pl-10 ${ruleColor}`
        }
      >
        {intro && <p className={`text-base leading-relaxed ${introColor}`}>{intro}</p>}
        {aside && <div className={intro ? 'mt-6' : ''}>{aside}</div>}
      </Reveal>
    </div>
  )
}
