import React from 'react';
import { 
  Activity, Server, Clock, CheckCircle2, AlertTriangle, XCircle, 
  HardDrive, Network, Cpu, Database, LayoutDashboard
} from 'lucide-react';
import { cn } from "../../../lib/utils";

export function SystemHealthModule() {
  return (
    <div className="flex flex-col space-y-10 w-full min-w-0 box-border">
      
      {/* SECTION 1: SYSTEM HEALTH OVERVIEW */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <Activity className="w-4 h-4 text-[var(--accent)] shrink-0" />
          System Health Overview
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full box-border">
          {[
            { label: 'SYSTEM STATUS', icon: Activity },
            { label: 'SYSTEM UPTIME', icon: Clock },
            { label: 'ACTIVE SERVICES', icon: Server },
            { label: 'HEALTHY SERVICES', icon: CheckCircle2 },
            { label: 'WARNING SERVICES', icon: AlertTriangle },
            { label: 'FAILED SERVICES', icon: XCircle },
            { label: 'ACTIVE HOSTS', icon: Database },
            { label: 'LAST HEALTH CHECK', icon: Clock }
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 w-full min-w-0 box-border">
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">{item.label}</span>
              </div>
              <span className="text-3xl font-light text-[var(--muted-foreground)] my-1">—</span>
              <span className="text-[9px] font-bold tracking-wider text-[var(--muted)] px-2 py-1 rounded border border-[var(--border)] bg-[var(--surface)] break-words text-center">WAITING FOR BACKEND RESULTS</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: SERVICE HEALTH */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Service Health
        </h3>
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl w-full box-border overflow-hidden">
          <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--muted)]">
            <table className="w-full text-left border-collapse table-auto min-w-[800px]">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                  {['SERVICE', 'STATUS', 'RESPONSE TIME', 'UPTIME', 'LAST CHECK', 'HEALTH'].map((head, i) => (
                    <th key={i} className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] break-words">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'Workflow Scheduler',
                  'Resource Monitoring',
                  'Carbon Prediction',
                  'Resource Optimization',
                  'CloudSim Simulation',
                  'VM Migration',
                  'Server Power Management',
                  'Self-Healing'
                ].map((service, idx) => (
                  <tr key={idx} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--surface)]/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-[var(--foreground)]">{service}</span>
                    </td>
                    <td colSpan={5} className="px-6 py-4 text-center">
                       <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] font-semibold">WAITING FOR BACKEND ANALYSIS</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 3: INFRASTRUCTURE HEALTH */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <Server className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Infrastructure Health
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full box-border">
          {[
            { label: 'CPU UTILIZATION', icon: Cpu },
            { label: 'RAM UTILIZATION', icon: Database },
            { label: 'STORAGE UTILIZATION', icon: HardDrive },
            { label: 'NETWORK STATUS', icon: Network },
            { label: 'ACTIVE HOSTS', icon: Server },
            { label: 'SERVER HEALTH', icon: Activity }
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 w-full min-w-0 box-border">
              <div className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">{item.label}</span>
              </div>
              <span className="text-3xl font-light text-[var(--muted-foreground)] my-1">—</span>
              <span className="text-[9px] font-bold tracking-wider text-[var(--muted)] px-2 py-1 rounded border border-[var(--border)] bg-[var(--surface)] break-words text-center">WAITING FOR BACKEND RESULTS</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: SYSTEM HEALTH STATUS */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <Activity className="w-4 h-4 text-[var(--accent)] shrink-0" />
          System Health Status
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full box-border">
          {[
            { label: 'HEALTHY', icon: CheckCircle2, color: 'text-green-500' },
            { label: 'WARNING', icon: AlertTriangle, color: 'text-yellow-500' },
            { label: 'CRITICAL', icon: XCircle, color: 'text-red-500' },
            { label: 'OFFLINE', icon: Activity, color: 'text-[var(--muted-foreground)]' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 w-full min-w-0 box-border">
              <div className="flex items-center gap-2">
                <item.icon className={cn("w-4 h-4 shrink-0", item.color)} />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">{item.label}</span>
              </div>
              <span className="text-3xl font-light text-[var(--muted-foreground)] my-1">—</span>
              <span className="text-[9px] font-bold tracking-wider text-[var(--muted)] px-2 py-1 rounded border border-[var(--border)] bg-[var(--surface)] break-words text-center">WAITING FOR BACKEND</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: HEALTH CHECK ACTIVITY */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <Clock className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Health Check Activity
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full box-border">
          {[
            { label: 'LAST SYSTEM CHECK' },
            { label: 'LAST SERVICE CHECK' },
            { label: 'LAST INFRASTRUCTURE CHECK' },
            { label: 'NEXT HEALTH CHECK' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 w-full min-w-0 box-border">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">{item.label}</span>
              <span className="text-[9px] font-bold tracking-wider text-[var(--muted)] px-2 py-1 rounded border border-[var(--border)] bg-[var(--surface)] break-words text-center mt-2">WAITING FOR BACKEND</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
