import React from "react";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/assets";
import { Typography } from "../ui/Typography";

export const Greetings = () => {
  return (
    <section className="flex h-full w-96 flex-col justify-center gap-16">
      <div>
        <Typography.Title>
          Hey <button className="hover:animate-wave ">👋🏻</button>
          <br />
          I'm Gabriel C. Moura
        </Typography.Title>
        <Typography.Title color="primary">Front-end Engineer</Typography.Title>
        <Typography.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography.Description>
      </div>

      <div className="flex gap-4">
        <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-accentColor text-white">
          <Image
            src={GitHubIcon}
            alt="GitHub icon in a white color and a purple background"
          />
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-lg bg-accentColor text-white">
          <Image
            src={LinkedInIcon}
            alt="LinkedIn icon in a white color  and a purple background"
          />
        </button>

        <div className="group/getInTouch relative flex items-center rounded-lg border-2 border-accentColor">
          <div className="absolute z-0 h-full w-0 rounded-sm bg-accentColor group-hover/getInTouch:animate-progress" />
          <button className="z-10 p-2 font-semibold text-accentColor transition-colors ease-in group-hover/getInTouch:text-slate-50 dark:group-hover/getInTouch:text-slate-50">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};
