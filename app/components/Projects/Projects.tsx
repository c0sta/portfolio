import { Button, Typography } from '@/app/components/ui'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { getProjects } from '@/app/lib/getProjects'
import { Project } from '../ui/Project/Project'

export default async function Projects() {
  const { projects } = await getProjects()
  return (
    <section id="projects">
      <div className="flex flex-col justify-between gap-6">
        <Typography.Subtitle className="text-xl uppercase">
          Projects
        </Typography.Subtitle>

        <div className="flex flex-wrap gap-6">
          {projects?.data.map(
            ({
              id,
              attributes: {
                title,
                description,
                cover,
                skills,
                codeUrl,
                liveUrl
              }
            }) => (
              <Project
                key={id}
                imageSrc={`${process.env.NEXT_PUBLIC_API_URL}${cover.data[0].attributes.formats.large.url}`}
                imageAlt=""
                title={title}
                description={description}
                skills={skills.data.map((skill) => skill.attributes.name)}
                seeCodeUrl={codeUrl}
                seeLiveUrl={liveUrl}
              />
            )
          )}
        </div>

        <Button
          label="View all projects"
          color="default"
          variant="text"
          className="w-fit text-xs"
          isLink
          target="_blank"
          href={`${process.env.NEXT_PUBLIC_GITHUB_PROFILE}?tab=repositories&q=&type=&language=typescript`}
          icon={
            <ArrowRightIcon
              className="stroke h-3 w-3  stroke-slate-500 transition-all duration-300 ease-in-out group-hover/button:translate-x-1 group-hover/button:stroke-accentColor group-hover/button:stroke-2"
              stroke="black"
            />
          }
        />
      </div>
    </section>
  )
}
