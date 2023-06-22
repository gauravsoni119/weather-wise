import { extendTheme } from '@chakra-ui/react';
import colors from './foundations/colors';
import fonts from './foundations/fonts';
import Heading from './components/heading';
import styles from './styles';

export default extendTheme({
  styles,
  colors,
  fonts,
  components: { Heading },
});
