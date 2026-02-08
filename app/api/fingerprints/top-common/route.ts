import { NextResponse } from "next/server";

const topCommon = [
  {
    ja3_hash: "e7d705a3286e19ea42f587b344ee6865",
    fingerprint: "771,4865-4866-4867-49195-49199,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513,29-23-24,0",
    count: 4231,
    avg_threat_score: 8,
    label: "Chrome 120+ (Windows)",
  },
  {
    ja3_hash: "cd08e31494816f6cdb10e65e4d1a37e7",
    fingerprint: "771,4865-4866-4867-49195,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513,29-23-24,0",
    count: 3102,
    avg_threat_score: 6,
    label: "Firefox 121+ (Linux)",
  },
  {
    ja3_hash: "3b5074b1b5d032e5620f69f9f700ff0e",
    fingerprint: "771,4865-4866-4867,0-23-65281-10-11-35-16-5-51-45-43-27,29-23-24,0",
    count: 2847,
    avg_threat_score: 5,
    label: "Safari 17+ (macOS)",
  },
  {
    ja3_hash: "1138de370e523e824fc6c60be11e0e5f",
    fingerprint: "771,4865-4866-4867-49195-49199,0-23-65281-10-11-35-16-5-13-18-51-45,29-23-24,0",
    count: 1956,
    avg_threat_score: 4,
    label: "Edge 120+ (Windows)",
  },
  {
    ja3_hash: "f09e72ab64bb747b8a5bb4c0f2e3816d",
    fingerprint: "771,49195-49199-49196-49200,0-65281-10-11-35-16-5-13,23-24-25,0",
    count: 412,
    avg_threat_score: 92,
    label: "Cobalt Strike Beacon",
  },
  {
    ja3_hash: "a0e9f5d64349fb13191bc781f81f42e1",
    fingerprint: "771,4865-4867-4866,0-23-65281-10-11-35-16-5-13-51-45-43-27,29-23-24,0",
    count: 287,
    avg_threat_score: 88,
    label: "Metasploit Client",
  },
  {
    ja3_hash: "b32309a26951912be7dba376398abc3b",
    fingerprint: "771,49196-49200-159-52393-52392,0-23-65281-10-11-35-16-5-13-18-51-45-43,29-23-24,0",
    count: 198,
    avg_threat_score: 45,
    label: "Python requests 2.x",
  },
  {
    ja3_hash: "6734f37431670b3ab4292b8f60f29984",
    fingerprint: "771,49195-52393-52392,0-23-65281-10-11-35-16-5-13-18-51-45-43-27,29-23,0",
    count: 156,
    avg_threat_score: 63,
    label: "curl/7.x",
  },
  {
    ja3_hash: "de350869b8c85de67a350c8d186f11e6",
    fingerprint: "771,49196-49200-159,0-23-65281-10-11-35-16-5-13-51-45-43,23-24,0",
    count: 134,
    avg_threat_score: 78,
    label: "Trickbot C2 Client",
  },
  {
    ja3_hash: "c35a2f4b71f7b5b47ec3e2b8f8f33baa",
    fingerprint: "771,4865-4867,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513,29-23-24,0",
    count: 89,
    avg_threat_score: 34,
    label: "Node.js https module",
  },
];

export async function GET() {
  return NextResponse.json(topCommon);
}
