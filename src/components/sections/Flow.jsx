import { useState } from 'react'
import Container from '../ui/Container'
import { flowSteps } from '../../data/data'

export default function Flow() {
  const [activeId, setActiveId] = useState(flowSteps[0].id)
  const active = flowSteps.find((step) => step.id === activeId) || flowSteps[0]

  return (
    <section id="alur" className="border-y border-line bg-surface py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            Panduan Praktis
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Alur Investigasi Kontak TB
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Klik setiap tahapan untuk membaca penjelasan lebih lengkap. Tujuh tahap ini
            menjadi panduan utama bagi petugas lapangan dan kader.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[18rem_1fr] lg:gap-10">
          <div className="space-y-2" data-aos="fade-right">
            {flowSteps.map((step) => {
              const isActive = step.id === active.id
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveId(step.id)}
                  className={[
                    'flex w-full items-start gap-3 rounded-md border px-4 py-3 text-left transition-colors',
                    isActive
                      ? 'border-brand-500 bg-brand-700 text-white'
                      : 'border-line bg-white text-ink hover:border-brand-300 hover:bg-brand-50',
                  ].join(' ')}
                  aria-pressed={isActive}
                >
                  <span
                    className={[
                      'font-display text-sm font-semibold',
                      isActive ? 'text-brand-100' : 'text-brand-700',
                    ].join(' ')}
                  >
                    {step.number}
                  </span>
                  <span className="text-sm font-medium leading-snug">{step.title}</span>
                </button>
              )
            })}
          </div>

          <article
            key={active.id}
            className="animate-[rise-in_0.35s_ease-out] border border-line bg-white p-6 sm:p-8"
            data-aos="fade-left"
          >
            <p className="text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
              Tahap {active.number}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{active.title}</h3>
            <p className="mt-2 text-sm text-muted">{active.summary}</p>
            <p className="mt-5 text-base leading-relaxed text-muted">{active.content}</p>

            <h4 className="mt-7 font-display text-base font-semibold text-ink">
              {active.itemsTitle}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {active.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>

            {active.note && (
              <p className="mt-5 border-l-4 border-brand-400 bg-brand-50 px-4 py-3 text-sm leading-relaxed text-ink">
                {active.note}
              </p>
            )}

            <p className="mt-6 text-sm leading-relaxed text-ink">
              <span className="font-semibold text-brand-800">Tujuan: </span>
              {active.purpose}
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}
