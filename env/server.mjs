import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        BASE_URL: z.string().url(),
        WEATHER_API_HOST: z.string().min(1),
        WEATHER_API_KEY: z.string().min(1),
    },
    runtimeEnv: {
        BASE_URL: process.env.BASE_URL,
        WEATHER_API_HOST: process.env.WEATHER_API_HOST,
        WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    },
});