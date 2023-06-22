export const DEFAULT_FORECAST_PARAMS = {
  aqi: 'yes',
  days: 7,
} as const;

export const DAY_TIMES = [
  { from: 0, to: 12, name: 'Morning' },
  { from: 12, to: 18, name: 'Afternoon' },
  { from: 18, to: 22, name: 'Evening' },
  { from: 22, to: 24, name: 'Night' },
] as const;
