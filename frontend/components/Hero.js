export default function Hero({ profile }) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-law-dark overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10,9,8,0.60), rgba(10,9,8,0.92)), url('/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 15% 50%, rgba(197,163,90,0.09) 0%, transparent 65%)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C8C0B4 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-law-black to-transparent" />

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-law-gold/25 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — content */}
          <div>
            <p className="animate-fade-up text-law-gold text-xs tracking-[0.45em] uppercase mb-8 font-sans font-medium">
              Estudio Juridico &mdash; Representacion Legal
            </p>

            <h1 className="animate-fade-up delay-100 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-law-white leading-none mb-6">
              {profile?.name || '...'}
            </h1>

            <div className="animate-fade-up delay-200 flex items-center gap-4 mb-8">
              <div className="w-20 h-px bg-law-gold animate-expand delay-300" />
              <span className="text-law-muted text-xs tracking-widest uppercase font-sans">Abogado</span>
            </div>

            {profile?.tagline && profile.tagline !== '...' && (
              <p className="animate-fade-up delay-300 text-law-text text-lg md:text-xl font-light font-sans leading-relaxed mb-10 max-w-xl">
                {profile.tagline}
              </p>
            )}

            <div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-block bg-law-gold text-law-black px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-law-gold-light transition-colors text-center rounded-sm shadow-lg shadow-black/30"
              >
                Contactar Ahora
              </a>
              <a
                href="#servicios"
                className="inline-block border border-law-border text-law-text px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:border-law-gold/50 hover:text-law-white transition-colors text-center rounded-sm"
              >
                Ver Servicios
              </a>
            </div>

            {/* Trust badges */}
            <div className="animate-fade-up delay-500 flex items-center gap-6 mt-12 pt-8 border-t border-law-border/60">
              {['Consulta Confidencial', 'Atencion Personalizada', 'Experiencia Comprobada'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-law-gold" />
                  <span className="text-law-muted text-xs font-sans tracking-wide hidden sm:block">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo frame */}
          <div className="animate-fade-up delay-300 hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              {/* Main frame */}
              <div
                className="relative aspect-[3/4] overflow-hidden"
                style={{
                  backgroundImage: `url('/hero-portrait.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backgroundColor: '#1A1917',
                }}
              >
                {/* Placeholder content (visible when no image) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-law-surface to-law-card">
                  <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 text-law-gold/15">
                    <circle cx="40" cy="28" r="16" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 72 C10 55 20 48 40 48 C60 48 70 55 70 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <div className="text-center px-8">
                    <p className="text-law-border text-xs font-sans tracking-[0.3em] uppercase">Foto del Abogado</p>
                    <p className="text-law-muted/40 text-[10px] font-sans mt-1">hero-portrait.jpg</p>
                  </div>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-law-black/60 via-transparent to-transparent" />

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-law-gold/60" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-law-gold/60" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-law-gold/60" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-law-gold/60" />
              </div>

              {/* Offset decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-law-border/30 -z-10" />
              <div className="absolute -bottom-8 -right-8 w-1/2 h-1/2 border border-law-border/15 -z-10" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in delay-700 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-law-muted text-xs tracking-widest uppercase font-sans">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-law-gold/60 to-transparent" />
      </div>
    </section>
  )
}
