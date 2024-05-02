import { FORECAST_ICON_MAP } from "@/lib/icon-map";
import { formateTemp } from "@/lib/utils";
import { ForecastDayModel } from "@/types/forecast.model";
import { formatDate } from "date-fns/format";
import { Sun } from "lucide-react";

interface WeeklyForecastProps {
  forecastDays: ForecastDayModel[];
}

export default function WeeklyForecast({ forecastDays }: WeeklyForecastProps) {
  return forecastDays.map(({ day, date, dateEpoch }) => {
    const { condition, avgtempC } = day;
    const Icon = FORECAST_ICON_MAP[condition.code] ?? Sun;
    return (
      <article
        key={dateEpoch}
        className="flex justify-between items-center mb-4"
      >
        <div className="flex flex-col gap-1">
          <span>{formatDate(date, "cccc")}</span>
          <span className="text-sm text-muted-foreground">
            {formatDate(date, "dd LLL")}
          </span>
        </div>
        <strong>{`${formateTemp(avgtempC)}\u2103`}</strong>
        <Icon />
      </article>
    );
  });
}
