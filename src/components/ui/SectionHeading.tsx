type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 id={id} className="font-editorial text-4xl leading-tight tracking-[-0.025em] text-ink sm:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </div>
  )
}
