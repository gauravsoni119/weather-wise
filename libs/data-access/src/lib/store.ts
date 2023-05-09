import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { currentWeatherReducer } from './current-weather/current-weather.slice';

const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
});

export const setupStore = (preloadedState?: PreloadedState<WeatherState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export const store = setupStore();

setupListeners(store.dispatch);

export type WeatherState = ReturnType<typeof rootReducer>;
export type WeatherStore = ReturnType<typeof setupStore>;
export type WeatherDispatch = WeatherStore['dispatch'];
