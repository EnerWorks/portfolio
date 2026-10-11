import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const pages = [
  { to: '/', name: 'about' },
  { to: '/projects', name: 'projects' },
  { to: '/learning', name: 'learning' },
  { to: '/contact', name: 'contact' },
]

export default function Footer() {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const index = Math.max(0, pages.findIndex((p) => p.to === pathname))

  return (
    <footer className="border-t border-surface bg-mantle">
      <div className="mx-auto flex max-w-3xl items-stretch justify-between px-4 font-mono text-xs sm:text-sm">
        <span className="bg-accent px-3 py-2 font-medium text-on-accent">
          ~/{pages[index].name}
        </span>
        <span className="px-3 py-2 text-subtext">
          {index + 1}/{pages.length}
        </span>
      </div>

      <p className="px-4 pb-4 pt-2 text-center text-xs text-subtext sm:text-sm">
        © {new Date().getFullYear()} EnerWorks. {t('footer.rights')}
      </p>
    </footer>
  )
}