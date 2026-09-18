import Section from '../components/Section.jsx'
import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Card from '../components/Card.jsx'
import RegisterForm from '../components/RegisterForm.jsx'
import Reveal from '../components/Reveal.jsx'
import { IconCheck } from '../components/icons/Icons.jsx'
import { siteOverview, platformCapabilities } from '../data/platformStats.js'

const features = [
  {
    title: 'Farm operations',
    body: 'Plan seasons, assign tasks, record field activities and track production against targets, all with time-stamped evidence.',
  },
  {
    title: 'Outgrower management',
    body: 'Register, verify and manage neighbouring producers. Track deliveries, quality grading and payments in one place.',
  },
  {
    title: 'Utilities monitoring',
    body: 'Metered water and power with real-time availability tracking, verified against contracted service levels.',
  },
  {
    title: 'Tenure & compliance',
    body: 'Parcel register with verified ownership, Land Control Board consents and data protection built in from day one.',
  },
]

function DataPanel() {
  return (
    <Reveal variant="right" delay={80} className="rounded-card bg-forest p-6 text-white shadow-lift lg:max-w-xl lg:justify-self-end">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Site overview</h3>
        <span className="text-xs text-white/50">This week</span>
      </div>
      <ul className="mt-5 space-y-4">
        {siteOverview.map((row, i) => (
          <li key={row.label}>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/75">{row.label}</span>
              <span className="font-semibold text-brand tabular-nums">{row.value}</span>
            </div>
            {row.kind !== 'count' && (
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="meter-fill h-full rounded-full bg-brand"
                  style={{ '--meter': `${row.percent}%`, '--reveal-delay': `${200 + i * 90}ms` }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-right text-[11px] text-white/40">Illustration of client reporting</p>
    </Reveal>
  )
}

const whyItMatters = [
  {
    title: 'Trust without travel',
    body: 'See the true state of your land and operations from anywhere, backed by verified records rather than assurances.',
  },
  {
    title: 'Standards you can audit',
    body: 'Every service level we commit to is measured, so quality claims about your produce stand up to buyers, banks and certifiers.',
  },
  {
    title: 'Value that compounds',
    body: 'Clean records of land, water, power and performance make your operation easier to finance, insure and expand.',
  },
]

export default function Platform() {
  return (
    <>
      {/* Intro + feature cards */}
      <Section>
        <SectionHeading
          eyebrow="The Terebra platform"
          as="h1"
          title="Your farm operations, managed and measured in one place."
          intro="Our proprietary digital platform is the backbone of every Terebra engagement. It is purpose-built for running farm operations, managing outgrower programmes, and tracking utilities and tenure with full traceability from parcel to consignment."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 90}>
              <Card hover className="flex h-full flex-col gap-2">
                <h3 className="text-lg text-ink">{f.title}</h3>
                <p className="text-sm leading-relaxed text-body">{f.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Capabilities checklist + data panel */}
      <Section tone="muted">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal variant="left">
              <span className="eyebrow">Capabilities</span>
              <h2 className="mt-3 text-3xl leading-[1.12] sm:text-4xl">
                Proprietary software. Proven service.
              </h2>
            </Reveal>
            <ul className="mt-7 space-y-3.5">
              {platformCapabilities.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={60 + i * 60}
                  variant="left"
                  className="flex items-start gap-3 text-sm text-ink"
                >
                  <IconCheck width={18} height={18} className="mt-0.5 shrink-0 text-brand-700" />
                  <span>{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <DataPanel />
        </div>
      </Section>

      {/* Why it matters — dark band */}
      <Section tone="forest">
        <SectionHeading
          eyebrow="Why it matters to you"
          title="Built so distance never means doubt."
          tone="light"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whyItMatters.map((w, i) => (
            <Reveal
              key={w.title}
              delay={i * 90}
              className="rounded-card border border-white/10 bg-forest-800 p-6 transition-all duration-ui ease-soft hover:-translate-y-1 hover:border-brand/40 motion-reduce:transform-none"
            >
              <h3 className="text-lg text-white">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Register form */}
      <Section>
        <Reveal variant="scale" className="rounded-card border border-line bg-muted p-6 sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl text-ink sm:text-3xl">Register on the platform</h2>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Whether you are a client, landowner, outgrower or partner, register your interest and
              our team will set up your access.
            </p>
          </div>
          <div className="mt-8">
            <RegisterForm />
          </div>
        </Reveal>
      </Section>
    </>
  )
}
