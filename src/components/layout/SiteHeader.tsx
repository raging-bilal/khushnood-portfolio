import { ThemeToggle } from '../ui/ThemeToggle'
import { PageContainer } from './PageContainer'

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <PageContainer className="flex min-h-20 items-center justify-between gap-4">
        <a href="#home" className="font-medium tracking-tight text-ink no-underline">
          Khushnood Bilal
        </a>
        <ThemeToggle />
      </PageContainer>
    </header>
  )
}
