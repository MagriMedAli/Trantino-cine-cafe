import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from './data/LanguageContext.jsx'
import { translations } from './data/translation.js'
import { menuSections, menuItems } from './data/menu.js'

function Menu() {
  const { language } = useLanguage()
  const t = translations[language].menu

  const [activeSection, setActiveSection] = useState(menuSections[0].id)
  const [activeCategory, setActiveCategory] = useState(
    menuSections[0].subcategories[0].id
  )

  const currentSection = menuSections.find(
    (section) => section.id === activeSection
  )

  const visibleItems = menuItems.filter(
    (item) => item.category === activeCategory
  )

  const handleSectionChange = (section) => {
    setActiveSection(section.id)
    setActiveCategory(section.subcategories[0].id)
  }

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-espresso py-28 text-cream lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-caramel" />

            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-caramel">
              {t.scene} · {t.label}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-8xl"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-7 max-w-xl text-sm leading-8 text-cream/60 sm:text-base"
          >
            {t.description}
          </motion.p>
        </div>

        {/* Main sections */}
        <div className="mt-20">

          <p className="mb-6 text-[9px] uppercase tracking-[0.3em] text-cream/40">
            {t.choose}
          </p>

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-cream/10 bg-cream/10 md:grid-cols-3">
            {menuSections.map((section, index) => {
              const isActive = section.id === activeSection

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleSectionChange(section)}
                  className={`group relative min-h-28 overflow-hidden px-5 py-6 text-left transition-all duration-500 sm:min-h-32 sm:px-7 ${
                    isActive
                      ? 'bg-cream text-espresso'
                      : 'bg-espresso text-cream hover:bg-dark-coffee'
                  }`}
                >
                  <span
                    className={`text-[9px] tracking-[0.25em] ${
                      isActive ? 'text-coffee' : 'text-caramel'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="mt-3 block font-display text-xl leading-tight sm:text-2xl">
                    {section.name[language]}
                  </span>

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-caramel transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Subcategories */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
            {currentSection.subcategories.map((category) => {
              const isActive = category.id === activeCategory

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`shrink-0 border px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] transition-all duration-300 ${
                    isActive
                      ? 'border-caramel bg-caramel text-espresso'
                      : 'border-cream/15 text-cream/60 hover:border-caramel/60 hover:text-caramel'
                  }`}
                >
                  {category.name[language]}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Items */}
        <div className="mt-12">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-x-12 md:grid-cols-2"
            >
              {visibleItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.035,
                    duration: 0.45,
                  }}
                  className="group border-b border-cream/10 py-7"
                >
                  <div className="flex items-start justify-between gap-6">

                    <div className="min-w-0">
                      <h3 className="font-display text-xl text-cream transition-colors duration-300 group-hover:text-caramel sm:text-2xl">
                        {item.name}
                      </h3>

                      {item.description && (
                        <p className="mt-2 max-w-md text-xs leading-6 text-cream/45">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="font-display text-xl text-caramel sm:text-2xl">
                        {item.price.toFixed(1)}
                      </span>

                      <span className="ml-1 text-[9px] uppercase tracking-[0.15em] text-cream/40">
                        {t.price}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 h-px w-0 bg-caramel transition-all duration-500 group-hover:w-12" />
                </motion.article>
              ))}

              {visibleItems.length === 0 && (
                <div className="py-16 text-sm text-cream/40">
                  {t.empty}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Bottom marker */}
        <div className="mt-20 flex items-center gap-4">
          <span className="h-px w-12 bg-caramel/50" />

          <span className="text-[9px] uppercase tracking-[0.3em] text-cream/30">
            {t.scene} · {t.end}
          </span>
        </div>

      </div>
    </section>
  )
}

export default Menu