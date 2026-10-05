import { useCallback, useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { supabase } from './lib/supabase.js'
import { useLanguage } from './data/LanguageContext.jsx'
import { translations } from './data/translation.js'

function dateWithOffset(offset = 0) {
  const date = new Date()
  date.setDate(date.getDate() + offset)
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((part, index) => (index === 0 ? part : String(part).padStart(2, '0')))
    .join('-')
}

function formatCreatedAt(value, language) {
  if (!value) return ''
  return new Intl.DateTimeFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value))
}

function StatusBadge({ status, labels }) {
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${status === 'confirmed' ? 'border-forest/20 bg-forest/10 text-forest' : status === 'cancelled' ? 'border-terracotta/30 bg-terracotta/10 text-terracotta' : 'border-amber/30 bg-amber/10 text-amber'}`}>
      {labels[status]}
    </span>
  )
}

function AdminLogin({ copy, onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const reducedMotion = useReducedMotion()

  const submit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)
    const loginError = await onLogin(email, password)
    if (loginError) setError(loginError)
    setLoading(false)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-espresso px-5 py-10 text-cream">
      <motion.section initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md border border-cream/15 bg-dark-coffee p-7 shadow-2xl sm:p-10">
        <div className="mb-10 border-b border-cream/10 pb-7">
          <p className="font-display text-3xl tracking-[0.08em]">TARANTINO</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-caramel">CINÉ CAFÉ · {copy.admin}</p>
          <p className="mt-6 text-sm leading-6 text-cream/55">{copy.loginIntro}</p>
        </div>
        <form onSubmit={submit} className="space-y-6">
          <div>
            <label htmlFor="admin-email" className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-cream/50">{copy.email}</label>
            <input id="admin-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} className="w-full border-b border-cream/20 bg-transparent px-0 py-3 text-sm text-cream outline-none focus:border-caramel" />
          </div>
          <div>
            <label htmlFor="admin-password" className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-cream/50">{copy.password}</label>
            <input id="admin-password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} className="w-full border-b border-cream/20 bg-transparent px-0 py-3 text-sm text-cream outline-none focus:border-caramel" />
          </div>
          {error && <p role="alert" className="border border-terracotta/30 bg-terracotta/10 px-3 py-2 text-xs leading-5 text-cream">{error}</p>}
          <button type="submit" disabled={loading} className="w-full bg-caramel px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-espresso hover:bg-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-caramel disabled:cursor-wait disabled:opacity-60">{loading ? copy.loggingIn : copy.login}</button>
        </form>
      </motion.section>
    </main>
  )
}

function ReservationCard({ reservation, copy, language, updatingId, onStatusChange }) {
  const isToday = reservation.reservation_date === dateWithOffset()
  const isUpdating = updatingId === reservation.id

  return (
    <motion.article layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`border bg-ivory p-5 shadow-sm sm:p-6 ${isToday ? 'border-caramel/70' : 'border-dark-coffee/10'}`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3"><h3 className="font-display text-2xl text-dark-coffee">{reservation.name}</h3><StatusBadge status={reservation.status} labels={copy.status} />{isToday && <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-caramel">{copy.today}</span>}</div>
          <a href={`tel:${reservation.phone}`} className="mt-2 inline-block text-sm text-coffee hover:underline">{reservation.phone}</a>
        </div>
        <div className="text-left sm:text-right"><p className="font-display text-xl text-dark-coffee">{reservation.reservation_date} · {reservation.reservation_time}</p><p className="mt-1 text-xs uppercase tracking-[0.14em] text-coffee">{reservation.guests} {copy.guests}</p></div>
      </div>
      <div className="mt-5 grid gap-4 border-t border-dark-coffee/10 pt-4 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>{reservation.message ? <p className="text-sm leading-6 text-dark-coffee/75">{reservation.message}</p> : <p className="text-sm italic text-dark-coffee/40">{copy.noMessage}</p>}<p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-dark-coffee/40">{copy.received}: {formatCreatedAt(reservation.created_at, language)}</p></div>
        {reservation.status !== 'cancelled' && <div className="flex flex-wrap gap-2 sm:justify-end">{reservation.status === 'pending' && <button type="button" disabled={isUpdating} onClick={() => onStatusChange(reservation.id, 'confirmed')} className="border border-forest bg-forest px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-cream hover:bg-forest/85 disabled:opacity-50">{isUpdating ? copy.updating : copy.confirm}</button>}<button type="button" disabled={isUpdating} onClick={() => onStatusChange(reservation.id, 'cancelled')} className="border border-terracotta/50 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-terracotta hover:bg-terracotta hover:text-cream disabled:opacity-50">{isUpdating ? copy.updating : copy.cancel}</button></div>}
      </div>
    </motion.article>
  )
}

function AdminDashboard({ user, copy, language, onLogout }) {
  const [reservations, setReservations] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState('')
  const [actionMessage, setActionMessage] = useState('')
  const [filter, setFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [updatingId, setUpdatingId] = useState(null)

  const fetchReservations = useCallback(async () => {
    const { data, error } = await supabase.from('reservations').select('*').order('created_at', { ascending: false })
    if (error) {
      console.error('Reservation fetch failed:', error)
      setFetchError(copy.fetchError)
      setReservations([])
    } else {
      setReservations(data ?? [])
    }
    setLoading(false)
  }, [copy.fetchError])

  useEffect(() => { fetchReservations() }, [fetchReservations])

  const stats = useMemo(() => ({
    total: reservations.length,
    pending: reservations.filter((item) => item.status === 'pending').length,
    confirmed: reservations.filter((item) => item.status === 'confirmed').length,
    cancelled: reservations.filter((item) => item.status === 'cancelled').length,
  }), [reservations])

  const visibleReservations = useMemo(() => {
    const today = dateWithOffset()
    const tomorrow = dateWithOffset(1)
    return reservations.filter((item) => {
      const dateMatch = filter === 'today' ? item.reservation_date === today : filter === 'tomorrow' ? item.reservation_date === tomorrow : true
      return dateMatch && (statusFilter === 'all' || item.status === statusFilter)
    })
  }, [filter, reservations, statusFilter])

  const updateStatus = async (id, status) => {
    setUpdatingId(id)
    setActionMessage('')
    const { error } = await supabase.from('reservations').update({ status }).eq('id', id)
    if (error) {
      console.error('Reservation status update failed:', error)
      setActionMessage(copy.updateError)
    } else {
      setReservations((current) => current.map((item) => item.id === id ? { ...item, status } : item))
      setActionMessage(copy.updateSuccess)
    }
    setUpdatingId(null)
  }

  const statItems = [['total', stats.total, copy.total], ['pending', stats.pending, copy.pending], ['confirmed', stats.confirmed, copy.confirmed], ['cancelled', stats.cancelled, copy.cancelled]]

  return (
    <main className="min-h-screen bg-ivory text-dark-coffee">
      <header className="border-b border-cream/15 bg-espresso text-cream"><div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-6 sm:px-8 lg:px-10"><div><p className="font-display text-2xl tracking-[0.08em]">TARANTINO ADMIN</p><p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-caramel">CINÉ CAFÉ · {copy.desk}</p></div><div className="flex items-center gap-4"><span className="hidden text-xs text-cream/50 sm:inline">{user.email}</span><button type="button" onClick={onLogout} className="border border-cream/25 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] hover:border-caramel hover:text-caramel">{copy.logout}</button></div></div></header>
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{statItems.map(([key, value, label]) => <div key={key} className="border border-dark-coffee/10 bg-cream/45 px-5 py-5"><p className="text-[10px] uppercase tracking-[0.18em] text-coffee">{label}</p><p className="mt-3 font-display text-4xl text-dark-coffee">{value}</p></div>)}</div>
        <div className="mt-10 flex flex-col gap-4 border-b border-dark-coffee/10 pb-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-[10px] uppercase tracking-[0.2em] text-caramel">{copy.reservationDesk}</p><h1 className="mt-2 font-display text-4xl text-dark-coffee sm:text-5xl">{copy.reservations}</h1></div><div className="flex flex-wrap gap-2">{['today', 'tomorrow', 'all'].map((value) => <button key={value} type="button" onClick={() => setFilter(value)} className={`border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] ${filter === value ? 'border-dark-coffee bg-dark-coffee text-cream' : 'border-dark-coffee/20 text-dark-coffee'}`}>{copy[value]}</button>)}</div></div>
        <div className="mt-5 flex flex-wrap gap-2">{['all', 'pending', 'confirmed', 'cancelled'].map((value) => <button key={value} type="button" onClick={() => setStatusFilter(value)} className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] ${statusFilter === value ? 'border-caramel bg-caramel text-espresso' : 'border-dark-coffee/15 text-coffee'}`}>{value === 'all' ? copy.all : copy.status[value]}</button>)}</div>
        {actionMessage && <p role="status" className="mt-5 text-xs text-coffee">{actionMessage}</p>}
        {loading ? <div className="py-20 text-center text-sm text-coffee">{copy.loadingReservations}</div> : fetchError ? <div className="mt-8 border border-terracotta/30 bg-terracotta/10 p-5 text-sm text-terracotta"><p>{fetchError}</p><button type="button" onClick={() => { setLoading(true); setFetchError(''); fetchReservations() }} className="mt-4 border border-terracotta px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em]">{copy.retry}</button></div> : visibleReservations.length === 0 ? <div className="mt-8 border border-dashed border-dark-coffee/20 px-5 py-16 text-center"><p className="font-display text-3xl text-dark-coffee">{copy.empty}</p><p className="mt-2 text-sm text-coffee">{copy.emptyDescription}</p></div> : <div className="mt-8 grid gap-4">{visibleReservations.map((reservation) => <ReservationCard key={reservation.id} reservation={reservation} copy={copy} language={language} updatingId={updatingId} onStatusChange={updateStatus} />)}</div>}
      </div>
    </main>
  )
}

