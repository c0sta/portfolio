import type { Meta, StoryObj } from '@storybook/react'
import { Tags } from './Tags'

const meta: Meta<typeof Tags> = {
  component: Tags,
  tags: ['autodocs'],
  title: 'UI Components/Tags'
}

export default meta
type Story = StoryObj<typeof Tags>

export const Default: Story = {
  args: {
    labels: ['React', 'Typescript', 'Node']
  },
  render: (args) => <Tags {...args} />
}
