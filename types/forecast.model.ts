import { CurrentModel } from "./current-weather.model";
import { LocationResponse } from "./weatherapi.model";

export type Aqi = "yes" | "no";

export interface ForecastRequestParams {
  q: string;
  aqi?: Aqi;
  days?: number;
}

export interface ForecastModel {
  location: LocationResponse;
  current: CurrentModel;
  forecast: {
    forecastday: ForecastDayModel[];
  };
  tomorrow: ForecastDayModel;
  overmorrow: ForecastDayModel;
}

import { AstroModel } from "./astro.model";
import { DayModel } from "./day.model";
import { HourModel } from "./hour.model";

export interface ForecastDayModel {
  date: string;
  dateEpoch: number;
  day: DayModel;
  astro: AstroModel;
  hour: HourModel[];
}

export type DayTimeForecast = Pick<
  HourModel,
  "tempC" | "tempF"
> & { name: string };
