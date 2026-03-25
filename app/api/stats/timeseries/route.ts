import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

// Generate 24 hours of dummy time-series data
function generateTimeseries() {
  const data = [];
  const now = new Date();

  for (let i = 23; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000);
    const hour = time.getUTCHours();

    // Simulate realistic traffic patterns (more traffic during business hours)
    const baseTraffic =
      hour >= 8 && hour <= 18
        ? 400 + Math.floor(Math.random() * 300)
        : 100 + Math.floor(Math.random() * 150);

    const malicious = Math.floor(baseTraffic * (0.01 + Math.random() * 0.03));
    const suspicious = Math.floor(baseTraffic * (0.05 + Math.random() * 0.08));
    const clean = baseTraffic - malicious - suspicious;

    data.push({
      timestamp: time.toISOString(),
      hour: `${String(hour).padStart(2, "0")}:00`,
      total: baseTraffic,
      clean,
      suspicious,
      malicious,
    });
  }

  return data;
}

export async function GET() {
  return NextResponse.json(generateTimeseries(), { headers: corsHeaders });
}
