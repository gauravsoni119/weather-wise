import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface TemperatureUnitProps extends TextProps {
  unit?: 'celsius' | 'fahrenheit';
  children: ReactNode;
}

export function TemperatureUnit({
  unit = 'celsius',
  children,
  ...props
}: TemperatureUnitProps) {
  return (
    <Text {...props}>
      {children}
      {`\u2103`}
    </Text>
  );
}

export default TemperatureUnit;
