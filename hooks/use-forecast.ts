import { fetcher } from "@/lib/fetcher";
import { mapToForecastWeather } from "@/lib/mapper";
import { ForecastRequestParams } from "@/types/forecast.model";
import { ForecastResponse } from "@/types/weatherapi.model";
import useSWR from "swr";

export function useForecast(params: ForecastRequestParams) {
  const urlParams = Object.entries(params).reduce((acc, [key, value]) => {
    acc[key] = value.toString();
    return acc;
  }, {} as Record<string, string>);
  const searchParams = new URLSearchParams(urlParams);
  const { data, isLoading, error } = useSWR<ForecastResponse>(
    `/api/v1/forecast?${searchParams.toString()}`,
    fetcher
  );
  return {
    data: data ? mapToForecastWeather(data) : undefined,
    isLoading,
    error,
  };
}
