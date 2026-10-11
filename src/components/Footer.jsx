import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="mx-auto max-w-3xl px-4 py-10 text-center text-sm text-subtext">
      © {new Date().getFullYear()} EnerWorks. {t('footer.rights')}
    </footer>
  )
}