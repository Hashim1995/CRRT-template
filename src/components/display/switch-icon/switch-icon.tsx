import { Box, Switch } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

interface ISwitchIcon {
  size?: string;
  status: boolean;
  onChange: () => void;
}
function SwitchIcon({ onChange, status, size = 'md' }: ISwitchIcon) {
  return (
    <Switch defaultChecked={status} onChange={onChange} size={size}>
      <Box top="23%" right={status ? '36px' : '14px'} position="absolute">
        {status ? <FiSun /> : <FiMoon />}
      </Box>
    </Switch>
  );
}

export default SwitchIcon;
