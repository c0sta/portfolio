"use client";
import React, { forwardRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Tags, Typography } from "@/components";

export const Experiences = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="flex flex-col gap-6 ">
      <Typography.Subtitle className="text-xl uppercase">
        Experience
      </Typography.Subtitle>
      <div className="flex flex-col gap-10">
        <article className="flex gap-8">
          <span className="hidden w-2/12 text-xs text-slate-500  xl:flex">
            April 2022 - Present
          </span>
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center justify-between">
              <strong className="leading-4">Front-End Engineer</strong>
              <span className="visible text-sm  text-slate-500 xl:hidden">
                April 2022 - Present
              </span>
            </div>
            <Typography.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography.Description>

            <Tags labels={["React", "Node", "Typescript"]} />
          </div>
        </article>
        <article className="flex gap-8">
          <span className="hidden w-2/12  text-xs text-slate-500  xl:flex">
            April 2021 - April 2022
          </span>
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center justify-between">
              <strong className="leading-4">Front-End Engineer</strong>
              <span className="visible text-sm text-slate-500 xl:hidden">
                April 2022 - Present
              </span>
            </div>
            <Typography.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography.Description>

            <Tags labels={["React", "Node", "Typescript"]} />
          </div>
        </article>
      </div>
      <Button
        label="View full resume"
        color="default"
        variant="text"
        className="w-fit text-xs"
        onClick={() => window.open(process.env.NEXT_PUBLIC_RESUME_DOWNLOAD)}
        icon={
          <ArrowRightIcon
            className="stroke h-3 w-3  stroke-slate-500 transition-all duration-300 ease-in-out group-hover/button:translate-x-1 group-hover/button:stroke-accentColor group-hover/button:stroke-2"
            stroke="black"
          />
        }
      />
    </section>
  );
});

Experiences.displayName = "Experiences";
