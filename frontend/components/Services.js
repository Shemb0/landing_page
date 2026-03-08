export default function Services({ services }) {
  return (
    <section id="servicios" className="py-28 bg-law-dark border-t border-law-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-law-gold text-xs tracking-[0.45em] uppercase mb-5 font-sans font-medium">
            Areas de Practica
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-law-white mb-6">
            Servicios de Representacion
          </h2>
          <div className="w-16 h-0.5 bg-law-gold mx-auto" />
        </div>

        {!services || services.length === 0 ? (
          <p className="text-center text-law-muted text-sm font-sans">
            Los servicios se mostraran aqui una vez que el abogado los complete.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-law-surface border border-law-border p-8 group hover:border-law-gold/30 hover:bg-law-card transition-all duration-300 rounded-sm relative overflow-hidden"
              >
                {/* Subtle top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-law-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="text-4xl mb-5 leading-none">{service.icon || '⚖️'}</div>
                <h3 className="font-serif text-xl text-law-white mb-3 group-hover:text-law-white transition-colors">
                  {service.title}
                </h3>
                <div className="w-8 h-px bg-law-border mb-4 group-hover:bg-law-gold/50 transition-colors duration-300" />
                <p className="text-law-secondary text-sm font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-law-muted text-sm font-sans mb-5">
            ¿Necesitas asesoramiento legal?
          </p>
          <a
            href="#contacto"
            className="inline-block bg-law-gold text-law-black px-8 py-3.5 text-xs font-semibold tracking-widest uppercase hover:bg-law-gold-light transition-colors rounded-sm shadow-lg shadow-black/30"
          >
            Consultar Ahora
          </a>
        </div>
      </div>
    </section>
  )
}
