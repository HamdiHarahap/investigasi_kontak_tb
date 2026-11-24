import Container from '../ui/Container'
import { site, navLinks } from '../../data/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2">
        <div>
          <div className="mb-4 font-display text-lg font-semibold">{site.name}</div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            {site.shortDescription}
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm font-semibold text-white">Navigasi</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-white/50">
          <p>
            © {year} {site.name}. Materi edukasi untuk pembelajaran investigasi kontak TB.
          </p>
        </Container>
      </div>
    </footer>
  )
}
