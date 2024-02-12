import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { Button, Typography } from '@/app/components/ui'
import { GitHubIcon, LinkedInIcon } from '@/assets'
import { ButtonClient } from '../ui/Button/ButtonClient'

export default function Contacts() {
  return (
    <section id="contacts" className="flex flex-col gap-6">
      <Typography.Subtitle className="text-xl uppercase">
        {"Let's connect"}
      </Typography.Subtitle>
      <div className="flex items-center gap-2">
        <article className="w-8/12 text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </article>
        <div className="flex flex-wrap gap-2">
          <ButtonClient
            variant="contained"
            color="default"
            className="h-11 w-11"
            icon={<EnvelopeIcon className="self-center" />}
          />
          <Button
            isLink
            href={process.env.NEXT_PUBLIC_GITHUB_PROFILE ?? ''}
            target="_blank"
            variant="contained"
            color="default"
            className="h-11 w-11"
            icon={<GitHubIcon className="self-center fill-white" />}
          />
          <Button
            isLink
            href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE ?? ''}
            target="_blank"
            variant="contained"
            color="default"
            className="h-11 w-11"
            icon={<LinkedInIcon className="self-center fill-white" />}
          />
        </div>
      </div>
    </section>
  )
}
