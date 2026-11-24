import { CheckCircle2, XCircle } from 'lucide-react'
import Container from '../ui/Container'
import { examples } from '../../data/data'

export default function Examples() {
  return (
    <section
      id="contoh"
      className="border-y border-line bg-surface py-28 max-[900px]:py-20 max-[520px]:py-14"
    >
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            {examples.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink max-[520px]:text-3xl">
            {examples.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted max-[520px]:text-sm">
            {examples.description}
          </p>
        </div>

        <div
          className="mt-12 overflow-x-auto border border-line bg-white max-[900px]:mt-10"
          data-aos="fade-up"
        >
          <table className="min-w-[28rem] w-full text-left text-sm">
            <thead className="bg-brand-700 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold max-[520px]:px-3">Pengisian</th>
                <th className="px-4 py-3 font-semibold max-[520px]:px-3">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {examples.items.map((item) => (
                <tr key={item.id} className="border-t border-line">
                  <td className="px-4 py-3 text-ink max-[520px]:px-3 max-[520px]:text-[0.8125rem]">
                    {item.text}
                  </td>
                  <td className="px-4 py-3 max-[520px]:px-3">
                    <span
                      className={[
                        'inline-flex items-center gap-2 text-sm font-medium max-[520px]:text-[0.8125rem]',
                        item.correct ? 'text-success-700' : 'text-accent-700',
                      ].join(' ')}
                    >
                      {item.correct ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                      ) : (
                        <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
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
