import { Skeleton } from "./ui/skeleton";
import { DAYS } from "@/lib/constants";

export default function WeatherSummarySkeleton() {
  return (
    <div className="h-full fixed w-[inherit] overflow-y-auto weather-wise__scrollable">
      <div className="p-4">
        <h3 className="text-lg text-center font-semibold mb-4">This Week</h3>
        <div className="mb-5">
          <h4 className="text-md mb-4">Today</h4>
          <Skeleton className="h-28" />
        </div>
        <div>
          {DAYS.map((day) => (
            <Skeleton key={day} className="h-20 mb-3" />
          ))}
        </div>
      </div>
    </div>
  );
}
