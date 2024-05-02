import { env } from "@/env/server.mjs";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const response = await fetch(
    `${env.BASE_URL}/forecast.json?aqi=yes&days=7&q=Amsterdam`,
    {
      headers: {
        "X-RapidAPI-Key": env.WEATHER_API_KEY,
        "X-RapidAPI-Host": env.WEATHER_API_HOST,
      },
    }
  );
  const data = await response.json();
  return res.status(200).json(data);
}
