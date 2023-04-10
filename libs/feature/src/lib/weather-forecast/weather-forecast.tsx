import { Box } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface WeatherForecastProps {}

export function WeatherForecast(props: WeatherForecastProps) {
  return (
    <Box as='aside' pos='fixed'>
      <h1>Welcome to WeatherForecast!</h1>
    </Box>
  );
}

export default WeatherForecast;
