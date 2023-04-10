import { Box, Flex } from '@chakra-ui/react';
import { WeatherForecast } from '@weather-wise/feature';
import logo from '../../assets/logo.png';
import { Sidebar, Navbar } from '@weather-wise/ui';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Flex>
      <Box pt='8' pl='4'>
        <Sidebar logo={logo} />
      </Box>
      <Box w={{ base: '100%', xl: 'calc(100% - 64px)' }} ml="64px" p="8">
        <Navbar avatar="Gaurav Soni" />
        <Outlet />
      </Box>
      <Box w={{ base: '30%' }} p="8">
        <WeatherForecast />
      </Box>
    </Flex>
  );
}
