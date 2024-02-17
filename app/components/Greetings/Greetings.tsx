import React from 'react'
import { GitHubIcon, LinkedInIcon } from '@/app/assets'
import { Typography, Button } from '@/app/components/ui'
import { useMail } from './useMail'

export const Greetings = () => {
  const { emailMeHref } = useMail()
  return (
    <section
      data-cy="greetings"
      className="flex h-full  flex-col items-center justify-center gap-16"
    >
      <div className="flex w-fit flex-col gap-2">
        <Typography.Title className="text-[2rem] leading-snug md:text-4xl">
          Hey <button className="hover:animate-wave ">👋🏻</button>
          <br />
          {"I'm Gabriel C. Moura"}
        </Typography.Title>
        <Typography.Title color="primary" className="text-[2rem] md:text-4xl">
          Front-end Engineer
        </Typography.Title>
        <Typography.Description className="text-sm">
          Lorem Ipsum is simply dummy text of the printing .
        </Typography.Description>
      </div>

      <div
        className="flex w-full flex-wrap justify-start gap-4"
        data-cy="greetings-contacts"
      >
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
            className="z-10 font-semibold hover:text-slate-50"
          />
        </div>
      </div>
    </section>
  )
}
