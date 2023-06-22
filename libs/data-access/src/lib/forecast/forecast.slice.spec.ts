import {
  fetchForecast,
  forecastInitialState,
  forecastReducer,
  selectCurrentWeather,
  resetForecastState,
  selectForecastByDaytime,
} from './forecast.slice';
import { mapToForecastWeather } from '../mapper';
import { store } from '../store';
import { FORECAST_DATA } from '../../mocks/forecast.mock';
import { mswServer } from '../../../../../mocks/server';
import { errorHandler } from '../../../../../mocks/handlers';
import { LOADING_STATES } from '@weather-wise/util';

describe('forecast Slice', () => {
  it('should handle initial state', () => {
    const expected = forecastInitialState;

    expect(forecastReducer(undefined, { type: '' })).toEqual(expected);
  });

  describe('fetchCurrentWeather thunk', () => {
    it('should dispatch action to handle pending case', () => {
      const state = forecastReducer(
        undefined,
        fetchForecast.pending('', { q: 'Amsterdam' })
      );

      expect(state).toEqual(
        expect.objectContaining({
          callState: LOADING_STATES.Loading,
          data: undefined,
        })
      );
    });

    it('should dispatch action to handle success case', async () => {
      await store.dispatch(fetchForecast({ q: 'Amsterdam' }));
      const state = store.getState().forecast;
      expect(state.callState).toEqual(LOADING_STATES.Idle);
      expect(state.data?.forecast.forecastday.length).toEqual(3);
    });

    it('should dispatch action to handle api error case', async () => {
      mswServer.use(errorHandler);
      const error = {
        error: { code: 9999, message: 'Internal application error' },
      };
      await store.dispatch(fetchForecast({ q: 'Amsterdam' }));

      expect(store.getState().forecast.callState).toEqual(error);
    });

    it('should dispatch action to handle error case', async () => {
      const state = forecastReducer(
        undefined,
        fetchForecast.rejected(new Error('Some client error'), '', {
          q: 'Amsterdam',
        })
      );

      expect(state).toEqual(
        expect.objectContaining({
          callState: LOADING_STATES.Idle,
          data: undefined,
        })
      );
    });

    afterEach(() => store.dispatch(resetForecastState()));
  });

  describe('selectors', () => {
    const data = mapToForecastWeather(FORECAST_DATA);
    const forecast = {
      ...store.getState().forecast,
      data,
    };
    describe('selectCurrentWeather', () => {
      it('should select current weather', async () => {
        const state = selectCurrentWeather({ ...store.getState(), forecast });
        expect(state.loading).toEqual(LOADING_STATES.Idle);
        expect(state.data).toEqual({
          current: data.current,
          location: data.location,
        });
        expect(state.error).toBeUndefined();
      });

      it('should select current weather state with error', async () => {
        const error = {
          error: { code: 9000, message: 'Something went wrong.' },
        };
        const forecast = {
          ...store.getState().forecast,
          callState: error,
        };
        const state = selectCurrentWeather({
          ...store.getState(),
          forecast,
        });
        expect(state.error).toEqual(error);
      });

      it('should select current weather state with loading', async () => {
        const forecast = {
          ...store.getState().forecast,
          callState: LOADING_STATES.Loading,
        };
        const state = selectCurrentWeather({
          ...store.getState(),
          forecast,
        });
        expect(state.loading).toEqual(LOADING_STATES.Loading);
      });
    });

    describe('selectForecastByDaytime', () => {
      it('should return empty array if data is undefined', () => {
        expect(selectForecastByDaytime(store.getState())).toEqual([]);
      });

      it('should day time forecast', () => {
        const expected = [
          { tempC: 9, name: 'Morning' },
          { tempC: 15, name: 'Afternoon' },
          { tempC: 12, name: 'Evening' },
          { tempC: 10, name: 'Night' },
        ];
        const hoursByDaytime = selectForecastByDaytime({
          ...store.getState(),
          forecast,
        });
        expect(hoursByDaytime.length).toEqual(4);
        hoursByDaytime.forEach((daytime, index) => {
          expect(daytime).toEqual(expect.objectContaining(expected[index]));
        });
      });
    });
  });
});
