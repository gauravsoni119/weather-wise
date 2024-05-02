import { FORECAST_ICON_MAP } from "@/lib/icon-map";
import { cn, formateTemp } from "@/lib/utils";
import { HourModel } from "@/types/hour.model";
import { formatDate } from "date-fns";
import { Sun } from "lucide-react";

interface TodayWeather {
  hours: HourModel[];
}

export default function TodayWeather({ hours }: TodayWeather) {
  return (
    <>
      <div className="flex gap-4 pb-2 overflow-y-auto weather-wise__scrollable">
        {hours.map(({ timeEpoch, time, condition, tempC }, index) => {
          const hour = formatDate(time, "hha");
          const Icon = FORECAST_ICON_MAP[condition.code] ?? Sun;
          return (
            <article
              key={timeEpoch}
              className={cn("flex flex-col gap-2 p-4 rounded-md", {
                "bg-zinc-100": index === 0,
              })}
            >
              <span>{index === 0 ? "Now" : hour}</span>
              <Icon />
              <span className="font-bold">{`${formateTemp(tempC)}\u2103`}</span>
            </article>
          );
        })}
      </div>
    </>
  );
}
