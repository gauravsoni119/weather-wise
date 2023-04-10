export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface ConditionResponse {
  text: string;
  icon: string;
  code: number;
}

export interface AirQualityResponse {
  co: number;
  pm2_5: number;
  pm10: number;
  'us-epa-index': number;
}

export interface CurrentResponse {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: ConditionResponse;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  air_quality: AirQualityResponse;
}

export interface CurrentWeatherResponse {
  location: Location;
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
  visKm: number;
  uv: number;
  windDir: string;
  condition: ConditionResponse;
  airQuality: AirQuality;
}

export interface CurrentWeatherModel {
  location: Location;
  current: CurrentModel;
}
