import { MoonPhase } from "@/types/astro.model";
import {
  CurrentWeatherResponse,
  CurrentWeatherModel,
} from "@/types/current-weather.model";
import { ForecastDayModel, ForecastModel } from "@/types/forecast.model";
import { HourModel } from "@/types/hour.model";
import {
  AstroResponse,
  DayResponse,
  ForecastResponse,
  HourResponse,
} from "@/types/weatherapi.model";

/**
 * Transform a current weather response from a weatherapi.com to a current weather model.
 * @param {CurrentWeatherResponse} res - The parameter `res` is of type `CurrentWeatherResponse`, which
 * is likely an object containing data related to the current weather conditions at a specific
 * location.
 * @returns Simplified version of `CurrentWeatherResponse`
 */
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
      windDir: current.wind_dir,
      windDegree: current.wind_degree,
      windKph: current.wind_kph,
      gustKph: current.gust_kph,
      condition: { ...current.condition },
      cloud: current.cloud,
      airQuality: {
        co: current.air_quality.co.toFixed(),
        pm2_5: current.air_quality.pm2_5.toFixed(2),
        pm10: current.air_quality.pm10.toFixed(2),
        usEpaIndex: current.air_quality["us-epa-index"],
      },
    },
    location: { ...location },
  };
}

/**
 * Transform a day response from a weatherapi.com to a day model.
 * @param {DayResponse} day - The parameter `day` is of type `DayResponse`, which
 * is likely an object containing data related to the day weather conditions at a specific
 * location.
 * @returns Simplified version of `DayResponse`
 */
function _mapToForecastDay(day: DayResponse): ForecastDayModel["day"] {
  return {
    maxtempC: day.maxtemp_c,
    maxtempF: day.maxtemp_f,
    mintempC: day.mintemp_c,
    mintempF: day.maxtemp_f,
    avgtempC: day.avgtemp_c,
    avgtempF: day.avgtemp_f,
    maxwindMph: day.maxwind_mph,
    maxwindKph: day.maxwind_kph,
    avgvisKm: day.avgvis_km,
    avgvisMiles: day.avgvis_miles,
    avghumidity: day.avghumidity,
    dailyWillItRain: day.daily_will_it_rain,
    dailyChanceOfRain: day.daily_chance_of_rain,
    dailyWillItSnow: day.daily_will_it_snow,
    dailyChanceOfSnow: day.daily_chance_of_snow,
    condition: day.condition,
    uv: day.uv,
  };
}

/**
 * Transform a astro response from a weatherapi.com to a astro model.
 * @param {AstroResponse} astro - The parameter `astro` is of type `AstroResponse`, which
 * is likely an object containing data related to the astro at a specific
 * location.
 * @returns Simplified version of `AstroResponse`
 */
function _mapToForecastAstro(astro: AstroResponse): ForecastDayModel["astro"] {
  return {
    sunrise: astro.sunrise,
    sunset: astro.sunset,
    moonrise: astro.moonrise,
    moonset: astro.moonset,
    moonPhase: astro.moon_phase as MoonPhase,
  };
}

/**
 * Transform a hour response from a weatherapi.com to a astro model.
 * @param {HourResponse} hour - The parameter `astro` is of type `HourResponse`, which
 * is likely an object containing data related to the hour weather conditions at a specific
 * location.
 * @returns Simplified version of `HourResponse`
 */
function _mapToForecastHour(hour: HourResponse): ForecastDayModel["hour"][0] {
  return {
    timeEpoch: hour.time_epoch,
    time: hour.time,
    tempC: hour.temp_c,
    tempF: hour.temp_f,
    humidity: hour.humidity,
    isDay: hour.is_day,
    condition: hour.condition,
    windMph: hour.wind_mph,
    windKph: hour.wind_kph,
    winddegree: hour.wind_degree,
    windDir: hour.wind_dir,
  };
}

/**
 * Transform a forecast response from a weatherapi.com to a forecast model.
 * @param {ForecastResponse} res - The parameter `res` is of type `ForecastResponse`, which
 * is likely an object containing data related to the forecast weather conditions at a specific
 * location.
 * @returns Simplified version of `ForecastResponse`
 */
export function mapToForecastWeather(res: ForecastResponse): ForecastModel {
  const { current, location, forecast } = res;
  const mappedForecast = forecast.forecastday.map(
    ({ day, astro, hour, date, date_epoch }) => ({
      dateEpoch: date_epoch,
      date,
      day: _mapToForecastDay(day),
      astro: _mapToForecastAstro(astro),
      hour: hour.map((_hour) => _mapToForecastHour(_hour)),
    })
  );
  return {
    ...mapToCurrentWeather({ current, location }),
    forecast: { forecastday: mappedForecast },
    tomorrow: mappedForecast[1],
    overmorrow: mappedForecast[2],
  };
}

export function mapToTotalTemperatureByHours(hours: HourModel[]) {
  return hours.reduce(
    (acc, { tempC, tempF }) => {
      acc.tempC = acc.tempC + tempC;
      acc.tempF = acc.tempF + tempF;
      return acc;
    },
    { tempC: 0, tempF: 0 }
  );
}
