import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Languages,
  Network,
  Search,
  ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { researchInterests } from '../../data/researchInterests'
import { PageContainer } from '../layout/PageContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

const interestIcons: Record<(typeof researchInterests)[number]['icon'], LucideIcon> = {
  ai: BrainCircuit,
  learning: ChartNoAxesCombined,
  language: Bot,
  retrieval: Search,
  federation: Network,
  privacy: ShieldCheck,
  trust: BadgeCheck,
  multilingual: Languages,
}

export function InterestsSection() {
  return (
    <section id="interests" aria-labelledby="interests-title" className="py-20 sm:py-28">
      <PageContainer>
        <SectionReveal>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              id="interests-title"
              eyebrow="Research interests"
              title="Questions that guide my work."
              description="A broad set of interests connected by the goal of developing useful, responsible language technologies."
            />
            <a
              href="#research"
              className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-accent no-underline transition-colors hover:text-ink"
            >
              Explore my research <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
          <ul className="mt-10 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {researchInterests.map((interest, index) => (
              <li
                key={interest.title}
                className="group flex min-h-[9rem] flex-col items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-ink/[0.035] sm:p-6"
              >
                <div className="flex w-full items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-paper">
                    {(() => {
                      const Icon = interestIcons[interest.icon]
                      return <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                    })()}
                  </span>
                  <span className="font-editorial text-sm text-muted/70">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-ink sm:text-base">{interest.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{interest.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </PageContainer>
    </section>
  )
}
