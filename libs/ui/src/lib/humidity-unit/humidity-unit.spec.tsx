import { render } from '@testing-library/react';

import HumidityUnit from './humidity-unit';

describe('HumidityUnit', () => {
  it('should render humidity with unit', () => {
    const { baseElement } = render(<HumidityUnit>30</HumidityUnit>);
    expect(baseElement).toHaveTextContent('30%');
  });
});
