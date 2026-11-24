import Container from '../ui/Container';
import { problems } from '../../data/data';

export default function Problems() {
  return (
    <section
      id="permasalahan"
      className="border-y border-line bg-surface py-20 sm:py-28 w-full"
    >
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-accent-700 uppercase">
            {problems.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {problems.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {problems.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {problems.groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <article
                key={group.id}
                className="border border-accent-100 bg-white p-6 sm:p-7"
                data-aos="fade-up"
                data-aos-delay={index * 70}
              >
                <div className="mb-4 flex items-center gap-3 text-accent-600">
                  <Icon
                    className="h-5 w-5"
                    aria-hidden="true"
                    strokeWidth={1.6}
                  />
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {group.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
