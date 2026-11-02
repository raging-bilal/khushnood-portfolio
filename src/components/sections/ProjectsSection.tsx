import { ArrowUpRight, FolderKanban } from 'lucide-react'
import { projects } from '../../data/projects'
import { PageContainer } from '../layout/PageContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-y border-line bg-surface/60 py-20 sm:py-28">
      <PageContainer>
        <SectionReveal>
          <SectionHeading
            id="projects-title"
            eyebrow="Research projects"
            title="Projects and applied research."
            description="Selected work will appear here with its methods, tools, and resources."
          />
          {projects.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className="rounded-3xl border border-line bg-paper p-6 sm:p-8">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <FolderKanban aria-hidden="true" size={20} />
                  </div>
                  <h3 className="mt-5 font-editorial text-2xl text-ink">{project.title}</h3>
                  {project.description && <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>}
                  {(project.dataset || project.methodology) && (
                    <dl className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
                      {project.dataset && <div><dt className="font-semibold text-ink">Dataset</dt><dd className="mt-1 text-muted">{project.dataset}</dd></div>}
                      {project.methodology && <div><dt className="font-semibold text-ink">Methodology</dt><dd className="mt-1 text-muted">{project.methodology}</dd></div>}
                    </dl>
                  )}
                  {project.technologies.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => <li key={technology} className="list-none rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">{technology}</li>)}
                    </ul>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent no-underline hover:text-ink">
                      View source <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 flex items-start gap-4 rounded-2xl border border-dashed border-line bg-paper/70 p-6 sm:p-8">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <FolderKanban aria-hidden="true" size={19} />
              </span>
              <div>
                <h3 className="font-semibold text-ink">No project details listed yet</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">Project cards will include descriptions, methods, technologies, and source links when those details are available.</p>
              </div>
            </div>
          )}
        </SectionReveal>
      </PageContainer>
    </section>
  )
}
