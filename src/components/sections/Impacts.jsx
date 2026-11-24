import Container from '../ui/Container'
import { impacts } from '../../data/data'

export default function Impacts() {
  return (
    <section id="dampak" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-accent-700 uppercase">
            {impacts.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {impacts.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{impacts.description}</p>
        </div>

        <div className="mt-14 space-y-0 divide-y divide-line">
          {impacts.items.map((item, index) => (
            <article
              key={item.id}
              className="grid gap-3 py-7 first:pt-0 last:pb-0 sm:grid-cols-[12rem_1fr] sm:gap-8"
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>

        <div
          className="mt-12 border-l-4 border-accent-500 bg-accent-50 px-5 py-5 sm:px-7"
          data-aos="fade-up"
        >
          <p className="text-base leading-relaxed font-medium text-ink">{impacts.message}</p>
        </div>
      </Container>
    </section>
  )
}
