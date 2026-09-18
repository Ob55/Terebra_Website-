import { Link } from 'react-router-dom'
import Container from './Container.jsx'
import Logo from './Logo.jsx'
import { footerCompanyLinks, footerContactLinks } from '../data/nav.js'

function FooterLink({ item }) {
  const className = 'text-sm text-white/70 transition-colors hover:text-white'
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

function LinkColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.label}>
            <FooterLink item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const year = 2026 // static build — matches "© 2026" in the mockups
  return (
    <footer className="bg-forest text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="inline-flex rounded-xl bg-white/95 px-4 py-3">
              <Logo />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Integrated agricultural development services across the full value chain: land
              strategy, tenure structuring, enabling infrastructure, farm management and
              post-harvest delivery across Kenya.
            </p>
          </div>

          <LinkColumn title="Company" items={footerCompanyLinks} />
          <LinkColumn title="Get in touch" items={footerContactLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Terebra Agri Services Ltd. All rights reserved.</p>
          <p>Nairobi, Kenya</p>
        </div>
      </Container>
    </footer>
  )
}
