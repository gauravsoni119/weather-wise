import { ComponentStyleConfig, defineStyle } from '@chakra-ui/react';

const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'medium',
  },
  sizes: {
    md: defineStyle({ fontSize: '2xl' }),
  },
  defaultProps: {
    size: 'md',
  },
};

export default Heading;
