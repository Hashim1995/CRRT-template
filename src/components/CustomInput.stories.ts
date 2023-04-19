import type { Meta, StoryObj } from '@storybook/react';

import CustomInput from './CustomInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'CustomInput',
  component: CustomInput,
  tags: ['customChakraFormelements']
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Test: Story = {
  args: { color: 'red' }
};
