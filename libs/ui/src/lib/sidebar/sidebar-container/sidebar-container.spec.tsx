import { render } from '@testing-library/react';

import SidebarContainer from './sidebar-container';

describe('SidebarContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarContainer />);
    expect(baseElement).toBeTruthy();
  });
});
