import TodayWeather from "./today-weather";
import WeeklyForecast from "./weekly-forecast";
import { useForecast } from "@/hooks/use-forecast";
import { Skeleton } from "./ui/skeleton";
import { DAYS, MAX_FORECAST_HOURS } from "@/lib/constants";
import { filterByUpcomingHours } from "@/lib/utils";
import WeatherSummarySkeleton from "./weather-summary-skeleton";
import DayLightIndicator from "./day-light-indicator";
import { Moon, Sun } from "lucide-react";

export default function WeatherSummary() {
  const { data, isLoading } = useForecast({
    q: "Amsterdam",
    aqi: "yes",
    days: 7,
  });
  if (isLoading || !data) {
    return <WeatherSummarySkeleton />;
  }
  const {
    forecast: { forecastday },
  } = data;
  const [today] = forecastday;
  let hourlyForecast = filterByUpcomingHours(today.hour);
  if (hourlyForecast.length < MAX_FORECAST_HOURS) {
    const diff = MAX_FORECAST_HOURS - hourlyForecast.length;
    hourlyForecast = [...hourlyForecast, ...forecastday[1].hour.slice(0, diff)];
  }
  return (
    <div className="h-full fixed w-[inherit] overflow-y-auto weather-wise__scrollable">
      <div className="p-4">
        <h3 className="text-lg text-center font-semibold mb-4">This Week</h3>
        <div className="mb-5">
          <h4 className="text-md mb-4">Today</h4>
          {isLoading ? (
            <Skeleton className="h-28" />
          ) : (
            <TodayWeather hours={hourlyForecast} />
          )}
        </div>
        <div>
          {isLoading ? (
            DAYS.map((day) => <Skeleton key={day} className="h-20 mb-3" />)
          ) : (
            <WeeklyForecast forecastDays={forecastday} />
          )}
        </div>
        <div>
          <h4 className="mb-4" id="dayLightLabel">Sun and Moon Summary</h4>
          <div className="flex flex-col gap-6">
            <DayLightIndicator
              rise={today.astro.sunrise}
              set={today.astro.sunset}
              icon={Sun}
              labelledBy="dayLightLabel"
            />
            <DayLightIndicator
              rise={today.astro.moonrise}
              set={today.astro.moonset}
              icon={Moon}
              labelledBy="dayLightLabel"
            />

          </div>
        </div>
      </div>
    </div>
  );
}
