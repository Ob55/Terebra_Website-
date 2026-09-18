import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTABand from '../components/CTABand.jsx'
import { services } from '../data/services.js'

// NOTE: No dedicated Services mockup was provided. This page reuses the
// value-chain card system from the Home page, expanded with intro copy, to
// stay consistent with the rest of the site.
export default function Services() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="What we do"
          as="h1"
          title="Services across the whole value chain."
          intro="Terebra provides the full set of services a working agricultural operation needs in Kenya — from securing land through to delivering the harvest. Engage us for a single stage or the entire chain."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <CTABand
          title="Not sure which stage you need? Let’s scope it."
          cta="Talk to us"
        />
      </Section>
    </>
  )
}
