import { errorResponse, fetchFromEnv, optionsResponse, successResponse } from "@/lib/server-api";
import type { TotalStats } from "@/lib/types";

export { optionsResponse as OPTIONS };

export async function GET() {
  try {
    const stats = await fetchFromEnv<TotalStats>("API_TOTAL_STATS_URL");
    return successResponse(stats);
  } catch (error) {
    console.error("Error fetching total stats", error);
    return errorResponse(error, "API_TOTAL_STATS_URL");
  }
}
