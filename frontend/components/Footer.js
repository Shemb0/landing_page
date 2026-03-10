export default function Footer({ profile }) {
  const year = new Date().getFullYear()
  const name =
    profile?.name && profile.name !== '...' ? profile.name : 'Estudio Juridico'

  const navLinks = [
    ['#inicio', 'Inicio'],
    ['#sobre-mi', 'Sobre Mi'],
    ['#servicios', 'Servicios'],
    ['#contacto', 'Contacto'],
  ]

  const hasContact =
    (profile?.phone && profile.phone !== '...') ||
    (profile?.email && profile.email !== '...') ||
    (profile?.address && profile.address !== '...')

  return (
    <footer className="bg-law-dark border-t border-law-border">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-law-gold" />
              <span className="font-serif text-law-white text-base">{name}</span>
            </div>
            <div className="w-10 h-px bg-law-gold mb-5" />
            <p className="text-law-muted text-xs font-sans leading-relaxed max-w-xs">
              Representacion legal con compromiso y profesionalismo. Cada caso recibe la atencion que merece.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-law-white text-xs font-sans tracking-widest uppercase mb-5 font-medium">
              Navegacion
            </p>
            <div className="w-8 h-px bg-law-gold mb-6" />
            <ul className="flex flex-col gap-3">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-law-muted text-xs font-sans hover:text-law-gold transition-colors tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          {hasContact && (
            <div>
              <p className="text-law-white text-xs font-sans tracking-widest uppercase mb-5 font-medium">
                Contacto
              </p>
              <div className="w-8 h-px bg-law-gold mb-6" />
              <ul className="flex flex-col gap-3">
                {profile?.phone && profile.phone !== '...' && (
                  <li>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-law-muted text-xs font-sans hover:text-law-gold transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </li>
                )}
                {profile?.email && profile.email !== '...' && (
                  <li>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-law-muted text-xs font-sans hover:text-law-gold transition-colors"
                    >
                      {profile.email}
                    </a>
                  </li>
                )}
                {profile?.address && profile.address !== '...' && (
                  <li>
                    <p className="text-law-muted text-xs font-sans leading-relaxed">
                      {profile.address}
                    </p>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-law-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-law-muted text-xs font-sans">
            &copy; {year} {name} &middot; Todos los derechos reservados
          </p>
          <a
            href="/admin/login"
            className="text-law-muted text-xs font-sans hover:text-law-gold transition-colors"
          >
            Acceso Administracion
          </a>
        </div>
      </div>
    </footer>
  )
}
