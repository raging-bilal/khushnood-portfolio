export const skillCategories = [
  'Programming',
  'AI / ML',
  'LLMs',
  'RAG',
  'Frameworks',
  'Databases',
  'Development Tools',
] as const

// Individual technologies will be listed once confirmed.
export const skills: Record<(typeof skillCategories)[number], string[]> = {
  Programming: [],
  'AI / ML': [],
  LLMs: [],
  RAG: [],
  Frameworks: [],
  Databases: [],
  'Development Tools': [],
}
