import { AspectRatio, Box } from '@chakra-ui/react';
import React, { CSSProperties, ReactElement } from 'react';

interface ISvfWrapper {
  children: ReactElement;
  height: string | number;
  width: string | number;
  style?: CSSProperties;
  ratio?: number;
}
function SvgWrapper({ children, style, ratio, width, height }: ISvfWrapper) {
  return (
    <Box style={style} w={width} h={height}>
      {ratio ? (
        <AspectRatio ratio={ratio}>{children}</AspectRatio>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
      )}
    </Box>
  );
}

export default SvgWrapper;
