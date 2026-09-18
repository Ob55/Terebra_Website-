import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Container from './Container.jsx'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { navLinks } from '../data/nav.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const progressRef = useRef(null)

  // Single rAF-batched scroll handler drives both the condensed header and
  // the reading-progress line; nothing measures layout per frame.
  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      setScrolled(y > 8)

      const bar = progressRef.current
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const ratio = max > 0 ? Math.min(1, y / max) : 0
        bar.style.transform = `scaleX(${ratio.toFixed(4)})`
      }
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const linkClass = ({ isActive }) =>
    `relative rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-ui ease-soft ${
      isActive
        ? 'bg-forest text-white'
        : 'text-ink/80 hover:-translate-y-0.5 hover:text-ink motion-reduce:transform-none'
    }`

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-surface/90 backdrop-blur transition-all duration-ui ease-soft ${
        scrolled ? 'border-line shadow-card' : 'border-transparent'
      }`}
    >
      <Container
        className={`flex items-center justify-between gap-4 transition-all duration-ui ease-soft ${
          scrolled ? 'h-14' : 'h-16 sm:h-20'
        }`}
      >
        <Logo imgClassName={scrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-10'} />

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
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink transition-colors duration-micro hover:bg-muted md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="transition-transform duration-ui ease-soft motion-reduce:transform-none"
            style={{ transform: open ? 'rotate(90deg)' : 'none' }}
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {/* Mobile menu — animates open on a grid row rather than mounting cold */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-line bg-surface transition-all duration-ui ease-soft md:hidden ${
          open ? 'grid-rows-[1fr] border-t opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <nav className="min-h-0" aria-label="Primary mobile">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-micro ${
                    isActive ? 'bg-muted text-ink' : 'text-ink/80 hover:bg-muted/70'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              to="/contact"
              variant="primary"
              className="mt-2"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              Talk to us
            </Button>
          </Container>
        </nav>
      </div>

      {/* Reading progress */}
      <div
        ref={progressRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-brand"
      />
    </header>
  )
}
