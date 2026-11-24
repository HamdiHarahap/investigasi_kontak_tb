import Container from '../ui/Container'
import { site, navLinks, team } from '../../data/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink text-white">
      <Container className="grid grid-cols-2 gap-10 py-14 max-[900px]:grid-cols-1 max-[900px]:gap-8 max-[520px]:py-10">
        <div>
          <div className="mb-4 font-display text-lg font-semibold">{site.name}</div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            {site.shortDescription}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
            Disusun oleh {team.members.length} anggota kelompok. Lihat daftar lengkap di{' '}
            <a
              href="#tim"
              className="text-brand-200 underline-offset-4 hover:text-white hover:underline"
            >
              Tim Penyusun
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-sm font-semibold text-white">Navigasi</h2>
          <ul className="grid grid-cols-2 gap-2 max-[520px]:grid-cols-1">
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
            © {year} {site.name}. Materi edukasi disusun oleh kelompok pengembang website.
          </p>
        </Container>
      </div>
    </footer>
  )
}
