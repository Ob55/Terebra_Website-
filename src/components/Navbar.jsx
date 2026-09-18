import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container.jsx'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { navLinks } from '../data/nav.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
      isActive ? 'bg-forest text-white' : 'text-ink/80 hover:text-ink'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-surface/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary">
            Talk to us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-surface md:hidden" aria-label="Primary mobile">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-muted text-ink' : 'text-ink/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="primary" className="mt-2" onClick={() => setOpen(false)}>
              Talk to us
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
