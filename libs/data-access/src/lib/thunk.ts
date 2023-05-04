import { createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherApiError } from './models/error-response.model';
import { WeatherDispatch, WeatherState } from './store';

export const createWeatherWiseThunk = createAsyncThunk.withTypes<{
  state: WeatherState;
  dispatch: WeatherDispatch;
  rejectValue: WeatherApiError;
}>();
