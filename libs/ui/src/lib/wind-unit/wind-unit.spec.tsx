import { render } from '@testing-library/react';

import WindUnit from './wind-unit';

describe('WindUnit', () => {
  it('should render wind speed with unit', () => {
    const { baseElement } = render(<WindUnit>12</WindUnit>);
    expect(baseElement).toHaveTextContent('12mph');
  });
});
