import Image from 'next/image'
import { Typography } from '@/app/components'
import {
  NextJSIcon,
  NodeIcon,
  ReactIcon,
  ReactNativeIcon,
  StorybookIcon,
  TailwindCSSIcon,
  TypescriptIcon
} from '@/assets'
import { ButtonClient } from '../ui/Button/ButtonClient'
import { getSummary } from '@/app/lib/getSummaries'

export default async function Summary() {
  const { summary } = await getSummary()
  return (
    <div id="summary" className="flex flex-col gap-6 lg:flex-row">
      <article className="w-full lg:w-8/12">
        <Typography.Subtitle className="text-xl uppercase">
          About me
        </Typography.Subtitle>
        <br />
        <Typography.Description>
          {summary.data[0].attributes.about}
        </Typography.Description>
      </article>
      <section className="w-full lg:w-4/12">
        <Typography.Subtitle className="text-xl uppercase">
          Skills
        </Typography.Subtitle>
        <br />

        <div className="flex flex-wrap gap-4">
          <ButtonClient
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={ReactIcon}
                className="h-10 w-10 self-center"
                alt="React icon in a white color and a black background"
              />
            }
          />
          <ButtonClient
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={NodeIcon}
                className="h-10 w-10 self-center"
                alt="Node icon in a white color and a black background"
              />
            }
          />
          <ButtonClient
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={TypescriptIcon}
                className="h-10 w-10 self-center"
                alt="Typescript icon in a white color and a black background"
              />
            }
          />
          <ButtonClient
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={NextJSIcon}
                className="h-10 w-10 self-center"
                alt="Next icon in a white color and a black background"
              />
            }
          />
          <ButtonClient
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={TailwindCSSIcon}
                className="h-10 w-10 self-center"
                alt="Tailwind icon in a white color and a black background"
              />
            }
          />
          <ButtonClient
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={ReactNativeIcon}
                className="h-10 w-10 self-center"
                alt="React native icon in a white color and a black background"
              />
            }
          />
          <ButtonClient
            color="default"
            variant="contained"
            className="h-11 w-11"
            icon={
              <Image
                src={StorybookIcon}
                className="h-10 w-10 self-center"
                alt="Storybook icon in a white color and a black background"
              />
            }
          />
        </div>
      </section>
    </div>
  )
}
