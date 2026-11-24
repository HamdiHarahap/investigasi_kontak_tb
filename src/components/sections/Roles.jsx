import Container from '../ui/Container'
import { roles } from '../../data/data'

const accentStyles = {
  brand: {
    icon: 'text-brand-700',
  },
  success: {
    icon: 'text-success-600',
  },
  accent: {
    icon: 'text-accent-600',
  },
}

export default function Roles() {
  return (
    <section
      id="tugas"
      className="border-y border-line bg-surface py-28 max-[900px]:py-20 max-[520px]:py-14"
    >
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            {roles.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ink max-[520px]:text-3xl">
            {roles.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted max-[520px]:text-sm">
            {roles.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-8 max-[900px]:mt-10 max-[900px]:grid-cols-1 max-[520px]:gap-8">
          {roles.items.map((role, index) => {
            const Icon = role.icon
            const style = accentStyles[role.accent] || accentStyles.brand
            return (
              <article key={role.id} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className={['mb-4', style.icon].join(' ')}>
                  <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink max-[520px]:text-lg">
                  {role.title}
                </h3>
                <ol className="mt-5 space-y-3">
                  {role.tasks.map((task, taskIndex) => (
                    <li key={task} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="shrink-0 font-display font-semibold text-ink">
                        {taskIndex + 1}.
                      </span>
                      <span className="min-w-0">{task}</span>
                    </li>
                  ))}
                </ol>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
