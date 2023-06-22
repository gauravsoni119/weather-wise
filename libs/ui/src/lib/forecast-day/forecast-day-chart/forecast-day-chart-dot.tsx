import { FORECAST_ICON_MAP } from '../../constants/forecast-icon-map';

export interface ForecastDayChartDotProps {
  cx?: number;
  cy?: number;
  payload?: {
    condition: { code: number; text: string; icon: string };
  };
}

export function ForecastDayChartDot(props: ForecastDayChartDotProps) {
  const { cx = 0, cy = 0, payload } = props;
  const icon = FORECAST_ICON_MAP[payload ? payload.condition.code : 1000];
  return (
    <svg>
      <image
        x={cx - 20}
        y={cy - 20}
        width={'2.5rem'}
        height={'2.5rem'}
        href={icon}
        data-testid={payload ? payload.condition.text : 'unknown-icon'}
      />
    </svg>
  );
}

export default ForecastDayChartDot;
