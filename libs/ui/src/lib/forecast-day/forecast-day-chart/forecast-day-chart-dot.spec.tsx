import { render, screen } from '@testing-library/react';

import ForecastDayChartDot from './forecast-day-chart-dot';

describe('ForecastDayChartDot', () => {
  it('should render weather icon', () => {
    const payload = {
      condition: { code: 1000, text: 'Sunny', icon: 'some icon url' },
    };
    render(<ForecastDayChartDot payload={payload} />);
    expect(screen.getByTestId(payload.condition.text)).toBeInTheDocument();
  });

  it('should render default weather icon if icon not matched', () => {
    render(<ForecastDayChartDot cx={10} cy={10} />);
    expect(screen.getByTestId('unknown-icon')).toBeInTheDocument();
  });
});
