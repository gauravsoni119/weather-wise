import { render, screen } from '@testing-library/react';
import { WiDaySunny } from 'react-icons/wi';

import WeatherCard from './weather-card';

describe('WeatherCard', () => {
  it('should render WeatherCard', () => {
    const { baseElement } = render(
      <WeatherCard
        weatherType="sunny"
        icon={WiDaySunny}
        heading="Weather"
        subheading="What's the weather?"
        kpi={`15\u2103`}
        kpiLabel={'Sunny'}
        kpiBadge={`10\u2103`}
      />
    );
    expect(baseElement).toBeTruthy();
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(
      'Weather'
    );
  });

  it('should render badge in tertiary color for kpi', () => {
    render(
      <WeatherCard
        weatherType="sunny"
        icon={WiDaySunny}
        heading="Weather"
        subheading="What's the weather?"
        kpi={`15\u2103`}
        kpiLabel={'Sunny'}
        kpiBadge={`10\u2103`}
        kpiBadgeColor="tertiary"
      />
    );
    expect(screen.getByTestId('kpi-badge')).toHaveTextContent(`10\u2103`);
  });

  it('should render light foreground color for headings and text', () => {
    render(
      <WeatherCard
        weatherType="sunny"
        icon={WiDaySunny}
        heading="Weather"
        subheading="What's the weather?"
        kpi={`15\u2103`}
        kpiLabel={'Sunny'}
        kpiBadge={`10\u2103`}
        textColor="light"
      />
    );
    expect(screen.getByText(`What's the weather?`)).toBeInTheDocument();
  });
});
