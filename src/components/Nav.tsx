import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Nav.css'

const NAV_LINKS = [
  { label: 'Research', href: '#research' },
  { label: 'Applications', href: '#applications' },
  { label: 'Data & Models', href: '#data-models' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Determine active section
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((sec) => {
        const top = (sec as HTMLElement).offsetTop - 120
        if (window.scrollY >= top) {
          current = sec.getAttribute('id') || ''
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`} role="banner">
      <div className="container nav__inner">
        {/* Wordmark */}
        <a
          href="#hero"
          className="nav__brand"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          aria-label="Fieldwise AI — home"
        >
          <span className="nav__brand-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="url(#brandGrad)"/>
              <path d="M7 20 L14 9 L21 20" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="14" cy="9" r="2" fill="#F97316"/>
              <path d="M10 16 L18 16" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
              <defs>
                <linearGradient id="brandGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4C2A9E"/>
                  <stop offset="1" stopColor="#2d1a6e"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="nav__brand-text">
            Fieldwise<span className="nav__brand-ai">AI</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="nav__links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav__link ${active === sectionId ? 'nav__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="nav__actions">
          <a
            href="#applications"
            className="nav__cta"
            onClick={(e) => { e.preventDefault(); handleNavClick('#applications') }}
          >
            <span>Explore the Research</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="fj-spin-star" aria-hidden="true">
              <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
            </svg>
          </a>
          {/* Mobile menu toggle */}
          <button
            className="nav__menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav__mobile" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__mobile-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#applications"
            className="nav__cta nav__cta--full"
            onClick={(e) => { e.preventDefault(); handleNavClick('#applications') }}
          >
            Explore the Research
          </a>
        </div>
      )}
    </header>
  )
}
