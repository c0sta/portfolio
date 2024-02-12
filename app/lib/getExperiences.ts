import { SkillsResponse } from './getSummaries'

export const getExperiences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/experiences?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      },
      next: { revalidate: 3600 }
    }
  )

  if (!res.ok) throw new Error('Error when fetching experiences!')

  return {
    experiences: ((await res.json()) ?? { data: [] }) as ExperiencesResponse
  }
}

export interface ExperiencesResponse {
  data: Array<{
    id: number
    attributes: {
      title: 'Front-end Engineer'
      description: string
      start: string
      end: string
      skills: SkillsResponse
    }
  }>
}
