import { DayTimeForecast, ForecastDayModel } from "@/types/forecast.model";
import { HourModel } from "@/types/hour.model";
import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { AIR_QUALITY_MAP, DAY_TIMES } from "./constants";
import { mapToTotalTemperatureByHours } from "./mapper";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterByUpcomingHours(hours: HourModel[]) {
  const now = new Date();
  return hours.filter((hour) => {
    const forecastHour = new Date(hour.time).getHours();
    return forecastHour >= now.getHours();
  });
}

export function formateDate(dateStr: string, pattern: string) {
  const date = new Date(dateStr);
  return format(date, pattern);
}

export function formateTemp(temp: number) {
  return Math.floor(temp);
}

export function getTempByTimePeriod(forecastday: ForecastDayModel) {
  const { hour: hours } = forecastday;
  return DAY_TIMES.reduce((dayTime, { from, to, name }) => {
    const hourSlice = hours.slice(from, to);
    const diff = to - from;
    const totalTemp = mapToTotalTemperatureByHours(hourSlice);
    dayTime.push({
      tempC: Math.floor(totalTemp.tempC / diff),
      tempF: Math.floor(totalTemp.tempF / diff),
      name,
    });
    return dayTime;
  }, [] as DayTimeForecast[]);
}

export function getAirQuality(index: number) {
  return AIR_QUALITY_MAP[index as keyof typeof AIR_QUALITY_MAP];
}
