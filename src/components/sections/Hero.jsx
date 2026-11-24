import Container from '../ui/Container';
import Button from '../ui/Button';
import { hero } from '../../data/data';

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-24 w-full"
    >
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_30%]"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900/92 via-brand-800/78 to-brand-700/35"
        aria-hidden="true"
      />

      <Container className="w-full">
        <div className="max-w-2xl text-white animate-[hero-in_0.8s_ease-out]">
          <p className="mb-3 font-display text-lg font-semibold tracking-tight text-brand-100 sm:text-xl">
            {hero.brand}
          </p>
          <h1 className="font-display text-3xl leading-[1.15] font-semibold sm:text-4xl md:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} as="a" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              as="a"
              size="lg"
              variant="outline"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
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
  );
}
