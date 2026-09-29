
import { motion } from 'framer-motion'
import { useLanguage } from './data/LanguageContext.jsx'
import { translations } from './data/translation.js'

import cafe1 from './assets/cafe-1.png'
import cafe2 from './assets/cafe-2.png'
import cafe3 from './assets/cafe-4.png'
import cafe4 from './assets/cafe-3.png'

function Experience() {
  const { language } = useLanguage()
  const t = translations[language].experience

  return (
    <section
      id="experience"
      className="overflow-hidden bg-cream py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-caramel" />

          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-coffee">
            {t.scene}
          </span>
        </motion.div>

        {/* Editorial layout */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden"
          >
            <img
              src={cafe1}
              alt="Tarantino Ciné Café interior"
              className="h-[580px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] lg:h-[720px]"
            />

            <div className="absolute left-6 top-6">
              <span className="bg-espresso/80 px-3 py-2 text-[9px] uppercase tracking-[0.25em] text-cream backdrop-blur-sm">
                {t.atmosphere}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className="h-px w-8 bg-caramel" />

              <span className="text-[9px] uppercase tracking-[0.3em] text-cream/80">
                01
              </span>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-8">

            {/* Text block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex min-h-[580px] flex-col justify-center bg-espresso p-8 text-cream sm:p-10 lg:min-h-[720px] lg:p-12"
            >
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-caramel">
                {t.label}
              </p>

              <h2 className="font-display text-4xl leading-[0.95] sm:text-5xl">
                {t.title}
                <br />
                <span className="text-caramel">{t.titleAccent}</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-cream/60">
                {t.description}
              </p>

              <div className="mt-8 grid grid-cols-3 border-t border-cream/10 pt-6">
                <div>
                  <p className="font-display text-xl text-cream">01</p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-cream/40">
                    {t.coffee}
                  </p>
                </div>

                <div>
                  <p className="font-display text-xl text-cream">02</p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-cream/40">
                    {t.food}
                  </p>
                </div>

                <div>
                  <p className="font-display text-xl text-cream">03</p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-cream/40">
                    {t.moments}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom image row */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {[
            { image: cafe2, number: '02' },
            { image: cafe3, number: '03' },
            { image: cafe4, number: '04' },
          ].map(
            ({ image, number }, index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden"
              >
                <img
                  src={image}
                  alt="Tarantino Ciné Café interior"
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-[420px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 flex items-center gap-4">
                  <span className="h-px w-10 bg-caramel" />

                  <span className="text-[9px] uppercase tracking-[0.3em] text-cream">
                    {t.atmosphere}
                  </span>
                </div>

                <div className="absolute bottom-7 right-7">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-cream/70">
                    {number}
                  </span>
                </div>
              </motion.div>
            ),
          )}
        </div>

      </div>
    </section>
  )
}

export default Experience