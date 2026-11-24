import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { site, navLinks } from '../../data/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)
  const solid = scrolled || open

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid ? 'border-b border-line/80 bg-white/95 backdrop-blur' : 'bg-transparent',
      ].join(' ')}
    >
      <Container className="flex h-16 items-center justify-between lg:h-[4.5rem]">
        <a
          href="#beranda"
          className={[
            'font-display text-base font-semibold sm:text-lg',
            solid ? 'text-ink' : 'text-white',
          ].join(' ')}
          onClick={closeMenu}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={[
                'text-sm font-medium transition-colors',
                solid
                  ? 'text-muted hover:text-brand-800'
                  : 'text-white/85 hover:text-white',
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href="#simulasi" as="a" size="sm">
            Simulasi Data
          </Button>
        </div>

        <button
          type="button"
          className={[
            'inline-flex h-10 w-10 items-center justify-center rounded-md xl:hidden',
            solid
              ? 'border border-line bg-white text-ink'
              : 'border border-white/30 bg-white/10 text-white',
          ].join(' ')}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={['border-t border-line bg-white xl:hidden', open ? 'block' : 'hidden'].join(
          ' ',
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-ink hover:bg-brand-50"
            >
              {link.label}
            </a>
          ))}
          <Button href="#simulasi" as="a" className="mt-2 w-full" onClick={closeMenu}>
            Simulasi Data
          </Button>
        </Container>
      </div>
    </header>
  )
}
