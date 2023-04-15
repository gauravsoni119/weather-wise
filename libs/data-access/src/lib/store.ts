import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { currentWeatherReducer } from './current-weather/current-weather.slice';

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
  },
});

setupListeners(store.dispatch);

export type WeatherState = ReturnType<typeof store.getState>;
export type WeatherDispatch = typeof store.dispatch;
