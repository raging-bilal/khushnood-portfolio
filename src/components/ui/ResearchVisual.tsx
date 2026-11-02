export function ResearchVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex aspect-square w-[calc(100vw-2.5rem)] items-center justify-center rounded-[2rem] border border-line bg-surface p-8 shadow-[0_30px_90px_-60px_rgba(31,75,71,0.45)] sm:w-full sm:max-w-[25rem]"
    >
      <div className="absolute inset-5 rounded-[1.5rem] border border-dashed border-line" />
      <svg viewBox="0 0 320 320" className="relative h-full w-full max-w-[19rem]">
        <g fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5">
          <path d="M160 160 76 86M160 160l84-74M160 160l-92 74M160 160l92 74" />
          <path d="M76 86h168M68 234h184" strokeDasharray="4 7" />
        </g>
        <g fill="var(--surface)" stroke="var(--accent)" strokeWidth="2">
          <circle cx="76" cy="86" r="25" />
          <circle cx="244" cy="86" r="25" />
          <circle cx="68" cy="234" r="25" />
          <circle cx="252" cy="234" r="25" />
        </g>
        <circle cx="160" cy="160" r="59" fill="var(--accent-soft)" />
        <circle cx="160" cy="160" r="44" fill="var(--surface)" stroke="var(--accent)" strokeOpacity=".65" />
        <g fill="none" stroke="var(--accent)" strokeLinecap="round" strokeWidth="2">
          <path d="M143 160h34M160 143v34" />
          <circle cx="160" cy="160" r="7" fill="var(--accent)" />
        </g>
        <g fill="var(--accent)" fillOpacity=".8">
          <circle cx="76" cy="86" r="4" />
          <circle cx="244" cy="86" r="4" />
          <circle cx="68" cy="234" r="4" />
          <circle cx="252" cy="234" r="4" />
        </g>
      </svg>
      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-paper px-4 py-2 text-xs font-medium tracking-wide text-muted">
        Federated language models
      </span>
    </div>
  )
}
