import { ArrowUpRight } from 'lucide-react'
import { researchInterests } from '../../data/researchInterests'
import { PageContainer } from '../layout/PageContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

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
                key={interest}
                className="group flex min-h-[5.5rem] items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-ink/[0.035]"
              >
                <span className="font-editorial text-lg text-accent/75">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-sm font-medium leading-snug text-ink sm:text-base">{interest}</span>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </PageContainer>
    </section>
  )
}
