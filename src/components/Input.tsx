import { Input as ChakraInput } from '@chakra-ui/react';

type InputType = {
  placeholder: string;
};
export default function Input({ placeholder }: InputType) {
  return (
    <ChakraInput
      marginLeft="1"
      fontSize="fontSizes.9xl"
      borderRadius="circle"
      bg="orange.2"
      placeholder={placeholder}
    />
  );
}
