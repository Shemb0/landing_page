const contactItems = (profile) => {
  const items = []
  if (profile?.phone && profile.phone !== '...')
    items.push({ icon: '📞', label: 'Telefono', value: profile.phone, href: `tel:${profile.phone}` })
  if (profile?.email && profile.email !== '...')
    items.push({ icon: '✉️', label: 'Email', value: profile.email, href: `mailto:${profile.email}` })
  if (profile?.address && profile.address !== '...')
    items.push({ icon: '📍', label: 'Direccion', value: profile.address })
  if (profile?.whatsapp)
    items.push({
      icon: '💬',
      label: 'WhatsApp',
      value: 'Escribir por WhatsApp',
      href: `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`,
      external: true,
    })
  return items
}

export default function Contact({ profile }) {
  const items = contactItems(profile)

  return (
    <section id="contacto" className="py-24 bg-law-dark border-t border-law-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-law-muted text-xs tracking-[0.4em] uppercase mb-5 font-sans">
            Ponete en Contacto
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-law-white">Contacto</h2>
          <div className="w-16 h-px bg-law-border mx-auto mt-6" />
        </div>

        {items.length === 0 ? (
          <p className="text-center text-law-muted text-sm font-sans">
            Los datos de contacto se mostraran aqui.
          </p>
        ) : (
          <div
            className={`grid gap-5 ${
              items.length <= 2
                ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {items.map(({ icon, label, value, href, external }) => {
              const card = (
                <div className="bg-law-surface border border-law-border p-6 group hover:border-law-white/25 transition-all duration-300 h-full">
                  <div className="text-3xl mb-4">{icon}</div>
                  <p className="text-law-muted text-xs tracking-widest uppercase mb-2 font-sans">
                    {label}
                  </p>
                  <p className="text-law-text text-sm font-sans group-hover:text-law-white transition-colors">
                    {value}
                  </p>
                </div>
              )

              if (href) {
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                  >
                    {card}
                  </a>
                )
              }
              return <div key={label}>{card}</div>
            })}
          </div>
        )}
      </div>
    </section>
  )
}
