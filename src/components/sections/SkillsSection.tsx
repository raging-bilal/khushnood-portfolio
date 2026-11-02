import { Bot, BrainCircuit, Code2, Database, PanelsTopLeft, Search, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { skillCategories, skills } from '../../data/skills'
import { PageContainer } from '../layout/PageContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

const categoryIcons: Record<(typeof skillCategories)[number], LucideIcon> = {
  Programming: Code2,
  'AI / ML': BrainCircuit,
  LLMs: Bot,
  RAG: Search,
  Frameworks: PanelsTopLeft,
  Databases: Database,
  'Development Tools': Wrench,
}

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 sm:py-28">
      <PageContainer>
        <SectionReveal>
          <SectionHeading
            id="skills-title"
            eyebrow="Technical skills"
            title="Tools and technologies."
            description="Specific technologies have not been provided yet, so this section is kept clear of unverified skill claims."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {skillCategories.map((category) => {
              const categorySkills = skills[category]
              const Icon = categoryIcons[category]

              return (
                <article key={category} className="rounded-2xl border border-line bg-surface p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon aria-hidden="true" size={17} />
                    </span>
                    <h3 className="text-sm font-semibold text-ink">{category}</h3>
                  </div>
                  {categorySkills.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {categorySkills.map((skill) => <li key={skill} className="list-none rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">{skill}</li>)}
                    </ul>
                  ) : (
                    <p className="mt-4 text-xs text-muted">No entries listed</p>
                  )}
                </article>
              )
            })}
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  )
}
