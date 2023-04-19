/* eslint-disable react/no-children-prop */
import { Spinner } from '@chakra-ui/react';

type CustomInputProps = {
  color: string;
};
function CustomInput({ color }: CustomInputProps) {
  return <Spinner color={color} />;
}

export default CustomInput;
