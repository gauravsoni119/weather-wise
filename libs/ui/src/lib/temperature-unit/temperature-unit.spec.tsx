import { render } from '@testing-library/react';

import TemperatureUnit from './temperature-unit';

describe('TemperatureUnit', () => {
  it('should render temperature with unit', () => {
    const { baseElement } = render(<TemperatureUnit>12</TemperatureUnit>);
    expect(baseElement).toHaveTextContent('12℃');
  });
});
