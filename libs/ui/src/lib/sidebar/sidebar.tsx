import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  DrawerBody,
  Icon,
} from '@chakra-ui/react';
import { SiWwise } from 'react-icons/si';
import { useSidebar } from './sidebar-context/sidebar-context';
import SidebarItems, { SidebarItem } from './sidebar-items/sidebar-items';

export interface SidebarProps {
  navItems: SidebarItem[];
}

export function Sidebar({ navItems }: SidebarProps) {
  const { isOpen, onClose } = useSidebar();
  return (
    <React.Fragment>
      <VStack spacing="5" as="nav" display={{ base: 'none', md: 'flex' }}>
        <Icon as={SiWwise} boxSize={8} />
        <SidebarItems navItems={navItems} />
      </VStack>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Weather Wise</DrawerHeader>
          <DrawerBody>
            <SidebarItems navItems={navItems} mode="over" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
}

export default Sidebar;
