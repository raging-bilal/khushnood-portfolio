export type ResearchProject = {
  title: string
  description: string
  technologies: string[]
  dataset: string
  methodology: string
  githubUrl: string
}

// Project records will be added when verified details are supplied.
export const projects: ResearchProject[] = []
