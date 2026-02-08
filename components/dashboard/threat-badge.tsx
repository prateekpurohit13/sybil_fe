import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ThreatBadgeProps {
  verdict: "clean" | "suspicious" | "malicious";
}

export function ThreatBadge({ verdict }: ThreatBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border font-mono text-xs capitalize",
        verdict === "clean" &&
          "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
        verdict === "suspicious" &&
          "border-amber-400/30 bg-amber-400/10 text-amber-400",
        verdict === "malicious" &&
          "border-red-400/30 bg-red-400/10 text-red-400"
      )}
    >
      {verdict}
    </Badge>
  );
}
