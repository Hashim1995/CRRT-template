import { extendTheme } from '@chakra-ui/react';
import colors from './style/colors';
import breakpoints from './style/breakpoints';
import borderRadius from './style/borderRadius';
import sizes from './style/sizes';
import spacing from './style/spacing';
import typography from './style/typography';
import zIndex from './style/z-index';

const overrides = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  ...colors,
  ...breakpoints,
  ...borderRadius,
  ...sizes,
  ...spacing,
  ...spacing,
  ...typography,
  ...zIndex
};

export default extendTheme(overrides);
