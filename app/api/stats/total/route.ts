import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    total: 14832,
    malicious: 237,
    suspicious: 1045,
    clean: 13550,
  });
}
