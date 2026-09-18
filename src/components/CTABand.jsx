import Button from './Button.jsx'
import Reveal from './Reveal.jsx'
import { IconArrowRight } from './icons/Icons.jsx'

/**
 * Closing call-to-action. Title on the left, action on the right — the band
 * spans the full measure rather than sitting in a centred column.
 */
export default function CTABand({
  title,
  intro,
  cta = 'Book a scoping call',
  to = '/contact',
}) {
  return (
    <Reveal
      variant="scale"
      className="overflow-hidden rounded-card bg-forest px-6 py-10 sm:px-10 sm:py-12 lg:px-14"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <h2 className="text-3xl leading-[1.12] text-white sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">{intro}</p>}
        </div>
        <div className="lg:justify-self-end">
          <Button to={to} size="lg">
            {cta}
            <IconArrowRight
              width={18}
              height={18}
              className="transition-transform duration-micro ease-soft group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </Button>
        </div>
      </div>
    </Reveal>
  )
}
