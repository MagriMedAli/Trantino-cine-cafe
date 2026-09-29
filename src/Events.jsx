import { motion } from 'framer-motion'
import { useLanguage } from './data/LanguageContext.jsx'
import { translations } from './data/translation.js'
import { events } from './data/event.js'
import karaokeImage from './assets/karoke.png'

function Events() {
  const { language } = useLanguage()
  const t = translations[language].events

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-forest py-28 text-cream lg:py-40"
    >
      <img
        src={karaokeImage}
        alt="Karaoke night at Tarantino Ciné Café"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-caramel" />

            <span className="text-[10px] uppercase tracking-[0.35em] text-caramel">
              {t.scene}
            </span>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-cream/40">
            {t.label}
          </p>

          <h2 className="mt-5 font-display text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
            {t.title}
            <br />
            <span className="text-caramel">{t.titleAccent}</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-8 text-cream/60 sm:text-base">
            {t.description}
          </p>
        </motion.div>

        {/* Event */}
        <div className="mt-20">
          {events.map((event) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden border border-cream/10 bg-espresso"
            >
              {/* Ticket perforation line */}
              <div className="absolute left-0 right-0 top-[190px] border-t border-dashed border-cream/10" />

              <div className="grid lg:grid-cols-[260px_1fr]">

                {/* Event date */}
                <div className="relative flex min-h-[250px] flex-col justify-center border-r border-cream/10 p-8 sm:p-10 lg:min-h-[380px]">

                  <span className="text-[9px] uppercase tracking-[0.3em] text-caramel">
                    {event.date.month[language]}
                  </span>

                  <span className="mt-2 font-display text-7xl leading-none text-cream sm:text-8xl">
                    {event.date.day[language]}
                  </span>

                  <span className="mt-4 text-[10px] uppercase tracking-[0.3em] text-cream/40">
                    {t.recurring}
                  </span>

                  {/* Ticket circles */}
                  <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-forest" />
                  <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-forest" />
                </div>

                {/* Event content */}
                <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">

                  <div>
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-caramel">
                        {t.recurring}
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.3em] text-cream/25">
                        {t.take}
                      </span>
                    </div>

                    <h3 className="mt-6 max-w-2xl font-display text-5xl leading-[0.95] text-cream sm:text-6xl lg:text-7xl">
                      {event.title[language]}
                    </h3>

                    <p className="mt-7 max-w-xl text-sm leading-8 text-cream/55 sm:text-base">
                      {event.description[language]}
                    </p>
                  </div>

                  {/* Bottom row */}
                  <div className="mt-12 flex flex-col gap-6 border-t border-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex items-center gap-4">
                      <span className="h-px w-10 bg-caramel" />

                      <span className="text-[9px] uppercase tracking-[0.3em] text-cream/40">
                        {t.brandLine}
                      </span>
                    </div>

                    <a
                      href="#reservation"
                      className="inline-flex items-center justify-center gap-4 bg-caramel px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso transition-all duration-300 hover:-translate-y-1 hover:bg-amber"
                    >
                      {event.cta[language]}

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>

                  </div>
                </div>
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-caramel transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Events