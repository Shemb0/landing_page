const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.06 6.06l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-5 h-5">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const contactItems = (profile) => {
  const items = []
  if (profile?.phone && profile.phone !== '...')
    items.push({ icon: <PhoneIcon />, label: 'Telefono', value: profile.phone, href: `tel:${profile.phone}` })
  if (profile?.email && profile.email !== '...')
    items.push({ icon: <EmailIcon />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` })
  if (profile?.address && profile.address !== '...')
    items.push({ icon: <LocationIcon />, label: 'Direccion', value: profile.address })
  if (profile?.whatsapp)
    items.push({
      icon: <WhatsAppIcon />,
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
    <section id="contacto" className="py-28 bg-law-black border-t border-law-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-law-gold text-xs tracking-[0.45em] uppercase mb-5 font-sans font-medium">
            Ponete en Contacto
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-law-white mb-4">Contacto</h2>
          <p className="text-law-muted text-sm font-sans max-w-md mx-auto">
            Consulta confidencial. Respondemos a la brevedad.
          </p>
          <div className="w-16 h-0.5 bg-law-gold mx-auto mt-6" />
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
                <div className="bg-law-surface border border-law-border p-6 group hover:border-law-gold/30 hover:bg-law-card transition-all duration-300 rounded-sm h-full flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full bg-law-card border border-law-border flex items-center justify-center text-law-gold group-hover:bg-law-gold/10 group-hover:border-law-gold/30 transition-all duration-300">
                    {icon}
                  </div>
                  <div>
                    <p className="text-law-muted text-xs tracking-widest uppercase mb-1.5 font-sans">
                      {label}
                    </p>
                    <p className="text-law-text text-sm font-sans group-hover:text-law-white transition-colors leading-relaxed">
                      {value}
                    </p>
                  </div>
                  {href && (
                    <p className="text-law-gold text-xs font-sans font-medium tracking-wide mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      {external ? 'Abrir WhatsApp' : label === 'Email' ? 'Enviar Email' : 'Llamar'}
                      {' '}→
                    </p>
                  )}
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
