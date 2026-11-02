import { ArrowUpRight, BookOpenText } from 'lucide-react'
import { publications } from '../../data/publications'
import { PageContainer } from '../layout/PageContainer'
import { SectionHeading } from '../ui/SectionHeading'
import { SectionReveal } from '../ui/SectionReveal'

export function PublicationsSection() {
  return (
    <section id="publications" aria-labelledby="publications-title" className="py-20 sm:py-28">
      <PageContainer>
        <SectionReveal>
          <SectionHeading
            id="publications-title"
            eyebrow="Publications"
            title="Academic writing and publications."
            description="Bibliographic records are shown here only when verified."
          />
          {publications.length > 0 ? (
            <ol className="mt-10 list-none divide-y divide-line border-y border-line p-0">
              {publications.map((publication) => (
                <li key={`${publication.title}-${publication.publicationDate}`} className="grid gap-4 py-6 sm:grid-cols-[1fr_auto] sm:items-start sm:py-8">
                  <div>
                    <h3 className="font-editorial text-xl leading-snug text-ink sm:text-2xl">{publication.title}</h3>
                    {publication.authors.length > 0 && <p className="mt-2 text-sm leading-relaxed text-muted">{publication.authors.join(', ')}</p>}
                    {(publication.venue || publication.publicationDate) && (
                      <p className="mt-2 text-sm text-muted">{[publication.venue, publication.publicationDate].filter(Boolean).join(' · ')}</p>
                    )}
                    {publication.doi && <p className="mt-2 break-all text-xs text-muted">DOI: {publication.doi}</p>}
                  </div>
                  {publication.url && (
                    <a href={publication.url} target="_blank" rel="noreferrer" aria-label={`Open publication: ${publication.title}`} className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent no-underline hover:text-ink">
                      View publication <ArrowUpRight aria-hidden="true" size={16} />
                    </a>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <div className="mt-10 flex items-start gap-4 rounded-2xl border border-dashed border-line bg-surface p-6 sm:p-8">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <BookOpenText aria-hidden="true" size={19} />
              </span>
              <div>
                <h3 className="font-semibold text-ink">No verified publication records listed</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">Publication titles, authors, venues, dates, DOIs, and links can be added once confirmed.</p>
              </div>
            </div>
          )}
        </SectionReveal>
      </PageContainer>
    </section>
  )
}
