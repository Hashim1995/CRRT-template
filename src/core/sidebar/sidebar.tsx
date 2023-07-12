import {
  useColorModeValue,
  Box,
  Flex,
  CloseButton,
  BoxProps,
  IconButton
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiArrowRightCircle,
  FiArrowLeftCircle
} from 'react-icons/fi';
import { useLocalStorage } from 'usehooks-ts';
import { ReactComponent as Logo } from '@assets/logo/logoOptima2019-01.svg';

import SvgWrapper from '@/components/display/svg-wrapper/svg-wrapper';
import NavItem from './navbar-item/navbar-item';

interface SidebarProps extends BoxProps {
  onClose: () => void;
  isOpen?: boolean;
}
interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
}
function Sidebar({ onClose, isOpen, ...rest }: SidebarProps) {
  const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, url: '/' },
    { name: 'Trending', icon: FiTrendingUp, url: '/about' },
    { name: 'Explore', icon: FiCompass, url: 'about' },
    { name: 'Favourites', icon: FiStar, url: 'about' },
    { name: 'Settings', icon: FiSettings, url: 'about' }
  ];

  // eslint-disable-next-line no-unused-vars
  const [isMenuCollapsed, setIsMenuCollapsed] = useLocalStorage(
    'menuCollapsed',
    false
  );

  const handleToggleCollapse = () => {
    setIsMenuCollapsed(prevValue => !prevValue);
  };

  return (
    <Box
      transition=".4s ease"
      bg={useColorModeValue('white', 'gray.900')}
      shadow="lg"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: '100%', md: isMenuCollapsed ? '80px' : '240px' }}
      overflow="hidden"
      h="full"
      {...rest}
    >
      <Flex
        position="relative"
        alignItems="center"
        justifyContent={isOpen ? 'space-between' : 'center'}
        p={2}
      >
        {' '}
        <SvgWrapper height="70px" width="70px">
          <Logo />
        </SvgWrapper>
        <IconButton
          className="collapseBtn"
          variant="outline"
          colorScheme="teal"
          borderRadius="circle"
          aria-label="Collapse Menu"
          onClick={handleToggleCollapse}
          transition=".4s ease"
          fontSize="20px"
          display={{ base: 'none', md: 'flex' }}
          icon={
            isMenuCollapsed ? <FiArrowRightCircle /> : <FiArrowLeftCircle />
          }
          position="fixed"
          top="6%"
          left={isMenuCollapsed ? '60px' : '220px'}
          zIndex="999"
        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex position="relative" alignItems="flex-start" flexDirection="column">
        {LinkItems.map(link => (
          <NavItem url={link.url} key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
}

export default Sidebar;
