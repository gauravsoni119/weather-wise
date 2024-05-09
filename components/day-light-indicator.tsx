import { getHours, parse } from "date-fns";
import { LucideIcon } from "lucide-react";

export interface DayLightIndicatorProps {
  rise: string;
  set: string;
  icon: LucideIcon;
  labelledBy: string;
}

export default function DayLightIndicator({
  set,
  rise,
  icon: Icon,
  labelledBy,
}: DayLightIndicatorProps) {
  const current = getHours(new Date());
  const setHours = getHours(parse(set, "hh:mm a", "2023-05-24"));
  const riseHours = getHours(parse(rise, "hh:mm a", "2023-05-24"));
  return (
    <div>
      <div
        role="meter"
        aria-valuenow={current}
        aria-valuemin={riseHours}
        aria-valuemax={setHours}
        aria-labelledby={labelledBy}
        className="w-full h-2 relative rounded-md flex gap-2 items-center"
      >
        <div
          className=" bg-zinc-900 h-full rounded-md text-left"
          style={{ width: `${(current / setHours) * 100}%` }}
        ></div>
        <div>
          <Icon />
        </div>
        <div
          className=" bg-zinc-900 h-full relative rounded-md text-right"
          style={{ width: `calc(100% - ${(current / setHours) * 100}%)` }}
        ></div>
      </div>
      <div className="flex justify-between">
        <span className="inline-block mt-4">{rise}</span>
        <span className="inline-block mt-4">{set}</span>
      </div>
    </div>
  );
}
