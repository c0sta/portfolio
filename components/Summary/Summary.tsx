import { forwardRef } from "react";
import Image from "next/image";
import { Button, Typography } from "@/components";
import {
  NextJSIcon,
  NodeIcon,
  ReactIcon,
  ReactNativeIcon,
  StorybookIcon,
  TailwindCSSIcon,
  TypescriptIcon,
} from "@/assets";

export const Summary = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row" ref={ref}>
      <article className="w-full lg:w-8/12">
        <Typography.Subtitle className="text-xl uppercase">
          About me
        </Typography.Subtitle>
        <br />
        <Typography.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography.Description>
      </article>
      <section className="w-full lg:w-4/12">
        <Typography.Subtitle className="text-xl uppercase">
          Skills
        </Typography.Subtitle>
        <br />

        <div className="flex flex-wrap gap-4">
          <Button
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={ReactIcon}
                className="h-10 w-10 self-center"
                alt="GitHub icon in a white color and a purple background"
              />
            }
          />
          <Button
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={NodeIcon}
                className="h-10 w-10 self-center"
                alt="GitHub icon in a white color and a purple background"
              />
            }
          />
          <Button
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={TypescriptIcon}
                className="h-10 w-10 self-center"
                alt="GitHub icon in a white color and a purple background"
              />
            }
          />
          <Button
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={NextJSIcon}
                className="h-10 w-10 self-center"
                alt="GitHub icon in a white color and a purple background"
              />
            }
          />
          <Button
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={TailwindCSSIcon}
                className="h-10 w-10 self-center"
                alt="GitHub icon in a white color and a purple background"
              />
            }
          />
          <Button
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={ReactNativeIcon}
                className="h-10 w-10 self-center"
                alt="GitHub icon in a white color and a purple background"
              />
            }
          />
          <Button
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={StorybookIcon}
                className="h-10 w-10 self-center"
                alt="GitHub icon in a white color and a purple background"
              />
            }
          />
        </div>
      </section>
    </div>
  );
});

Summary.displayName = "Summary";
