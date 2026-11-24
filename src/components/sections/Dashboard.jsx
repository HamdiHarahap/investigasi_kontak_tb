import Container from '../ui/Container'
import { dashboardStats } from '../../data/data'

export default function Dashboard() {
  return (
    <section id="dashboard" className="bg-white py-28 max-[900px]:py-20 max-[520px]:py-14">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            {dashboardStats.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink max-[520px]:text-3xl">
            {dashboardStats.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted max-[520px]:text-sm">
            {dashboardStats.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 max-[900px]:mt-10 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1 max-[520px]:gap-4">
          {dashboardStats.items.map((item, index) => {
            const Icon = item.icon
            return (
              <article
                key={item.id}
                className="border-t-4 border-brand-600 bg-surface px-5 py-6"
                data-aos="fade-up"
                data-aos-delay={index * 60}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm text-muted">{item.label}</p>
                    <p className="mt-2 font-display text-3xl font-semibold text-ink max-[520px]:text-2xl">
                      {item.value}
                    </p>
                  </div>
                  <Icon
                    className="h-5 w-5 shrink-0 text-brand-700"
                    aria-hidden="true"
                    strokeWidth={1.6}
                  />
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
