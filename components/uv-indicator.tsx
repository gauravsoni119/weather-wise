import dynamic from "next/dynamic";

const GaugeChart = dynamic(() => import("react-gauge-chart"), {
  ssr: false,
});

export interface UvGaugeProps {
  index: number;
  className?: string;
  hideText?: boolean;
}

export default function UvIndicator({
  index,
  className,
  hideText = true,
}: UvGaugeProps) {
  return (
    <GaugeChart
      className={className}
      nrOfLevels={30}
      arcPadding={0.02}
      percent={index}
      hideText={hideText}
    />
  );
}
