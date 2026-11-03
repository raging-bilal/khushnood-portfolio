import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../app/providers/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const Icon = theme === 'light' ? Moon : Sun

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === 'dark'}
      title={`Switch to ${nextTheme} mode`}
      className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors hover:bg-accent-soft"
    >
      <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
    </button>
  )
}
