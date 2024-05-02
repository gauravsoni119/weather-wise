import { cn } from "@/lib/utils";

export interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  progress: number;
}

export default function CircularProgress({
  size,
  strokeWidth,
  progress,
}: CircularProgressProps) {
  const halfSize = Math.floor(size / 2);
  const radius = Math.floor((size - strokeWidth) / 2);
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        className="stroke-zinc-400"
        cx={halfSize}
        cy={halfSize}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        className={cn("-rotate-90")}
        cx={halfSize}
        cy={halfSize}
        r={radius}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={`${dash} ${circumference - dash}`}
        style={{ transformOrigin: `${halfSize}px ${halfSize}px` }}
      />
      <text
        x={halfSize}
        y={halfSize}
        textAnchor="middle"
        fill="currentColor"
        className="font-medium"
        alignmentBaseline="middle"
      >
        {progress < 50 ? "Low" : "high"}
      </text>
    </svg>
  );
}
