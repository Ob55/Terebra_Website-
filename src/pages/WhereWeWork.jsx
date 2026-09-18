import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import Badge from '../components/Badge.jsx'
import KenyaMap from '../components/KenyaMap.jsx'
import Reveal from '../components/Reveal.jsx'
import { locations, locationStatusLabels } from '../data/locations.js'

function LocationRow({ loc, delay = 0 }) {
  const isService = loc.status === 'in-service'
  return (
    <Reveal
      as="li"
      delay={delay}
      variant="right"
      className="rounded-card border border-line bg-surface p-5 transition-all duration-ui ease-soft hover:-translate-y-1 hover:border-brand/50 hover:shadow-lift motion-reduce:transform-none"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-ink">{loc.name}</h3>
        <Badge tone={isService ? 'green' : 'neutral'}>
          {locationStatusLabels[loc.status]}
        </Badge>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-body">{loc.note}</p>
    </Reveal>
  )
}

export default function WhereWeWork() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Where we work"
        as="h1"
        title="On the ground across Kenya."
        intro="Terebra services are in use today in Matiliku, Kigogoini and Kiptangwanyi, with further production areas under assessment across the country."
      />

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal variant="left" className="lg:sticky lg:top-28">
          <KenyaMap className="aspect-square w-full" />
        </Reveal>

        <div>
          <ul className="space-y-4">
            {locations.map((loc, i) => (
              <LocationRow key={loc.name} loc={loc} delay={i * 80} />
            ))}
          </ul>

          <Reveal delay={120}>
            <Button to="/contact" variant="dark" size="lg" className="mt-6 w-full sm:w-auto">
              Enquire about a location
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
