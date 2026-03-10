import { useState, useEffect } from 'react'

const ScalesIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-law-gold">
    <line x1="16" y1="4" x2="16" y2="28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="8" y1="28" x2="24" y2="28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    <circle cx="16" cy="4" r="1.5" fill="currentColor"/>
    <line x1="16" y1="8" x2="6" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <line x1="16" y1="8" x2="26" y2="14" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M2 18 C2 18 4 14 6 14 C8 14 10 18 10 18 C10 18 8 22 6 22 C4 22 2 18 2 18Z" stroke="currentColor" strokeWidth="1" fill="none"/>
    <path d="M22 18 C22 18 24 14 26 14 C28 14 30 18 30 18 C30 18 28 22 26 22 C24 22 22 18 22 18Z" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
)

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const displayName = name && name !== '...' ? name : 'Estudio Juridico'

  const links = [
    ['#inicio', 'Inicio'],
    ['#sobre-mi', 'Sobre Mi'],
    ['#servicios', 'Servicios'],
    ['#contacto', 'Contacto'],
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-law-dark/95 backdrop-blur-md border-b border-law-border shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <ScalesIcon />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-law-white font-semibold text-base tracking-wide group-hover:text-law-gold transition-colors duration-300">
              {displayName}
            </span>
            <span className="text-law-muted text-[9px] tracking-[0.3em] uppercase font-sans mt-0.5">
              Estudio Juridico
            </span>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-law-secondary hover:text-law-white transition-colors text-xs tracking-widest uppercase relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-law-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-law-gold text-law-black px-5 py-2 text-xs tracking-widest uppercase font-semibold hover:bg-law-gold-light transition-colors rounded-sm"
          >
            Consultar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-law-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-law-dark border-t border-law-border px-6 py-5 flex flex-col gap-5">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-law-secondary hover:text-law-white text-xs tracking-widest uppercase transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="bg-law-gold text-law-black px-5 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-law-gold-light transition-colors text-center rounded-sm mt-1"
          >
            Consultar
          </a>
        </div>
      )}
    </nav>
  )
}
