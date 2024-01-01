import { useEffect, Fragment } from 'react';
import { HStack, Flex, Box, Card, CardBody } from '@chakra-ui/react';
import { WiDaySunny, WiWindy } from 'react-icons/wi';
import {
  WeatherCard,
  KpiCard,
  AirQualityIndicator,
  ForecastDay,
  TomorrowForecast,
} from '@weather-wise/ui';
import {
  useWeatherSelector,
  fetchForecast,
  useWeatherDispatch,
  selectForecastByDaytime,
  selectWeatherForecast,
} from '@weather-wise/data-access';
import { LOADING_STATES } from '@weather-wise/util';

export function Dashboard() {
  const dispatch = useWeatherDispatch();
  const { data, loading, error } = useWeatherSelector(selectWeatherForecast);
  const forecastByDaytime = useWeatherSelector(selectForecastByDaytime);

  useEffect(() => {
    dispatch(fetchForecast({ q: 'Amsterdam' }));
  }, [dispatch]);

  if (loading === LOADING_STATES.Loading) return <div>Loading...</div>;
  if (error) return <div>error...</div>;

  if (!data) return null;
  const { current } = data;

  return (
    <Fragment>
      <Flex direction={{ base: 'column', md: 'row' }} gap="5" pb={8}>
        <Box w={{ base: '100%', md: '50%' }}>
          <WeatherCard
            weatherType="sunny"
            icon={WiDaySunny}
            heading="Weather"
            subheading="What's the weather?"
            kpi={`${current.tempC}\u2103`}
            kpiLabel={current.condition.text}
            kpiBadge={`${current.feelsLikeC}\u2103`}
          >
            <HStack justifyContent="space-between" spacing={4}>
              <KpiCard
                label="Pressure"
                value={`${current.pressureMb}mb`}
                color="white"
                bgColor="primary.500"
              />
              <KpiCard
                label="Visibility"
                value={`${current.visKm}km`}
                color="primary.800"
                bgColor="tertiary.500"
              />
              <KpiCard
                label="Humidity"
                value={`${current.humidity}%`}
                color="primary.800"
              />
            </HStack>
          </WeatherCard>
        </Box>
        <Box w={{ base: '100%', md: '50%' }}>
          <WeatherCard
            weatherType="rainy"
            icon={WiWindy}
            heading="Air Quality"
            subheading={`Main pollution: PM 2.5 (${current.airQuality.pm2_5})`}
            kpi={current.airQuality.co}
            kpiLabel={current.windDir}
            kpiBadge="CO"
            textColor="light"
            kpiBadgeColor="tertiary"
          >
            <AirQualityIndicator index={current.airQuality.usEpaIndex} />
          </WeatherCard>
        </Box>
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} gap="5">
        <Box w={{ base: '100%', md: '75%' }}>
          <ForecastDay forecastByDaytime={forecastByDaytime} />
        </Box>
        <Box w={{ base: '100%', md: '25%' }}>
          <TomorrowForecast
            forecast={data.tomorrow}
            localTime={data.location.localtime}
          />
        </Box>
      </Flex>
    </Fragment>
  );
}

export default Dashboard;
