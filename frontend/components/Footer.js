export default function Footer({ profile }) {
  const year = new Date().getFullYear()
  const name =
    profile?.name && profile.name !== '...' ? profile.name : 'Estudio Juridico'

  return (
    <footer className="bg-black border-t border-law-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif text-law-white text-sm">{name}</span>

        <p className="text-law-muted text-xs font-sans">
          &copy; {year} &middot; Todos los derechos reservados
        </p>

        <a
          href="/admin/login"
          className="text-law-muted text-xs font-sans hover:text-law-secondary transition-colors"
        >
          Acceso Administracion
        </a>
      </div>
    </footer>
  )
}
