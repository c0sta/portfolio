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
    <article className="flex">
      <span className="hidden w-3/12 py-2 text-xs text-slate-500 xl:flex">
        {startDate} - {endDate}
      </span>
      <div className="flex w-full flex-col gap-2">
        <div className="flex flex-wrap items-center justify-between gap-2 py-2">
          <strong className="leading-4">{title}</strong>
          <span className="visible text-xs text-slate-500 xl:hidden">
            {startDate} - {endDate}
          </span>
        </div>
        <Typography.Description>{description}</Typography.Description>

        <Tags labels={skills} />
      </div>
    </article>
  )
}
