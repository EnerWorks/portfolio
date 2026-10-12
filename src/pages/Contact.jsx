import { useTranslation } from 'react-i18next'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa6'

const EMAIL = 'ennerq@proton.me'
const LINKEDIN = 'https://www.linkedin.com/in/yousefchazli'

const linkClass =
  'inline-flex items-center gap-2 border-b border-dotted border-accent text-accent hover:text-text'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-16 sm:pt-24">
      <h1 className="mb-6 text-4xl font-bold">{t('contact.title')}</h1>
      <p className="text-lg leading-relaxed text-subtext sm:text-xl">
        {t('contact.text')}
      </p>
      <div className="mt-8 flex flex-wrap gap-8 text-lg">
        <a href={`mailto:${EMAIL}`} className={linkClass}>
          <FaEnvelope aria-hidden="true" /> {t('contact.email')}
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaLinkedin aria-hidden="true" /> LinkedIn
        </a>
      </div>
    </section>
  )
}