import { useColorModeValue } from '@chakra-ui/react';

export const WEATHER_CARD_COLORS = {
  primary: {
    bg: ['primary.800', 'primary.800'],
    fg: ['white', 'white'],
  },
  secondary: {
    bg: ['secondary.500', 'secondary.500'],
    fg: ['white', 'white'],
  },
  tertiary: {
    bg: ['tertiary.400', 'tertiary.400'],
    fg: ['primary.800', 'primary.800'],
  },
  light: {
    bg: ['white', 'white'],
    fg: ['primary.800', 'primary.800'],
  },
} as const;

export function useWeatherCardColor(
  color: keyof typeof WEATHER_CARD_COLORS,
  type: 'bg' | 'fg'
) {
  const weatherColor = WEATHER_CARD_COLORS[color];
  return useColorModeValue(weatherColor[type][0], weatherColor[type][1]);
}

export default useWeatherCardColor;
