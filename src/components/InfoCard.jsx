import { useTranslation } from 'react-i18next'

const swatches = ['bg-accent', 'bg-teal', 'bg-subtext', 'bg-text', 'bg-surface']

export default function InfoCard() {
  const { t } = useTranslation()
  const rows = t('about.card.rows', { returnObjects: true })
  if (!Array.isArray(rows)) return null

  return (
    <div className="rounded-xl border border-surface bg-surface/40 p-5 font-mono text-sm text-text sm:text-[1rem]">
      <p className="font-medium text-accent">{t('about.card.title')}</p>
      <hr className="my-3 border-dashed border-subtext/40" />

      <dl className="grid grid-cols-[7.5rem_1fr] gap-x-4 gap-y-1.5 sm:grid-cols-[9rem_1fr]">
        {rows.map(({ label, value }) => (
          <div key={label} className="contents">
            <dt className="text-teal">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 flex gap-1.5" aria-hidden="true">
        {swatches.map((color) => (
          <span key={color} className={`h-4 w-8 rounded-sm ${color}`} />
        ))}
      </div>
    </div>
  )
}