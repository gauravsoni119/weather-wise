import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ForecastDayModel, formatDate } from '@weather-wise/util';
import HumidityUnit from '../humidity-unit/humidity-unit';
import TemperatureUnit from '../temperature-unit/temperature-unit';
import WindUnit from '../wind-unit/wind-unit';

/* eslint-disable-next-line */
export interface TomorrowForecastProps {
  forecast: ForecastDayModel;
  localTime: string;
}

export function TomorrowForecast({
  forecast,
  localTime,
}: TomorrowForecastProps) {
  const tomorrow = new Date(localTime);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    <Card bg="tertiary.500" h={'full'}>
      <CardBody>
        <VStack h={'full'}>
          <Box alignSelf={'flex-start'}>
            <Heading as={'h3'} size={'sm'} color="primary.800" mb={1}>
              Tomorrow
            </Heading>
            <Text fontSize={'xs'} color="primary.800">
              {formatDate(tomorrow)}
            </Text>
          </Box>
          <HStack flex={1}>
            <Box textAlign={'center'}>
              <TemperatureUnit
                color={'primary.800'}
                as={'strong'}
                fontSize={'5xl'}
                fontWeight={'semibold'}
              >
                {forecast.day.avgtempC}
              </TemperatureUnit>
              <Text color={'primary.800'}>{forecast.day.condition.text}</Text>
            </Box>
          </HStack>
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            color={'primary.800'}
            data-testid="high-temp"
          >
            <Text>High </Text>
            <TemperatureUnit>{forecast.day.maxtempC}</TemperatureUnit>
          </HStack>
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            color={'primary.800'}
            data-testid="low-temp"
          >
            <Text>Low </Text>
            <TemperatureUnit>{forecast.day.mintempC}</TemperatureUnit>
          </HStack>
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            color={'primary.800'}
            data-testid="humidity"
          >
            <Text>Humidity </Text>
            <HumidityUnit>{forecast.day.avghumidity}</HumidityUnit>
          </HStack>
          <HStack
            w={'full'}
            justifyContent={'space-between'}
            color={'primary.800'}
            data-testid="wind"
          >
            <Text>Wind </Text>
            <WindUnit>{forecast.day.maxwindMph}</WindUnit>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default TomorrowForecast;
