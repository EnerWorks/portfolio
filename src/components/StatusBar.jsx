import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const pages = [
  { to: '/', name: 'about' },
  { to: '/projects', name: 'projects' },
  { to: '/learning', name: 'learning' },
  { to: '/contact', name: 'contact' },
]

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
]

export default function StatusBar() {
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  const index = Math.max(0, pages.findIndex((p) => p.to === pathname))

  return (
    <div className="fixed inset-x-0 bottom-0 z-20 flex items-stretch justify-between border-t border-surface bg-mantle font-mono text-xs sm:text-sm">
      <div className="flex items-stretch">
        <span className="hidden bg-accent px-3 py-1.5 font-medium text-on-accent sm:block">
          ener@portfolio
        </span>
        <span className="px-3 py-1.5 text-text">~/{pages[index].name}</span>
      </div>

      <div className="flex items-stretch">
        <span className="hidden px-3 py-1.5 text-subtext sm:block">
          {index + 1}/{pages.length}
        </span>
        <div className="flex" role="group" aria-label="Language">
          {languages.map(({ code, name }) => {
            const active = i18n.resolvedLanguage === code
            return (
              <button
                key={code}
                type="button"
                lang={code}
                aria-label={name}
                aria-pressed={active}
                onClick={() => i18n.changeLanguage(code)}
                className={`px-3 py-1.5 uppercase transition-colors ${
                  active ? 'bg-surface text-teal' : 'text-subtext hover:text-text'
                }`}
              >
                {code}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}