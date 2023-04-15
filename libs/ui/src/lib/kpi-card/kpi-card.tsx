import { Box, VStack } from '@chakra-ui/react';
import {
  WEATHER_CARD_COLORS,
  useWeatherCardColor,
} from '../use-weather-card-color/use-weather-card-color';

export interface KpiCardProps {
  label: string;
  value: string;
  color?: string;
  bgColor?: string;
}

export function KpiCard({
  label,
  value,
  bgColor = 'white',
  color = 'black',
}: KpiCardProps) {
  // const bgColor = useWeatherCardColor(color, 'bg');
  // const fgColor = useWeatherCardColor(color, 'fg');
  return (
    <Box bg={bgColor} borderRadius="2xl" p={3} w="full">
      <VStack color={color} spacing={0.5}>
        <Box fontSize="xs">{label}</Box>
        <Box fontWeight="bold">{value}</Box>
      </VStack>
    </Box>
  );
}

export default KpiCard;
