import { useTranslation } from 'react-i18next'
import { learning } from '../data/learning'

const statusStyle = {
  done: 'bg-teal/15 text-teal',
  learning: 'bg-accent/15 text-accent',
  planned: 'bg-surface text-subtext',
}

export default function Learning() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-16 sm:pt-24">
      <h1 className="text-4xl font-bold">{t('learning.title')}</h1>
      <p className="mt-3 text-lg text-subtext sm:text-xl">{t('learning.intro')}</p>

      <ul className="mt-10 border-t border-surface">
        {learning.map(({ id, status }) => (
          <li
            key={id}
            className="flex items-start justify-between gap-4 border-b border-surface py-5"
          >
            <div>
              <h2 className="font-mono text-lg font-medium">
                {t(`learning.items.${id}.name`)}
              </h2>
              <p className="mt-1 text-subtext">
                {t(`learning.items.${id}.note`)}
              </p>
            </div>
            <span
              className={`whitespace-nowrap rounded-full px-3 py-1 font-mono text-sm ${statusStyle[status]}`}
            >
              {t(`learning.status.${status}`)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}