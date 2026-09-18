import { Link } from 'react-router-dom'
import Container from './Container.jsx'
import Logo from './Logo.jsx'
import Reveal from './Reveal.jsx'
import { footerCompanyLinks, footerContactLinks, footerLegalLinks } from '../data/nav.js'

function FooterLink({ item }) {
  const className =
    'inline-block text-sm text-white/70 transition-all duration-micro ease-soft hover:translate-x-1 hover:text-white motion-reduce:transform-none'
  return item.to ? (
    <Link to={item.to} className={className}>
      {item.label}
    </Link>
  ) : (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
      {item.label}
    </a>
  )
}

function LinkColumn({ title, items, delay }) {
  return (
    <Reveal delay={delay}>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <FooterLink item={item} />
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export default function Footer() {
  const year = 2026 // static build — matches "© 2026" in the mockups
  return (
    <footer className="bg-forest text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <Reveal className="max-w-sm">
            <Logo tone="light" imgClassName="h-10 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Integrated agricultural development services across the full value chain: land
              strategy, tenure structuring, enabling infrastructure, farm management and
              post-harvest delivery across Kenya.
            </p>
          </Reveal>

          <LinkColumn title="Company" items={footerCompanyLinks} delay={80} />
          <LinkColumn title="Get in touch" items={footerContactLinks} delay={160} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Terebra Agri Services Ltd. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Legal">
            {footerLegalLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="transition-colors duration-micro hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <span>Nairobi, Kenya</span>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
