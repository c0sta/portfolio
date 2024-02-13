import React, { Suspense } from 'react'
import {
  Button,
  Contacts,
  Experiences,
  Greetings,
  Projects,
  Sidebar,
  Summary
} from '@/app/components'
import { useSidebar } from '@/app/components/Sidebar/useSidebar'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'

export default function Page() {
  const { navOptions } = useSidebar()

  return (
    <main className="h-full overflow-y-auto px-20">
      <section
        id="home"
        className="flex h-screen flex-col items-center justify-center"
      >
        <Greetings />

        <div className="flex h-[10vh] items-center">
          <Button
            href="#summary"
            color="primary"
            variant="icon"
            className="h-[2.5rem] w-[2.5rem] animate-bounce rounded-full transition-all duration-300 hover:bg-accentColorLight"
            icon={
              <ArrowDownIcon
                className="h-5 w-5 stroke-slate-500 transition-colors ease-in-out
              group-hover/button:stroke-accentColor dark:stroke-slate-400 dark:group-hover/button:stroke-accentColor"
                stroke="black"
              />
            }
          />
        </div>
      </section>

      <section className="flex gap-20">
        <Sidebar navOptions={navOptions} />
        <div className="flex h-full w-full flex-col gap-16 px-4 py-16 md:w-[70%]">
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
              icon={<ArrowUpIcon className="h-4 w-4" />}
              className="w-fit text-xs"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
