import { useDisclosure } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { BsBarChart } from 'react-icons/bs';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../sidebar';
import SidebarProvider from '../sidebar-context/sidebar-context';

import SidebarContainer from './sidebar-container';

function MockedSecondarySidebar() {
  return <div data-testid="secondary-sidebar">Secondary sidebar</div>;
}

function TestSidebarContainer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SidebarProvider {...{ isOpen, onOpen, onClose }}>
      <SidebarContainer
        sidebar={
          <Sidebar
            navItems={[{ label: 'dashboard', icon: BsBarChart, to: '' }]}
          />
        }
        secondarySidebar={<MockedSecondarySidebar />}
      >
        Some Children Content!
      </SidebarContainer>
    </SidebarProvider>
  );
}

function renderSidebarContainer() {
  return render(<TestSidebarContainer />, { wrapper: BrowserRouter });
}

describe.only('SidebarContainer', () => {
  it('should render primary sidebar', () => {
    renderSidebarContainer();
    expect(screen.getAllByRole('link').at(0)).toBeInTheDocument();
  });

  it('should render secondary sidebar', () => {
    renderSidebarContainer();
    expect(screen.getByTestId('secondary-sidebar')).toBeInTheDocument();
  });
});
