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
      className="relative overflow-hidden bg-ivory py-24 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Top film label */}
        <div className="mb-14 flex items-center gap-4 lg:mb-20">
          <span className="h-px w-10 bg-caramel" />

          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-coffee">
            {t.scene}
          </span>
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-20">

          {/* Text */}
          <div className="lg:pt-16">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mb-7 text-[10px] uppercase tracking-[0.35em] text-caramel"
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
              className="max-w-3xl font-display text-5xl leading-[0.9] text-espresso sm:text-6xl lg:text-[6.6rem]"
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
              className="mt-9 max-w-md text-sm leading-8 text-dark-coffee/70 sm:text-base"
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
              className="mt-14 grid max-w-md grid-cols-2 border-t border-roasted-coffee/20 pt-6"
            >
              <div>
                <p className="font-display text-3xl text-espresso">01</p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-coffee">
                  {t.atmosphere}
                </p>
              </div>

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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:mt-10"
          >
            <div className="relative overflow-hidden rounded-sm">
              <motion.img
                src={heroImage}
                alt="Tarantino Ciné Café interior"
                initial={{ clipPath: 'inset(0 0 100% 0)', scale: 1.05 }}
                whileInView={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-[500px] w-full object-cover sm:h-[600px] lg:h-[700px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent" />
              <div className="absolute right-5 top-5 border border-cream/30 bg-espresso/65 px-3 py-2 backdrop-blur-sm sm:right-7 sm:top-7">
                <span className="text-[9px] uppercase tracking-[0.28em] text-cream/80">{t.location}</span>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-3 sm:bottom-8 sm:left-8">
                <span className="h-px w-10 bg-caramel" />
                <span className="text-[9px] uppercase tracking-[0.3em] text-cream/85">{t.brand}</span>
              </div>
            </div>

            {/* Small cinematic caption */}
            <div className="mt-5 flex items-center justify-between border-t border-roasted-coffee/20 pt-4">
              <span className="text-[9px] uppercase tracking-[0.3em] text-coffee">
                {t.brand}
              </span>

              <span className="text-[9px] uppercase tracking-[0.3em] text-coffee/60">
                {t.location}
              </span>
            </div>

            {/* Decorative frame */}
            <div className="pointer-events-none absolute -bottom-5 -left-5 h-24 w-24 border-b border-l border-caramel/60" />

            <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 border-r border-t border-caramel/60" />
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