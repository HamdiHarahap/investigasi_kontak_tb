import Container from '../ui/Container'
import { introduction, hero } from '../../data/data'

export default function Introduction() {
  return (
    <section id="mengenal" className="w-full bg-white py-28 max-[900px]:py-20 max-[520px]:py-14">
      <Container>
        <div className="grid grid-cols-2 items-start gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div data-aos="fade-right">
            <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
              {introduction.eyebrow}
            </p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink max-[520px]:text-3xl">
              {introduction.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{introduction.lead}</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted max-[520px]:text-sm">
              {hero.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="overflow-hidden" data-aos="fade-left">
            <img
              src={introduction.image.src}
              alt={introduction.image.alt}
              className="aspect-[5/4] w-full object-cover max-[520px]:aspect-[4/3]"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 max-[900px]:mt-12 max-[900px]:grid-cols-1 max-[520px]:mt-10 max-[520px]:gap-8">
          {introduction.contactTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <article key={type.id} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="mb-4 text-brand-700">
                  <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink max-[520px]:text-lg">
                  {type.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {type.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-12 border-t border-line pt-16 max-[900px]:mt-12 max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[900px]:pt-12 max-[520px]:mt-10 max-[520px]:pt-10">
          <div data-aos="fade-up">
            <h3 className="font-display text-2xl font-semibold text-ink max-[520px]:text-xl">
              {introduction.whyImportant.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted max-[520px]:text-sm">
              {introduction.whyImportant.description}
            </p>
            <ol className="mt-6 space-y-3">
              {introduction.whyImportant.benefits.map((benefit, index) => (
                <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="shrink-0 font-display font-semibold text-brand-700">
                    {index + 1}.
                  </span>
                  <span className="min-w-0">{benefit}</span>
                </li>
              ))}
            </ol>
          </div>

          <div data-aos="fade-up" data-aos-delay="80">
            <h3 className="font-display text-2xl font-semibold text-ink max-[520px]:text-xl">
              {introduction.whoExecutes.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {introduction.whoExecutes.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success-500" />
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
