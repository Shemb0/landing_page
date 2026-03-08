import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import {
  getProfile,
  getServices,
  updateProfile,
  createService,
  updateService,
  deleteService,
} from '../../lib/api'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('profile')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState({ text: '', type: '' })

  const [profileForm, setProfileForm] = useState({
    name: '', tagline: '', bio: '', phone: '', email: '', address: '', whatsapp: '',
  })

  const [services, setServices] = useState([])
  const [newService, setNewService] = useState({ title: '', description: '', icon: '⚖️' })
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({ title: '', description: '', icon: '' })

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (!token) { router.push('/admin/login'); return }
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    try {
      const [p, s] = await Promise.all([getProfile(), getServices()])
      if (p) {
        setProfileForm({
          name: p.name || '',
          tagline: p.tagline || '',
          bio: p.bio || '',
          phone: p.phone || '',
          email: p.email || '',
          address: p.address || '',
          whatsapp: p.whatsapp || '',
        })
      }
      setServices(s || [])
    } catch {
      showToast('Error al cargar los datos', 'error')
    } finally {
      setLoading(false)
    }
  }

  const showToast = (text, type = 'ok') => {
    setToast({ text, type })
    setTimeout(() => setToast({ text: '', type: '' }), 3000)
  }

  const handleAuthError = (err) => {
    if (err.message === 'UNAUTHORIZED') {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      router.push('/admin/login')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    router.push('/admin/login')
  }

  const handleProfileSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      await updateProfile(profileForm)
      showToast('Perfil guardado correctamente')
    } catch (err) {
      handleAuthError(err)
      showToast(err.message || 'Error al guardar', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleCreateService = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      const created = await createService({ ...newService, order: services.length })
      setServices([...services, created])
      setNewService({ title: '', description: '', icon: '⚖️' })
      showToast('Servicio agregado')
    } catch (err) {
      handleAuthError(err)
      showToast(err.message || 'Error al crear el servicio', 'error')
    } finally {
      setSaving(false)
    }
  }

  const startEdit = (service) => {
    setEditingId(service.id)
    setEditForm({ title: service.title, description: service.description, icon: service.icon })
  }

  const handleUpdateService = async (e, id) => {
    e.preventDefault()
    setSaving(true)
    try {
      const updated = await updateService(id, editForm)
      setServices(services.map((s) => (s.id === id ? updated : s)))
      setEditingId(null)
      showToast('Servicio actualizado')
    } catch (err) {
      handleAuthError(err)
      showToast(err.message || 'Error al actualizar', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteService = async (id) => {
    if (!confirm('Confirmas eliminar este servicio?')) return
    try {
      await deleteService(id)
      setServices(services.filter((s) => s.id !== id))
      showToast('Servicio eliminado')
    } catch (err) {
      handleAuthError(err)
      showToast(err.message || 'Error al eliminar', 'error')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-law-black flex items-center justify-center">
        <p className="text-law-muted text-sm font-sans">Cargando...</p>
      </div>
    )
  }

  return (
    <>
      <Head><title>Panel de Administracion</title></Head>

      <div className="min-h-screen bg-law-black text-law-text font-sans">
        {/* Header */}
        <header className="border-b border-law-border bg-law-dark px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-law-muted text-xs tracking-[0.25em] uppercase">Panel de</p>
            <h1 className="font-serif text-xl text-law-white">Administracion</h1>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-law-muted text-xs hover:text-law-secondary transition-colors"
            >
              Ver sitio &rarr;
            </a>
            <button
              onClick={handleLogout}
              className="border border-law-border text-law-secondary px-4 py-2 text-xs tracking-widest uppercase hover:border-law-secondary hover:text-law-white transition-colors"
            >
              Cerrar sesion
            </button>
          </div>
        </header>

        {/* Toast */}
        {toast.text && (
          <div
            className={`fixed top-5 right-5 z-50 px-5 py-3 text-sm border ${
              toast.type === 'error'
                ? 'bg-red-950 text-red-300 border-red-800'
                : 'bg-law-surface text-law-white border-law-border'
            }`}
          >
            {toast.text}
          </div>
        )}

        <main className="max-w-4xl mx-auto px-6 py-8">
          {/* Tabs */}
          <div className="flex border-b border-law-border mb-8">
            {['profile', 'services'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-xs tracking-widest uppercase transition-colors ${
                  activeTab === tab
                    ? 'text-law-white border-b-2 border-law-white -mb-px'
                    : 'text-law-muted hover:text-law-secondary'
                }`}
              >
                {tab === 'profile' ? 'Perfil' : 'Servicios'}
              </button>
            ))}
          </div>

          {/* PERFIL TAB */}
          {activeTab === 'profile' && (
            <form onSubmit={handleProfileSave} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field
                  label="Nombre completo"
                  value={profileForm.name}
                  onChange={(v) => setProfileForm({ ...profileForm, name: v })}
                  placeholder="Dr. ..."
                />
                <Field
                  label="Eslogan / Subtitulo"
                  value={profileForm.tagline}
                  onChange={(v) => setProfileForm({ ...profileForm, tagline: v })}
                  placeholder="Tu eslogan profesional"
                />
                <Field
                  label="Telefono"
                  value={profileForm.phone}
                  onChange={(v) => setProfileForm({ ...profileForm, phone: v })}
                  placeholder="+54 11 ..."
                />
                <Field
                  label="Email"
                  type="email"
                  value={profileForm.email}
                  onChange={(v) => setProfileForm({ ...profileForm, email: v })}
                  placeholder="correo@ejemplo.com"
                />
                <Field
                  label="Direccion"
                  value={profileForm.address}
                  onChange={(v) => setProfileForm({ ...profileForm, address: v })}
                  placeholder="Av. Corrientes 1234, CABA"
                />
                <Field
                  label="WhatsApp (solo numeros, ej: 5491112345678)"
                  value={profileForm.whatsapp}
                  onChange={(v) => setProfileForm({ ...profileForm, whatsapp: v })}
                  placeholder="5491112345678"
                />
              </div>

              <div>
                <label className="block text-law-muted text-xs tracking-widest uppercase mb-2">
                  Presentacion / Biografia
                </label>
                <textarea
                  value={profileForm.bio}
                  onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                  rows={5}
                  className="w-full bg-law-surface border border-law-border text-law-white px-4 py-3 text-sm focus:outline-none focus:border-law-secondary transition-colors resize-none"
                  placeholder="Breve descripcion sobre el abogado..."
                />
              </div>

              <button
                type="submit"
                disabled={saving}
                className="bg-law-white text-black px-8 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-law-text transition-colors disabled:opacity-50"
              >
                {saving ? 'Guardando...' : 'Guardar Perfil'}
              </button>
            </form>
          )}

          {/* SERVICIOS TAB */}
          {activeTab === 'services' && (
            <div className="space-y-10">
              {/* Lista de servicios */}
              <div>
                <h2 className="text-law-secondary text-xs tracking-widest uppercase mb-4">
                  Servicios actuales ({services.length})
                </h2>
                {services.length === 0 ? (
                  <p className="text-law-muted text-sm">No hay servicios cargados.</p>
                ) : (
                  <div className="space-y-3">
                    {services.map((service) =>
                      editingId === service.id ? (
                        <form
                          key={service.id}
                          onSubmit={(e) => handleUpdateService(e, service.id)}
                          className="bg-law-surface border border-law-border p-5 space-y-4"
                        >
                          <div className="grid grid-cols-4 gap-4">
                            <Field
                              label="Icono"
                              value={editForm.icon}
                              onChange={(v) => setEditForm({ ...editForm, icon: v })}
                              placeholder="⚖️"
                            />
                            <div className="col-span-3">
                              <Field
                                label="Titulo"
                                value={editForm.title}
                                onChange={(v) => setEditForm({ ...editForm, title: v })}
                                placeholder="Nombre del servicio"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-law-muted text-xs tracking-widest uppercase mb-2">
                              Descripcion
                            </label>
                            <textarea
                              value={editForm.description}
                              onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                              rows={3}
                              className="w-full bg-law-black border border-law-border text-law-white px-4 py-3 text-sm focus:outline-none focus:border-law-secondary transition-colors resize-none"
                            />
                          </div>
                          <div className="flex gap-3">
                            <button
                              type="submit"
                              disabled={saving}
                              className="bg-law-white text-black px-5 py-2 text-xs font-semibold tracking-widest uppercase hover:bg-law-text transition-colors disabled:opacity-50"
                            >
                              {saving ? 'Guardando...' : 'Guardar'}
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingId(null)}
                              className="border border-law-border text-law-secondary px-5 py-2 text-xs tracking-widest uppercase hover:border-law-secondary transition-colors"
                            >
                              Cancelar
                            </button>
                          </div>
                        </form>
                      ) : (
                        <div
                          key={service.id}
                          className="bg-law-surface border border-law-border p-4 flex items-start gap-4"
                        >
                          <span className="text-2xl mt-0.5">{service.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-law-white text-sm font-medium">{service.title}</p>
                            <p className="text-law-secondary text-xs leading-relaxed mt-1 line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                          <div className="flex gap-3 flex-shrink-0">
                            <button
                              onClick={() => startEdit(service)}
                              className="text-law-muted hover:text-law-white text-xs tracking-widest uppercase transition-colors"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleDeleteService(service.id)}
                              className="text-red-700 hover:text-red-400 text-xs tracking-widest uppercase transition-colors"
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Agregar nuevo servicio */}
              <div>
                <h2 className="text-law-secondary text-xs tracking-widest uppercase mb-4">
                  Agregar nuevo servicio
                </h2>
                <form
                  onSubmit={handleCreateService}
                  className="bg-law-surface border border-law-border p-6 space-y-4"
                >
                  <div className="grid grid-cols-4 gap-4">
                    <Field
                      label="Icono (emoji)"
                      value={newService.icon}
                      onChange={(v) => setNewService({ ...newService, icon: v })}
                      placeholder="⚖️"
                    />
                    <div className="col-span-3">
                      <Field
                        label="Titulo del servicio"
                        value={newService.title}
                        onChange={(v) => setNewService({ ...newService, title: v })}
                        placeholder="Ej: Derecho Penal"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-law-muted text-xs tracking-widest uppercase mb-2">
                      Descripcion
                    </label>
                    <textarea
                      value={newService.description}
                      onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                      rows={3}
                      required
                      className="w-full bg-law-black border border-law-border text-law-white px-4 py-3 text-sm focus:outline-none focus:border-law-secondary transition-colors resize-none"
                      placeholder="Descripcion del servicio..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={saving}
                    className="bg-law-white text-black px-6 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-law-text transition-colors disabled:opacity-50"
                  >
                    {saving ? 'Agregando...' : '+ Agregar Servicio'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  )
}

function Field({ label, value, onChange, type = 'text', placeholder = '', required = false }) {
  return (
    <div>
      <label className="block text-law-muted text-xs tracking-widest uppercase mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-law-black border border-law-border text-law-white px-4 py-3 text-sm focus:outline-none focus:border-law-secondary transition-colors"
      />
    </div>
  )
}
