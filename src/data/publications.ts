export type Publication = {
  title: string
  authors: string[]
  venue: string
  publicationDate: string
  doi: string
  url: string
}

// Publication records will be added when verified details are supplied.
export const publications: Publication[] = []
