import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaBoxOpen } from 'react-icons/fa6'

export default function About() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-20 sm:pt-28">
      <h1 className="text-4xl font-bold">{t('hero.title')}</h1>
      <p className="mt-3 text-xl text-subtext">{t('hero.subtitle')}</p>
      <p className="mt-8 text-lg leading-relaxed sm:text-xl">{t('about.text')}</p>
      <p className="mt-6 text-lg sm:text-xl">
        <FaBoxOpen aria-hidden="true" className="mr-2 inline text-accent" />
        {t('about.lookingFor')}{' '}
        <Link
          to="/projects"
          className="border-b border-dotted border-accent font-medium text-accent hover:text-text"
        >
          {t('about.checkOut')}
        </Link>
      </p>
    </section>
  )
}