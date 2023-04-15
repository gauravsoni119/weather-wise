import {
  Avatar,
  Box,
  Heading,
  Flex,
  HStack,
  InputGroup,
  Input,
  InputRightElement,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { sidebarContext } from '../sidebar/sidebar-context';

export interface NavbarProps {
  avatar: string;
}

export function Navbar({ avatar }: NavbarProps) {
  const { onOpen } = useContext(sidebarContext);
  return (
    <Flex justifyContent="space-between">
      <Box>
        <HStack display={{ base: 'none', md: 'flex' }}>
          <Avatar name={avatar} src={avatar} size="sm" mr="2" />
          <Flex direction="column" alignItems="flex-start">
            <Heading as="h2" size="md" fontWeight="medium">
              Hello,
            </Heading>
            <Heading as="h2" size="md" mt="">
              Gaurav Soni
            </Heading>
          </Flex>
        </HStack>
        <IconButton
          aria-label="menu"
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          icon={<FiMenu />}
        />
      </Box>
      <Box>
        <HStack>
          <InputGroup
            bgColor={useColorModeValue('gray.100', 'gray.100')}
            borderRadius="xl"
          >
            <Input type="search" placeholder="Search anything..." />
            <InputRightElement
              pointerEvents="none"
              color={useColorModeValue('orange.500', 'orange.500')}
              children={<BsSearch />}
            />
          </InputGroup>
          <IconButton
            bgColor="white"
            border="1px"
            borderColor="gray.300"
            borderRadius="full"
            aria-label="notifications"
            icon={<IoNotificationsOutline />}
          />
        </HStack>
      </Box>
    </Flex>
  );
}

export default Navbar;
