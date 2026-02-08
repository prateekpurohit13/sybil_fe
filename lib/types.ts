export interface TotalStats {
  total: number;
  malicious: number;
  suspicious: number;
  clean: number;
}

export interface TLSRequest {
  id: number;
  timestamp: string;
  source_ip: string;
  destination_ip?: string;
  ja3_hash: string;
  fingerprint: string;
  threat_score: number;
  verdict: "clean" | "suspicious" | "malicious";
  matched_signature?: string;
}

export interface FingerprintEntry {
  ja3_hash: string;
  fingerprint: string;
  count: number;
  avg_threat_score: number;
  label: string;
}

export interface TimeseriesEntry {
  timestamp: string;
  hour: string;
  total: number;
  clean: number;
  suspicious: number;
  malicious: number;
}
