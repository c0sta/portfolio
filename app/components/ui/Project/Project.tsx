import React from 'react'
import Image from 'next/image'
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'
import { Button, Tags, Typography } from '@/app/components'

interface ProjectProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  skills: string[]
  seeCodeUrl: string
  seeLiveUrl: string
}
export function Project({
  imageSrc,
  imageAlt,
  title,
  description,
  skills,
  seeCodeUrl,
  seeLiveUrl
}: ProjectProps) {
  return (
    <section className="flex w-4/12 min-w-[230px] max-w-[460px] flex-col rounded-lg bg-slate-50 transition-all duration-300 ease-in-out hover:translate-y-1 hover:scale-105 hover:cursor-pointer hover:bg-slate-100 hover:shadow-sm dark:bg-blackBackgroundLight dark:hover:bg-blackBackgroundLight">
      {!!imageSrc.length && (
        <Image
          src={imageSrc}
          className=" rounded-lg"
          width={250}
          height={250}
          style={{ width: 'auto', height: 'auto' }}
          alt={imageAlt}
        />
      )}
      <section className="p-6">
        <div className="flex flex-wrap items-center justify-between">
          <strong>{title}</strong>
          <div className="flex gap-1">
            <Button
              target="_blank"
              href={seeCodeUrl}
              variant="icon"
              color="default"
              className="h-10 w-10 rounded-full p-2"
              icon={<CodeBracketIcon className="h-4 w-4" />}
            />
            <Button
              target="_blank"
              href={seeLiveUrl}
              variant="icon"
              color="default"
              className="h-10 w-10 rounded-full p-2"
              icon={<ArrowTopRightOnSquareIcon className="h-4 w-4" />}
            />
          </div>
        </div>
        <Typography.Description className="text-xs ">
          {description}
        </Typography.Description>
        <Tags labels={skills} />
      </section>
    </section>
  )
}
