import { render, screen } from '@testing-library/react';
import { BsBarChart } from 'react-icons/bs';
import { BrowserRouter } from 'react-router-dom';

import SidebarItems, { SidebarItem } from './sidebar-items';

describe('SidebarItems', () => {
  it('should render sidebar items in semi mode', () => {
    const navItems: SidebarItem[] = [
      { label: 'Dashboard', icon: BsBarChart, to: '' },
    ];
    render(<SidebarItems navItems={navItems} />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getAllByRole('link').at(0)).toBeInTheDocument();
  });

  it('should render sidebar items in over mode', () => {
    const navItems: SidebarItem[] = [
      { label: 'Dashboard', icon: BsBarChart, to: '' },
    ];
    render(<SidebarItems navItems={navItems} mode="over" />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getAllByText(/Dashboard/i).at(0)).toBeInTheDocument();
  });
});
