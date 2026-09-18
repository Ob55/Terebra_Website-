import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import Logo from '../components/Logo.jsx'
import Card from '../components/Card.jsx'
import ScopingForm from '../components/ScopingForm.jsx'
import { IconCheck } from '../components/icons/Icons.jsx'
import { scopingFaqs } from '../data/faqs.js'

// Standalone conversion landing page — minimal chrome, single goal:
// book a scoping call. Not part of the main nav.

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
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-forest bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,23,16,0.5), rgba(10,23,16,0.8)), url('/hero.jpg')",
        }}
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tightish text-white sm:text-5xl">
            Farm in Kenya without building a farming company.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            Book a scoping call and we’ll turn your goal into a costed plan: what land, what
            utilities, what targets, and what it takes to deliver.
          </p>
          <div className="mt-8">
            <Button href="#book" size="lg">
              Book a scoping call
            </Button>
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
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <h2 className="text-3xl leading-[1.12] sm:text-4xl">
                Capital is not the hard part. Operating is.
              </h2>
              <p className="text-base leading-relaxed text-body">
                Most people who want to farm in Kenya can find the money. What stops them is land
                access, infrastructure, management and proof it all works. Terebra takes those on
                and keeps every parcel, litre and consignment on the record.
              </p>
            </div>
          </Container>
        </section>

        {/* What changes */}
        <section className="bg-muted py-16 sm:py-20">
          <Container>
            <span className="eyebrow">We do not ask you to trust us</span>
            <h2 className="mt-3 max-w-2xl text-3xl leading-[1.12] sm:text-4xl">
              Every parcel, litre and consignment is on the record.
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {changes.map((c) => (
                <Card key={c.title} className="flex flex-col gap-2">
                  <h3 className="text-lg text-ink">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-body">{c.body}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Three steps — dark band */}
        <section className="bg-forest py-16 text-white sm:py-20">
          <Container>
            <h2 className="max-w-2xl text-3xl leading-[1.12] text-white sm:text-4xl">
              Three steps from a question to a harvest.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="rounded-card border border-white/10 bg-forest-800 p-6">
                  <span className="text-sm font-bold text-brand">{s.n}</span>
                  <h3 className="mt-3 text-lg text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20">
          <Container>
            <span className="eyebrow">The questions everyone asks first</span>
            <h2 className="mt-3 text-3xl leading-[1.12] sm:text-4xl">Good questions, answered.</h2>
            <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {scopingFaqs.map((f) => (
                <div key={f.q}>
                  <h3 className="flex items-start gap-2 text-base font-semibold text-ink">
                    <IconCheck width={18} height={18} className="mt-0.5 shrink-0 text-brand-600" />
                    {f.q}
                  </h3>
                  <p className="mt-2 pl-6 text-sm leading-relaxed text-body">{f.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Booking form */}
        <section id="book" className="bg-muted py-16 sm:py-20">
          <Container>
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl leading-[1.12] sm:text-4xl">
                  Tell us what you want to grow. We’ll tell you exactly how it gets done.
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-body">
                  A short form to start. We reply within two working days with next steps for your
                  scoping call.
                </p>
              </div>
              <div className="rounded-card border border-line bg-surface p-6 sm:p-8">
                <ScopingForm />
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Minimal footer */}
      <footer className="bg-forest py-8 text-white/60">
        <Container className="flex flex-col items-start gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Terebra Agri Services Ltd.</p>
          <Link to="/" className="hover:text-white">
            Back to main site
          </Link>
        </Container>
      </footer>
    </div>
  )
}
