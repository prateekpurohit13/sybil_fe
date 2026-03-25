import { errorResponse, fetchFromEnv, optionsResponse, successResponse } from "@/lib/server-api";
import type { TLSRequest } from "@/lib/types";

export { optionsResponse as OPTIONS };

export async function GET() {
  try {
    const recentRequests = await fetchFromEnv<TLSRequest[]>("API_RECENT_REQUESTS_URL");
    return successResponse(recentRequests);
  } catch (error) {
    console.error("Error fetching recent requests", error);
    return errorResponse(error, "API_RECENT_REQUESTS_URL");
  }
}
