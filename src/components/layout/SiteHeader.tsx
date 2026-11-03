import { useEffect, useRef, useState } from 'react'
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
  const [activeSection, setActiveSection] = useState('home')
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null)
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-22% 0px -68% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
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
              aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
              className={`whitespace-nowrap rounded-sm text-xs no-underline transition-colors hover:text-accent focus-visible:text-accent xl:text-sm ${activeSection === item.href.slice(1) ? 'font-semibold text-accent' : 'text-muted'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
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
                aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
                className={`rounded-xl px-4 py-3 text-sm no-underline transition-colors hover:bg-accent-soft ${activeSection === item.href.slice(1) ? 'bg-accent-soft font-semibold text-accent' : 'text-ink'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
      </PageContainer>
    </header>
  )
}