function Admin() {
  const { language } = useLanguage()
  const copy = translations[language].admin
  const [session, setSession] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [accessError, setAccessError] = useState('')

  const verifyAdmin = useCallback(async (user) => {
    const { data, error } = await supabase.from('admin_users').select('*')
    if (error) {
      console.error('Admin verification failed:', error)
      return false
    }
    return (data ?? []).some((admin) => admin.user_id === user.id || admin.auth_user_id === user.id || admin.id === user.id || admin.email?.toLowerCase() === user.email?.toLowerCase())
  }, [])

  const loadSession = useCallback(async (nextSession) => {
    setAuthLoading(true)
    setAccessError('')
    if (!nextSession?.user) {
      setSession(null)
      setIsAdmin(false)
      setAuthLoading(false)
      return
    }
    const admin = await verifyAdmin(nextSession.user)
    if (!admin) {
      await supabase.auth.signOut()
      setSession(null)
      setIsAdmin(false)
      setAccessError(copy.unauthorized)
      setAuthLoading(false)
      return
    }
    setSession(nextSession)
    setIsAdmin(true)
    setAuthLoading(false)
  }, [copy.unauthorized, verifyAdmin])

  useEffect(() => {
    let active = true
    supabase.auth.getSession().then(({ data, error }) => {
      if (!active) return
      if (error) {
        console.error('Session lookup failed:', error)
        setAccessError(copy.sessionError)
        setAuthLoading(false)
        return
      }
      loadSession(data.session)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => { if (active) loadSession(nextSession) })
    return () => { active = false; listener.subscription.unsubscribe() }
  }, [copy.sessionError, loadSession])

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.error('Admin login failed:', error)
      return copy.invalidLogin
    }
    await loadSession(data.session)
    return null
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Admin logout failed:', error)
      setAccessError(copy.logoutError)
    }
  }

  if (authLoading) return <main className="flex min-h-screen items-center justify-center bg-espresso text-sm text-cream">{copy.loading}</main>
  if (!session || !isAdmin) return (
    <>
      <AdminLogin copy={copy} onLogin={login} />
      {accessError && (
        <p role="alert" className="fixed bottom-5 left-1/2 z-10 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 border border-terracotta/40 bg-espresso px-4 py-3 text-center text-xs text-cream shadow-xl">
          {accessError}
        </p>
      )}
    </>
  )
  return <AdminDashboard user={session.user} copy={copy} language={language} onLogout={logout} />
}

export default Admin
