import {
  useColorModeValue,
  Box,
  Text,
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
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import NavItem from './navbar-item/navbar-item';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}
interface LinkItemProps {
  name: string;
  icon: IconType;
}
function Sidebar({ onClose, ...rest }: SidebarProps) {
  const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome },
    { name: 'Trending', icon: FiTrendingUp },
    { name: 'Explore', icon: FiCompass },
    { name: 'Favourites', icon: FiStar },
    { name: 'Settings', icon: FiSettings }
  ];

  // eslint-disable-next-line no-unused-vars
  const [isMenuCollapsed, setIsMenuCollapsed] = useLocalStorage(
    'menuCollapsed',
    false
  );

  const menuCollapsed = useReadLocalStorage('menuCollapsed');
  const handleToggleCollapse = () => {
    setIsMenuCollapsed(prevValue => !prevValue);
  };

  return (
    <Box
      transition=".4s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={menuCollapsed ? 240 : 30}
      pos="fixed"
      overflow="hidden"
      h="full"
      {...rest}
    >
      <Flex
        position="relative"
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <IconButton
          className="collapseBtn"
          variant="outline"
          colorScheme="teal"
          borderRadius="circle"
          aria-label="Collapse Menu"
          onClick={handleToggleCollapse}
          transition=".4s ease"
          fontSize="20px"
          icon={menuCollapsed ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          position="fixed"
          top="6%"
          left={menuCollapsed ? '60px' : '220px'}
          zIndex="999"
        />

        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
}

export default Sidebar;
