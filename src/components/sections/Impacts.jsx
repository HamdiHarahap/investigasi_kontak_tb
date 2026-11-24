import Container from '../ui/Container'
import { impacts } from '../../data/data'

export default function Impacts() {
  return (
    <section id="dampak" className="bg-white py-28 max-[900px]:py-20 max-[520px]:py-14">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-accent-700 uppercase">
            {impacts.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink max-[520px]:text-3xl">
            {impacts.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted max-[520px]:text-sm">
            {impacts.description}
          </p>
        </div>

        <div className="mt-14 space-y-0 divide-y divide-line max-[900px]:mt-10">
          {impacts.items.map((item, index) => (
            <article
              key={item.id}
              className="grid grid-cols-[12rem_1fr] gap-8 py-7 first:pt-0 last:pb-0 max-[900px]:grid-cols-1 max-[900px]:gap-2 max-[520px]:py-5"
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <h3 className="font-display text-lg font-semibold text-ink max-[520px]:text-base">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted max-[520px]:text-sm">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div
          className="mt-12 border-l-4 border-accent-500 bg-accent-50 px-7 py-5 max-[520px]:mt-8 max-[520px]:px-4 max-[520px]:py-4"
          data-aos="fade-up"
        >
          <p className="text-base leading-relaxed font-medium text-ink max-[520px]:text-sm">
            {impacts.message}
          </p>
        </div>
      </Container>
    </section>
  )
}
