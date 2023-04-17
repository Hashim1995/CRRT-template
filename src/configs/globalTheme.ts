import { extendTheme } from '@chakra-ui/react';

const globalTheme = extendTheme({
  colors: {
    orange: {
      1: '#FCC822',
      2: 'yellow'
    },
    black_1: '#333333',
    gray_1: '#717171',
    gray: {
      200: 'red'
    }
  }
});

export default globalTheme;
