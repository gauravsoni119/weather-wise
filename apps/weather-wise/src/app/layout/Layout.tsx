import { Box } from '@chakra-ui/react';
import { WeatherForecast } from '@weather-wise/feature';
import { BsBarChart } from 'react-icons/bs';
import { BiMap, BiChalkboard } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import {
  Sidebar,
  SidebarContainer,
  SidebarProvider,
  Navbar,
} from '@weather-wise/ui';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const navItems = [
    { icon: BsBarChart, ariaLabel: 'Dashboard', to: '' },
    { icon: BiChalkboard, ariaLabel: 'Forecast', to: 'forecast' },
    { icon: BiMap, ariaLabel: 'Location', to: 'location' },
    { icon: FiSettings, ariaLabel: 'Settings', to: 'settings' },
  ];
  return (
    <SidebarProvider>
      <SidebarContainer
        sidebar={<Sidebar navItems={navItems} />}
        secondarySidebar={<WeatherForecast />}
      >
        <Box paddingBottom={{ base: 4, md: 6 }} px={{ base: 2, md: 0 }}>
          <Navbar avatar="Gaurav Soni" />
        </Box>
        <Box>
          <Outlet />
        </Box>
      </SidebarContainer>
    </SidebarProvider>
  );
}
