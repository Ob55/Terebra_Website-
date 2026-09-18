import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Prose from '../components/Prose.jsx'

// DRAFT. Covers use of this website only — not the terms of any Terebra
// engagement, which are contracted separately. Placeholders in [BRACKETS]
// need real values and legal review before launch.
export default function Terms() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Terms of use"
        as="h1"
        title="The terms on which we publish this site."
        intro="These terms govern your use of terebra.africa. They do not govern any engagement with Terebra Agri Services Ltd, which is contracted separately in writing."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,44rem)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <Prose>
          <p className="text-sm text-body">Last updated: [DATE]</p>

          <h2>Who publishes this site</h2>
          <p>
            This website is published by Terebra Agri Services Ltd ([COMPANY REGISTRATION NUMBER]),
            a company incorporated in Kenya with its registered office at [REGISTERED ADDRESS],
            Nairobi.
          </p>

          <h2>The information here is indicative</h2>
          <p>
            Descriptions of our services, sites, figures and platform features are provided for
            information. They are not an offer, a warranty, or advice you should act on without
            speaking to us. Nothing on this site forms a contract or a commitment to deliver a
            particular result on a particular site.
          </p>

          <h2>Enquiries and forms</h2>
          <p>
            Submitting a form starts a conversation; it does not create an engagement. We aim to
            respond within two working days. Please submit accurate information, and do not use our
            forms for unlawful, misleading or automated bulk submissions.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The Terebra name, logo, copy, photography and the design of this site belong to Terebra
            Agri Services Ltd or its licensors. You may read, quote and link to this site. You may
            not copy it wholesale, or reuse our brand assets, without written permission.
          </p>

          <h2>Availability</h2>
          <p>
            We try to keep this site available and current, but we publish it as-is. To the extent
            Kenyan law allows, we exclude liability for loss arising from use of, or reliance on,
            this website or any site we link to.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of Kenya, and the courts of Kenya have exclusive
            jurisdiction over any dispute arising from them.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a href="mailto:info@terebraagri.co.ke">info@terebraagri.co.ke</a>.
          </p>
          </Prose>
        </Reveal>

        <Reveal variant="right" delay={90} className="lg:sticky lg:top-28 lg:self-start lg:justify-self-end">
          <div className="rounded-card border border-line bg-muted p-6">
            <h2 className="text-base font-semibold text-ink">Related</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-brand-800 underline underline-offset-2">
                  Privacy notice
                </Link>
              </li>
              <li>
                <Link to="/credits" className="text-brand-800 underline underline-offset-2">
                  Photography and map credits
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-brand-800 underline underline-offset-2">
                  Contact the team
                </Link>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
