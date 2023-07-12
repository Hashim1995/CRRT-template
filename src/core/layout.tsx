import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Flex
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';

export default function Layout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuCollapsed] = useLocalStorage('menuCollapsed', false);

  const marginMd = !isOpen ? '0px' : '240px';
  const marginCollapsedMd = !isOpen ? '0px' : '80px';

  const sidebarWidth = isMenuCollapsed ? '80px' : '240px';
  const contentMarginLeft = isMenuCollapsed ? marginCollapsedMd : marginMd;

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar
        onClose={onClose}
        width={{ base: '0', md: sidebarWidth }}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={contentMarginLeft} transition=".4s ease">
        <Navbar onOpen={onOpen} />
      </Box>
      <Box ml={contentMarginLeft} transition=".4s ease">
        <Flex
          px={4}
          height="calc(100vh - 56px)"
          alignItems="center"
          bg={useColorModeValue('white', 'gray.900')}
          borderBottomWidth="1px"
          display="flex"
          justifyContent="center"
          align="center"
          borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Outlet />
        </Flex>

        <Flex
          px={4}
          height="20"
          alignItems="center"
          bg={useColorModeValue('white', 'gray.900')}
          borderBottomWidth="1px"
          borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        >
          Footer
        </Flex>
      </Box>
    </Box>
  );
}
