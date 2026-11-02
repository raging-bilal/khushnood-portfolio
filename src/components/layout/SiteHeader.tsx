import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { PageContainer } from './PageContainer'

const navigation = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#interests', label: 'Interests' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#journey', label: 'Journey' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-lg">
      <PageContainer className="relative flex min-h-[4.5rem] items-center justify-between gap-5">
        <a
          href="#home"
          onClick={closeMenu}
          className="shrink-0 font-medium tracking-tight text-ink no-underline"
        >
          Khushnood Bilal<span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-3 lg:flex xl:gap-4">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-xs text-muted no-underline transition-colors hover:text-accent xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-accent-soft lg:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
          </button>
        </div>

        <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            hidden={!menuOpen}
            className={`absolute inset-x-5 top-[calc(100%+0.5rem)] flex-col gap-1 rounded-2xl border border-line bg-surface p-3 shadow-xl shadow-ink/5 lg:hidden ${menuOpen ? 'flex' : 'hidden'}`}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm text-ink no-underline transition-colors hover:bg-accent-soft"
              >
                {item.label}
              </a>
            ))}
          </nav>
      </PageContainer>
    </header>
  )
}
