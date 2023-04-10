import { Box, IconButton, Image, Tooltip, VStack } from '@chakra-ui/react';
import { BsBarChart } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export interface SidebarProps {
  logo: string;
}

export function Sidebar({ logo }: SidebarProps) {
  const navItems = [
    { component: <BsBarChart />, ariaLabel: 'Dashboard', to: '' },
    { component: <BiMap />, ariaLabel: 'Location', to: 'location' },
    { component: <FiSettings />, ariaLabel: 'Settings', to: 'settings' },
  ];
  return (
    <Box as="aside" w="64px" pos="fixed" p={2}>
      <Image src={logo} pb="8" />
      <VStack spacing="5">
        {navItems.map((item, index) => (
          <NavLink to={item.to} key={index}>
            {({ isActive }) => (
              <Tooltip label={item.ariaLabel} placement='right'>
                <IconButton
                  boxShadow={isActive? 'md' : 'none'}
                  bg={isActive ? 'secondary.500' : 'transparent'}
                  aria-label={item.ariaLabel}
                  colorScheme={isActive ? 'secondary' : 'gray'}
                  borderRadius="xl"
                  icon={item.component}
                />
              </Tooltip>
            )}
          </NavLink>
        ))}
      </VStack>
    </Box>
  );
}

export default Sidebar;
