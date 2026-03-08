export default function Hero({ profile }) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-law-dark overflow-hidden"
    >
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(197,163,90,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(197,163,90,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C8C0B4 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-law-black to-transparent" />

      {/* Decorative vertical accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-law-gold/20 to-transparent" />

      {/* Decorative geometric — scales of justice abstraction */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:block overflow-hidden">
        <svg
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[480px] opacity-[0.045]"
        >
          <circle cx="250" cy="300" r="200" stroke="#C5A35A" strokeWidth="1" />
          <circle cx="250" cy="300" r="150" stroke="#C5A35A" strokeWidth="0.5" />
          <line x1="250" y1="80" x2="250" y2="520" stroke="#C5A35A" strokeWidth="0.8" />
          <line x1="30" y1="300" x2="470" y2="300" stroke="#C5A35A" strokeWidth="0.8" />
          <line x1="250" y1="170" x2="130" y2="360" stroke="#C5A35A" strokeWidth="0.6" />
          <line x1="250" y1="170" x2="370" y2="360" stroke="#C5A35A" strokeWidth="0.6" />
          <circle cx="130" cy="360" r="30" stroke="#C5A35A" strokeWidth="0.6" />
          <circle cx="370" cy="360" r="30" stroke="#C5A35A" strokeWidth="0.6" />
          <circle cx="250" cy="170" r="8" stroke="#C5A35A" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <p className="animate-fade-up text-law-gold text-xs tracking-[0.45em] uppercase mb-8 font-sans font-medium">
            Estudio Juridico &mdash; Representacion Legal
          </p>

          <h1 className="animate-fade-up delay-100 font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-law-white leading-none mb-6">
            {profile?.name || '...'}
          </h1>

          <div className="animate-fade-up delay-200 flex items-center gap-4 mb-8">
            <div className="w-20 h-px bg-law-gold animate-expand delay-300" />
            <span className="text-law-muted text-xs tracking-widest uppercase font-sans">Abogado</span>
          </div>

          {profile?.tagline && profile.tagline !== '...' && (
            <p className="animate-fade-up delay-300 text-law-text text-xl md:text-2xl font-light font-sans leading-relaxed mb-10 max-w-2xl">
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
            {[
              'Consulta Confidencial',
              'Atencion Personalizada',
              'Experiencia Comprobada',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-law-gold" />
                <span className="text-law-muted text-xs font-sans tracking-wide hidden sm:block">{badge}</span>
              </div>
            ))}
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
