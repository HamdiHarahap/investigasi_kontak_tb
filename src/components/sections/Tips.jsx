import { Shield } from 'lucide-react'
import Container from '../ui/Container'
import { tips } from '../../data/data'

export default function Tips() {
  return (
    <section id="tips" className="bg-white py-28 max-[900px]:py-20 max-[520px]:py-14">
      <Container>
        <div className="grid grid-cols-2 gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div data-aos="fade-right">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-success-700 uppercase">
              {tips.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink max-[520px]:text-3xl">
              {tips.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted max-[520px]:text-sm">
              {tips.description}
            </p>

            <ul className="mt-8 space-y-3">
              {tips.items.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-line pb-3 text-sm leading-relaxed text-muted last:border-0"
                >
                  <span className="shrink-0 font-display font-semibold text-success-700">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="border border-line bg-surface p-8 max-[520px]:p-5"
            data-aos="fade-left"
          >
            <div className="mb-4 text-brand-700">
              <Shield className="h-6 w-6" aria-hidden="true" strokeWidth={1.6} />
            </div>
            <h3 className="font-display text-2xl font-semibold text-ink max-[520px]:text-xl">
              {tips.privacy.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{tips.privacy.description}</p>
            <ul className="mt-6 space-y-3">
              {tips.privacy.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
