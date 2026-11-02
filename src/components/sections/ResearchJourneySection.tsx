import { researchJourney } from '../../data/researchJourney'
import { PageContainer } from '../layout/PageContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'
import { Timeline, type TimelineEntry } from '../ui/Timeline'

const journeyTimeline: TimelineEntry[] = researchJourney.map((milestone) => ({
  title: milestone.title,
  details: milestone.description,
  date: milestone.date,
  status: milestone.status,
}))

export function ResearchJourneySection() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="border-t border-line bg-surface/60 py-20 sm:py-28">
      <PageContainer>
        <SectionReveal className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <SectionHeading
            id="journey-title"
            eyebrow="Research journey"
            title="Milestones in my academic work."
            description="A timeline of academic milestones, limited to verified details."
          />
          <Timeline entries={journeyTimeline} />
        </SectionReveal>
      </PageContainer>
    </section>
  )
}
