export const getSummary = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/summaries?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      },
      next: { revalidate: 3600 }
    }
  )

  if (!res.ok) throw new Error('Error on summaries fetch')

  return {
    summary: ((await res.json()) ?? {
      id: 0,
      data: [
        {
          attributes: { about: '', skills: [] }
        }
      ]
    }) as {
      data: Array<{
        id: number
        attributes: {
          about: string
          skills: SkillsResponse
        }
      }>
    }
  }
}

export interface SkillsResponse {
  data: Array<{
    id: number
    attributes: {
      name: string
    }
  }>
}
