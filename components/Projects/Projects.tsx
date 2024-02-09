import { forwardRef } from "react";
import Image from "next/image";
import { Button, Typography, Tags } from "@/components/ui";
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { Project } from "@/components";

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-col justify-between gap-6">
        <Typography.Subtitle className="text-xl uppercase">
          Projects
        </Typography.Subtitle>

        <div className="flex flex-wrap gap-6">
          <Project
            imageSrc="https://cdn.dribbble.com/userupload/10135135/file/original-a485f51a500a8b96e273229a3017c4b7.png"
            imageAlt=""
            title="quimicAR"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            skills={["React", "Node", "Typescript"]}
            seeCodeUrl=""
            seeLiveUrl=""
          />
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
