/**
 * Default colors used in the theme
 * Primary color - #023047
 * Secondary color - #FB8500
 * Tertiary color - #9FD356
 */

const colors = {
  primary: {
    '50': '#07a5f5',
    '100': '#0584c3',
    '200': '#0573aa',
    '300': '#046291',
    '400': '#035279',
    '500': '#023047',
    '600': '#010e15',
    '700': '#000000',
    '800': '#000000',
    '900': '#000000',
  },
  secondary: {
    '50': '#ffd9af',
    '100': '#ffc17c',
    '200': '#ffb562',
    '300': '#ffa949',
    '400': '#ff9d2f',
    '500': '#FB8500',
    '600': '#c86a00',
    '700': '#ae5c00',
    '800': '#954f00',
    '900': '#623400',
  },
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
