import { useTranslation } from 'react-i18next'
import { FaGlobe, FaChevronDown } from 'react-icons/fa6'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <label className="relative inline-flex items-center">
      <FaGlobe
        aria-hidden="true"
        className="pointer-events-none absolute left-3 text-subtext"
      />
      <select
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        aria-label="Language"
        className="appearance-none rounded-full bg-surface py-1.5 pl-9 pr-9 text-sm text-text hover:bg-surface/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:py-2 sm:text-[1rem]"
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code} className="bg-base">
            {label}
          </option>
        ))}
      </select>
      <FaChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 text-xs text-subtext"
      />
    </label>
  )
}