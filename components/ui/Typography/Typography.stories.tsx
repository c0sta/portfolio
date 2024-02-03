import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from ".";
import { contentMocked, defaultProps } from "./contants";

const meta: Meta<typeof Typography> = {
  component: Typography,
  tags: ["autodocs"],
  title: "UI Components/Typography",
};

export default meta;
type Story = StoryObj<typeof Typography>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Hierarchy: Story = {
  render: () => {
    return (
      <>
        <Typography.Title>Title (h1)</Typography.Title>
        <Typography.Title color="primary">Title (h1)</Typography.Title>
        <Typography.Subtitle>Subtitle (h2)</Typography.Subtitle>
        <Typography.Description>Description (p)</Typography.Description>
      </>
    );
  },
};

export const Default: Story = {
  args: defaultProps,
  render: (args) => <Typography {...args}>{contentMocked.large}</Typography>,
};

export const Light: Story = {
  args: {
    ...defaultProps,
    weight: "light",
  },
  render: (args) => <Typography {...args}>{contentMocked.large}</Typography>,
};

export const Bold: Story = {
  args: {
    ...defaultProps,
    weight: "bold",
  },
  render: (args) => <Typography {...args}>{contentMocked.large}</Typography>,
};

export const ExtraLarge: Story = {
  args: {
    ...defaultProps,
    size: "xlg",
  },
  render: (args) => <Typography {...args}>{contentMocked.small}</Typography>,
};

export const Large: Story = {
  args: {
    ...defaultProps,
    size: "lg",
  },
  render: (args) => <Typography {...args}>{contentMocked.small}</Typography>,
};

export const Small: Story = {
  args: {
    ...defaultProps,
    size: "sm",
  },
  render: (args) => <Typography {...args}>{contentMocked.small}</Typography>,
};

export const Primary: Story = {
  args: {
    ...defaultProps,
    color: "primary",
  },
  render: (args) => <Typography {...args}>{contentMocked.small}</Typography>,
};

export const Secondary: Story = {
  args: {
    ...defaultProps,
    color: "secondary",
  },
  render: (args) => <Typography {...args}>{contentMocked.small}</Typography>,
};
