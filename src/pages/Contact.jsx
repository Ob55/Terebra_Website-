import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Reveal from '../components/Reveal.jsx'
import { IconPin, IconMail, IconPhone } from '../components/icons/Icons.jsx'

const contactInfo = [
  { Icon: IconPin, title: 'Nairobi, Kenya', note: 'Serving sites across the country' },
  { Icon: IconMail, title: 'info@terebraagri.co.ke', note: 'General and client enquiries' },
  { Icon: IconPhone, title: '+254 726 535 597', note: 'Monday to Friday, 8am to 5pm EAT' },
]

export default function Contact() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Contact us"
        as="h1"
        title="Tell us what you want to grow."
        intro="Whether you are an investor, an institution, a landowner or a producer, we will come back to you within two working days."
      />

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Form */}
        <Reveal variant="left" className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-8">
          <ContactForm />
        </Reveal>

        {/* Info sidebar */}
        <div className="flex flex-col gap-6 lg:max-w-md lg:justify-self-end">
          <ul className="space-y-5">
            {contactInfo.map(({ Icon, title, note }, i) => (
              <Reveal as="li" key={title} delay={i * 80} variant="right" className="group flex items-start gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-badge-bg text-brand-700 transition-transform duration-ui ease-soft group-hover:scale-110 motion-reduce:transform-none">
                  <Icon width={20} height={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink">{title}</p>
                  <p className="text-sm text-body">{note}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal variant="right" delay={240} className="rounded-card border border-line bg-muted p-6">
            <h3 className="text-base font-semibold text-ink">Landowners</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Own agricultural land in Kenya? Terebra structures fair, transparent, long-term
              land-access arrangements and keeps your land productive and well cared for. Ask us how
              it works.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
