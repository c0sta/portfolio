export const getSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/skills?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      },
      next: { revalidate: 3600 }
    }
  )

  if (!res.ok) throw new Error('Error on skills fetch')

  return {
    skills: (await res.json()) as SkillsResponse
  }
}

export interface SkillsResponse {
  data: Array<{
    id: number
    attributes: {
      name: string
      icon: {
        data: {
          id: number
          attributes: {
            name: string
            width: number
            height: number
            hash: string
            ext: string
            mime: string
            size: number
            url: string
          }
        }
      }
    }
  }>
}
