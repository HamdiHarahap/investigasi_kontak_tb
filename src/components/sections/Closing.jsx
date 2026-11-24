import Container from '../ui/Container'
import Button from '../ui/Button'
import { closing } from '../../data/data'

export default function Closing() {
  return (
    <section
      id="penutup"
      className="relative isolate overflow-hidden py-28 max-[900px]:py-20 max-[520px]:py-14"
    >
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
          <h2 className="font-display text-4xl font-semibold tracking-tight max-[520px]:text-3xl">
            {closing.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-white/85 max-[520px]:text-sm">
            {closing.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 max-[900px]:mt-10 max-[900px]:grid-cols-1 max-[520px]:gap-4">
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

        <div
          className="mt-12 flex flex-wrap items-center gap-4 max-[520px]:mt-8 max-[520px]:flex-col max-[520px]:items-stretch"
          data-aos="fade-up"
        >
          <p className="max-w-2xl text-base font-medium text-white max-[520px]:text-sm">
            {closing.cta}
          </p>
          <Button href="#simulasi" as="a" size="lg" variant="secondary" className="max-[520px]:w-full">
            Coba Simulasi
          </Button>
        </div>
      </Container>
    </section>
  )
}
