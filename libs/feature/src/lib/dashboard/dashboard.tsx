import { useEffect } from 'react';
import { HStack } from '@chakra-ui/react';
import { WiDaySunny, WiWindy } from 'react-icons/wi';
import { WeatherCard, KpiCard, AirQualityIndicator } from '@weather-wise/ui';
import {
  useWeatherSelector,
  fetchCurrentWeather,
  useWeatherDispatch,
  selectCurrentWeather,
} from '@weather-wise/data-access';
import { LOADING_STATES } from '@weather-wise/util';

export function Dashboard() {
  const dispatch = useWeatherDispatch();
  const { data, loading, error } = useWeatherSelector(selectCurrentWeather);
  console.log(data, loading, error);

  useEffect(() => {
    console.log('called...');
    dispatch(fetchCurrentWeather('Amsterdam'));
  }, [dispatch]);

  if (loading === LOADING_STATES.loading) return <div>Loading...</div>;

  if (!data) return null;
  const { current } = data;

  return (
    <HStack>
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
            bgColor="primary.800"
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
    </HStack>
  );
}

export default Dashboard;
