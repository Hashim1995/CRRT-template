import { Icon, Flex, FlexProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Link as RouteLink } from 'react-router-dom';

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string;
  url: string;
}
function NavItem({ icon, url, children, ...rest }: NavItemProps) {
  return (
    <RouteLink to={url}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white'
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </RouteLink>
  );
}

export default NavItem;
