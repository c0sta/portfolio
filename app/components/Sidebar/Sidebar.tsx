'use client'
import { EnvelopeIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { Button, Typography } from '@/app/components/ui'
import { GitHubIcon, LinkedInIcon } from '@/app/assets'
import { useDarkMode } from '@/app/hooks'
import { ButtonClient } from '@/app/components/ui/Button/ButtonClient'
import { useMail } from '@/app/components/Greetings/useMail'
import { useSidebar } from './useSidebar'

export const Sidebar = () => {
  const { toggleTheme, isDarkThemeActive } = useDarkMode()
  const { emailMeHref } = useMail()
  const { navOptions, activeAnchor } = useSidebar()

  return (
    <section
      data-cy="sidebar"
      className="sticky top-0 hidden h-screen w-[30%] min-w-[300px] max-w-[300px] flex-col justify-between px-4 py-16 lg:visible lg:flex"
    >
      <div className="flex flex-col gap-16">
        <header>
          <Typography.Subtitle>Gabriel C. Moura</Typography.Subtitle>
          <Typography.Subtitle color="primary">
            Front-end Engineer
          </Typography.Subtitle>
        </header>

        <nav className="mt-6 flex flex-col gap-2">
          {navOptions.map((option) => (
            <Button
              key={option.key}
              label={option.label}
              href={`#${option.key}`}
              variant="text"
              color="default"
              className={`w-full ${
                activeAnchor === option.key ? '--sidebar-anchor-active' : ''
              }`}
            />
          ))}
        </nav>
      </div>

      <section
        data-cy="sidebar-contacts"
        className="flex flex-wrap items-center justify-between"
      >
        <ButtonClient
          icon={
            isDarkThemeActive ? (
              <SunIcon className="h-6 w-6 stroke-slate-500 group-hover/button:stroke-accentColor" />
            ) : (
              <MoonIcon className="h-6 w-6 stroke-slate-500 group-hover/button:stroke-accentColor" />
            )
          }
          className="h-11 w-11"
          color="default"
          variant="icon"
          onClick={toggleTheme}
        />

        <div className="flex flex-wrap gap-2">
          <Button
            variant="icon"
            color="default"
            className="h-11 w-11"
            href={emailMeHref}
            icon={
              <EnvelopeIcon className="fill-slate-500  stroke-white duration-200 group-hover/button:fill-accentColor dark:stroke-blackBackground" />
            }
          />
          <Button
            variant="icon"
            color="default"
            className="h-11 w-11"
            href={process.env.NEXT_PUBLIC_GITHUB_PROFILE ?? ''}
            target="_blank"
            icon={
              <GitHubIcon className="fill-slate-500 stroke-transparent group-hover/button:fill-accentColor" />
            }
          />
          <Button
            variant="icon"
            color="default"
            className="h-11 w-11"
            href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE ?? ''}
            target="_blank"
            icon={
              <LinkedInIcon className="fill-slate-500 stroke-transparent group-hover/button:fill-accentColor" />
            }
          />
        </div>
      </section>
    </section>
  )
}
