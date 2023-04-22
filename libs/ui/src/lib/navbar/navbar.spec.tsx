import { render, screen } from '@testing-library/react';

import { SidebarProvider } from '../sidebar/sidebar-context/sidebar-context';
import Navbar from './navbar';

function renderNavBar() {
  return render(
    <SidebarProvider>
      <Navbar avatar="Gaurav Soni" />
    </SidebarProvider>
  );
}

describe('Navbar', () => {
  it('should render headings', () => {
    renderNavBar();
    expect(
      screen.getByRole('heading', { name: /Hello,/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Gaurav Soni/i })
    ).toBeInTheDocument();
  });

  describe('More menu', () => {
    it('should render menu button', () => {
      renderNavBar();
      expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    });
  });

  it('should render notification icon', () => {
    renderNavBar();
    expect(
      screen.getByRole('button', { name: /notifications/i })
    ).toBeInTheDocument();
  });

  it('should render search input', () => {
    renderNavBar();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
