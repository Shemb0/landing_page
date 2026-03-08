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
        <polyline points="10,9 9,9 8,9" />
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
    <section id="sobre-mi" className="py-28 bg-law-black border-t border-law-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
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
              className="inline-flex items-center gap-2 text-law-gold text-xs font-semibold tracking-widest uppercase hover:gap-3 transition-all duration-200"
            >
              Solicitar Consulta
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon, label, desc }) => (
              <div
                key={label}
                className="bg-law-surface border border-law-border p-6 group hover:border-law-gold/30 hover:bg-law-card transition-all duration-300 rounded-sm"
              >
                <div className="text-law-gold mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {icon}
                </div>
                <p className="text-law-white text-sm font-sans font-medium mb-1">{label}</p>
                <p className="text-law-muted text-xs font-sans leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
