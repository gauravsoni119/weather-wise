import { ReactNode } from "react";
import { Card, CardContent } from "./ui/card";

export interface WeatherKpiCardProps {
  title: string;
  subtitle: string;
  value: string;
  children: ReactNode;
  containerClassName?: string;
}

export default function WeatherKpiCard({
  children,
  title,
  subtitle,
  value,
  containerClassName,
}: WeatherKpiCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="flex justify-between p-6">
        <div className={containerClassName}>
          <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
          <div className="space-y-1">
            <p className="text-2xl font-medium leading-none">{value}</p>
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
