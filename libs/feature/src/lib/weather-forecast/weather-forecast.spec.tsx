import { render } from '@testing-library/react';

import WeatherForecast from './weather-forecast';

describe('WeatherForecast', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WeatherForecast />);
    expect(baseElement).toBeTruthy();
  });
});
