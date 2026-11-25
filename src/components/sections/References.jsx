import Container from '../ui/Container';
import { references } from '../../data/data';

export default function References() {
  return (
    <section id="referensi" className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl" data-aos="fade-up">
          <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-brand-700 uppercase">
            {references.eyebrow}
          </p>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {references.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted">
            {references.description}
          </p>
        </div>

        <ol className="mt-12 space-y-0">
          {references.items.map((item, index) => (
            <li
              key={item.id}
              className="flex items-start gap-5 border-t border-line py-6"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <span className="font-display text-sm font-semibold text-brand-700">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div>
                <p className="text-sm font-medium text-muted">
                  {item.institution} ({item.year})
                </p>

                <h3 className="mt-2 font-display text-base font-semibold leading-relaxed text-ink">
                  {item.title}
                </h3>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
