import { errorResponse, fetchFromEnv, optionsResponse, successResponse } from "@/lib/server-api";
import type { TimeseriesEntry } from "@/lib/types";

export { optionsResponse as OPTIONS };

export async function GET() {
  try {
    const data = await fetchFromEnv<TimeseriesEntry[]>("API_TIMESERIES_URL");
    return successResponse(data);
  } catch (error) {
    console.error("Error fetching timeseries data", error);
    return errorResponse(error, "API_TIMESERIES_URL");
  }
}
