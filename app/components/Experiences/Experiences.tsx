import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button, Tags, Typography } from '@/app/components'
import { getExperiences } from '@/app/lib/getExperiences'
import { Experience } from '../ui/Experience/Experience'

export default async function Experiences() {
  const { experiences } = await getExperiences()

  return (
    <section id="experiences" className="flex flex-col gap-6 ">
      <Typography.Subtitle className="text-xl uppercase">
        Experiences
      </Typography.Subtitle>
      <div className="flex flex-col gap-10">
        {experiences.data
          .sort((a, b) => a.id - b.id)
          .map(
            ({
              id,
              attributes: { title, description, skills, start, end }
            }) => (
              <Experience
                key={id}
                title={title}
                description={description}
                skills={skills.data.map((skill) => skill.attributes.name)}
                startDate={start}
                endDate={end}
              />
            )
          )}
      </div>
      <Button
        href={process.env.NEXT_PUBLIC_RESUME_DOWNLOAD ?? ''}
        target="_blank"
        label="View full resume"
        color="default"
        variant="text"
        className="w-fit text-xs"
        onClick={() => window.open(process.env.NEXT_PUBLIC_RESUME_DOWNLOAD)}
        icon={
          <ArrowRightIcon
            className="stroke h-3 w-3  stroke-slate-500 transition-all duration-300 ease-in-out group-hover/button:translate-x-1 group-hover/button:stroke-accentColor group-hover/button:stroke-2"
            stroke="black"
          />
        }
      />
    </section>
  )
}
