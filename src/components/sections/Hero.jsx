import Container from '../ui/Container'
import Button from '../ui/Button'
import { hero } from '../../data/data'

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-24 max-[900px]:items-end max-[900px]:pb-16 max-[900px]:pt-28 max-[520px]:min-h-[100svh] max-[520px]:pb-12 max-[520px]:pt-24"
    >
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_30%]"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/92 via-brand-800/78 to-brand-700/35 max-[520px]:bg-gradient-to-b max-[520px]:from-brand-900/95 max-[520px]:via-brand-900/80 max-[520px]:to-brand-800/55"
        aria-hidden="true"
      />

      <Container className="w-full">
        <div className="max-w-2xl text-white animate-[hero-in_0.8s_ease-out]">
          <p className="mb-3 font-display text-xl font-semibold tracking-tight text-brand-100 max-[520px]:text-base">
            {hero.brand}
          </p>
          <h1 className="font-display text-5xl leading-[1.15] font-semibold max-[900px]:text-4xl max-[520px]:text-[1.75rem] max-[520px]:leading-snug">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 max-[520px]:mt-4 max-[520px]:text-sm">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 max-[520px]:mt-6 max-[520px]:flex-col">
            <Button
              href={hero.primaryCta.href}
              as="a"
              size="lg"
              className="max-[520px]:w-full"
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              as="a"
              size="lg"
              variant="outline"
              className="max-[520px]:w-full"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 max-[520px]:mt-4 max-[520px]:flex-col max-[520px]:gap-y-2.5">
            {hero.tertiaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-100 underline-offset-4 hover:text-white hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
