import { motion, useReducedMotion } from 'motion/react'
import { SiteHeader } from '../components/layout/SiteHeader'
import { PageContainer } from '../components/layout/PageContainer'

export default function App() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main id="home">
        <PageContainer className="flex min-h-[calc(100svh-5rem)] items-center py-20">
          <motion.section
            aria-labelledby="intro-title"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-accent">
              Academic &amp; Research Portfolio
            </p>
            <h1
              id="intro-title"
              className="max-w-3xl font-editorial text-5xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-6xl lg:text-7xl"
            >
              Khushnood Bilal
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              PhD Research Scholar in Computer Science at Aligarh Muslim University, India.
            </p>
          </motion.section>
        </PageContainer>
      </main>
    </div>
  )
}
