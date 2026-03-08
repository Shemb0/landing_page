export default function Hero({ profile }) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-law-dark overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-law-border to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <p className="text-law-muted text-xs tracking-[0.4em] uppercase mb-8 font-sans">
            Estudio Juridico &mdash; Representacion Legal
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-law-white leading-none mb-6">
            {profile?.name || '...'}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-px bg-law-white" />
            <span className="text-law-muted text-xs tracking-widest uppercase">Abogado</span>
          </div>

          {profile?.tagline && profile.tagline !== '...' && (
            <p className="text-law-text text-xl md:text-2xl font-light font-sans leading-relaxed mb-10 max-w-2xl">
              {profile.tagline}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-block bg-law-white text-black px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-law-text transition-colors text-center"
            >
              Contactar
            </a>
            <a
              href="#servicios"
              className="inline-block border border-law-border text-law-text px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:border-law-white/50 hover:text-law-white transition-colors text-center"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-law-muted text-xs tracking-widest uppercase font-sans">Scroll</span>
        <div className="w-px h-10 bg-law-border" />
      </div>
    </section>
  )
}
