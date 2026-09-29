import { motion } from 'framer-motion'
import heroImage from './assets/hero.png'
import { useLanguage } from './data/LanguageContext.jsx'
import { translations } from './data/translation.js'

function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-espresso"
    >
      {/* Background image */}
      <motion.img
        src={heroImage}
        alt="Interior of Tarantino Ciné Café"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-espresso/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/35 to-espresso/20" />

      {/* Subtle grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%221%22/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Film frame label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute right-8 top-32 hidden text-right md:block"
      >
        <p className="text-[10px] tracking-[0.35em] text-cream/70">
          {t.frame}
        </p>

        <p className="mt-1 text-[10px] tracking-[0.25em] text-caramel">
          {t.location}
        </p>
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">
        <div className={language === 'fr' ? 'max-w-5xl' : 'max-w-4xl'}>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-caramel md:text-sm"
          >
            {t.label}
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`font-display leading-[0.95] text-cream ${
              language === 'fr'
                ? 'max-w-5xl text-4xl sm:text-6xl lg:text-8xl xl:text-8xl'
                : 'max-w-4xl text-6xl sm:text-7xl lg:text-8xl xl:text-9xl'
            }`}
          >
            {language === 'fr' ? (
              <>
                <span className="whitespace-nowrap">{t.title}</span>
                <br />
                <span className="text-caramel">
                  {t.titleLine2}
                  <br />
                  {t.titleLine3}
                </span>
              </>
            ) : (
              <>
                {t.title}
                <br />
                <span className="text-caramel">{t.titleAccent}</span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-xl text-sm leading-7 text-cream/80 sm:text-base"
          >
            {t.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 bg-caramel px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-all duration-300 hover:-translate-y-1 hover:bg-amber"
            >
              {t.menu}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#reservation"
              className="inline-flex items-center border border-cream/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:-translate-y-1 hover:border-caramel hover:text-caramel"
            >
              {t.reserve}
            </a>
          </motion.div>

        </div>
      </div>

      {/* Bottom cinematic marker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-cream/50 lg:left-10"
      >
        <span className="h-px w-10 bg-caramel/70" />
        {t.scene}
      </motion.div>
    </section>
  )
}

export default Hero