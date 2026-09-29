import { useEffect, useState } from 'react'

function PageProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
      setProgress(Math.min(1, Math.max(0, nextProgress)))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px bg-cream/10"
    >
      <div
        className="h-full origin-left bg-caramel transition-transform duration-300"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}

export default PageProgress
