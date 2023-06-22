import { AstroModel } from './astro.model';
import { DayModel } from './day.model';
import { HourModel } from './hour.model';

export interface ForecastDayModel {
  day: DayModel;
  astro: AstroModel;
  hour: HourModel[];
}

export type DayTimeForecast = Pick<
  HourModel,
  'tempC' | 'tempF' | 'condition' | 'humidity'
> & { name: string };
