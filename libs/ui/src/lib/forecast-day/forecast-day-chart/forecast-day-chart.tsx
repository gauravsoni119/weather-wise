import { ReactElement } from 'react';
import { useTheme, useColorModeValue } from '@chakra-ui/react';
import { DayTimeForecast } from '@weather-wise/util';
import {
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

export interface ForecastDayChartProps {
  forecastByDaytime: DayTimeForecast[];
  xAxisDataKey?: keyof DayTimeForecast;
  lineDataKey: keyof DayTimeForecast;
  dot?: ReactElement;
  label?: ReactElement;
  tooltipFormatter?: (value: unknown, name: number | string) => string;
}

export function ForecastDayChart(props: ForecastDayChartProps) {
  const {
    forecastByDaytime,
    xAxisDataKey = 'name',
    lineDataKey,
    dot,
    label,
    tooltipFormatter,
  } = props;
  const secondaryColor = useTheme().colors.secondary['500'];
  const primaryColor = useTheme().colors.primary['900'];
  const secondaryColorModeValue = useColorModeValue(
    secondaryColor,
    secondaryColor
  );
  const primaryColorModeValue = useColorModeValue(primaryColor, primaryColor);

  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={'200px'}>
      <LineChart data={forecastByDaytime}>
        <CartesianGrid
          horizontal={false}
          strokeDasharray="1"
          strokeWidth={0.5}
        />
        <XAxis
          dataKey={xAxisDataKey}
          interval={'preserveStartEnd'}
          padding={{ left: 15, right: 15 }}
        />
        <Tooltip formatter={tooltipFormatter} />
        <Line
          type="monotone"
          dataKey={lineDataKey}
          stroke={secondaryColorModeValue}
          activeDot={{ fill: primaryColorModeValue }}
          dot={dot}
          label={label}
          strokeWidth={3}
          connectNulls={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ForecastDayChart;
