import CircularProgress from "@/components/circular-progress";
import Compass from "@/components/compass";
import UvIndicator from "@/components/uv-indicator";
import PressureGauge from "@/components/pressure-gauge";
import CurrentWeatherSummary from "@/components/current-weather-summary";
import WeatherKpiCard from "@/components/weather-kpi-card";
import { ReactElement } from "react";
import Layout from "@/components/layout";
import { useForecast } from "@/hooks/use-forecast";
import DashboardSkeleton from "@/components/dashboard-skeleton";
import { getAirQuality, getTempByTimePeriod } from "@/lib/utils";
import { Cloudy, Droplets, Eye, Fan, Thermometer, Wind } from "lucide-react";
import ForecastKpiCard from "@/components/forecast-kpi-card";
import { AIR_QUALITY_MAP } from "@/lib/constants";
import Head from "next/head";

export default function DashboardPage() {
  const { data, isLoading } = useForecast({
    q: "Amsterdam",
    aqi: "yes",
    days: 7,
  });
  if (!data || isLoading) {
    return <DashboardSkeleton />;
  }
  const { current, forecast, location } = data;

  const {
    forecastday: [today],
  } = forecast;

  return (
    <>
    <Head>
      <title>Weather Wise | Dashboard</title>
    </Head>
      <div className="mb-6">
        <CurrentWeatherSummary
          forecastByDayTime={getTempByTimePeriod(today)}
          location={location}
          current={current}
        />
      </div>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <WeatherKpiCard
          title="Wind"
          subtitle="Today wind speed"
          value={`${current.windKph}km/h`}
        >
          <Compass size={120} strokeWidth={10} degree={current.windDegree} />
        </WeatherKpiCard>
        <WeatherKpiCard
          title="Rain"
          subtitle="Today rain prediction"
          value={`${today.day.dailyChanceOfRain}%`}
        >
          <CircularProgress
            size={120}
            strokeWidth={10}
            progress={today.day.dailyChanceOfRain}
          />
        </WeatherKpiCard>
        <WeatherKpiCard
          title="Pressure"
          subtitle="Today pressure"
          value={`${current.pressureMb}mb`}
          containerClassName="w-1/2"
        >
          <div className="w-2/4">
            <PressureGauge pressure={current.pressureMb} className="ml-8" />
          </div>
        </WeatherKpiCard>
        <WeatherKpiCard
          title="UV Index"
          subtitle="Today UV index"
          value={`${current.uv}`}
          containerClassName="w-1/2"
        >
          <div className="w-2/4">
            <UvIndicator index={current.uv} className="ml-8" />
          </div>
        </WeatherKpiCard>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ForecastKpiCard
          title="Feels Like"
          value={`${current.feelsLikeC}\u2103`}
        >
          <Thermometer />
        </ForecastKpiCard>
        <ForecastKpiCard title="Humidity" value={`${current.humidity}%`}>
          <Droplets />
        </ForecastKpiCard>
        <ForecastKpiCard title="Cloud Cover" value={`${current.cloud}%`}>
          <Cloudy />
        </ForecastKpiCard>
        <ForecastKpiCard title="Wind Gust" value={`${current.gustKph}km/h`}>
          <Wind />
        </ForecastKpiCard>
        <ForecastKpiCard
          title="Air Quality"
          value={getAirQuality(current.airQuality.usEpaIndex)}
        >
          <Fan />
        </ForecastKpiCard>
        <ForecastKpiCard title="Visibility" value={`${current.visKm}km`}>
          <Eye />
        </ForecastKpiCard>
      </div>
    </>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
