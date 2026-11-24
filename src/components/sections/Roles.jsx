import Container from '../ui/Container'
import { roles } from '../../data/data'

const accentStyles = {
  brand: {
    icon: 'text-brand-700',
    dot: 'bg-brand-500',
  },
  success: {
    icon: 'text-success-600',
    dot: 'bg-success-500',
  },
  accent: {
    icon: 'text-accent-600',
    dot: 'bg-accent-500',
  },
}

export default function Roles() {
  return (
    <section id="tugas" className="border-y border-line bg-surface py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            {roles.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {roles.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{roles.description}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {roles.items.map((role, index) => {
            const Icon = role.icon
            const style = accentStyles[role.accent] || accentStyles.brand
            return (
              <article key={role.id} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className={['mb-4', style.icon].join(' ')}>
                  <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">{role.title}</h3>
                <ol className="mt-5 space-y-3">
                  {role.tasks.map((task, taskIndex) => (
                    <li key={task} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="font-display font-semibold text-ink">
                        {taskIndex + 1}.
                      </span>
                      {task}
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
