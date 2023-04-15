import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';
import {
  CurrentWeatherModel,
  CurrentWeatherResponse,
} from '../models/current-weather.model';
import CurrentWeatherClient from '../api';
import { WeatherState } from '../store';
import {
  getFullWindDirection,
  LOADING_STATES,
  LoadingStates,
} from '@weather-wise/util';

const DATA = {
  location: {
    name: 'Amsterdam',
    region: 'North Holland',
    country: 'Netherlands',
    lat: 52.37,
    lon: 4.89,
    tz_id: 'Europe/Amsterdam',
    localtime_epoch: 1677419546,
    localtime: '2023-02-26 14:52',
  },
  current: {
    last_updated_epoch: 1677419100,
    last_updated: '2023-02-26 14:45',
    temp_c: 6,
    temp_f: 42.8,
    is_day: 1,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
      code: 1003,
    },
    wind_mph: 12.5,
    wind_kph: 20.2,
    wind_degree: 40,
    wind_dir: 'NE',
    pressure_mb: 1027,
    pressure_in: 30.33,
    precip_mm: 0,
    precip_in: 0,
    humidity: 56,
    cloud: 25,
    feelslike_c: 2,
    feelslike_f: 35.6,
    vis_km: 10,
    vis_miles: 6,
    uv: 3,
    gust_mph: 16.6,
    gust_kph: 26.6,
    air_quality: {
      co: 230.3000030517578,
      no2: 3.5,
      o3: 81.5,
      so2: 0.699999988079071,
      pm2_5: 0.6000000238418579,
      pm10: 1.2000000476837158,
      'us-epa-index': 1,
      'gb-defra-index': 1,
    },
  },
} as CurrentWeatherResponse;

interface CurrentWeatherState {
  data: CurrentWeatherModel | undefined;
  callState: LoadingStates | Error;
}

export const initialState: CurrentWeatherState = {
  data: undefined,
  callState: LOADING_STATES.idle,
};

export const fetchCurrentWeather = createAsyncThunk(
  'currentWeather/fetchCurrentWeather',
  async (q: string) => {
    // const res = await CurrentWeatherClient.get<CurrentWeatherResponse>('/current.json', {
    //   params: { q, dt: '2023-02-18', aqi: 'yes' },
    // });
    // return res.data;
    const { current, location } = DATA;
    return {
      current: {
        tempC: current.temp_c,
        tempF: current.temp_f,
        feelsLikeC: current.feelslike_c,
        feelsLikeF: current.feelslike_f,
        pressureMb: current.pressure_mb,
        pressureIn: current.precip_in,
        humidity: current.humidity,
        visKm: current.vis_km,
        uv: current.uv,
        windDir: getFullWindDirection(current.wind_dir),
        condition: { ...current.condition },
        airQuality: {
          co: current.air_quality.co.toFixed(),
          pm2_5: current.air_quality.pm2_5.toFixed(2),
          pm10: current.air_quality.pm10.toFixed(2),
          usEpaIndex: current.air_quality['us-epa-index'],
        },
      },
      location: { ...location },
    } as CurrentWeatherModel;
  }
);

export const currentWeatherSlice = createSlice({
  name: 'current-weather',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.callState = LOADING_STATES.loading;
      })
      .addCase(fetchCurrentWeather.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.callState = LOADING_STATES.idle;
      })
      .addCase(fetchCurrentWeather.rejected, (state, { error }) => {
        state.callState = new Error(error.message);
      });
  },
});

export const currentWeatherReducer = currentWeatherSlice.reducer;

const selectCurrentWeatherState = (state: WeatherState) => state.currentWeather;

export const selectCurrentWeather = createSelector(
  [selectCurrentWeatherState],
  ({ data, callState }) => ({
    data,
    loading: !(callState instanceof Error) ? callState : LOADING_STATES.idle,
    error: callState instanceof Error ? callState : undefined,
  })
);
