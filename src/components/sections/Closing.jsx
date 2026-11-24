import Container from '../ui/Container'
import Button from '../ui/Button'
import { closing } from '../../data/data'

export default function Closing() {
  return (
    <section id="penutup" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 45%), radial-gradient(circle at 80% 70%, rgba(47,158,99,0.25), transparent 40%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-3xl text-white" data-aos="fade-up">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {closing.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-white/85">
            {closing.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {closing.reminders.map((item, index) => (
            <article
              key={item.title}
              className="border border-white/20 bg-white/10 px-5 py-6 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4" data-aos="fade-up">
          <p className="max-w-2xl text-base font-medium text-white">{closing.cta}</p>
          <Button href="#simulasi" as="a" size="lg" variant="secondary">
            Coba Simulasi
          </Button>
        </div>
      </Container>
    </section>
  )
}
