import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaBoxOpen, FaGithub } from 'react-icons/fa6'
import RotatingText from '../components/RotatingText'
import InfoCard from '../components/InfoCard'

const GITHUB = 'https://github.com/EnerWorks'

const linkClass =
  'inline-flex items-center gap-2 border-b border-dotted border-accent text-accent hover:text-text'

export default function About() {
  const { t, i18n } = useTranslation()
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-20 sm:pt-28">
      <div className="font-mono">
       <p className="text-sm text-subtext sm:text-[1rem]" aria-hidden="true">
          <span className="text-teal">~</span>{' '}
          <span className="text-accent">$</span> ./hello.sh
        </p>
        <h1 className="mt-3 break-words text-3xl font-bold sm:text-4xl">
          {t('hero.title')}
          <span className="cursor" aria-hidden="true" />
        </h1>
        <p className="mt-2 text-lg text-subtext sm:text-xl">
          {t('hero.subtitle')}
        </p>
      </div>

      <RotatingText
        key={i18n.resolvedLanguage}
        i18nKey="about.lines"
        className="mt-10 text-lg leading-relaxed sm:text-xl"
      />

      <div className="mt-10">
        <InfoCard />
      </div>

      <p className="mt-8 text-lg sm:text-xl">
        <FaBoxOpen aria-hidden="true" className="mr-2 inline text-accent" />
        {t('about.lookingFor')}{' '}
        <Link to="/projects" className={`font-medium ${linkClass}`}>
          {t('about.checkOut')}
        </Link>
      </p>

      <hr className="my-12 border-surface" />

      <h2 className="text-xl font-medium">{t('about.elsewhere')}</h2>
      <div className="mt-4 text-lg">
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaGithub aria-hidden="true" /> GitHub
        </a>
      </div>
    </section>
  )
}