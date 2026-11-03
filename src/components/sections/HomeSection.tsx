import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../../data/profile'
import { PageContainer } from '../layout/PageContainer'
import { ResearchVisual } from '../ui/ResearchVisual'

export function HomeSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="home" aria-labelledby="home-title" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[28rem] rounded-full bg-accent-soft/50 blur-3xl" />
      <PageContainer className="relative grid min-w-0 grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          className="min-w-0"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
        >
          <div className="mb-7 inline-flex max-w-[calc(100vw-2.5rem)] items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-2 text-xs font-medium tracking-wide text-muted">
            <span className="size-1.5 rounded-full bg-accent" />
            {profile.role} · {profile.institution}
          </div>
          <h1
            id="home-title"
            className="max-w-3xl font-editorial text-[3.6rem] leading-[0.98] tracking-[-0.055em] text-ink sm:text-7xl lg:text-[5.6rem]"
          >
            {profile.name.split(' ')[0]}
            <br />
            <span className="text-accent">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Exploring how language models can collaborate across distributed systems while supporting privacy, trust, and multilingual access.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#research"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-transform hover:-translate-y-0.5 focus-visible:outline-offset-4 dark:text-paper"
            >
              View research <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a
              href="#about"
              className="inline-flex min-h-12 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-ink no-underline transition-colors hover:bg-accent-soft"
            >
              More about me <ArrowDownRight aria-hidden="true" size={17} />
            </a>
          </div>
          <p className="mt-8 text-sm text-muted">{profile.location}</p>
        </motion.div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : 0.08, ease: 'easeOut' }}
          className="mx-auto w-full min-w-0 max-w-md lg:max-w-none"
        >
          <ResearchVisual />
        </motion.div>
      </PageContainer>
    </section>
  )
}
