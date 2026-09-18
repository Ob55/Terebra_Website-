import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { heroImages } from '../data/heroImages.js'

/**
 * Attribution for the photographs currently used on the site. The hero images
 * are openly-licensed placeholders; several of their licences require credit,
 * which is what this page provides. Replacing them with Terebra's own
 * photography makes this page unnecessary.
 */
export default function Credits() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Credits"
        as="h1"
        title="Photography credits."
        intro="The photographs behind the hero are openly-licensed images of Kenyan agriculture, used while Terebra’s own site photography is being produced. They are credited here as their licences require."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {heroImages.map((image, i) => (
          <Reveal
            key={image.slug}
            delay={i * 70}
            className="flex h-full flex-col gap-3 rounded-card border border-line p-5"
          >
            <img
              src={`/hero/${image.slug}-800.webp`}
              alt={image.alt}
              width={800}
              height={450}
              loading="lazy"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <p className="text-sm font-semibold text-ink">{image.credit.title}</p>
            <p className="text-sm text-body">
              {image.credit.artist}
              {' — '}
              <a
                href={image.credit.licenseUrl || image.credit.source}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-800 underline underline-offset-2"
              >
                {image.credit.license}
              </a>
            </p>
            <a
              href={image.credit.source}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-xs text-body underline underline-offset-2 transition-colors duration-micro hover:text-ink"
            >
              Source on Wikimedia Commons
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 max-w-2xl text-sm leading-relaxed text-body">
        <p>
          The Kenya map on{' '}
          <a href="/where-we-work" className="font-medium text-brand-800 underline underline-offset-2">
            Where we work
          </a>{' '}
          is drawn from geoBoundaries (gbOpen, KEN ADM1), released into the public domain.
          Location coordinates come from OpenStreetMap via Nominatim, © OpenStreetMap
          contributors, ODbL.
        </p>
      </Reveal>
    </Section>
  )
}
