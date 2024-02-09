'use client'
import { useRef } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { Home } from './home/Home'
import {
  Sidebar,
  Summary,
  Projects,
  Experiences,
  Contacts,
  Button
} from '@/components'
import { useSidebar } from '@/components/Sidebar/useSidebar'

export default function Page() {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const homeRef = useRef<HTMLElement | null>(null)

  const { navOptions, sectionsRef } = useSidebar()

  return (
    <main className="h-full overflow-y-auto px-20">
      <Home ref={homeRef} contentRef={contentRef} />

      <div ref={contentRef} className="flex gap-20">
        <Sidebar navOptions={navOptions} />
        <div className="flex h-full w-full flex-col gap-16 px-4 py-16 md:w-[70%]">
          <Summary ref={sectionsRef.summaryRef} />
          <Projects ref={sectionsRef.projectsRef} />
          <Experiences ref={sectionsRef.experiencesRef} />
          <Contacts ref={sectionsRef.contactsRef} />

          <div className="flex w-full justify-center">
            <Button
              label="Back to top"
              onClick={() => {
                homeRef.current?.scrollIntoView({ behavior: 'smooth' })
              }}
              variant="text"
              color="default"
              icon={<ArrowUpIcon className="h-4 w-4" />}
              className="w-fit text-xs"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
