import { education } from '../../data/education'
import { PageContainer } from '../layout/PageContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'
import { Timeline, type TimelineEntry } from '../ui/Timeline'

const educationTimeline: TimelineEntry[] = education.map((entry) => ({
  title: entry.field ? `${entry.degree} in ${entry.field}` : entry.degree,
  details: [entry.institution, entry.location].filter(Boolean).join(' · ') || undefined,
  date: entry.period,
  status: entry.status,
}))

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title" className="border-y border-line bg-surface/60 py-20 sm:py-28">
      <PageContainer>
        <SectionReveal className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <SectionHeading
            id="education-title"
            eyebrow="Education"
            title="Academic foundation."
            description="An academic path across undergraduate, postgraduate, and doctoral study."
          />
          <Timeline entries={educationTimeline} />
        </SectionReveal>
      </PageContainer>
    </section>
  )
}
