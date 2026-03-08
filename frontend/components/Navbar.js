import { useState, useEffect } from 'react'

export default function Navbar({ name }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const displayName = name && name !== '...' ? name : 'Estudio Juridico'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-sm border-b border-law-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-law-white font-semibold text-lg tracking-wide">
          {displayName}
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {[['#inicio', 'Inicio'], ['#servicios', 'Servicios'], ['#contacto', 'Contacto']].map(
            ([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-law-secondary hover:text-law-white transition-colors text-xs tracking-widest uppercase"
              >
                {label}
              </a>
            )
          )}
          <a
            href="#contacto"
            className="border border-law-white/60 text-law-white px-5 py-2 text-xs tracking-widest uppercase hover:bg-law-white hover:text-black transition-all"
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
        <div className="md:hidden bg-black border-t border-law-border px-6 py-5 flex flex-col gap-5">
          {[['#inicio', 'Inicio'], ['#servicios', 'Servicios'], ['#contacto', 'Contacto']].map(
            ([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-law-secondary hover:text-law-white text-xs tracking-widest uppercase transition-colors"
              >
                {label}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  )
}
