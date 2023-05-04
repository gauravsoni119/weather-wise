import { rest } from 'msw';

export const successHandler = rest.get(
  'http://localhost:3000/current.json',
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        location: {
          name: 'Amsterdam',
          region: 'North Holland',
          country: 'Netherlands',
          lat: 52.37,
          lon: 4.89,
          tz_id: 'Europe/Amsterdam',
          localtime_epoch: 1677419546,
          localtime: '2023-02-26 14:52',
        },
        current: {
          last_updated_epoch: 1677419100,
          last_updated: '2023-02-26 14:45',
          temp_c: 6,
          temp_f: 42.8,
          is_day: 1,
          condition: {
            text: 'Partly cloudy',
            icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
            code: 1003,
          },
          wind_mph: 12.5,
          wind_kph: 20.2,
          wind_degree: 40,
          wind_dir: 'NE',
          pressure_mb: 1027,
          pressure_in: 30.33,
          precip_mm: 0,
          precip_in: 0,
          humidity: 56,
          cloud: 25,
          feelslike_c: 2,
          feelslike_f: 35.6,
          vis_km: 10,
          vis_miles: 6,
          uv: 3,
          gust_mph: 16.6,
          gust_kph: 26.6,
          air_quality: {
            co: 230.3000030517578,
            no2: 3.5,
            o3: 81.5,
            so2: 0.699999988079071,
            pm2_5: 0.6000000238418579,
            pm10: 1.2000000476837158,
            'us-epa-index': 1,
            'gb-defra-index': 1,
          },
        },
      })
    );
  }
);

export const errorHandler = rest.get(
  'http://localhost:3000/current.json',
  (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: { code: 9999, message: 'Internal application error' } })
    );
  }
);

export const handlers = [successHandler, errorHandler];