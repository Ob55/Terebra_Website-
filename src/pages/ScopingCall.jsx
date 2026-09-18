import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import Logo from '../components/Logo.jsx'
import Card from '../components/Card.jsx'
import ScopingForm from '../components/ScopingForm.jsx'
import HeroSlideshow from '../components/HeroSlideshow.jsx'
import Reveal from '../components/Reveal.jsx'
import useSlideshow from '../hooks/useSlideshow.js'
import { heroImages } from '../data/heroImages.js'
import { IconCheck } from '../components/icons/Icons.jsx'
import { scopingFaqs } from '../data/faqs.js'

// Standalone conversion landing page — minimal chrome, single goal:
// book a scoping call. Not part of the main nav.

const heroPromises = [
  'No fee for the scoping note',
  'No obligation to proceed after it',
  'Engage one service or the whole chain',
]

function MiniHeader() {
  return (
    <header className="border-b border-line">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <Button href="#book" variant="primary">
          Book a call
        </Button>
      </Container>
    </header>
  )
}

function Hero() {
  const { index, goTo } = useSlideshow(heroImages.length)

  return (
    <section className="relative isolate overflow-hidden bg-forest">
      <HeroSlideshow index={index} />
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest/95 from-5% via-forest/85 via-45% to-forest/20 to-85% lg:via-forest/85 lg:via-42% lg:to-forest/5 lg:to-80%"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-forest/75 via-transparent to-forest/30"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[520px] flex-col justify-end py-16 sm:py-20 lg:min-h-[600px] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,40rem)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div>
            <h1
              className="beat text-4xl font-extrabold leading-[1.06] tracking-tightish text-white sm:text-5xl"
              style={{ '--reveal-delay': '80ms' }}
            >
              Farm in Kenya without building a farming company.
            </h1>
            <p
              className="beat mt-6 max-w-xl text-base leading-relaxed text-white [text-shadow:0_1px_14px_rgb(10_23_16/0.55)] sm:text-lg"
              style={{ '--reveal-delay': '200ms' }}
            >
              Book a scoping call and we’ll turn your goal into a costed plan: what land, what
              utilities, what targets, and what it takes to deliver.
            </p>
            <div className="beat mt-9" style={{ '--reveal-delay': '300ms' }}>
              <Button href="#book" size="lg">
                Book a scoping call
              </Button>
            </div>
          </div>

          <div
            className="beat lg:justify-self-end"
            style={{ '--reveal-delay': '400ms' }}
          >
            <ul className="flex flex-col gap-3 rounded-card border border-white/15 bg-forest/80 p-5 text-sm text-white/85 shadow-pop backdrop-blur-md">
              {heroPromises.map((promise) => (
                <li key={promise} className="flex items-start gap-2.5">
                  <IconCheck width={16} height={16} className="mt-0.5 shrink-0 text-brand" />
                  {promise}
                </li>
              ))}
            </ul>

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

const changes = [
  {
    title: 'Land access, handled',
    body: 'We structure tenure and access so you don’t have to buy a farm to get farm output.',
  },
  {
    title: 'Utilities to standard',
    body: 'Water, power and irrigation engineered and metered against a service level you can hold us to.',
  },
  {
    title: 'Operations that report',
    body: 'Every field activity, litre and consignment on the record, traceable from field to dispatch.',
  },
  {
    title: 'One accountable partner',
    body: 'A single relationship across the whole value chain instead of a dozen fragmented ones.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Scope',
    body: 'A call to understand your goal, your capital and your appetite for risk.',
  },
  {
    n: '02',
    title: 'Plan',
    body: 'A written scope: land, utilities, targets and the numbers to decide on.',
  },
  {
    n: '03',
    title: 'Operate',
    body: 'We deliver and run the operation, reporting against every commitment.',
  },
]

export default function ScopingCall() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <MiniHeader />

      <main>
        <Hero />

        {/* Value statement */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 md:items-center md:justify-between lg:gap-24">
              <Reveal as="h2" variant="left" className="max-w-xl text-3xl leading-[1.12] sm:text-4xl">
                Capital is not the hard part. Operating is.
              </Reveal>
              <Reveal as="p" variant="right" delay={90} className="text-base leading-relaxed text-body md:max-w-xl md:justify-self-end md:border-l md:border-line md:pl-10 lg:pl-16">
                Most people who want to farm in Kenya can find the money. What stops them is land
                access, infrastructure, management and proof it all works. Terebra takes those on
                and keeps every parcel, litre and consignment on the record.
              </Reveal>
            </div>
          </Container>
        </section>

        {/* What changes */}
        <section className="bg-muted py-16 sm:py-20">
          <Container>
            <Reveal>
              <span className="eyebrow">We do not ask you to trust us</span>
              <h2 className="mt-3 max-w-2xl text-3xl leading-[1.12] sm:text-4xl">
                Every parcel, litre and consignment is on the record.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {changes.map((c, i) => (
                <Reveal key={c.title} delay={(i % 2) * 90}>
                  <Card hover className="flex h-full flex-col gap-2">
                    <h3 className="text-lg text-ink">{c.title}</h3>
                    <p className="text-sm leading-relaxed text-body">{c.body}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Three steps — dark band */}
        <section className="bg-forest py-16 text-white sm:py-20">
          <Container>
            <Reveal as="h2" className="max-w-2xl text-3xl leading-[1.12] text-white sm:text-4xl">
              Three steps from a question to a harvest.
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((step, i) => (
                <Reveal
                  key={step.n}
                  delay={i * 110}
                  className="rounded-card border border-white/10 bg-forest-800 p-6 transition-all duration-ui ease-soft hover:-translate-y-1 hover:border-brand/40 motion-reduce:transform-none"
                >
                  <span className="text-sm font-bold text-brand">{step.n}</span>
                  <h3 className="mt-3 text-lg text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{step.body}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20">
          <Container>
            <Reveal>
              <span className="eyebrow">The questions everyone asks first</span>
              <h2 className="mt-3 text-3xl leading-[1.12] sm:text-4xl">Good questions, answered.</h2>
            </Reveal>
            <div className="mt-10 grid gap-x-16 gap-y-8 md:grid-cols-2">
              {scopingFaqs.map((f, i) => (
                <Reveal key={f.q} delay={(i % 2) * 90}>
                  <h3 className="flex items-start gap-2 text-base font-semibold text-ink">
                    <IconCheck width={18} height={18} className="mt-0.5 shrink-0 text-brand-700" />
                    {f.q}
                  </h3>
                  <p className="mt-2 pl-6 text-sm leading-relaxed text-body">{f.a}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* Booking form */}
        <section id="book" className="bg-muted py-16 sm:py-20">
          <Container>
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-24">
              <Reveal variant="left">
                <h2 className="text-3xl leading-[1.12] sm:text-4xl">
                  Tell us what you want to grow. We’ll tell you exactly how it gets done.
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-body">
                  A short form to start. We reply within two working days with next steps for your
                  scoping call.
                </p>
              </Reveal>
              <Reveal variant="right" delay={90} className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-8 lg:max-w-xl lg:justify-self-end">
                <ScopingForm />
              </Reveal>
            </div>
          </Container>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="bg-forest py-8 text-white/60">
        <Container className="flex flex-col items-start gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Terebra Agri Services Ltd.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Legal">
            <Link to="/privacy" className="transition-colors duration-micro hover:text-white">
              Privacy notice
            </Link>
            <Link to="/terms" className="transition-colors duration-micro hover:text-white">
              Terms of use
            </Link>
            <Link to="/" className="transition-colors duration-micro hover:text-white">
              Back to main site
            </Link>
          </nav>
        </Container>
      </footer>
    </div>
  )
}
