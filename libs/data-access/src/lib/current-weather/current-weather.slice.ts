import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import {
  CurrentWeatherModel,
  CurrentWeatherResponse,
} from '../models/current-weather.model';
import CurrentWeatherClient from '../api';
import { WeatherState } from '../store';
import { LOADING_STATES, LoadingStates } from '@weather-wise/util';
import { mapToCurrentWeather } from '../mapper';
import { AxiosError, AxiosResponse } from 'axios';
import { WeatherApiError } from '../models/error-response.model';
import { createWeatherWiseThunk } from '../thunk';

interface CurrentWeatherState {
  data: CurrentWeatherModel | undefined;
  callState: LoadingStates | WeatherApiError;
}

export const initialState: CurrentWeatherState = {
  data: undefined,
  callState: LOADING_STATES.Idle,
};

export const fetchCurrentWeather = createWeatherWiseThunk(
  'currentWeather/fetchCurrentWeather',
  async (q: string, { rejectWithValue }) => {
    try {
      const res = await CurrentWeatherClient.get<CurrentWeatherResponse>(
        '/current.json',
        {
          params: { q, dt: '2023-02-18', aqi: 'yes' },
        }
      );
      return mapToCurrentWeather(res.data);
    } catch (err) {
      const error = err as AxiosError<WeatherApiError>;
      return rejectWithValue((error.response as AxiosResponse).data);
    }
  }
);

export const currentWeatherSlice = createSlice({
  name: 'current-weather',
  initialState,
  reducers: {
    reset(state) {
      state.data = undefined;
      state.callState = LOADING_STATES.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.callState = LOADING_STATES.Loading;
      })
      .addCase(fetchCurrentWeather.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.callState = LOADING_STATES.Idle;
      })
      .addCase(fetchCurrentWeather.rejected, (state, { payload }) => {
        state.callState = payload ?? LOADING_STATES.Idle;
      });
  },
});

export const currentWeatherReducer = currentWeatherSlice.reducer;
export const { reset } = currentWeatherSlice.actions;

const selectCurrentWeatherState = (state: WeatherState) => state.currentWeather;

export const selectCurrentWeather = createSelector(
  [selectCurrentWeatherState],
  ({ data, callState }) => ({
    data,
    loading: !(callState as WeatherApiError).error
      ? callState
      : LOADING_STATES.Idle,
    error: (callState as WeatherApiError).error ? callState : undefined,
  })
);
