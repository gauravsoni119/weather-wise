import { screen } from '@testing-library/react';
import {
  FORECAST_WEATHER_MOCK,
  renderWithProviders,
} from '@weather-wise/test-util';

import TomorrowForecast from './tomorrow-forecast';

const setup = () =>
  renderWithProviders(
    <TomorrowForecast
      forecast={FORECAST_WEATHER_MOCK.tomorrow}
      localTime={FORECAST_WEATHER_MOCK.location.localtime}
    />
  );

describe('TomorrowForecast', () => {
  it('should render tomorrow date', () => {
    setup();
    const heading = screen.getByRole('heading', { level: 3 });
    const date = screen.getByText(/Thursday/i);
    expect(heading).toHaveTextContent('Tomorrow');
    expect(date).toHaveTextContent('Thursday');
    expect(date).toHaveTextContent('25 May 2023');
  });

  it('should render average temperature', () => {
    setup();
    const avgTemp = screen.getByText(/12.1/i);
    const condition = screen.getByText(/sunny/i);
    expect(avgTemp).toHaveTextContent('12.1℃');
    expect(condition).toHaveTextContent('Sunny');
  });

  it('should render high and low temperature', () => {
    setup();
    const highTemp = screen.getByTestId('high-temp');
    const lowTemp = screen.getByTestId('low-temp');
    expect(highTemp).toHaveTextContent('High');
    expect(highTemp).toHaveTextContent('16℃');
    expect(lowTemp).toHaveTextContent('Low');
    expect(lowTemp).toHaveTextContent('8.3℃');
  });

  it('should render humidity and wind', () => {
    setup();
    const humidity = screen.getByTestId('humidity');
    const wind = screen.getByTestId('wind');
    expect(humidity).toHaveTextContent('Humidity');
    expect(humidity).toHaveTextContent('73%');
    expect(wind).toHaveTextContent('Wind');
    expect(wind).toHaveTextContent('13mph');
  });
});
