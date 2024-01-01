import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface HumidityUnitProps extends TextProps {
  children: ReactNode;
}

export function HumidityUnit({ children, ...props }: HumidityUnitProps) {
  return <Text {...props}>{children}%</Text>;
}

export default HumidityUnit;
