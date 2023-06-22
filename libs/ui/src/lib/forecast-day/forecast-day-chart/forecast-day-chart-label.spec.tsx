import { render } from '@testing-library/react';

import ForecastDayChartLabel from './forecast-day-chart-label';

describe('ForecastDayChartLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ForecastDayChartLabel />);
    expect(baseElement).toBeTruthy();
  });
});
