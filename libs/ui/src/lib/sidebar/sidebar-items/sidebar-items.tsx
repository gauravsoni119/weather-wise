import {
  List,
  ListItem,
  Icon,
  Flex,
  Text,
  Link,
  Tooltip,
  IconButton,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';

export interface SidebarItem {
  icon: IconType;
  ariaLabel: string;
  to: string;
}

export interface SidebarItemsProps {
  navItems: SidebarItem[];
  mode?: 'semi' | 'over';
}

export function SidebarItems({ navItems, mode = 'semi' }: SidebarItemsProps) {
  const sidebarItemInOverMode = (item: SidebarItem, index: number) => (
    <ListItem key={index}>
      <Link
        display="block"
        as={NavLink}
        to={item.to}
        _focus={{ bg: 'gray.100' }}
        _hover={{
          bg: 'gray.200',
        }}
        _activeLink={{ bg: 'secondary.500', color: 'white' }}
        w="full"
        borderRadius="md"
      >
        <Flex alignItems="center" p={2}>
          <Icon boxSize="5" as={item.icon} />
          <Text ml={2}>{item.ariaLabel}</Text>
        </Flex>
      </Link>
    </ListItem>
  );
  const sidebarItemInSemiMode = (
    { icon: Icon, ...item }: SidebarItem,
    index: number
  ) => (
    <ListItem key={index}>
      <Tooltip label={item.ariaLabel} placement="right">
        <IconButton
          key={index}
          as={NavLink}
          _focus={{ bg: 'gray.100' }}
          _activeLink={{ boxShadow: 'md', bg: 'secondary.500', color: 'white' }}
          bg="transparent"
          aria-label={item.ariaLabel}
          borderRadius="xl"
          icon={<Icon />}
          to={item.to}
        />
      </Tooltip>
    </ListItem>
  );
  return (
    <List spacing={3}>
      {mode === 'semi'
        ? navItems.map((item, index) => sidebarItemInSemiMode(item, index))
        : navItems.map((item, index) => sidebarItemInOverMode(item, index))}
    </List>
  );
}

export default SidebarItems;
