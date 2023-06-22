import {
  FORECAST_BY_DAYTIME,
  renderWithProviders,
} from '@weather-wise/test-util';

import ForecastDayChart from './forecast-day-chart';

describe('ForecastDayChart', () => {
  const consoleWarnSpy = jest
    .spyOn(console, 'warn')
    .mockImplementation(() => undefined);
  it('should render chart', () => {
    const { baseElement } = renderWithProviders(
      <ForecastDayChart
        forecastByDaytime={FORECAST_BY_DAYTIME}
        lineDataKey="tempC"
        tooltipFormatter={() => 'Formatted value'}
      />
    );
    expect(baseElement).toBeTruthy();
  });
  afterEach(() => consoleWarnSpy.mockClear());
});
