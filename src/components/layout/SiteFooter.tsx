import { ArrowUp } from 'lucide-react'
import { profile } from '../../data/profile'
import { PageContainer } from './PageContainer'

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-8">
      <PageContainer className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-xs text-muted">{profile.role} · {profile.institution}, {profile.location}</p>
        </div>
        <a
          href="#home"
          className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted no-underline transition-colors hover:bg-accent-soft hover:text-ink"
        >
          Back to top <ArrowUp aria-hidden="true" size={15} />
        </a>
      </PageContainer>
    </footer>
  )
}
