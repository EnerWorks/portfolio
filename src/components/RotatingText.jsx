import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const INTERVAL = 5000

export default function RotatingText({ i18nKey, className = '' }) {
  const { t } = useTranslation()
  const raw = t(i18nKey, { returnObjects: true })
  const lines = Array.isArray(raw) ? raw : []
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (lines.length < 2 || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(
      () => setIndex((i) => (i + 1) % lines.length),
      INTERVAL,
    )
    return () => clearInterval(id)
  }, [lines.length, paused, index])

  return (
    <div
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid">
        {lines.map((line, i) => (
          <p
            key={i}
            aria-hidden={i !== index}
            className={`col-start-1 row-start-1 transition-all duration-700 ease-out motion-reduce:transition-none ${
              i === index
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-2 opacity-0'
            }`}
          >
            {line}
          </p>
        ))}
      </div>

      {lines.length > 1 && (
        <div className="mt-4 flex gap-2">
          {lines.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${i + 1} / ${lines.length}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-accent' : 'w-1.5 bg-surface hover:bg-subtext'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}