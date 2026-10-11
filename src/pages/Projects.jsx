import { useTranslation } from 'react-i18next'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { projects } from '../data/projects'

const visible = import.meta.env.PROD
  ? projects.filter((p) => !p.example)
  : projects

const linkClass =
  'inline-flex items-center gap-2 border-b border-dotted border-accent text-accent hover:text-text'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-16 sm:pt-24">
      <h1 className="mb-10 text-4xl font-bold">{t('projects.title')}</h1>

      {visible.length === 0 ? (
        <p className="text-lg text-subtext">{t('projects.empty')}</p>
      ) : (
        <ul className="space-y-14">
          {visible.map((p) => (
            <li key={p.id}>
              <h2 className="text-2xl font-medium">
                {t(`projects.items.${p.id}.name`)}
              </h2>
              <p className="mt-2 text-lg leading-relaxed text-subtext">
                {t(`projects.items.${p.id}.description`)}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface px-3 py-1 font-mono text-sm text-teal"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-6 text-base">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <FaGithub aria-hidden="true" /> {t('projects.source')}
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <FaArrowUpRightFromSquare aria-hidden="true" /> {t('projects.demo')}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}