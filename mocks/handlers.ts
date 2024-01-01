import { FORECAST_MOCK } from '@weather-wise/test-util';
import { rest } from 'msw';

export const successHandler = rest.get(
  'http://localhost:3000/forecast.json',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(FORECAST_MOCK));
  }
);

export const errorHandler = rest.get(
  'http://localhost:3000/forecast.json',
  (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({ error: { code: 9999, message: 'Internal application error' } })
    );
  }
);

export const handlers = [successHandler, errorHandler];
