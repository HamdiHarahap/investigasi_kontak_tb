import { CheckCircle2, XCircle } from 'lucide-react'
import Container from '../ui/Container'
import { examples } from '../../data/data'

export default function Examples() {
  return (
    <section id="contoh" className="border-y border-line bg-surface py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            {examples.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {examples.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{examples.description}</p>
        </div>

        <div className="mt-12 overflow-x-auto border border-line bg-white" data-aos="fade-up">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-brand-700 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Pengisian</th>
                <th className="px-4 py-3 font-semibold">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {examples.items.map((item) => (
                <tr key={item.id} className="border-t border-line">
                  <td className="px-4 py-3 text-ink">{item.text}</td>
                  <td className="px-4 py-3">
                    <span
                      className={[
                        'inline-flex items-center gap-2 text-sm font-medium',
                        item.correct ? 'text-success-700' : 'text-accent-700',
                      ].join(' ')}
                    >
                      {item.correct ? (
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <XCircle className="h-4 w-4" aria-hidden="true" />
                      )}
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
