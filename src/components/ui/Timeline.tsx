export type TimelineEntry = {
  title: string
  details?: string
  date?: string
  status?: 'current'
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative ml-2 list-none border-l border-line p-0">
      {entries.map((entry) => (
        <li key={entry.title} className="relative pb-8 pl-7 last:pb-0 sm:pl-9">
          <span
            aria-hidden="true"
            className={`absolute -left-[0.4rem] top-2 size-3 rounded-full border-2 ${entry.status === 'current' ? 'border-accent bg-accent' : 'border-accent/60 bg-paper'}`}
          />
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-base font-semibold leading-snug text-ink sm:text-lg">{entry.title}</h3>
            {entry.status === 'current' && (
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-accent">
                Current
              </span>
            )}
          </div>
          {entry.details && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{entry.details}</p>}
          {entry.date && <p className="mt-2 text-xs font-medium tracking-wide text-muted">{entry.date}</p>}
        </li>
      ))}
    </ol>
  )
}
