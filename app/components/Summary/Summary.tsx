import Image from 'next/image'
import { Typography, Button } from '@/app/components'
import { getSummaries } from '@/app/lib/getSummaries'
import { getSkills } from '@/app/lib/getSkills'

export default async function Summary() {
  const { summary } = await getSummaries()
  const { skills } = await getSkills()

  return (
    <div id="summary" className="flex flex-col gap-6 xl:flex-row">
      <article className="w-full xl:w-8/12">
        <Typography.Subtitle className="text-xl">About me</Typography.Subtitle>
        <br />
        <Typography.Description>
          {summary.data[0].attributes.about}
        </Typography.Description>
      </article>

      <section className="w-full xl:w-4/12">
        <Typography.Subtitle className="text-xl">Skills</Typography.Subtitle>
        <br />

        <div className="flex flex-wrap gap-4">
          {skills.data
            .sort((a, b) => a.id - b.id)
            .map((skill) => (
              <Button
                key={skill.id}
                color="default"
                variant="contained"
                className="h-11 w-11"
                icon={
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${skill.attributes.icon.data.attributes.url}`}
                    className="h-10 w-10 self-center"
                    width={16}
                    height={16}
                    alt={`${skill.attributes.name} icon in a white color and a black background`}
                  />
                }
              />
            ))}
        </div>
      </section>
    </div>
  )
}
