import { ArrowUpRight, DollarSign, LineChart, Wallet } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { DataTable } from "@/components/DataTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Financial Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Monitor your portfolio performance and financial metrics
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Balance"
          value="$92,485"
          description="+20.1% from last month"
          icon={<DollarSign className="h-4 w-4" />}
        />
        <MetricCard
          title="Monthly Revenue"
          value="$8,924"
          description="+4.5% from last month"
          icon={<LineChart className="h-4 w-4" />}
        />
        <MetricCard
          title="Active Investments"
          value="12"
          description="3 pending orders"
          icon={<Wallet className="h-4 w-4" />}
        />
        <MetricCard
          title="Total Returns"
          value="+24.5%"
          description="Year to date"
          icon={<ArrowUpRight className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-6 mt-6">
        <PerformanceChart />
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Recent Transactions
        </h2>
        <DataTable />
      </div>
    </div>
  );
};

export default Index;