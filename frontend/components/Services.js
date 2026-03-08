export default function Services({ services }) {
  return (
    <section id="servicios" className="py-24 bg-black border-t border-law-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-law-muted text-xs tracking-[0.4em] uppercase mb-5 font-sans">
            Areas de Practica
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-law-white">
            Servicios de Representacion
          </h2>
          <div className="w-16 h-px bg-law-border mx-auto mt-6" />
        </div>

        {/* Grid or empty state */}
        {!services || services.length === 0 ? (
          <p className="text-center text-law-muted text-sm font-sans">
            Los servicios se mostraran aqui una vez que el abogado los complete.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-law-surface border border-law-border p-8 group hover:border-law-white/25 transition-all duration-300"
              >
                <div className="text-4xl mb-5">{service.icon || '⚖️'}</div>
                <h3 className="font-serif text-xl text-law-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <div className="w-8 h-px bg-law-border mb-4 group-hover:bg-law-secondary transition-colors" />
                <p className="text-law-secondary text-sm font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
