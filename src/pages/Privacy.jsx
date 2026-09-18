import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Prose from '../components/Prose.jsx'

// DRAFT. The processing described here matches what this website actually
// does today (three enquiry forms, no cookies, no analytics, no ad tech).
// Placeholders in [BRACKETS] need real values, and a Kenyan data-protection
// practitioner should review the final text before launch.
export default function Privacy() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Privacy notice"
        as="h1"
        title="How we handle your personal data."
        intro="This notice explains what Terebra Agri Services Ltd collects through this website, why we collect it, how long we keep it and the rights you hold under Kenya’s Data Protection Act, 2019."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,44rem)_minmax(0,1fr)] lg:gap-16">
        <Reveal>
          <Prose>
          <p className="text-sm text-body">Last updated: [DATE]</p>

          <h2>Who we are</h2>
          <p>
            Terebra Agri Services Ltd ([COMPANY REGISTRATION NUMBER]) of [REGISTERED ADDRESS],
            Nairobi, Kenya is the data controller for personal data submitted through this
            website. For any question about this notice, or to exercise the rights set out below,
            contact us at <a href="mailto:info@terebra.africa">info@terebra.africa</a> or
            [DATA PROTECTION CONTACT].
          </p>

          <h2>What we collect</h2>
          <p>
            We only collect what you type into one of our forms. Depending on the form, that is
            your name, email address, organisation, phone number, the role you select, and the
            free-text description of what you want to grow, raise or source. We do not buy
            personal data, and we do not collect special categories of personal data through this
            website.
          </p>

          <h2>Why we use it</h2>
          <p>
            We use your details to reply to your enquiry, prepare a scoping note, set up platform
            access where you have asked for it, and keep a record of the engagement. The lawful
            basis is your consent, given when you submit the form, and our legitimate interest in
            responding to business enquiries.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            This website sets no cookies and runs no analytics, advertising or tracking scripts.
            Nothing about your visit is recorded beyond the standard request logs kept by our
            hosting provider, [HOSTING PROVIDER], for security and reliability.
          </p>

          <h2>Who else sees it</h2>
          <p>
            Form submissions are delivered to us through [FORM PROVIDER], which processes them on
            our instructions. We do not sell personal data or share it for marketing. We disclose
            data to third parties only where the law requires it, or where a professional adviser
            needs it to act for us under a duty of confidentiality.
          </p>

          <h2>Where it is stored</h2>
          <p>
            Your data may be processed outside Kenya by the providers named above. Where that
            happens we rely on the safeguards in section 48 of the Data Protection Act, 2019.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiries that do not lead to an engagement are deleted after [RETENTION PERIOD].
            Where an engagement follows, we keep the record for as long as the relationship lasts
            and for the period afterwards required by Kenyan tax and company law.
          </p>

          <h2>Your rights</h2>
          <p>
            Under the Data Protection Act, 2019 you may ask us for a copy of your data, ask us to
            correct or delete it, object to or restrict how we use it, ask for it in a portable
            form, and withdraw consent at any time. Write to us at the address above and we will
            respond within the statutory timeline. You may also lodge a complaint with the Office
            of the Data Protection Commissioner, Kenya.
          </p>

          <h2>Changes</h2>
          <p>
            If this notice changes we will update the date at the top of this page and, where the
            change is significant, tell anyone whose data we hold.
          </p>
          </Prose>
        </Reveal>

        <Reveal variant="right" delay={90} className="lg:sticky lg:top-28 lg:self-start lg:justify-self-end">
          <div className="rounded-card border border-line bg-muted p-6">
            <h2 className="text-base font-semibold text-ink">Exercising your rights</h2>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Write to{' '}
              <a
                href="mailto:info@terebra.africa"
                className="font-medium text-brand-800 underline underline-offset-2"
              >
                info@terebra.africa
              </a>{' '}
              to ask for a copy of your data, to correct it, or to have it deleted.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-brand-800 underline underline-offset-2">
                  Terms of use
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
