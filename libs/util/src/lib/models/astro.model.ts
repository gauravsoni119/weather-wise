export type MoonPhase =
  | 'New Moon'
  | 'Waxing Crescent'
  | 'First Quarter'
  | 'Waxing Gibbous'
  | 'Full Moon'
  | 'Waning Gibbous'
  | 'Last Quarter'
  | 'Waning Crescent';

export interface AstroModel {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moonPhase: MoonPhase;
}
