import { useTranslation } from 'react-i18next'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { projects } from '../data/projects'

const visible = import.meta.env.PROD
  ? projects.filter((p) => !p.example)
  : projects

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="mx-auto max-w-2xl px-4 py-12">
      <h2 className="mb-6 text-2xl font-medium">{t('projects.title')}</h2>

      {visible.length === 0 ? (
        <p className="text-subtext">{t('projects.empty')}</p>
      ) : (
        <ul className="space-y-10">
          {visible.map((p) => (
            <li key={p.id}>
              <h3 className="text-lg font-medium">
                {t(`projects.items.${p.id}.name`)}
              </h3>
              <p className="mt-1 text-subtext">
                {t(`projects.items.${p.id}.description`)}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-surface px-3 py-1 font-mono text-xs text-teal"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex gap-5 text-sm">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:underline"
                  >
                    <FaGithub aria-hidden="true" /> {t('projects.source')}
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:underline"
                  >
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