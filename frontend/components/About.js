const values = [
  {
    label: 'Compromiso Legal',
    desc: 'Dedicacion total a cada caso',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'Atencion Personalizada',
    desc: 'Cercania en cada etapa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Asesoria Integral',
    desc: 'Vision completa del conflicto',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    label: 'Defensa Efectiva',
    desc: 'Resultados que importan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
  },
]

export default function About({ profile }) {
  if (!profile?.bio || profile.bio === '...') return null

  return (
    <section id="sobre-mi" className="py-28 bg-law-black border-t border-law-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — photo placeholder */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm lg:max-w-full">
              {/* Main photo frame */}
              <div
                className="relative aspect-[4/5] overflow-hidden"
                style={{
                  backgroundImage: `url('/about-photo.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backgroundColor: '#1A1917',
                }}
              >
                {/* Placeholder (visible when no image) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-law-surface via-law-card to-law-surface">
                  <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 text-law-gold/20">
                    <circle cx="40" cy="28" r="16" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 72 C10 55 20 48 40 48 C60 48 70 55 70 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <div className="text-center px-8">
                    <p className="text-law-border text-xs font-sans tracking-[0.3em] uppercase">Foto del Abogado</p>
                    <p className="text-law-muted/40 text-[10px] font-sans mt-1">about-photo.jpg</p>
                  </div>
                </div>

                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-law-black/50 via-transparent to-transparent" />

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-law-gold/50" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-law-gold/50" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-law-gold/50" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-law-gold/50" />

                {/* Name badge at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                  {profile.name && profile.name !== '...' && (
                    <p className="font-serif text-law-white text-lg font-semibold">{profile.name}</p>
                  )}
                  <p className="text-law-gold text-xs font-sans tracking-widest uppercase mt-1">Abogado</p>
                </div>
              </div>

              {/* Offset decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-law-border/25 -z-10" />
            </div>
          </div>

          {/* Right — text + values */}
          <div>
            <p className="text-law-gold text-xs tracking-[0.45em] uppercase mb-5 font-sans font-medium">
              Sobre mi
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-law-white mb-5 leading-tight">
              {profile.name && profile.name !== '...' ? profile.name : '...'}
            </h2>
            <div className="w-16 h-0.5 bg-law-gold mb-8" />
            <p className="text-law-text text-base font-sans leading-[1.9] mb-8">
              {profile.bio}
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-law-gold text-xs font-semibold tracking-widest uppercase hover:gap-3 transition-all duration-200 mb-12"
            >
              Solicitar Consulta
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3">
              {values.map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-law-surface border border-law-border p-5 group hover:border-law-gold/30 hover:bg-law-card transition-all duration-300 rounded-sm"
                >
                  <div className="text-law-gold mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    {icon}
                  </div>
                  <p className="text-law-white text-sm font-sans font-medium mb-1">{label}</p>
                  <p className="text-law-muted text-xs font-sans leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
