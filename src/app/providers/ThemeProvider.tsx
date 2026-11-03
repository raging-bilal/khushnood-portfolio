import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { ThemeContext } from './theme-context'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'khushnood-portfolio-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'

  let savedTheme: string | null = null
  try {
    savedTheme = window.localStorage.getItem(STORAGE_KEY)
  } catch {
    // Storage can be unavailable in private browsing or restricted contexts.
  }
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const explicitlyChosen = useRef(false)

  useEffect(() => {
    try {
      explicitlyChosen.current = window.localStorage.getItem(STORAGE_KEY) !== null
    } catch {
      explicitlyChosen.current = false
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const updateFromSystem = (event: MediaQueryListEvent) => {
      if (!explicitlyChosen.current) setTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', updateFromSystem)
    return () => media.removeEventListener('change', updateFromSystem)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#171d1e' : '#faf9f6')
    if (explicitlyChosen.current) {
      try {
        window.localStorage.setItem(STORAGE_KEY, theme)
      } catch {
        // Keep the current theme even when preference storage is unavailable.
      }
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    explicitlyChosen.current = true
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

