import { useDisclosure } from '@chakra-ui/react';
import { render } from '@testing-library/react';

import Sidebar from './sidebar';
import SidebarProvider from './sidebar-context/sidebar-context';

function TestSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SidebarProvider {...{ isOpen, onOpen, onClose }}>
      <Sidebar navItems={[]} />
    </SidebarProvider>
  );
}

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestSidebar />);
    expect(baseElement).toBeTruthy();
  });
});
