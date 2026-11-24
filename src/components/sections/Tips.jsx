import { Shield } from 'lucide-react'
import Container from '../ui/Container'
import { tips } from '../../data/data'

export default function Tips() {
  return (
    <section id="tips" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-success-700 uppercase">
              {tips.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {tips.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{tips.description}</p>

            <ul className="mt-8 space-y-3">
              {tips.items.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-3 border-b border-line pb-3 text-sm leading-relaxed text-muted last:border-0"
                >
                  <span className="font-display font-semibold text-success-700">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="border border-line bg-surface p-6 sm:p-8"
            data-aos="fade-left"
          >
            <div className="mb-4 text-brand-700">
              <Shield className="h-6 w-6" aria-hidden="true" strokeWidth={1.6} />
            </div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              {tips.privacy.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {tips.privacy.description}
            </p>
            <ul className="mt-6 space-y-3">
              {tips.privacy.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
