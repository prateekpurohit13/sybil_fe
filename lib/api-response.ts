import { NextResponse } from "next/server";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export function optionsResponse() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export function jsonResponse<T>(data: T, status = 200) {
  return NextResponse.json(data, { status, headers: corsHeaders });
}

export function errorResponse(error: string, status: number) {
  return NextResponse.json({ error }, { status, headers: corsHeaders });
}

export function methodNotAllowedResponse() {
  return errorResponse("method not allowed", 405);
}

export function handleApiError(error: unknown) {
  const message = error instanceof Error ? error.message.toLowerCase() : "";

  if (message.includes("store unavailable") || message.includes("api store unavailable")) {
    return errorResponse("api store unavailable", 503);
  }

  if (
    message.includes("context canceled") ||
    message.includes("deadline exceeded") ||
    message.includes("timeout")
  ) {
    return errorResponse("request timeout", 408);
  }

  return errorResponse("internal server error", 500);
}
