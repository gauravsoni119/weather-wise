import { render } from '@testing-library/react';

import SidebarItems from './sidebar-items';

describe('SidebarItems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarItems />);
    expect(baseElement).toBeTruthy();
  });
});
