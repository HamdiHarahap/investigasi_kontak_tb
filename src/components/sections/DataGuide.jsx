import { useState } from 'react'
import Container from '../ui/Container'
import { dataGuide } from '../../data/data'

export default function DataGuide() {
  const [activeId, setActiveId] = useState(dataGuide.tables[0].id)
  const active = dataGuide.tables.find((table) => table.id === activeId) || dataGuide.tables[0]

  return (
    <section id="penginputan" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            {dataGuide.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {dataGuide.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{dataGuide.description}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" data-aos="fade-up">
          {dataGuide.tables.map((table) => {
            const isActive = table.id === active.id
            return (
              <button
                key={table.id}
                type="button"
                onClick={() => setActiveId(table.id)}
                className={[
                  'rounded-md border px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'border-brand-600 bg-brand-700 text-white'
                    : 'border-line bg-surface text-ink hover:border-brand-300',
                ].join(' ')}
                aria-pressed={isActive}
              >
                {table.title.replace(/^[A-D]\.\s*/, '')}
              </button>
            )
          })}
        </div>

        <div
          key={active.id}
          className="mt-8 animate-[rise-in_0.35s_ease-out]"
          data-aos="fade-up"
        >
          <h3 className="font-display text-xl font-semibold text-ink">{active.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{active.intro}</p>

          <div className="mt-6 overflow-x-auto border border-line">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-brand-700 text-white">
                <tr>
                  {active.headers.map((header) => (
                    <th key={header} className="px-4 py-3 font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {active.rows.map((row) => (
                  <tr key={row[0]} className="border-t border-line odd:bg-white even:bg-surface">
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`} className="px-4 py-3 align-top text-muted">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-14" data-aos="fade-up">
          <h3 className="font-display text-xl font-semibold text-ink">
            {dataGuide.statuses.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {dataGuide.statuses.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {dataGuide.statuses.items.map((status) => (
              <span
                key={status}
                className="border border-line bg-surface px-3 py-1.5 text-sm text-ink"
              >
                {status}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">{dataGuide.statuses.note}</p>
        </div>
      </Container>
    </section>
  )
}
