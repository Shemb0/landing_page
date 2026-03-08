export default function Footer({ profile }) {
  const year = new Date().getFullYear()
  const name =
    profile?.name && profile.name !== '...' ? profile.name : 'Estudio Juridico'

  return (
    <footer className="bg-law-dark border-t border-law-border py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-law-gold" />
            <span className="font-serif text-law-white text-sm">{name}</span>
          </div>

          <p className="text-law-muted text-xs font-sans">
            &copy; {year} &middot; Todos los derechos reservados
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
