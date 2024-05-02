import { ConditionModel } from "./condition.model";

export interface HourModel {
  timeEpoch: number;
  time: string;
  tempC: number;
  tempF: number;
  humidity: number;
  isDay: number;
  condition: ConditionModel;
  windMph: number;
  windKph: number;
  winddegree: number;
  windDir: string;
}
