import { render } from '@testing-library/react';

import KpiCard from './kpi-card';

describe('KpiCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KpiCard />);
    expect(baseElement).toBeTruthy();
  });
});
