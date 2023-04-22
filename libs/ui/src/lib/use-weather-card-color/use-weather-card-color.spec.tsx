import { act, renderHook } from '@testing-library/react';

import useWeatherCardColor from './use-weather-card-color';

describe('useWeatherCardColor', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useWeatherCardColor('light', 'bg'));

    expect(result.current).toEqual('white');
  });
});
