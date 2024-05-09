import {
  ConditionResponse,
  CurrentResponse,
  LocationResponse,
} from "./weatherapi.model";

export type LocationModel = LocationResponse;

export interface CurrentWeatherResponse {
  location: LocationResponse;
  current: CurrentResponse;
}

export interface AirQuality {
  co: string;
  pm2_5: string;
  pm10: string;
  usEpaIndex: number;
}

export interface CurrentModel {
  tempC: number;
  tempF: number;
  feelsLikeC: number;
  feelsLikeF: number;
  pressureMb: number;
  pressureIn: number;
  humidity: number;
  gustKph: number;
  visKm: number;
  uv: number;
  windDir: string;
  windDegree: number;
  windKph: number;
  condition: ConditionResponse;
  airQuality: AirQuality;
  cloud: number;
}

export interface CurrentWeatherModel {
  location: LocationModel;
  current: CurrentModel;
}
