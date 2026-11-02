import { profile } from '../../data/profile'
import { PageContainer } from '../layout/PageContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-y border-line bg-surface/60 py-20 sm:py-28">
      <PageContainer>
        <SectionReveal className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <SectionHeading id="about-title" eyebrow="About me" title="Research with a focus on language and collaboration." />
          <div className="space-y-5 text-base leading-[1.85] text-muted sm:text-lg">
            <p>
              I am a {profile.role} at {profile.institution}, {profile.location}. My doctoral research is titled “{profile.researchTitle}.”
            </p>
            <p>
              My academic interests bring together language technologies, distributed learning, privacy, and multilingual NLP, with particular attention to low-resource Indian languages.
            </p>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  )
}
