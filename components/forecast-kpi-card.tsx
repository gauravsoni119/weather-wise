import { Card, CardContent } from "./ui/card";
import { ReactNode } from "react";

export interface ForecastKpiCardProps {
  title: string;
  value: string;
  children: ReactNode;
}

export default function ForecastKpiCard({
  children,
  title,
  value,
}: ForecastKpiCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="flex justify-between p-6">
        <div>
          <h4 className="text-md mb-2">
            {title}
          </h4>
          <div className="space-y-1">
            <p className="text-xl font-medium">{value}</p>
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}
