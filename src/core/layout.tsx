/* eslint-disable no-unused-vars */
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
import { top } from '@popperjs/core/lib/enums';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';

export default function Layout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMenuCollapsed] = useLocalStorage('menuCollapsed', false);

  const marginMd = !isOpen ? '0px' : '240px';
  const marginCollapsedMd = !isOpen ? '0px' : '300px';

  const sidebarWidth = isMenuCollapsed ? '80px' : '240px';
  const contentMarginLeft = isMenuCollapsed ? marginCollapsedMd : marginMd;

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Flex minH="100vh">
        <Box position="fixed" height="100vh" zIndex={99}>
          <Sidebar
            onClose={onClose}
            width={{ base: '240px', md: sidebarWidth }}
            display={{ base: 'none', md: 'block' }}
            isOpen={isOpen}
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
              <Sidebar isOpen={isOpen} onClose={onClose} />
            </DrawerContent>
          </Drawer>
        </Box>
        <Box
          transition=".4s ease"
          width="100%"
          pl={{ md: 30, base: 0 }}
          pr={{ md: 10, base: 0 }}
          pt={{ md: 7, base: 0 }}
          ml={{ md: !isMenuCollapsed ? '240px' : '80px', base: '0' }}
          bg="gray.100"
          pos="relative"
        >
          <Flex
            zIndex={98}
            borderRadius={6}
            as="header"
            position="sticky"
            bg={useColorModeValue('whiteAlpha.200', 'gray.600')}
            justifyContent="flex-end"
            right={0}
            top={0}
            backdropFilter="saturate(180%) blur(5px)"
            w="100%"
            width="100%"
            shadow="lg"
            transition=".4s ease"
          >
            <Navbar onOpen={onOpen} />
          </Flex>
          <Box mt={20} transition=".4s ease">
            <Flex
              p={4}
              alignItems="center"
              shadow="lg"
              bg={useColorModeValue('white', 'gray.900')}
              borderBottomWidth="1px"
              display="flex"
              borderRadius={6}
              justifyContent="center"
              align="center"
              borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <Outlet />
            </Flex>
          </Box>
          <Box my={6} transition=".4s ease">
            <Flex
              p={4}
              shadow="lg"
              alignItems="center"
              borderRadius={6}
              bg={useColorModeValue('white', 'gray.900')}
              borderBottomWidth="1px"
              borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            >
              Footer Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro, ipsum illo! Sapiente neque officia non vero mollitia
              quibusdam delectus voluptatibus inventore ex saepe, consequatur
              natus dolor dolore voluptate totam modi!
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
