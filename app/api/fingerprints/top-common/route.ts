import {
  handleApiError,
  jsonResponse,
  methodNotAllowedResponse,
  optionsResponse,
} from "@/lib/api-response";

export async function OPTIONS() {
  return optionsResponse();
}

const topCommon = [
  {
    ja3_hash: "",
    fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
    count: 8234,
    avg_threat_score: 12,
    label: "Chrome (Windows)",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
  },
  {
    ja3_hash: "",
    fingerprint: "t13d1517h2_8daaf6152771_02713d6af862",
    count: 4521,
    avg_threat_score: 18,
    label: "Firefox (Linux)",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1517h2_8daaf6152771_02713d6af862",
  },
  {
    ja3_hash: "",
    fingerprint: "t13d3918h2_cd85d2e88a5b_5e1c7c16e5e5",
    count: 2341,
    avg_threat_score: 8,
    label: "Safari (iOS)",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d3918h2_cd85d2e88a5b_5e1c7c16e5e5",
  },
  {
    ja3_hash: "",
    fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
    count: 1956,
    avg_threat_score: 11,
    label: "Edge (Windows)",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
  },
  {
    ja3_hash: "",
    fingerprint: "t13d1517h2_000000000000_b0da82dd1658",
    count: 412,
    avg_threat_score: 92,
    label: "Cobalt Strike Beacon",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1517h2_000000000000_b0da82dd1658",
  },
  {
    ja3_hash: "",
    fingerprint: "t13i0900h2_55b375ea5a37_9e7b989ebec8",
    count: 287,
    avg_threat_score: 88,
    label: "Mimikatz",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13i0900h2_55b375ea5a37_9e7b989ebec8",
  },
  {
    ja3_hash: "",
    fingerprint: "t13d1517h2_8daaf6152771_02713d6af862",
    count: 198,
    avg_threat_score: 22,
    label: "Python requests 2.x",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1517h2_8daaf6152771_02713d6af862",
  },
  {
    ja3_hash: "",
    fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
    count: 156,
    avg_threat_score: 15,
    label: "curl/7.x",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
  },
  {
    ja3_hash: "",
    fingerprint: "t13d1517h2_8daaf6152771_b0da82dd1658",
    count: 134,
    avg_threat_score: 65,
    label: "Trickbot C2 Client",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1517h2_8daaf6152771_b0da82dd1658",
  },
  {
    ja3_hash: "",
    fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
    count: 89,
    avg_threat_score: 14,
    label: "Node.js https module",
    fingerprint_kind: "ja4",
    ja4_fingerprint: "t13d1516h2_8daaf6152771_e5627efa2ab1",
  },
];

export async function GET() {
  try {
    return jsonResponse(topCommon);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST() {
  return methodNotAllowedResponse();
}

export async function PUT() {
  return methodNotAllowedResponse();
}

export async function PATCH() {
  return methodNotAllowedResponse();
}

export async function DELETE() {
  return methodNotAllowedResponse();
}
