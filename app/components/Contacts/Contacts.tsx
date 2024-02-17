import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { Button, Typography } from '@/app/components/ui'
import { useMail } from '../Greetings/useMail'

export default function Contacts() {
  const { emailMeHref } = useMail()
  return (
    <section id="contacts" className="flex flex-col gap-6">
      <Typography.Subtitle className="text-xl ">
        {"Let's connect"}
      </Typography.Subtitle>
      <div className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
        <article className="w-full text-xs md:w-8/12">
          <Typography.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography.Description>
        </article>
        <div className="flex max-h-[36px] w-full justify-end gap-2 md:w-fit">
          <Button
            variant="contained"
            label="Reach me out"
            color="primary"
            className="w-auto whitespace-nowrap text-sm font-semibold"
            href={emailMeHref}
            icon={
              <PaperAirplaneIcon className="h-4 w-4 stroke-2 transition-all group-hover/button:translate-x-1 " />
            }
          />
        </div>
      </div>
    </section>
  )
}
