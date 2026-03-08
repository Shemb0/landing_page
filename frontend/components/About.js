const values = [
  { icon: '⚖️', label: 'Compromiso Legal' },
  { icon: '🤝', label: 'Atencion Personalizada' },
  { icon: '📋', label: 'Asesoria Integral' },
  { icon: '🛡️', label: 'Defensa Efectiva' },
]

export default function About({ profile }) {
  if (!profile?.bio || profile.bio === '...') return null

  return (
    <section id="sobre-mi" className="py-24 bg-law-dark border-t border-law-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-law-muted text-xs tracking-[0.4em] uppercase mb-5 font-sans">
              Sobre mi
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-law-white mb-6 leading-tight">
              {profile.name && profile.name !== '...' ? profile.name : '...'}
            </h2>
            <div className="w-16 h-px bg-law-border mb-8" />
            <p className="text-law-text text-base font-sans leading-relaxed">{profile.bio}</p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon, label }) => (
              <div
                key={label}
                className="bg-law-surface border border-law-border p-6 text-center hover:border-law-white/20 transition-colors"
              >
                <div className="text-3xl mb-3">{icon}</div>
                <p className="text-law-text text-xs font-sans tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
