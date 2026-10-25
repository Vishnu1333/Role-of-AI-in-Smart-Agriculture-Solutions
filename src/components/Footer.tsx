import { Sprout } from 'lucide-react'
import './Footer.css'

/* ------------------------------------------------------------------ */
/*  Navigation links                                                   */
/* ------------------------------------------------------------------ */
const NAV_LINKS = [
  { label: 'Research', target: '#research' },
  { label: 'Applications', target: '#applications' },
  { label: 'Data & Models', target: '#data-models' },
  { label: 'Insights', target: '#insights' },
  { label: 'About', target: '#about' },
]

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function Footer() {
  const handleScroll = (target: string) => {
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer__grid">
          {/* ---- Column 1: Brand ---- */}
          <div className="footer__brand">
            <a
              href="#hero"
              className="footer__logo"
              onClick={(e) => {
                e.preventDefault()
                handleScroll('#hero')
              }}
              aria-label="Back to top"
            >
              <Sprout size={22} aria-hidden="true" />
              <span className="footer__wordmark">Fieldwise AI</span>
            </a>
            <p className="footer__tagline">
              Exploring AI in Smart Agriculture
            </p>
          </div>

          {/* ---- Column 2: Quick Links ---- */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.target}
                    className="footer__link"
                    onClick={(e) => {
                      e.preventDefault()
                      handleScroll(link.target)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---- Column 3: Academic Info ---- */}
          <div className="footer__academic">
            <h4 className="footer__col-title">Academic</h4>
            <ul className="footer__info-list">
              <li>PRG4206 Machine Learning</li>
              <li>INTI International University</li>
              <li>© {new Date().getFullYear()} Research Project</li>
            </ul>
          </div>
        </div>

        {/* ---- Disclaimer ---- */}
        <div className="footer__bottom">
          <p className="footer__disclaimer">
            This website is a research presentation tool for academic purposes.
            It does not represent a commercial product. All cited research
            belongs to its original authors.
          </p>
        </div>
      </div>
    </footer>
  )
}
