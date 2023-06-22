import { RiTempHotLine } from 'react-icons/ri';
import { WiHumidity } from 'react-icons/wi';
import {
  Heading,
  Icon,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Card,
  CardBody,
  Box,
} from '@chakra-ui/react';
import { DayTimeForecast } from '@weather-wise/util';
import ForecastDayChart from './forecast-day-chart/forecast-day-chart';
import ForecastDayChartDot from './forecast-day-chart/forecast-day-chart-dot';
import ForecastDayChartLabel from './forecast-day-chart/forecast-day-chart-label';

export interface ForecastDayProps {
  forecastByDaytime: DayTimeForecast[];
}

export function ForecastDay({ forecastByDaytime }: ForecastDayProps) {
  return (
    <Card>
      <CardBody>
        <Tabs
          isLazy
          align="end"
          variant="soft-rounded"
          colorScheme="secondary"
          position={'relative'}
        >
          <TabList mb={'8'}>
            <Tab>
              <Icon as={RiTempHotLine} boxSize={5} />
            </Tab>
            <Tab>
              <Icon as={WiHumidity} boxSize={5} />
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Heading
                as={'h2'}
                position={'absolute'}
                top={0}
                left={0}
                w={'70%'}
                textAlign={'left'}
                px={'4'}
              >
                How's the <br /> temperature today?
              </Heading>
              <Box>
                <ForecastDayChart
                  forecastByDaytime={forecastByDaytime}
                  lineDataKey="tempC"
                  dot={<ForecastDayChartDot />}
                  tooltipFormatter={(value) => `${value}\u2103`}
                  label={<ForecastDayChartLabel suffix={'\u2103'} />}
                />
              </Box>
            </TabPanel>
            <TabPanel>
              <Heading
                as={'h2'}
                position={'absolute'}
                top={0}
                left={0}
                w={'70%'}
                textAlign={'left'}
                px={'4'}
              >
                What is the <br /> humidity level today?
              </Heading>
              <ForecastDayChart
                forecastByDaytime={forecastByDaytime}
                lineDataKey="humidity"
                tooltipFormatter={(value) => `${value}%`}
                label={<ForecastDayChartLabel suffix="%" />}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
}

export default ForecastDay;
