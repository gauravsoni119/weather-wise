import { getFullWindDirection } from '@weather-wise/util';
import {
  CurrentWeatherResponse,
  CurrentWeatherModel,
} from './models/current-weather.model';

export function mapToCurrentWeather(
  res: CurrentWeatherResponse
): CurrentWeatherModel {
  const { current, location } = res;
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
  };
}
