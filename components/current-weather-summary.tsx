import { MapPin, Gauge, Droplet, Wind } from "lucide-react";
import ForecastDayChart from "./forecast-day/forecast-day";
import { Card, CardContent } from "./ui/card";
import { ConditionModel } from "@/types/condition.model";
import { CurrentModel } from "@/types/current-weather.model";
import { LocationResponse } from "@/types/weatherapi.model";
import { DayTimeForecast } from "@/types/forecast.model";
import { formatDate } from "date-fns";

export interface CurrentWeatherSummaryProps {
  forecastByDayTime: DayTimeForecast[];
  location: LocationResponse;
  current: CurrentModel;
}

export default function CurrentWeatherSummary({
  current,
  forecastByDayTime,
  location,
}: CurrentWeatherSummaryProps) {
  return (
    <Card className="w-full bg-zinc-100">
      <CardContent className="flex p-6 gap-6">
        <div className="flex flex-col w-1/2">
          <div className="flex justify-between">
            <div className="flex">
              <MapPin className="me-1" />
              <h3 className="text-xl font-semibold leading-none tracking-tight mb-2">
                {location.name}
              </h3>
            </div>
            <span className="text-sm">
              Today {formatDate(location.localtime, 'hh:mm a')}
            </span>
          </div>
          <div className="p-8 text-center">
            <p className="text-5xl">{`${current.tempC}\u2103`}</p>
            <span className="text-sm text-muted-foreground">
              {current.condition.text}
            </span>
          </div>
          <div className="flex justify-between text-sm mt-auto">
            <div className="flex items-center">
              <Gauge className="me-1" />
              <span>{current.pressureMb} mb</span>
            </div>
            <div className="flex items-center">
              <Droplet className="me-1" />
              <span>{current.humidity}%</span>
            </div>
            <div className="flex items-center">
              <Wind className="me-1" />
              <span>{current.windKph} km/h</span>
            </div>
          </div>
        </div>
        <Card className="justify-center items-center w-1/2 bg-zinc-100">
          <CardContent className="p-4">
            <ForecastDayChart
              forecastByDaytime={forecastByDayTime}
              lineDataKey="tempC"
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
