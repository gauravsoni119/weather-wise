import { createContext } from 'react';

export const sidebarContext = createContext<{
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}>({
  onOpen: () => undefined,
  onClose: () => undefined,
  isOpen: false,
});
