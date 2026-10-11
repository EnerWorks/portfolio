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
        className="pointer-events-none absolute left-3 text-neutral-400"
      />
      <select
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        aria-label="Language"
        className="appearance-none rounded-full bg-neutral-800 py-1.5 pl-9 pr-9 text-sm text-neutral-200 hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code} className="bg-neutral-900">
            {label}
          </option>
        ))}
      </select>
      <FaChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 text-xs text-neutral-400"
      />
    </label>
  )
}