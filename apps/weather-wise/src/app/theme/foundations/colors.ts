import { theme } from '@chakra-ui/react';

const colors = {
  // primary: {
  //   '50': '#EFF3F6',
  //   '100': '#D1DDE5',
  //   '200': '#B4C8D5',
  //   '300': '#97B2C4',
  //   '400': '#799CB3',
  //   '500': '#5C87A3',
  //   '600': '#4A6C82',
  //   '700': '#375162',
  //   '800': '#253641',
  //   '900': '#121B21',
  //   lightMode: theme.colors.gray['700'],
  //   darkMode: theme.colors.gray['700'],
  // },
  primary: { ...theme.colors.gray },
  secondary: { ...theme.colors.orange },
  tertiary: {
    50: '#f3fae4',
    100: '#e1ecc2',
    200: '#cedf9e',
    300: '#bad279',
    400: '#a7c654',
    500: '#8dac3b',
    600: '#6e862d',
    700: '#4f601f',
    800: '#2e390f',
    900: '#0f1400',
  },
} as const;

export type Colors = typeof colors;
export default colors;
