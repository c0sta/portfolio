import React from 'react'
import { Tags, Typography } from '..'

interface ExperienceProps {
  title: string
  description: string
  skills: string[]
  startDate: string
  endDate: string
}
export function Experience({
  title,
  description,
  skills,
  startDate,
  endDate
}: ExperienceProps) {
  return (
    <article className="flex gap-8">
      <span className="hidden w-2/12 text-xs text-slate-500  xl:flex">
        {startDate} - {endDate}
      </span>
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between">
          <strong className="leading-4">{title}</strong>
          <span className="visible text-sm  text-slate-500 xl:hidden">
            {startDate} - {endDate}
          </span>
        </div>
        <Typography.Description>{description}</Typography.Description>

        <Tags labels={skills} />
      </div>
    </article>
  )
}
