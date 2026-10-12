import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from './data/LanguageContext.jsx'
import { translations } from './data/translation.js'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const reducedMotion = useReducedMotion()
  const t = translations[language]

  const links = [
    ['home', '#home'],
    ['about', '#about'],
    ['menu', '#menu'],
    ['gallery', '#gallery'],
    ['events', '#events'],
    ['contact', '#contact'],
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
        scrolled
          ? 'bg-espresso/95 py-4 shadow-lg backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#home"
          onClick={closeMenu}
          className="group relative z-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel"
        >
          <div className="font-display text-xl leading-none text-cream">
            {t.nav.brand}
          </div>
          <div className="mt-1 text-[9px] uppercase tracking-[0.35em] text-caramel">
            {t.nav.brandSubline}
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([key, href]) => (
            <a
              key={key}
              href={href}
              className="group relative py-2 text-[11px] uppercase tracking-[0.16em] text-cream/75 transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel"
            >
              {t.nav[key]}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-caramel transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#reservation"
            className="hidden border border-caramel px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-caramel hover:text-espresso focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel md:block"
          >
            {t.nav.reserve}
          </a>

          <button
            type="button"
            onClick={toggleLanguage}
            className="relative z-10 text-[10px] font-medium uppercase tracking-[0.2em] text-cream/75 transition-colors hover:text-caramel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.nav.close : t.nav.open}
            className="relative z-10 flex h-10 w-10 flex-col items-end justify-center gap-1.5 md:hidden"
          >
            <span className={`h-px bg-cream transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 translate-y-1' : 'w-6'}`} />
            <span className={`h-px bg-cream transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`h-px bg-cream transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 -translate-y-1' : 'w-5'}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 -z-0 flex min-h-screen flex-col bg-espresso px-6 pb-10 pt-32 md:hidden"
          >
            <div className="mb-10 flex items-center gap-4 text-[9px] uppercase tracking-[0.3em] text-caramel">
              <span className="h-px w-8 bg-caramel" />
              {t.nav.brandSubline}
            </div>

            <div className="flex flex-col">
              {links.map(([key, href], index) => (
                <motion.a
                  key={key}
                  href={href}
                  onClick={closeMenu}
                  initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{
                    delay: reducedMotion ? 0 : index * 0.045,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center justify-between border-b border-cream/10 py-4 font-display text-4xl text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel"
                >
                  <span>{t.nav[key]}</span>
                  <span className="text-sm text-caramel">0{index + 1}</span>
                </motion.a>
              ))}
            </div>

            <a
              href="#reservation"
              onClick={closeMenu}
              className="mt-auto inline-flex w-full items-center justify-center bg-caramel px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel"
            >
              {t.nav.reserve}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
