import { ForecastDayModel } from '@weather-wise/util';
import { CurrentModel } from './current-weather.model';
import { LocationResponse } from './weatherapi.model';

export type Aqi = 'yes' | 'no';

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
