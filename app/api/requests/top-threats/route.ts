import { errorResponse, fetchFromEnv, optionsResponse, successResponse } from "@/lib/server-api";
import type { TLSRequest } from "@/lib/types";

export { optionsResponse as OPTIONS };

export async function GET() {
  try {
    const topThreats = await fetchFromEnv<TLSRequest[]>("API_TOP_THREATS_URL");
    return successResponse(topThreats);
  } catch (error) {
    console.error("Error fetching top threats", error);
    return errorResponse(error, "API_TOP_THREATS_URL");
  }
}
