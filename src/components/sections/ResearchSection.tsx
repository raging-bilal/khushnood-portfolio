import { ArrowUpRight, Network } from 'lucide-react'
import { PageContainer } from '../layout/PageContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

export function ResearchSection() {
  return (
    <section id="research" aria-labelledby="research-title" className="pb-20 sm:pb-28">
      <PageContainer>
        <SectionReveal>
          <div className="overflow-hidden rounded-[2rem] border border-line bg-accent-soft/60 p-7 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <SectionHeading id="research-title" eyebrow="Research focus" title="Federated language model systems." />
                <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                  My PhD research focuses on the design, analysis, and evaluation of federated language model systems.
                </p>
              </div>
              <div className="flex size-16 items-center justify-center rounded-2xl border border-line bg-surface text-accent">
                <Network aria-hidden="true" size={28} strokeWidth={1.5} />
              </div>
            </div>
            <a
              href="#interests"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent no-underline transition-colors hover:text-ink"
            >
              Browse research interests <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  )
}
