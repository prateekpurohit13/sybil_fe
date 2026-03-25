import { NextResponse } from "next/server";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export function optionsResponse() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

function buildErrorMessage(error: unknown, envKey: string) {
  if (error instanceof Error) return error.message;
  return `Failed to fetch data for ${envKey}`;
}

export function errorResponse(error: unknown, envKey: string) {
  return NextResponse.json(
    { error: buildErrorMessage(error, envKey) },
    { status: 500, headers: corsHeaders }
  );
}

export async function fetchFromEnv<T>(envKey: string): Promise<T> {
  const endpoint = process.env[envKey];

  if (!endpoint) {
    throw new Error(`Missing ${envKey} environment variable`);
  }

  const response = await fetch(endpoint, { cache: "no-store" });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    const suffix = details ? `: ${details}` : "";
    throw new Error(
      `Request to ${envKey} failed with ${response.status} ${response.statusText}${suffix}`
    );
  }

  try {
    return (await response.json()) as T;
  } catch {
    throw new Error(`Unable to parse JSON response from ${envKey}`);
  }
}

export function successResponse<T>(data: T) {
  return NextResponse.json(data, { headers: corsHeaders });
}
