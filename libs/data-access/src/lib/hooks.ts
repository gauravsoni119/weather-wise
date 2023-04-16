import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { WeatherState, WeatherDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useWeatherDispatch: () => WeatherDispatch = useDispatch;
export const useWeatherSelector: TypedUseSelectorHook<WeatherState> =
  useSelector;
