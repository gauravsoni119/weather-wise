import { useDisclosure } from '@chakra-ui/react';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { SidebarProvider, useSidebar } from './sidebar-context';

function TestSidebarContext() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <SidebarProvider {...{ isOpen, onOpen, onClose }}>
      {isOpen && <p>Sidebar Opened</p>}
      <button onClick={onOpen}>Open Sidebar</button>
      <button onClick={onClose}>Close Sidebar</button>
    </SidebarProvider>
  );
}

describe('sidebarContext', () => {
  it('should not open sidebar isOpen if false in context', () => {
    render(<TestSidebarContext />);
    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
  });

  it('should open sidebar isOpen onClick', () => {
    render(<TestSidebarContext />);
    fireEvent.click(screen.getByRole('button', { name: /Open Sidebar/i }));
    const sidebar = screen.getByText(/Sidebar Opened/i);
    expect(sidebar).toBeInTheDocument();
  });

  it('should throw error is sidebar context is not provided', async () => {
    jest.spyOn(console, 'error').mockImplementation();
    const error = () => renderHook(() => useSidebar());
    expect(error).toThrowError();
  });
});

