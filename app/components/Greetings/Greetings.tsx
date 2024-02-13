import React from 'react'
import { GitHubIcon, LinkedInIcon } from '@/app/assets'
import { Typography, Button } from '@/app/components/ui'
import { useMail } from './useMail'

export const Greetings = () => {
  const { emailMeHref } = useMail()
  return (
    <section
      data-cy="greetings"
      className="flex h-full w-96 flex-col justify-center gap-16"
    >
      <div className="flex flex-col gap-2">
        <Typography.Title className="leading-snug">
          Hey <button className="hover:animate-wave ">👋🏻</button>
          <br />
          {"I'm Gabriel C. Moura"}
        </Typography.Title>
        <Typography.Title color="primary">Front-end Engineer</Typography.Title>
        <Typography.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography.Description>
      </div>

      <div className="flex gap-4" data-cy="greetings-contacts">
        <Button
          color="primary"
          variant="contained"
          href={process.env.NEXT_PUBLIC_GITHUB_PROFILE ?? ''}
          target="_blank"
          icon={<GitHubIcon className="fill-white" />}
        />
        <Button
          color="primary"
          variant="contained"
          href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE ?? ''}
          target="_blank"
          icon={<LinkedInIcon className="fill-white" />}
        />

        <div className="group/getInTouch relative flex items-center border-accentColor">
          <div className="absolute z-0 h-full w-0 rounded-lg bg-accentColor transition-all duration-500 group-hover/getInTouch:w-full" />
          <Button
            href={emailMeHref}
            color="primary"
            variant="outlined"
            label="Get in touch"
            className="z-10 hover:text-slate-50"
          />
        </div>
      </div>
    </section>
  )
}
