import { useTranslation } from 'react-i18next'
import { FaGithub, FaEnvelope } from 'react-icons/fa6'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold">{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>

      <div className="mt-4 flex gap-4 text-2xl">
        <a
          href="https://github.com/EnerWorks"
          aria-label="GitHub"
          className="hover:text-cyan-400"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:enerworks@proton.me"
          aria-label="Email"
          className="hover:text-cyan-400"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  )
}