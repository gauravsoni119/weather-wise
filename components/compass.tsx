import { cn } from "@/lib/utils";

export interface CompassProps {
  size: number;
  strokeWidth: number;
  degree: number;
}

const OFFSET = 5;

export default function Compass({ size, strokeWidth, degree }: CompassProps) {
  const halfSize = Math.floor(size / 2);
  const radius = Math.floor((size - strokeWidth) / 2);
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={halfSize}
        cy={halfSize}
        r={radius}
        stroke="#A1A1AA"
        strokeWidth={strokeWidth}
        strokeDasharray="2 3"
      />
      <circle
        cx={halfSize}
        cy={halfSize}
        r={radius}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={`90 360`}
        style={{
          transformOrigin: `${halfSize}px ${halfSize}px`,
          rotate: `${-135 + degree}deg`,
        }}
      />
      <text
        x={halfSize}
        y={strokeWidth * 2 + OFFSET}
        textAnchor="middle"
        fill="currentColor"
        className="font-medium"
        alignmentBaseline="middle"
      >
        N
      </text>
      <text
        x={strokeWidth * 2 + OFFSET}
        y={halfSize}
        textAnchor="middle"
        fill="currentColor"
        className="font-medium"
        alignmentBaseline="middle"
      >
        W
      </text>
      <text
        x={size - strokeWidth * 2}
        y={halfSize}
        textAnchor="middle"
        fill="currentColor"
        className="font-medium"
        alignmentBaseline="middle"
      >
        E
      </text>
      <text
        x={halfSize}
        y={size - strokeWidth * 2}
        textAnchor="middle"
        fill="currentColor"
        className="font-medium"
        alignmentBaseline="middle"
      >
        S
      </text>
    </svg>
  );
}
