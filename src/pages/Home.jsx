import Container from '../components/Container.jsx'
import HeroSlideshow from '../components/HeroSlideshow.jsx'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import StatItem from '../components/StatItem.jsx'
import CTABand from '../components/CTABand.jsx'
import useSlideshow from '../hooks/useSlideshow.js'
import { serviceIcons, IconArrowRight } from '../components/icons/Icons.jsx'
import { heroImages } from '../data/heroImages.js'
import { locations } from '../data/locations.js'
import { homeStats } from '../data/stats.js'
import { services } from '../data/services.js'

function Hero() {
  const { index, goTo } = useSlideshow(heroImages.length)
  const liveSites = locations.filter((l) => l.status === 'in-service')

  return (
    <section className="relative isolate overflow-hidden bg-forest">
      <HeroSlideshow index={index} />

      {/* Just enough green to hold the type — the photographs carry the panel */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest/95 from-5% via-forest/85 via-45% to-forest/20 to-85% lg:via-forest/85 lg:via-42% lg:to-forest/5 lg:to-80%"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-forest/75 via-transparent to-forest/30"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[560px] flex-col justify-end py-16 sm:py-20 lg:min-h-[680px] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,42rem)_minmax(0,1fr)] lg:items-end lg:gap-16">
          {/* Copy — pinned to the left gutter, held to a readable measure */}
          <div>
            <span className="beat eyebrow text-brand" style={{ '--reveal-delay': '40ms' }}>
              Integrated agricultural development
            </span>

            <h1
              className="beat mt-5 text-4xl font-extrabold leading-[1.06] tracking-tightish text-white drop-shadow-sm sm:text-5xl lg:text-[3.4rem]"
              style={{ '--reveal-delay': '120ms' }}
            >
              Farm in Kenya without building a farming company.
            </h1>

            <p
              className="beat mt-6 max-w-xl text-base leading-relaxed text-white [text-shadow:0_1px_14px_rgb(10_23_16/0.55)] sm:text-lg"
              style={{ '--reveal-delay': '220ms' }}
            >
              Terebra runs the land, the utilities and the operations so you get farm output and
              an audit trail, without standing up your own agricultural business from scratch.
            </p>

            <div className="beat mt-9 flex flex-wrap gap-3" style={{ '--reveal-delay': '320ms' }}>
              <Button to="/contact" size="lg">
                Book a scoping call
                <IconArrowRight
                  width={18}
                  height={18}
                  className="transition-transform duration-micro ease-soft group-hover:translate-x-1 motion-reduce:transform-none"
                />
              </Button>
              <Button to="/platform" variant="ghostLight" size="lg">
                See how the platform works
              </Button>
            </div>
          </div>

          {/* Live sites — pushed to the right edge so the band is occupied */}
          <div
            className="beat lg:justify-self-end lg:text-right"
            style={{ '--reveal-delay': '420ms' }}
          >
            <div className="inline-flex flex-col gap-3 rounded-card border border-white/15 bg-forest/80 p-5 shadow-pop backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                Operating today
              </p>
              <ul className="flex flex-col gap-2 text-sm text-white/85">
                {liveSites.map((site) => (
                  <li key={site.name} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {site.county} County
                  </li>
                ))}
              </ul>
            </div>

            {/* Slideshow controls */}
            <div className="mt-6 flex gap-2 lg:justify-end">
              {heroImages.map((image, i) => (
                <button
                  key={image.slug}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show photograph ${i + 1} of ${heroImages.length}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-ui ease-soft ${
                    i === index ? 'w-8 bg-brand' : 'w-4 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/** The value chain as a single rail across the full width of the page. */
function ValueChainRail() {
  return (
    <div className="border-b border-brand-500/40 bg-brand">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 py-7 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon]
            return (
              <Reveal
                as="li"
                key={service.title}
                delay={i * 60}
                variant="scale"
                className="group flex items-center gap-3"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest/10 text-forest transition-transform duration-ui ease-soft group-hover:-translate-y-1 group-hover:bg-forest/15 motion-reduce:transform-none">
                  {Icon ? <Icon width={22} height={22} /> : null}
                </span>
                <span className="text-[13px] font-semibold leading-snug text-forest">
                  {service.title}
                </span>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <ValueChainRail />

      {/* Stats band */}
      <Section tone="muted" className="!py-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {homeStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <StatItem value={stat.value} label={stat.label} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Intro */}
      <Section>
        <SectionHeading
          eyebrow="Who we are"
          title="From land strategy to post-harvest delivery, Terebra manages it all."
          intro="Terebra Agri Services is an integrated agricultural development company operating across the full value chain in Kenya. We secure and structure land, install the utilities and infrastructure a working farm needs, run day-to-day operations against agronomic targets, and move produce to market with traceability intact. One accountable partner, from the first site visit to the final consignment."
          aside={
            <Button to="/about" variant="outline">
              Learn how we work
            </Button>
          }
        />
      </Section>

      {/* Services grid */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="What we do"
          title="Services across the whole value chain."
          aside={
            <Button to="/services" variant="outline">
              See all services
              <IconArrowRight
                width={18}
                height={18}
                className="transition-transform duration-micro ease-soft group-hover:translate-x-1 motion-reduce:transform-none"
              />
            </Button>
          }
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 80}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section>
        <CTABand
          title="Ready to farm in Kenya, properly?"
          intro="Tell us what you want to grow, raise or source. We will tell you exactly how it gets done."
        />
      </Section>
    </>
  )
}
