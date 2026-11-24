import Container from '../ui/Container'
import { dashboardStats } from '../../data/data'

export default function Dashboard() {
  return (
    <section id="dashboard" className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            {dashboardStats.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {dashboardStats.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {dashboardStats.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div>
                    <p className="text-sm text-muted">{item.label}</p>
                    <p className="mt-2 font-display text-3xl font-semibold text-ink">
                      {item.value}
                    </p>
                  </div>
                  <Icon
                    className="h-5 w-5 text-brand-700"
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
