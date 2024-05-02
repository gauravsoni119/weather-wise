import dynamic from "next/dynamic";
const GaugeChart = dynamic(() => import("react-gauge-chart"), {
  ssr: false,
});

export interface PressureGaugeProps {
  pressure: number;
  className?: string;
  hideText?: boolean;
}

const MAX_PRESSURE_MB = 1050;
export default function PressureGauge({
  pressure,
  className,
  hideText = true,
}: PressureGaugeProps) {
  return (
    <GaugeChart
      nrOfLevels={30}
      colors={["currentColor"]}
      needleColor="currentColor"
      needleBaseColor="currentColor"
      hideText={hideText}
      percent={pressure / MAX_PRESSURE_MB}
      className={className}
    />
  );
}
