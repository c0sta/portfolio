"use client";
import { EnvelopeIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@/components/ui";
import { GitHubIcon, LinkedInIcon } from "@/assets";
import { useDarkMode } from "@/hooks";
import { useContacts } from "../Contacts/useContacts";
import { EContacts } from "../Contacts/types";

export interface SidebarProps {
  navOptions: Array<{
    key: string;
    label: string;
    ref: React.MutableRefObject<HTMLElement | null>;
  }>;
}
export const Sidebar = ({ navOptions }: SidebarProps) => {
  const { toggleTheme, isDarkThemeActive } = useDarkMode();
  const { redirectTo } = useContacts();

  return (
    <section className="sticky top-0 hidden h-screen w-[30%] min-w-[300px] max-w-[300px] flex-col justify-between px-4 py-16 md:visible md:flex">
      <div className="flex flex-col gap-16">
        <header>
          <Typography.Subtitle>Gabriel C. Moura</Typography.Subtitle>
          <Typography.Subtitle color="primary">
            Front-end Engineer
          </Typography.Subtitle>
          <br />
          <Typography.Description className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography.Description>
        </header>

        <nav className="flex flex-col gap-2">
          {navOptions.map((option) => (
            <Button
              key={option.key}
              label={option.label}
              onClick={() => {
                option.ref.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              variant="text"
              color="default"
              className="w-full"
            />
          ))}
        </nav>
      </div>

      <section className="flex flex-wrap items-center justify-between">
        <Button
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
            icon={
              <EnvelopeIcon className="fill-slate-500  stroke-white duration-200 group-hover/button:fill-accentColor dark:stroke-blackBackground" />
            }
          />
          <Button
            variant="icon"
            color="default"
            className="h-11 w-11"
            onClick={() => redirectTo(EContacts.GITHUB)}
            icon={
              <GitHubIcon className="fill-slate-500 stroke-transparent group-hover/button:fill-accentColor" />
            }
          />
          <Button
            variant="icon"
            color="default"
            className="h-11 w-11"
            onClick={() => redirectTo(EContacts.LINKEDIN)}
            icon={
              <LinkedInIcon className="fill-slate-500 stroke-transparent group-hover/button:fill-accentColor" />
            }
          />
        </div>
      </section>
    </section>
  );
};
