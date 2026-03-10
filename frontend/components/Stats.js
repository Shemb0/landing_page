const stats = [
  { number: '+15', label: 'Anos de Experiencia' },
  { number: '+300', label: 'Casos Resueltos' },
  { number: '8', label: 'Areas de Practica' },
  { number: '100%', label: 'Consulta Confidencial' },
]

export default function Stats() {
  return (
    <section className="bg-law-surface border-b border-law-border relative overflow-hidden">
      {/* Diagonal accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(197,163,90,0.04) 50%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ number, label }, i) => (
            <div
              key={label}
              className={`text-center px-6 py-4 ${
                i < stats.length - 1 ? 'border-r border-law-border/40' : ''
              }`}
            >
              <p className="font-serif text-4xl md:text-5xl text-law-gold font-bold mb-3 leading-none">
                {number}
              </p>
              <div className="w-8 h-px bg-law-gold/40 mx-auto mb-3" />
              <p className="text-law-muted text-xs font-sans tracking-widest uppercase leading-relaxed">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
