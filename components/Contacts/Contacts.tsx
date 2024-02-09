import React, { forwardRef } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { Button, Typography } from '@/components/ui'
import { GitHubIcon, LinkedInIcon } from '@/assets'
import { useContacts } from './useContacts'
import { EContacts } from './types'

export const Contacts = forwardRef<HTMLElement>((_, ref) => {
  const { redirectTo } = useContacts()
  return (
    <section ref={ref} className="flex flex-col gap-6">
      <Typography.Subtitle className="text-xl uppercase">
        {"Let's connect"}
      </Typography.Subtitle>
      <div className="flex items-center gap-2">
        <article className="w-8/12 text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </article>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="contained"
            color="default"
            className="h-11 w-11"
            icon={<EnvelopeIcon className="h-10 w-10 self-center" />}
          />
          <Button
            onClick={() => redirectTo(EContacts.GITHUB)}
            variant="contained"
            color="default"
            className="h-11 w-11"
            icon={<GitHubIcon className="h-7 w-7 self-center fill-white" />}
          />
          <Button
            onClick={() => redirectTo(EContacts.LINKEDIN)}
            variant="contained"
            color="default"
            className="h-11 w-11"
            icon={<LinkedInIcon className="h-10 w-10 self-center fill-white" />}
          />
        </div>
      </div>
    </section>
  )
})

Contacts.displayName = 'Contacts'
