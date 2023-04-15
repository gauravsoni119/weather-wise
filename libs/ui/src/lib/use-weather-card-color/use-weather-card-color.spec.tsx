import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useWeatherCardColor from './use-weather-card-color';

describe('useWeatherCardColor', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useWeatherCardColor());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
