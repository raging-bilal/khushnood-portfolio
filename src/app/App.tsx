import { AboutSection } from '../components/sections/AboutSection'
import { HomeSection } from '../components/sections/HomeSection'
import { InterestsSection } from '../components/sections/InterestsSection'
import { ResearchSection } from '../components/sections/ResearchSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { PublicationsSection } from '../components/sections/PublicationsSection'
import { EducationSection } from '../components/sections/EducationSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { ResearchJourneySection } from '../components/sections/ResearchJourneySection'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#main-content"
        className="sr-only z-[60] rounded-md bg-surface p-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <HomeSection />
        <AboutSection />
        <InterestsSection />
        <ResearchSection />
        <ProjectsSection />
        <PublicationsSection />
        <EducationSection />
        <SkillsSection />
        <ResearchJourneySection />
      </main>
      <SiteFooter />
    </div>
  )
}
