export interface ForecastDayChartLabelProps {
  x?: number;
  y?: number;
  value?: string;
  suffix?: string;
}

export function ForecastDayChartLabel(props: ForecastDayChartLabelProps) {
  const { x = 0, y = 0, value = '', suffix = '' } = props;
  return (
    <svg>
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={y + 20} textAnchor="middle">
          {`${value}${suffix}`}
        </text>
      </g>
    </svg>
  );
}

export default ForecastDayChartLabel;
