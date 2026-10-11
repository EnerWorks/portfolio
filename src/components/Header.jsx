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
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-4">
        <nav className="flex gap-2 overflow-x-auto">
          {links.map(({ to, key, Icon }) => (
            <NavLink
              key={key}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-base transition-colors ${
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