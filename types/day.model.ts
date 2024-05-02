import { ConditionModel } from "./condition.model";

export interface DayModel {
  maxtempC: number;
  maxtempF: number;
  mintempC: number;
  mintempF: number;
  avgtempC: number;
  avgtempF: number;
  maxwindMph: number;
  maxwindKph: number;
  avgvisKm: number;
  avgvisMiles: number;
  avghumidity: number;
  dailyWillItRain: number;
  dailyChanceOfRain: number;
  dailyWillItSnow: number;
  dailyChanceOfSnow: number;
  condition: ConditionModel;
  uv: number;
}
