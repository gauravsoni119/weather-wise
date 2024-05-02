import { DayTimeForecast } from "@/types/forecast.model";
import { ReactElement } from "react";
import {
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

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
    xAxisDataKey = "name",
    lineDataKey,
    dot,
    label,
    tooltipFormatter,
  } = props;

  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={"200px"}>
      <LineChart data={forecastByDaytime}>
        <CartesianGrid horizontal={false} vertical={false} />
        <XAxis
          dataKey={xAxisDataKey}
          interval={"preserveStartEnd"}
          className="text-sm text-foreground"
          axisLine={false}
          tickLine={false}
          stroke="currentColor"
        />
        <Tooltip formatter={tooltipFormatter} />
        <Line
          type="monotone"
          dataKey={lineDataKey}
          stroke={"currentColor"}
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
