"use client";

import useSWR from "swr";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ShieldAlert, ShieldQuestion, Activity } from "lucide-react";
import type { TotalStats } from "@/lib/types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function StatCards() {
  const { data, isLoading } = useSWR<TotalStats>("/api/stats/total", fetcher, {
    refreshInterval: 5000,
  });

  const stats = [
    {
      label: "Total Requests",
      value: data?.total ?? 0,
      icon: Activity,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Clean",
      value: data?.clean ?? 0,
      icon: Shield,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
    },
    {
      label: "Suspicious",
      value: data?.suspicious ?? 0,
      icon: ShieldQuestion,
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
    },
    {
      label: "Malicious",
      value: data?.malicious ?? 0,
      icon: ShieldAlert,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border/50">
          <CardContent className="p-5">
            {isLoading ? (
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 animate-pulse rounded-lg bg-muted" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 w-20 animate-pulse rounded bg-muted" />
                  <div className="h-6 w-16 animate-pulse rounded bg-muted" />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className={`rounded-lg p-2.5 ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className={`text-2xl font-semibold tracking-tight ${stat.color}`}>
                    {stat.value.toLocaleString()}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
