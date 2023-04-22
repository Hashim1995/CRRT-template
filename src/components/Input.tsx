import { Input as ChakraInput } from '@chakra-ui/react';

type InputType = {
  placeholder: string;
};
export default function Input({ placeholder }: InputType) {
  return <ChakraInput placeholder={placeholder} />;
}
