import { Meta, StoryObj } from '@storybook/react';
import Input from '@/components/Input';
import { ChakraProvider } from '@chakra-ui/react';
const meta = {
  title: 'Input',
  component: Input,
  decorators: [
    Story => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    )
  ],
  tags: ['autodocs']
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {
    placeholder: 'test'
  }
};
