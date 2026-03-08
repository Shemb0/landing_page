import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { login } from '../../lib/api'

export default function AdminLogin() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) router.push('/admin/dashboard')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const data = await login(username, password)
      localStorage.setItem('access_token', data.access)
      localStorage.setItem('refresh_token', data.refresh)
      router.push('/admin/dashboard')
    } catch (err) {
      setError(err.message || 'Credenciales incorrectas')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Acceso | Administracion</title>
      </Head>
      <div className="min-h-screen bg-law-black flex items-center justify-center px-4 font-sans">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <p className="text-law-muted text-xs tracking-[0.3em] uppercase mb-3 font-sans">
              Panel de
            </p>
            <h1 className="font-serif text-3xl text-law-white">Administracion</h1>
            <div className="w-10 h-px bg-law-border mx-auto mt-5" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-law-muted text-xs tracking-widest uppercase mb-2">
                Usuario
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                className="w-full bg-law-surface border border-law-border text-law-white px-4 py-3 text-sm focus:outline-none focus:border-law-secondary transition-colors"
                placeholder="nombre de usuario"
              />
            </div>

            <div>
              <label className="block text-law-muted text-xs tracking-widest uppercase mb-2">
                Contrasena
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full bg-law-surface border border-law-border text-law-white px-4 py-3 text-sm focus:outline-none focus:border-law-secondary transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-400 text-xs text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-law-white text-black py-3 text-sm font-semibold tracking-widest uppercase hover:bg-law-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-law-muted text-xs hover:text-law-secondary transition-colors"
            >
              Volver al sitio
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
