import { forwardRef } from "react";
import Image from "next/image";
import { Button, Typography } from "@/components/ui";
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-col justify-between gap-6">
        <Typography.Subtitle className="text-xl uppercase">
          Projects
        </Typography.Subtitle>

        <div className="flex flex-wrap gap-6">
          <article className="flex w-4/12 min-w-[230px] max-w-[460px] flex-col rounded-lg bg-slate-50 transition-all duration-300 ease-in-out hover:translate-y-1 hover:scale-105 hover:cursor-pointer hover:bg-slate-100 hover:shadow-sm dark:bg-blackBackgroundLight dark:hover:bg-blackBackgroundLight">
            <Image
              src="https://cdn.dribbble.com/userupload/10135135/file/original-a485f51a500a8b96e273229a3017c4b7.png"
              className=" rounded-lg"
              width={250}
              height={250}
              style={{ width: "auto", height: "auto" }}
              alt="project image"
            />
            <section className="p-6">
              <div className="flex flex-wrap items-center justify-between">
                <strong>quimicAR</strong>{" "}
                <div className="flex gap-1">
                  <Button
                    variant="icon"
                    color="default"
                    className="h-10 w-10 rounded-full p-1"
                    icon={<CodeBracketIcon className="h-4 w-4" />}
                  />
                  <Button
                    variant="icon"
                    color="default"
                    className="h-10 w-10 rounded-full p-1"
                    icon={<ArrowTopRightOnSquareIcon className="h-4 w-4" />}
                  />
                </div>
              </div>
              <Typography.Description className="text-xs ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Typography.Description>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="w-fit rounded-2xl bg-accentColorLight px-4 py-1 text-xs text-accentColor">
                  React
                </span>

                <span className="w-fit rounded-2xl bg-accentColorLight px-4 py-1 text-xs text-accentColor">
                  Node
                </span>
                <span className="w-fit rounded-2xl bg-accentColorLight px-4 py-1 text-xs text-accentColor">
                  Typescript
                </span>
              </div>
            </section>
          </article>
        </div>

        <Button
          label="View all projects"
          color="default"
          variant="text"
          className="w-fit text-xs"
          onClick={() => {
            window.open(
              `${process.env.NEXT_PUBLIC_GITHUB_PROFILE}?tab=repositories&q=&type=&language=typescript`,
            );
          }}
          icon={
            <ArrowRightIcon
              className="stroke h-3 w-3  stroke-slate-500 transition-all duration-300 ease-in-out group-hover/button:translate-x-1 group-hover/button:stroke-accentColor group-hover/button:stroke-2"
              stroke="black"
            />
          }
        />
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
