import React, { Suspense } from 'react'
import {
  Button,
  Contacts,
  Experiences,
  Projects,
  Sidebar,
  Summary
} from '@/app/components'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export const Content = () => {
  return (
    <section className="flex gap-20">
      <Sidebar />
      <div className="flex h-full w-full flex-col gap-16 px-4 py-16 lg:w-[70%]">
        <Summary />
        <Suspense fallback={<h1>Loading projects...</h1>}>
          <Projects />
        </Suspense>

        <Suspense fallback={<h1>Loading experiences...</h1>}>
          <Experiences />
        </Suspense>
        <Contacts />

        <div className="flex w-full justify-center">
          <Button
            label="Back to top"
            href="#home"
            variant="text"
            color="default"
            className="w-fit text-xs "
            icon={
              <ArrowUpIcon className="h-3 w-3 stroke-slate-500  stroke-2 transition-all ease-in-out group-hover/button:stroke-accentColor" />
            }
          />
        </div>
      </div>
    </section>
  )
}
