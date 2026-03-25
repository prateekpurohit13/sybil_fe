import { errorResponse, fetchFromEnv, optionsResponse, successResponse } from "@/lib/server-api";
import type { FingerprintEntry } from "@/lib/types";

export { optionsResponse as OPTIONS };

export async function GET() {
  try {
    const fingerprints = await fetchFromEnv<FingerprintEntry[]>("API_TOP_FINGERPRINTS_URL");
    return successResponse(fingerprints);
  } catch (error) {
    console.error("Error fetching top common fingerprints", error);
    return errorResponse(error, "API_TOP_FINGERPRINTS_URL");
  }
}
