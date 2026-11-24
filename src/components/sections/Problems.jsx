import Container from '../ui/Container'
import { problems } from '../../data/data'

export default function Problems() {
  return (
    <section
      id="permasalahan"
      className="w-full border-y border-line bg-surface py-28 max-[900px]:py-20 max-[520px]:py-14"
    >
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-accent-700 uppercase">
            {problems.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink max-[520px]:text-3xl">
            {problems.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted max-[520px]:text-sm">
            {problems.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 max-[900px]:mt-10 max-[900px]:grid-cols-1 max-[520px]:gap-5">
          {problems.groups.map((group, index) => {
            const Icon = group.icon
            return (
              <article
                key={group.id}
                className="border border-accent-100 bg-white p-7 max-[520px]:p-5"
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >
                <div className="mb-4 flex items-start gap-3 text-accent-600">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0"
                    aria-hidden="true"
                    strokeWidth={1.6}
                  />
                  <h3 className="font-display text-lg font-semibold text-ink max-[520px]:text-base">
                    {group.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
