import Container from '../ui/Container'
import { introduction, hero } from '../../data/data'

export default function Introduction() {
  return (
    <section id="mengenal" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
              {introduction.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {introduction.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{introduction.lead}</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="overflow-hidden" data-aos="fade-left">
            <img
              src={introduction.image.src}
              alt={introduction.image.alt}
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {introduction.contactTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <article key={type.id} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="mb-4 text-brand-700">
                  <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{type.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {type.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="mt-16 grid gap-12 border-t border-line pt-16 lg:grid-cols-2">
          <div data-aos="fade-up">
            <h3 className="font-display text-2xl font-semibold text-ink">
              {introduction.whyImportant.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {introduction.whyImportant.description}
            </p>
            <ol className="mt-6 space-y-3">
              {introduction.whyImportant.benefits.map((benefit, index) => (
                <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="font-display font-semibold text-brand-700">
                    {index + 1}.
                  </span>
                  {benefit}
                </li>
              ))}
            </ol>
          </div>

          <div data-aos="fade-up" data-aos-delay="80">
            <h3 className="font-display text-2xl font-semibold text-ink">
              {introduction.whoExecutes.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {introduction.whoExecutes.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success-500" />
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
