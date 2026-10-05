import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from './data/LanguageContext.jsx'
import { translations } from './data/translation.js'
import cafeBackdrop from './assets/cafe-5.png'

function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact
  const nav = translations[language].nav
  const phoneHref = `tel:${t.phone.replaceAll(' ', '')}`
  const reducedMotion = useReducedMotion()

  const reveal = (y = 24, delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: {
      delay,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  })

  const footerLinks = [
    ['home', '#home'],
    ['menu', '#menu'],
    ['about', '#about'],
    ['gallery', '#gallery'],
    ['events', '#events'],
    ['contact', '#contact'],
    ['reserve', '#reservation'],
  ]

  return (
    <footer id="contact" className="relative overflow-hidden bg-espresso text-cream">
      <motion.img
        src={cafeBackdrop}
        alt=""
        aria-hidden="true"
        initial={reducedMotion ? false : { scale: 1.04, y: 10 }}
        whileInView={reducedMotion ? undefined : { scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[center_42%]"
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-espresso/70" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-espresso/80 via-espresso/55 to-espresso/85" />

      <section className="relative z-10 border-t border-cream/10 py-24 sm:py-32 lg:py-44">
        <div className="pointer-events-none absolute left-0 right-0 top-8 h-px bg-caramel/30" />

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...reveal(30)} className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-caramel" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-caramel">
                {t.scene}
              </span>
            </div>

            <span className="text-[9px] uppercase tracking-[0.3em] text-cream/35">
              {t.take}
            </span>
          </motion.div>

          <motion.div {...reveal(42, 0.08)} className="mt-16 max-w-5xl sm:mt-24">
            <p className="text-xs uppercase tracking-[0.35em] text-cream/45">
              {t.label}
            </p>

            <h2 className="mt-6 font-display text-6xl leading-[0.88] sm:text-8xl lg:text-[9rem]">
              {t.title}
              <br />
              <span className="text-caramel">{t.titleAccent}</span>
            </h2>

            <p className="mt-10 max-w-xl text-sm leading-8 text-cream/60 sm:text-base">
              {t.description}
            </p>
          </motion.div>

          <motion.div {...reveal(26, 0.16)} className="mt-20 h-px origin-left bg-cream/15" />

          <div className="grid gap-px overflow-hidden border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div {...reveal(20, 0.2)} className="flex flex-col items-center bg-espresso/80 p-6 text-center sm:p-7">
              <span className="flex h-9 w-9 items-center justify-center border border-caramel/50 font-display text-lg text-caramel" aria-hidden="true">⌖</span>
              <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-caramel">{t.addressLabel}</p>
              <a href="https://maps.app.goo.gl/LPjUZSRkFFRGvpm1A" target="_blank" rel="noreferrer" className="mt-3 text-sm leading-7 text-cream/75 transition-colors hover:text-caramel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel">
                {t.address}<br />{t.city}
              </a>
            </motion.div>

            <motion.div {...reveal(20, 0.26)} className="flex flex-col items-center bg-espresso/80 p-6 text-center sm:p-7">
              <span className="flex h-9 w-9 items-center justify-center border border-caramel/50 font-display text-lg text-caramel" aria-hidden="true">✆</span>
              <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-caramel">{t.phoneLabel}</p>
              <a href={phoneHref} className="mt-3 inline-block text-sm text-cream/75 transition-colors hover:text-caramel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel">{t.phone}</a>
            </motion.div>

            <motion.div {...reveal(20, 0.32)} className="flex flex-col items-center bg-espresso/80 p-6 text-center sm:p-7">
              <span className="flex h-9 w-9 items-center justify-center border border-caramel/50 font-semibold text-lg text-caramel" aria-hidden="true">f</span>
              <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-caramel">{t.facebook}</p>
              <a href="https://www.facebook.com/Tarantinomonastir" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-caramel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel">{t.follow}<span aria-hidden="true">↗</span></a>
            </motion.div>

            <motion.div {...reveal(20, 0.38)} className="flex flex-col items-center bg-espresso/80 p-6 text-center sm:p-7">
              <span className="flex h-9 w-9 items-center justify-center border border-caramel/50 font-display text-lg text-caramel" aria-hidden="true">◎</span>
              <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-caramel">{t.instagram}</p>
              <a href="https://www.instagram.com/tarantino.monastir/" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-caramel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel">{t.follow}<span aria-hidden="true">↗</span></a>
            </motion.div>
          </div>

          <motion.div {...reveal(18, 0.42)} className="mt-px grid gap-6 border border-caramel/35 bg-caramel/10 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-caramel">{t.opening}</p>
              <p className="mt-3 font-display text-2xl text-cream sm:text-3xl">{t.everyDay}</p>
            </div>
            <div className="flex items-end gap-5 sm:gap-8">
              <div><p className="text-[9px] uppercase tracking-[0.2em] text-cream/45">{t.opens}</p><p className="mt-1 font-display text-3xl text-cream sm:text-4xl">07:30</p></div>
              <span className="mb-2 h-px w-8 bg-caramel/60" aria-hidden="true" />
              <div><p className="text-[9px] uppercase tracking-[0.2em] text-cream/45">{t.closes}</p><p className="mt-1 font-display text-3xl text-cream sm:text-4xl">00:00</p></div>
            </div>
          </motion.div>

          <motion.div {...reveal(24, 0.48)} className="relative mt-24 border-t border-cream/10 pt-8 sm:mt-32">
            <div className="mb-5 flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-cream/30">
              <span>{t.scene}</span>
              <span>{t.city}</span>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="whitespace-nowrap font-display text-7xl leading-none text-cream/90 sm:text-9xl lg:text-[12rem]"
              >
                {t.signature}
              </motion.div>
            </div>

            <div className="mt-4 flex items-center gap-4 pl-1">
              <span className="h-px w-10 bg-caramel" />
              <span className="text-[10px] uppercase tracking-[0.55em] text-caramel">
                {t.signatureSubline}
              </span>
            </div>
          </motion.div>

          <motion.div
            {...reveal(24, 0.54)}
            className="mt-28 border-t border-cream/10 pt-8 sm:mt-40"
          >
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="text-[9px] uppercase tracking-[0.3em] text-caramel">
                {t.navigation}
              </p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-cream/30">
                {t.take} · {t.city}
              </p>
            </div>

            <nav aria-label={t.navigation} className="mt-8">
              <div className="flex flex-wrap justify-center gap-x-7 gap-y-4 sm:gap-x-10">
                {footerLinks.slice(0, 6).map(([key, href]) => (
                  <a
                    key={key}
                    href={href}
                    className="group relative py-2 text-[10px] uppercase tracking-[0.24em] text-cream/55 transition-colors hover:text-caramel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel"
                  >
                    {nav[key]}
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-caramel transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                  </a>
                ))}
              </div>
            </nav>

            <div className="mt-12 flex flex-col items-center border border-caramel/35 bg-caramel/10 p-6 text-center sm:mt-14 sm:p-8">
              <p className="text-[9px] uppercase tracking-[0.32em] text-caramel">
                {t.nextScene}
              </p>
              <a
                href="#reservation"
                className="group mt-5 inline-flex min-h-12 items-center gap-5 border border-caramel bg-caramel px-6 py-3 font-display text-2xl text-espresso transition-colors hover:bg-amber focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel sm:text-3xl"
              >
                <span>{nav.reserve}</span>
                <span className="text-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 border-t border-cream/10 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[9px] uppercase tracking-[0.25em] text-cream/35 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <span>{t.signature} · {t.signatureSubline}</span>
          <span>{t.rights}</span>
        </div>
      </div>
    </footer>
  )
}

export default Contact
