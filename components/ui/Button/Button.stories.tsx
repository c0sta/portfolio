import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import Image from "next/image";
import { GitHubIcon } from "@/assets";
import {
  ArrowRightIcon,
  ListBulletIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  title: "UI Components/Button",
};
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    variant: "contained",
    color: "primary",
    label: "Get in touch",
  },
  render: (args) => <Button {...args} />,
};

export const Icon: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button
        variant="contained"
        color="primary"
        icon={<GitHubIcon className="h-7 w-7 self-center fill-white" />}
      />
      <Button
        label="View my resume"
        variant="contained"
        color="default"
        icon={
          <ArrowRightIcon className="h-5 w-5 stroke-slate-50" stroke="black" />
        }
      />
      <Button
        label="View my resume"
        variant="text"
        color="default"
        icon={
          <ArrowRightIcon
            className="stroke h-5 w-5  stroke-slate-500 transition-all duration-300 ease-in-out group-hover/button:translate-x-1 group-hover/button:stroke-accentColor group-hover/button:stroke-2"
            stroke="black"
          />
        }
      />
      <Button
        variant="icon"
        color="default"
        icon={
          <Squares2X2Icon className="h-5 w-5 stroke-slate-500 group-hover/button:stroke-accentColor" />
        }
      />
      <Button
        variant="icon"
        color="default"
        icon={
          <ListBulletIcon className="h-5 w-5 stroke-slate-500 group-hover/button:stroke-accentColor" />
        }
      />
    </div>
  ),
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    color: "primary",
    label: "Get in touch",
  },
  render: (args) => <Button {...args} />,
};

export const Text: Story = {
  args: {
    variant: "text",
    color: "primary",
    label: "Get in touch",
  },
  render: (args) => <Button {...args} />,
};

export default meta;
