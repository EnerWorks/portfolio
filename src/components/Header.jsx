import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaCircleUser, FaBoxOpen, FaBookOpen, FaEnvelope } from 'react-icons/fa6'
import LanguageSwitcher from './LanguageSwitcher'

const links = [
  { to: '/', key: 'about', Icon: FaCircleUser },
  { to: '/projects', key: 'projects', Icon: FaBoxOpen },
  { to: '/learning', key: 'learning', Icon: FaBookOpen },
  { to: '/contact', key: 'contact', Icon: FaEnvelope },
]

export default function Header() {
  const { t } = useTranslation()
  return (
    <header className="sticky top-0 z-10 bg-base/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-3 sm:py-4">
        <nav className="flex flex-wrap gap-2">
          {links.map(({ to, key, Icon }) => (
            <NavLink
              key={key}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-sm transition-colors sm:px-4 sm:py-2 sm:text-[1rem] ${
                  isActive
                    ? 'bg-accent font-medium text-on-accent'
                    : 'bg-surface text-text hover:bg-surface/70'
                }`
              }
            >
              <Icon aria-hidden="true" className="hidden sm:inline" />
              {t(`nav.${key}`)}
            </NavLink>
          ))}
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  )
}