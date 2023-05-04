import {
  fetchCurrentWeather,
  initialState,
  currentWeatherReducer,
  selectCurrentWeather,
  reset,
} from './current-weather.slice';
import { mapToCurrentWeather } from '../mapper';
import { store } from '../store';
import { CURRENT_WEATHER_DATA } from '../../mocks/current-weather.mock';
import { mswServer } from '../../../../../mocks/server';
import { errorHandler } from '../../../../../mocks/handlers';
import { LOADING_STATES } from '@weather-wise/util';

jest.mock('../constant', () => ({
  VITE_USE_MOCK: 'true',
  VITE_RAPID_API_KEY: '123',
  VITE_RAPID_HOST: 'localhost',
}));

describe('currentWeather Slice', () => {
  it('should handle initial state', () => {
    const expected = initialState;

    expect(currentWeatherReducer(undefined, { type: '' })).toEqual(expected);
  });

  describe('fetchCurrentWeather thunk', () => {
    const data = mapToCurrentWeather(CURRENT_WEATHER_DATA);

    it('should dispatch action to handle pending case', () => {
      const state = currentWeatherReducer(
        undefined,
        fetchCurrentWeather.pending('', 'Amsterdam')
      );

      expect(state).toEqual(
        expect.objectContaining({
          callState: LOADING_STATES.Loading,
          data: undefined,
        })
      );
    });

    it('should dispatch action to handle success case', async () => {
      await store.dispatch(fetchCurrentWeather('Amsterdam'));

      expect(store.getState().currentWeather).toEqual(
        expect.objectContaining({
          callState: LOADING_STATES.Idle,
          data,
        })
      );
    });

    it('should dispatch action to handle api error case', async () => {
      mswServer.use(errorHandler);
      const error = {
        error: { code: 9999, message: 'Internal application error' },
      };
      await store.dispatch(fetchCurrentWeather('Amsterdam'));

      expect(store.getState().currentWeather.callState).toEqual(error);
    });

    it('should dispatch action to handle error case', async () => {
      const state = currentWeatherReducer(
        undefined,
        fetchCurrentWeather.rejected(new Error('Some client error'), '', '')
      );

      expect(state).toEqual(
        expect.objectContaining({
          callState: LOADING_STATES.Idle,
          data: undefined,
        })
      );
    });

    afterEach(() => store.dispatch(reset()));
  });

  describe('selectors', () => {
    it('should select current weather state', async () => {
      const currentWeather = store.getState().currentWeather;
      const state = selectCurrentWeather({ currentWeather });
      expect(state.loading).toEqual(LOADING_STATES.Idle);
      expect(state.data).toBeUndefined();
      expect(state.error).toBeUndefined();
    });

    it('should select current weather state with error', async () => {
      const error = { error: { code: 9000, message: 'Something went wrong.' } };
      const currentWeather = {
        ...store.getState().currentWeather,
        callState: error,
      };
      const state = selectCurrentWeather({ currentWeather });
      expect(state.error).toEqual(error);
    });

    it('should select current weather state with loading', async () => {
      const currentWeather = {
        ...store.getState().currentWeather,
        callState: LOADING_STATES.Loading,
      };
      const state = selectCurrentWeather({ currentWeather });
      expect(state.loading).toEqual(LOADING_STATES.Loading);
    });
  });
});
