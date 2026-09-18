import Container from '../components/Container.jsx'
import Section from '../components/Section.jsx'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import StatItem from '../components/StatItem.jsx'
import CTABand from '../components/CTABand.jsx'
import { heroStepIcons, IconArrowRight } from '../components/icons/Icons.jsx'
import { homeStats } from '../data/stats.js'
import { services } from '../data/services.js'

function Hero() {
  return (
    <section className="relative">
      {/* Full-bleed hero backdrop. Drop a real photo at /public/hero.jpg to
          replace the gradient fallback. */}
      <div
        className="absolute inset-0 bg-forest bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,23,16,0.55), rgba(10,23,16,0.75)), url('/hero.jpg')",
        }}
        aria-hidden="true"
      />
      <Container className="relative py-24 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tightish text-white sm:text-5xl lg:text-[3.4rem]">
            Farm in Kenya without building a farming company.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            Terebra runs the land, the utilities and the operations so you get farm output and
            an audit trail, without standing up your own agricultural business from scratch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact" size="lg">
              Book a scoping call
            </Button>
            <Button to="/platform" variant="ghostLight" size="lg">
              See how the platform works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

function HeroSteps() {
  return (
    <div className="bg-brand">
      <Container className="flex flex-wrap items-center justify-between gap-6 py-6">
        {heroStepIcons.map((Icon, i) => (
          <div key={i} className="flex items-center gap-4 text-forest">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-forest/10">
              <Icon width={22} height={22} />
            </span>
            {i < heroStepIcons.length - 1 && (
              <IconArrowRight width={18} height={18} className="hidden text-forest/50 lg:block" />
            )}
          </div>
        ))}
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSteps />

      {/* Stats band */}
      <Section tone="muted" className="!py-14">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {homeStats.map((stat) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </dl>
      </Section>

      {/* Intro */}
      <Section>
        <div className="max-w-3xl">
          <span className="eyebrow">Who we are</span>
          <h2 className="mt-3 text-3xl leading-[1.12] sm:text-4xl">
            From land strategy to post-harvest delivery, Terebra manages it all.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body">
            Terebra Agri Services is an integrated agricultural development company operating across
            the full value chain in Kenya. We secure and structure land, install the utilities and
            infrastructure a working farm needs, run day-to-day operations against agronomic targets,
            and move produce to market with traceability intact. One accountable partner, from the
            first site visit to the final consignment.
          </p>
          <div className="mt-8">
            <Button to="/about" variant="outline">
              Learn how we work
            </Button>
          </div>
        </div>
      </Section>

      {/* Services grid */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="What we do"
          title="Services across the whole value chain."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section>
        <CTABand title="Ready to farm in Kenya, properly?" />
      </Section>
    </>
  )
}
