import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Card from '../components/Card.jsx'

const pillars = [
  {
    n: '1',
    title: 'We strategise',
    body: 'Site selection, tenure and access, agronomic targets and a costed plan before anyone breaks ground.',
  },
  {
    n: '2',
    title: 'We deliver',
    body: 'Utilities, infrastructure and operations built and run to production standard, on the ground and on schedule.',
  },
  {
    n: '3',
    title: 'We manage',
    body: 'Farm management, post-harvest handling and reporting kept current, with every parcel and consignment on the record.',
  },
]

export default function About() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="About Terebra"
          as="h1"
          title="One accountable partner for agriculture in Kenya."
          intro="Terebra Agri Services turns land into working agricultural operations and keeps them running. We take on the parts that make farming hard to enter — access, infrastructure, management and traceability — so our clients hold a single, accountable relationship instead of a dozen fragmented ones."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <Card key={p.n} className="flex flex-col gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-badge-bg text-sm font-bold text-brand-700">
                {p.n}
              </span>
              <h3 className="text-lg text-ink">{p.title}</h3>
              <p className="text-sm leading-relaxed text-body">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Measurement statement */}
      <Section tone="muted" className="!py-14">
        <span className="eyebrow">How we operate</span>
        <h2 className="mt-3 max-w-3xl text-3xl leading-[1.12] sm:text-4xl">
          If it isn’t measured, it didn’t happen.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-body">
          Every operation, input and output is captured on our platform. Consents stay current,
          field activity is logged with time and place, and each consignment is traceable from
          field to dispatch, so performance is a matter of record, not recollection.
        </p>
      </Section>

      {/* Track-record dark card */}
      <Section>
        <Card tone="dark" className="p-8 sm:p-10 lg:p-12">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            Track record
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl leading-[1.12] text-white sm:text-4xl">
            Experience that has run bigger, harder programmes.
          </h2>
          <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg text-white">Independence</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                We answer to the client engagement, not to input suppliers or intermediaries. Our
                recommendations serve your programme and are documented as such.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-white">Integrity of record</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                The data behind the engagement is complete and honest. Good news and bad are on the
                record; clients, auditors and financiers see the same view.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* Vision / Mission */}
      <Section tone="muted">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="eyebrow">The vision</span>
            <h3 className="mt-3 text-2xl text-ink">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              To be the most trusted partner for agricultural development in the region, turning
              land and capital into productive, well-run farming operations that stand the test of
              time.
            </p>
          </div>
          <div>
            <span className="eyebrow">Our commitment</span>
            <h3 className="mt-3 text-2xl text-ink">Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              To make farming in Kenya accessible and accountable for our clients, delivering
              integrated services across the value chain and holding ourselves to the highest
              standard of measurement and transparency.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
