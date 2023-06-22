import {
  renderWithProviders,
  fireEvent,
  screen,
  FORECAST_BY_DAYTIME,
} from '@weather-wise/test-util';

import ForecastDay from './forecast-day';
import { ForecastDayChartProps } from './forecast-day-chart/forecast-day-chart';

jest.mock('./forecast-day-chart/forecast-day-chart', () => {
  return function ForecastDay(props: ForecastDayChartProps) {
    return (
      <div className="recharts-responsive-container">
        <svg>
          <g className="recharts-active-dot"></g>
          <g className="recharts-tooltip-cursor">
            {props.tooltipFormatter && props.tooltipFormatter(123, 'tempC')}
          </g>
        </svg>
      </div>
    );
  };
});

describe('ForecastDay', () => {
  const consoleWarnSpy = jest
    .spyOn(console, 'warn')
    .mockImplementation(() => undefined);
  it('should render headings', () => {
    renderWithProviders(
      <ForecastDay forecastByDaytime={FORECAST_BY_DAYTIME} />
    );
    expect(screen.getByRole('heading')).toHaveTextContent(
      `How's the temperature today?`
    );
    const tabs = screen.getAllByRole('tab');
    fireEvent.click(tabs[1]);
    expect(screen.getByRole('heading')).toHaveTextContent(
      `What is the humidity level today?`
    );
  });

  it('should render line chart for today', () => {
    const { container } = renderWithProviders(
      <ForecastDay forecastByDaytime={FORECAST_BY_DAYTIME} />
    );

    expect(
      // eslint-disable-next-line testing-library/no-container
      container.querySelector('.recharts-responsive-container')
    ).not.toBeNull();
  });

  it('should render line chart for humidity level', () => {
    const { container } = renderWithProviders(
      <ForecastDay forecastByDaytime={FORECAST_BY_DAYTIME} />
    );

    const tabs = screen.getAllByRole('tab');
    fireEvent.click(tabs[1]);

    expect(
      // eslint-disable-next-line testing-library/no-container
      container.querySelector('.recharts-responsive-container')
    ).not.toBeNull();
  });

  afterEach(() => consoleWarnSpy.mockClear());
});
