import CurrentWeatherClient from '../api';

describe('axios client', () => {
  it('should create axios client with localhost base url', () => {
    expect(CurrentWeatherClient.getUri()).toEqual('http://localhost:3000');
  });
});
