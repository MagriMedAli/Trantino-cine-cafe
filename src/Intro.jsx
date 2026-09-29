import { motion } from 'framer-motion'
import heroImage from './assets/hero.png'
import { useLanguage } from './data/LanguageContext.jsx'
import { translations } from './data/translation.js'

function Intro() {
  const { language } = useLanguage()
  const t = translations[language].intro

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ivory py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Top film label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-caramel" />

          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-coffee">
            {t.scene}
          </span>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-xs uppercase tracking-[0.3em] text-caramel"
            >
              {t.label}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-2xl font-display text-5xl leading-[0.98] text-espresso sm:text-6xl lg:text-7xl"
            >
              {t.title}
              <br />
              <span className="text-coffee">{t.titleAccent}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.15,
                duration: 0.8,
              }}
              className="mt-8 max-w-lg text-sm leading-8 text-dark-coffee/70 sm:text-base"
            >
              {t.description}
            </motion.p>

            {/* Experience stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mt-10 flex items-center gap-6"
            >
              <div>
                <p className="font-display text-3xl text-espresso">01</p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-coffee">
                  {t.atmosphere}
                </p>
              </div>

              <div className="h-10 w-px bg-roasted-coffee/20" />

              <div>
                <p className="font-display text-3xl text-espresso">02</p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-coffee">
                  {t.experience}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="overflow-hidden">
              <motion.img
                src={heroImage}
                alt="Tarantino Ciné Café interior"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                className="h-[520px] w-full object-cover lg:h-[620px]"
              />
            </div>

            {/* Small cinematic caption */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.3em] text-coffee">
                {t.brand}
              </span>

              <span className="text-[9px] uppercase tracking-[0.3em] text-coffee/60">
                {t.location}
              </span>
            </div>

            {/* Decorative frame */}
            <div className="pointer-events-none absolute -bottom-5 -left-5 h-20 w-20 border-b border-l border-caramel/50" />

            <div className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 border-r border-t border-caramel/50" />
          </motion.div>

        </div>

        {/* Film-strip divider */}
        <div className="mt-24 flex items-center gap-3 opacity-40">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="h-2.5 w-4 border border-coffee/50"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Intro