import type { Meta, StoryObj } from "@storybook/react";
import { Project } from "./Project";

const meta: Meta<typeof Project> = {
  component: Project,
  tags: ["autodocs"],
  title: "UI Components/Project",
};

export default meta;
type Story = StoryObj<typeof Project>;

export const Default: Story = {
  args: {
    imageSrc:
      "https://cdn.dribbble.com/userupload/10135135/file/original-a485f51a500a8b96e273229a3017c4b7.png",
    imageAlt: "",
    title: "quimicAR",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ["React", "Node", "Typescript"],
    seeCodeUrl: "",
    seeLiveUrl: "",
  },
  render: (args) => <Project {...args} />,
};
