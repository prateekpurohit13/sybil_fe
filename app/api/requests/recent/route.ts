import {
  handleApiError,
  jsonResponse,
  methodNotAllowedResponse,
  optionsResponse,
} from "@/lib/api-response";

export async function OPTIONS() {
  return optionsResponse();
}

const recentRequests = [
  {
    id: 15420,
    timestamp: "2026-03-25T05:48:32Z",
    source_ip: "192.168.1.105",
    destination_ip: "93.184.216.34",
    ja3_hash: "",
    fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
    threat_score: 15,
    verdict: "clean" as const,
    matched_signature: "",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
  },
  {
    id: 15419,
    timestamp: "2026-03-25T05:47:18Z",
    source_ip: "10.0.1.42",
    destination_ip: "1.1.1.1",
    ja3_hash: "",
    fingerprint: "t13d1517h2_8daaf6152771_02713d6af862",
    threat_score: 85,
    verdict: "suspicious" as const,
    matched_signature: "Suspicious bot-like behavior",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1517h2_8daaf6152771_02713d6af862",
  },
  {
    id: 15418,
    timestamp: "2026-03-25T05:46:05Z",
    source_ip: "192.168.2.100",
    destination_ip: "10.0.0.5",
    ja3_hash: "",
    fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
    threat_score: 12,
    verdict: "clean" as const,
    matched_signature: "",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
  },
  {
    id: 15417,
    timestamp: "2026-03-25T05:45:40Z",
    source_ip: "172.16.1.33",
    destination_ip: "10.0.0.20",
    ja3_hash: "",
    fingerprint: "t13d1517h2_8daaf6152771_02713d6af862",
    threat_score: 18,
    verdict: "clean" as const,
    matched_signature: "",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1517h2_8daaf6152771_02713d6af862",
  },
  {
    id: 15416,
    timestamp: "2026-03-25T05:44:32Z",
    source_ip: "10.10.3.78",
    destination_ip: "192.168.0.1",
    ja3_hash: "",
    fingerprint: "t13i0900h2_55b375ea5a37_9e7b989ebec8",
    threat_score: 92,
    verdict: "malicious" as const,
    matched_signature: "Mimikatz",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13i0900h2_55b375ea5a37_9e7b989ebec8",
  },
  {
    id: 15415,
    timestamp: "2026-03-25T05:43:25Z",
    source_ip: "192.168.5.12",
    destination_ip: "10.0.0.30",
    ja3_hash: "",
    fingerprint: "t13d3918h2_cd85d2e88a5b_5e1c7c16e5e5",
    threat_score: 8,
    verdict: "clean" as const,
    matched_signature: "",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d3918h2_cd85d2e88a5b_5e1c7c16e5e5",
  },
  {
    id: 15414,
    timestamp: "2026-03-25T05:42:18Z",
    source_ip: "10.10.7.155",
    destination_ip: "172.16.0.50",
    ja3_hash: "",
    fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
    threat_score: 16,
    verdict: "clean" as const,
    matched_signature: "",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
  },
  {
    id: 15413,
    timestamp: "2026-03-25T05:41:10Z",
    source_ip: "192.168.3.44",
    destination_ip: "10.0.0.88",
    ja3_hash: "",
    fingerprint: "t13d1517h2_8daaf6152771_02713d6af862",
    threat_score: 14,
    verdict: "clean" as const,
    matched_signature: "",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1517h2_8daaf6152771_02713d6af862",
  },
  {
    id: 15412,
    timestamp: "2026-03-25T05:40:02Z",
    source_ip: "10.10.2.90",
    destination_ip: "192.168.1.1",
    ja3_hash: "",
    fingerprint: "t13d1517h2_000000000000_b0da82dd1658",
    threat_score: 78,
    verdict: "suspicious" as const,
    matched_signature: "Unusual cipher selection",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1517h2_000000000000_b0da82dd1658",
  },
  {
    id: 15411,
    timestamp: "2026-03-25T05:39:55Z",
    source_ip: "172.16.2.17",
    destination_ip: "10.0.0.42",
    ja3_hash: "",
    fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
    threat_score: 11,
    verdict: "clean" as const,
    matched_signature: "",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
  },
];

export async function GET() {
  try {
    return jsonResponse(recentRequests);
  } catch (error) {
    return handleApiError(error);
  }
}

export const POST = methodNotAllowedResponse;
export const PUT = methodNotAllowedResponse;
export const PATCH = methodNotAllowedResponse;
export const DELETE = methodNotAllowedResponse;
