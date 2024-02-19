import { SkillsResponse } from './getSummaries'

export const getProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      },
      next: { revalidate: 3600 }
    }
  )

  if (!res.ok) throw new Error('Error when fetching projects!')

  return { projects: ((await res.json()) ?? { data: [] }) as ProjectsResponse }
}

interface ProjectImageCoverResponse {
  data: Array<{
    id: number
    attributes: {
      name: string
      width: number
      height: number
      url: string
      formats: Record<
        'thumbnail' | 'small' | 'medium' | 'large',
        {
          name: string
          hash: string
          ext: string // .png
          mime: string // 'image/png'
          path: string
          width: number
          height: number
          size: number
          url: string
        }
      >
    }
  }>
}

export interface ProjectsResponse {
  data: Array<{
    id: number
    attributes: {
      title: string
      description: string
      codeUrl: string
      liveUrl: string
      cover: ProjectImageCoverResponse
      skills: SkillsResponse
    }
  }>
}
