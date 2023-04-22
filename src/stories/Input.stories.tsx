import { Meta, StoryObj } from '@storybook/react';
import Input from '@/components/Input';
import { ChakraProvider } from '@chakra-ui/react';
import globalTheme from '@/configs/globalTheme';
const meta = {
  title: 'Example/Input',
  component: Input,
  decorators: [
    Story => (
      <ChakraProvider theme={globalTheme}>
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
