import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface WindUnitProps extends TextProps {
  children: ReactNode;
}

export function WindUnit({ children, ...props }: WindUnitProps) {
  return <Text {...props}>{children}mph</Text>;
}

export default WindUnit;
