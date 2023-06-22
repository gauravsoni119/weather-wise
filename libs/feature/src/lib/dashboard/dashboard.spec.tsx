import { screen } from '@testing-library/react';
import { renderWithProviders } from '@weather-wise/test-util';
import { mswServer } from '../../../../../mocks/server';
import { errorHandler } from '../../../../../mocks/handlers';

import Dashboard from './dashboard';

describe('Dashboard', () => {
  const consoleWarnSpy = jest
    .spyOn(console, 'warn')
    .mockImplementation(() => undefined);
  it('should render dashboard', async () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    const heading = await screen.findAllByRole('heading', { level: 6 });
    expect(heading[0]).toHaveTextContent('Weather');
    expect(heading[1]).toHaveTextContent('Air Quality');
  });

  it('should render dashboard with error', async () => {
    mswServer.use(errorHandler);
    renderWithProviders(<Dashboard />);
    const error = await screen.findByText('error...');
    expect(error).toBeInTheDocument();
  });
  afterEach(() => consoleWarnSpy.mockClear());
});
