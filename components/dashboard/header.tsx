"use client";

import { Shield, Radio } from "lucide-react";
import { useEffect, useState } from "react";

export function DashboardHeader() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    function update() {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <Shield className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            TLS Threat Monitor
          </h1>
          <p className="text-sm text-muted-foreground">
            Real-time TLS fingerprint analysis
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-card px-3 py-1.5">
          <Radio className="h-3.5 w-3.5 animate-pulse text-emerald-400" />
          <span className="text-xs font-medium text-emerald-400">LIVE</span>
        </div>
        <div className="rounded-lg border border-border/50 bg-card px-3 py-1.5">
          <span className="font-mono text-xs text-muted-foreground">
            {currentTime}
          </span>
        </div>
      </div>
    </header>
  );
}
