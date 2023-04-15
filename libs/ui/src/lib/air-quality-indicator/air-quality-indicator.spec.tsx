import { render } from '@testing-library/react';

import AirQualityIndicator from './air-quality-indicator';

describe('AirQualityIndicator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AirQualityIndicator index={1} />);
    expect(baseElement).toBeTruthy();
  });
});
