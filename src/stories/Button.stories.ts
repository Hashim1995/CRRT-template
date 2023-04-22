import type { Meta, StoryObj } from '@storybook/react';

import Button from '@components/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    disabled: false
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    disabled: false
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    disabled: false
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button'
  }
};
