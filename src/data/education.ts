export type EducationEntry = {
  degree: string
  field?: string
  institution?: string
  location?: string
  status?: 'current'
  period?: string
}

export const education: EducationEntry[] = [
  { degree: 'Bachelor of Science (B.Sc.)' },
  { degree: 'Master of Computer Applications (MCA)' },
  {
    degree: 'PhD',
    field: 'Computer Science',
    institution: 'Aligarh Muslim University (AMU)',
    location: 'India',
    status: 'current',
  },
]
