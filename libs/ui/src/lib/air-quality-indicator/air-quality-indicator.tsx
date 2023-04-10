import { Box, HStack, Text, Progress } from '@chakra-ui/react';
import { useWeatherCardColor } from '../use-weather-card-color/use-weather-card-color';

export interface AirQualityIndicatorProps {
  index: number;
}

export function AirQualityIndicator(props: AirQualityIndicatorProps) {
  return (
    <Box bgColor={useWeatherCardColor('light', 'bg')} borderRadius="2xl" p={4}>
      <HStack justifyContent="space-between" mb={2}>
        <Text color='primary.800' fontSize="xs">Good</Text>
        <Text
          fontSize="xs"
          className="air-quality__badge--highlight"
          bgColor={useWeatherCardColor('primary', 'bg')}
          color={useWeatherCardColor('primary', 'fg')}
          borderRadius="lg"
          p={1.5}
        >
          Standard
        </Text>
        <Text color='primary.800' fontSize="xs">Hazardous</Text>
      </HStack>
      <Progress hasStripe value={50} colorScheme="orange" size="xs" />
    </Box>
  );
}

export default AirQualityIndicator;
