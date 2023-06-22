import { createSelector, createSlice } from '@reduxjs/toolkit';
import {
  DayTimeForecast,
  getMaxElement,
  LoadingStates,
  LOADING_STATES,
} from '@weather-wise/util';
import { AxiosError, AxiosResponse } from 'axios';
import weatherWiseClient from '../api';
import { DEFAULT_FORECAST_PARAMS, DAY_TIMES } from '../constants/forecast';
import { mapToForecastWeather, mapToTotalTemperatureByHours } from '../mapper';
import { WeatherApiError } from '../models/error-response.model';
import { ForecastModel, ForecastRequestParams } from '../models/forecast.model';
import { ForecastResponse } from '../models/weatherapi.model';
import { WeatherState } from '../store';
import { createWeatherWiseThunk } from '../thunk';

interface ForecastState {
  data: ForecastModel | undefined;
  callState: LoadingStates | WeatherApiError;
}

export const fetchForecast = createWeatherWiseThunk(
  'forecast/fetchForecast',
  async (params: ForecastRequestParams, { rejectWithValue }) => {
    try {
      const res = await weatherWiseClient.get<ForecastResponse>(
        '/forecast.json',
        {
          params: { ...DEFAULT_FORECAST_PARAMS, ...params },
        }
      );
      return mapToForecastWeather(res.data);
    } catch (err) {
      const error = err as AxiosError<WeatherApiError>;
      return rejectWithValue((error.response as AxiosResponse).data);
    }
  }
);

export const forecastInitialState: ForecastState = {
  data: undefined,
  callState: LOADING_STATES.Idle,
};

const forecastSlice = createSlice({
  name: 'forecast',
  initialState: forecastInitialState,
  reducers: {
    resetForecastState(state) {
      state.data = undefined;
      state.callState = LOADING_STATES.Idle;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.callState = LOADING_STATES.Loading;
      })
      .addCase(fetchForecast.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.callState = LOADING_STATES.Idle;
      })
      .addCase(fetchForecast.rejected, (state, { payload }) => {
        state.callState = payload ?? LOADING_STATES.Idle;
      });
  },
});

export const forecastReducer = forecastSlice.reducer;
export const { resetForecastState } = forecastSlice.actions;

const selectForecast = (state: WeatherState) => state.forecast;
const selectForecastData = createSelector([selectForecast], ({ data }) => data);

export const selectCurrentWeather = createSelector(
  [selectForecast],
  ({ data, callState }) => ({
    data: data ? { current: data.current, location: data.location } : undefined,
    loading: !(callState as WeatherApiError).error
      ? callState
      : LOADING_STATES.Idle,
    error: (callState as WeatherApiError).error ? callState : undefined,
  })
);

export const selectForecastByDaytime = createSelector(
  [selectForecastData],
  (data) => {
    if (!data) {
      return [];
    }
    const { hour: hours } = data.forecast.forecastday[0];
    const hoursByDaytime = DAY_TIMES.reduce((dayTime, { from, to, name }) => {
      const hourSlice = hours.slice(from, to);
      const diff = to - from;
      const maxCondition = getMaxElement(
        hourSlice.map(({ condition }) => condition)
      );
      const totalTemp = mapToTotalTemperatureByHours(hourSlice);
      dayTime.push({
        tempC: Math.floor(totalTemp.tempC / diff),
        tempF: Math.floor(totalTemp.tempF / diff),
        humidity: Math.floor(totalTemp.humidity / diff),
        name,
        condition: maxCondition ?? hourSlice[hourSlice.length - 1].condition,
      });
      return dayTime;
    }, [] as DayTimeForecast[]);

    return hoursByDaytime;
  }
);
