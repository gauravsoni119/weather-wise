import {
  Box,
  Badge,
  Card,
  CardBody,
  Icon,
  HStack,
  Text,
  Heading,
  useColorModeValue,
  Flex,
  VStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import {
  useWeatherCardColor,
  WEATHER_CARD_COLORS,
} from '../use-weather-card-color/use-weather-card-color';

interface WeatherCardProps {
  weatherType: 'sunny' | 'cloudy' | 'windy' | 'rainy' | 'stormy';
  heading: string;
  subheading: string;
  icon: IconType;
  kpi: string;
  kpiLabel: string;
  kpiBadge: string;
  kpiBadgeColor?: keyof typeof WEATHER_CARD_COLORS;
  children?: ReactNode;
  textColor?: 'primary' | 'light';
}

export function WeatherCard(props: WeatherCardProps) {
  const lightFgColor = useWeatherCardColor('primary', 'fg');
  const primaryFgColor = useWeatherCardColor('light', 'fg');
  const tertiaryBgColor = useWeatherCardColor('tertiary', 'bg');
  const textColor = props.textColor === 'light' ? lightFgColor : primaryFgColor;
  const badgeBgColor =
    props.kpiBadgeColor === 'tertiary' ? tertiaryBgColor : lightFgColor;
  return (
    <Card
      className="weather-card"
      w="full"
      color={useColorModeValue('white', 'white')}
    >
      <CardBody>
        <Box
          className={`weather-card__bg weather-card__bg--${props.weatherType}`}
          borderRadius="md"
        />
        <VStack
          shouldWrapChildren
          className="weather-card__content"
          w="full"
          h="full"
          p={5}
          alignItems="initial"
        >
          <Flex mb={8}>
            <Icon
              as={props.icon}
              w={8}
              h={8}
              borderRadius="full"
              color={useColorModeValue('orange.500', 'orange.500')}
              bg={useColorModeValue('white', 'white')}
              marginRight={3}
            />
            <Box>
              <Heading as="h6" size="xs" textColor={textColor}>
                {props.heading}
              </Heading>
              <Text fontSize="xs" textColor={textColor}>
                {props.subheading}
              </Text>
            </Box>
          </Flex>
          <Box mb={12}>
            <HStack>
              <Text fontSize="4xl" textColor={textColor}>
                {props.kpi}
              </Text>
              <Badge
                pt={1}
                pb={1}
                pl={2}
                pr={2}
                borderRadius="md"
                bgColor={badgeBgColor}
              >
                {props.kpiBadge}
              </Badge>
            </HStack>
            <Text textTransform="capitalize" textColor={textColor}>
              {props.kpiLabel}
            </Text>
          </Box>
          <Box>{props.children}</Box>
        </VStack>
      </CardBody>
    </Card>
  );
}

export default WeatherCard;
