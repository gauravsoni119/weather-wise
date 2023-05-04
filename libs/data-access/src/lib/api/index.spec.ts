import CurrentWeatherClient from '../api';

jest.mock('../constant', () => ({
  VITE_USE_MOCK: 'false',
  VITE_RAPID_API_KEY: '123',
  VITE_RAPID_HOST: 'test.com',
}));
describe('axios client', () => {
  it('should create axios client with base url', () => {
    expect(CurrentWeatherClient.getUri()).toEqual('https://test.com');
  });
});
