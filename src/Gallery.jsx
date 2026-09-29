import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { useLanguage } from './data/LanguageContext.jsx'
import { translations } from './data/translation.js'

import heroImage from './assets/hero.png'
import cafe1 from './assets/cafe-1.png'
import cafe2 from './assets/cafe-3.png'
import cafe3 from './assets/cafe-4.png'

const galleryImages = [
  {
    src: heroImage,
    label: '01',
  },
  {
    src: cafe1,
    label: '02',
  },
  {
    src: cafe2,
    label: '03',
  },
  {
    src: cafe3,
    label: '04',
  },
]

function Gallery() {
  const { language } = useLanguage()
  const t = translations[language].gallery

  const [selectedImage, setSelectedImage] = useState(null)
  const selectedIndex = selectedImage
    ? galleryImages.findIndex((image) => image.label === selectedImage.label)
    : -1

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      } else if (event.key === 'ArrowLeft' && selectedIndex > 0) {
        setSelectedImage(galleryImages[selectedIndex - 1])
      } else if (
        event.key === 'ArrowRight' &&
        selectedIndex >= 0 &&
        selectedIndex < galleryImages.length - 1
      ) {
        setSelectedImage(galleryImages[selectedIndex + 1])
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedIndex])

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  return (
    <section
      id="gallery"
      className="bg-ivory py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-caramel" />

            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-coffee">
              {t.scene}
            </span>
          </div>

          <h2 className="font-display text-5xl leading-[0.95] text-espresso sm:text-6xl lg:text-8xl">
            {t.title}
            <br />
            <span className="text-coffee">{t.titleAccent}</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-8 text-dark-coffee/60 sm:text-base">
            {t.description}
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid gap-5 md:grid-cols-12">

          {/* Large image */}
          <motion.button
            type="button"
            onClick={() => setSelectedImage(galleryImages[0])}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="group relative overflow-hidden text-left md:col-span-7"
          >
            <img
              src={galleryImages[0].src}
              alt="Tarantino Ciné Café"
              className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] lg:h-[680px]"
            />

            <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/30" />

            <div className="absolute left-6 top-6">
              <span className="bg-espresso/75 px-3 py-2 text-[9px] uppercase tracking-[0.25em] text-cream backdrop-blur-sm">
                {galleryImages[0].label}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[9px] uppercase tracking-[0.3em] text-cream">
                {t.view}
              </span>
            </div>
          </motion.button>

          {/* Right side */}
          <div className="grid gap-5 md:col-span-5">

            {galleryImages.slice(1, 3).map((image, index) => (
              <motion.button
                key={image.label}
                type="button"
                onClick={() => setSelectedImage(image)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden text-left"
              >
                <img
                  src={image.src}
                  alt="Tarantino Ciné Café"
                  className="h-[250px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] lg:h-[330px]"
                />

                <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/30" />

                <div className="absolute left-5 top-5">
                  <span className="bg-espresso/75 px-3 py-2 text-[9px] uppercase tracking-[0.25em] text-cream backdrop-blur-sm">
                    {image.label}
                  </span>
                </div>
              </motion.button>
            ))}

          </div>

          {/* Bottom wide image */}
          <motion.button
            type="button"
            onClick={() => setSelectedImage(galleryImages[3])}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="group relative overflow-hidden md:col-span-12"
          >
            <img
              src={galleryImages[3].src}
              alt="Tarantino Ciné Café"
              className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[440px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <span className="text-[9px] uppercase tracking-[0.3em] text-cream">
                {galleryImages[3].label}
              </span>
            </div>
          </motion.button>

        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.view}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/95 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative max-h-[90vh] max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt="Tarantino Ciné Café"
                className="max-h-[78vh] w-auto max-w-full object-contain"
              />

              <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedImage(galleryImages[selectedIndex - 1])}
                  disabled={selectedIndex <= 0}
                  aria-label={t.previous}
                  className="pointer-events-auto flex h-11 w-11 items-center justify-center border border-cream/20 bg-espresso/60 text-xl text-cream transition-colors hover:border-caramel hover:text-caramel disabled:cursor-not-allowed disabled:opacity-20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedImage(galleryImages[selectedIndex + 1])}
                  disabled={selectedIndex >= galleryImages.length - 1}
                  aria-label={t.next}
                  className="pointer-events-auto flex h-11 w-11 items-center justify-center border border-cream/20 bg-espresso/60 text-xl text-cream transition-colors hover:border-caramel hover:text-caramel disabled:cursor-not-allowed disabled:opacity-20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel"
                >
                  →
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.3em] text-cream/50">
                  {selectedImage.label} {t.imageOf} {galleryImages.length}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="text-[9px] uppercase tracking-[0.3em] text-cream transition-colors hover:text-caramel focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel"
                >
                  {t.close} ×
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery