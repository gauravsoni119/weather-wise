import {
  fetchCurrentWeather,
  currentWeatherAdapter,
  currentWeatherReducer,
} from './current-weather.slice';

describe('currentWeather reducer', () => {
  it('should handle initial state', () => {
    const expected = currentWeatherAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(currentWeatherReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchCurrentWeathers', () => {
    let state = currentWeatherReducer(
      undefined,
      fetchCurrentWeather.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = currentWeatherReducer(
      state,
      fetchCurrentWeather.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = currentWeatherReducer(
      state,
      fetchCurrentWeather.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
