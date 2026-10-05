import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { supabase } from './lib/supabase.js'
import { useLanguage } from './data/LanguageContext.jsx'
import { translations } from './data/translation.js'
import reservedImage from './assets/reserved.png'

function Reservation() {
  const { language } = useLanguage()
  const t = translations[language].reservation
  const reducedMotion = useReducedMotion()

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const formData = new FormData(form)
    const people = formData.get('people')
    const guests = people === '8+' ? 8 : Number(people)

    if (!Number.isFinite(guests) || guests <= 0) {
      setError(t.invalidGuests)
      return
    }

    setLoading(true)

    try {
      const { error: insertError } = await supabase.from('reservations').insert({
        name: formData.get('name'),
        phone: formData.get('phone'),
        reservation_date: formData.get('date'),
        reservation_time: formData.get('time'),
        guests,
        message: formData.get('message'),
        source: 'website',
      })

      if (insertError) {
        console.error('Reservation insert failed:', insertError)
        setError(t.error)
        return
      }

      setSubmitted(true)
    } catch (requestError) {
      console.error('Reservation request failed:', requestError)
      setError(t.error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="reservation"
      className="overflow-hidden bg-espresso py-20 text-cream sm:py-28 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)] lg:items-start lg:gap-16 lg:px-10 xl:gap-24">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate min-h-[430px] overflow-hidden rounded-sm sm:min-h-[560px] lg:min-h-[720px]"
        >
          <motion.img
            src={reservedImage}
            alt=""
            aria-hidden="true"
            initial={
              reducedMotion
                ? false
                : { clipPath: 'inset(0 100% 0 0)', scale: 1.04 }
            }
            animate={
              reducedMotion
                ? undefined
                : { clipPath: 'inset(0 0% 0 0)', scale: 1 }
            }
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-espresso/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/10 to-transparent" />

          <div className="absolute inset-x-6 bottom-7 sm:inset-x-10 sm:bottom-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-caramel" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-caramel">
                {t.scene}
              </span>
            </div>
            <p className="mt-4 font-display text-4xl leading-none text-cream sm:text-5xl">
              {t.title}
            </p>
          </div>
        </motion.div>

        <div className="pt-1 lg:pt-8">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: reducedMotion ? 0 : 0.15,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-14 border-y border-cream/10 py-8 sm:p-10 lg:mt-16 lg:px-8 lg:py-10"
          >
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="grid gap-8 md:grid-cols-2"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-cream/40"
                >
                  {t.name}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border-b border-cream/15 bg-transparent px-0 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/20 focus:border-caramel"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-cream/40"
                >
                  {t.phone}
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full border-b border-cream/15 bg-transparent px-0 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/20 focus:border-caramel"
                />
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="date"
                  className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-cream/40"
                >
                  {t.date}
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="w-full border-b border-cream/15 bg-transparent px-0 py-3 text-sm text-cream outline-none transition-colors focus:border-caramel"
                />
              </div>

              {/* Time */}
              <div>
                <label
                  htmlFor="time"
                  className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-cream/40"
                >
                  {t.time}
                </label>

                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  className="w-full border-b border-cream/15 bg-transparent px-0 py-3 text-sm text-cream outline-none transition-colors focus:border-caramel"
                />
              </div>

              {/* Number of people */}
              <div>
                <label
                  htmlFor="people"
                  className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-cream/40"
                >
                  {t.people}
                </label>

                <select
                  id="people"
                  name="people"
                  defaultValue="2"
                  className="w-full border-b border-cream/15 bg-transparent px-0 py-3 text-sm text-cream outline-none transition-colors focus:border-caramel"
                >
                  <option value="1" className="bg-espresso">
                    1
                  </option>
                  <option value="2" className="bg-espresso">
                    2
                  </option>
                  <option value="3" className="bg-espresso">
                    3
                  </option>
                  <option value="4" className="bg-espresso">
                    4
                  </option>
                  <option value="5" className="bg-espresso">
                    5
                  </option>
                  <option value="6" className="bg-espresso">
                    6
                  </option>
                  <option value="7" className="bg-espresso">
                    7
                  </option>
                  <option value="8" className="bg-espresso">
                    8+
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-[9px] uppercase tracking-[0.25em] text-cream/40"
                >
                  {t.message}
                </label>

                <input
                  id="message"
                  name="message"
                  type="text"
                  placeholder={t.messagePlaceholder}
                  className="w-full border-b border-cream/15 bg-transparent px-0 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/20 focus:border-caramel"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex flex-col gap-5 border-t border-cream/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-[10px] leading-5 text-cream/35">
                  {t.note}
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex shrink-0 items-center justify-center gap-4 bg-caramel px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-espresso transition-all duration-300 hover:-translate-y-1 hover:bg-amber"
                >
                  {loading ? t.loading : t.submit}

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

              {error && (
                <p role="alert" className="text-xs text-red-300 md:col-span-2">
                  {error}
                </p>
              )}
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex min-h-[350px] flex-col items-center justify-center text-center"
            >
              <span className="font-display text-6xl text-caramel">
                ✓
              </span>

              <h3 className="mt-6 font-display text-3xl text-cream">
                {t.successTitle}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-cream/50">
                {t.successDescription}
              </p>
            </motion.div>
          )}
        </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Reservation