import { DashboardHeader } from "@/components/dashboard/header";
import { StatCards } from "@/components/dashboard/stat-cards";
import { TimeseriesChart } from "@/components/dashboard/timeseries-chart";
import { RecentRequests } from "@/components/dashboard/recent-requests";
import { TopThreats } from "@/components/dashboard/top-threats";
import { CommonFingerprints } from "@/components/dashboard/common-fingerprints";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <DashboardHeader />
          <StatCards />
          <TimeseriesChart />
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <RecentRequests />
            <TopThreats />
          </div>
          <CommonFingerprints />
        </div>
      </div>
    </main>
  );
}
