import React from 'react';
import { 
  BarChart, PieChart, Activity, Server, Zap, Globe, Leaf, 
  CheckCircle2, AlertTriangle, ShieldCheck, RefreshCcw, LayoutDashboard, Cloud, Battery, Shield
} from 'lucide-react';
import { cn } from "../../../lib/utils";

export function SustainabilityDashboardModule() {
  return (
    <div className="flex flex-col space-y-10 w-full min-w-0 box-border">
      
      {/* SECTION 1: SUSTAINABILITY OVERVIEW */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <Globe className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Sustainability Overview
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full box-border">
          {[
            { label: 'TOTAL WORKFLOWS', icon: LayoutDashboard },
            { label: 'COMPLETED WORKFLOWS', icon: CheckCircle2 },
            { label: 'TOTAL ENERGY CONSUMPTION', icon: Zap },
            { label: 'CARBON EMISSIONS', icon: Cloud },
            { label: 'CARBON SAVINGS', icon: Leaf },
            { label: 'ENERGY SAVINGS', icon: Battery },
            { label: 'ACTIVE HOSTS', icon: Server },
            { label: 'VM MIGRATIONS', icon: RefreshCcw }
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

      {/* SECTION 2: CARBON & ENERGY PERFORMANCE */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <BarChart className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Carbon & Energy Performance
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full box-border">
          {[
            { title: 'Carbon Emissions', icon: Cloud },
            { title: 'Energy Consumption', icon: Zap },
            { title: 'Carbon Savings', icon: Leaf },
            { title: 'Renewable Energy Utilization', icon: Globe }
          ].map((chart, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-6 flex flex-col h-64 w-full min-w-0 box-border">
              <div className="flex items-center gap-2 mb-4">
                <chart.icon className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">{chart.title}</span>
              </div>
              <div className="flex-1 border-2 border-dashed border-[var(--border)] rounded-lg flex items-center justify-center w-full min-w-0 box-border">
                <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider font-semibold text-center break-words px-4">NO SUSTAINABILITY DATA AVAILABLE</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: CARBON-AWARE SCHEDULING RESULTS */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Carbon-Aware Scheduling Results
        </h3>
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl w-full box-border overflow-hidden">
          <div className="w-full box-border ">
            <table className="w-full text-left border-collapse table-fixed ">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                  {['WORKFLOW ID', 'SCHEDULED HOST', 'START TIME', 'COMPLETION TIME', 'ENERGY USED', 'CARBON INTENSITY', 'CARBON EMISSIONS', 'SCHEDULING STATUS'].map((head, i) => (
                    <th key={i} className="px-3 py-3 text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] break-words">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center border-t border-[var(--border)]">
                    <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider font-semibold">NO WORKFLOW RESULTS AVAILABLE</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 4: RESOURCE UTILIZATION */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <Server className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Resource Utilization
        </h3>
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl w-full box-border overflow-hidden">
          <div className="w-full box-border ">
            <table className="w-full text-left border-collapse table-fixed ">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                  {['HOST ID', 'CPU UTILIZATION', 'RAM UTILIZATION', 'POWER CONSUMPTION', 'ENERGY EFFICIENCY', 'CARBON CONDITION', 'HOST STATUS'].map((head, i) => (
                    <th key={i} className="px-3 py-3 text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] break-words">{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center border-t border-[var(--border)]">
                    <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider font-semibold">NO RESOURCE DATA AVAILABLE</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 5: VM MIGRATION IMPACT */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <RefreshCcw className="w-4 h-4 text-[var(--accent)] shrink-0" />
          VM Migration Impact
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-full box-border">
          {[
            'VMS MIGRATED', 'HOSTS CONSOLIDATED', 'ENERGY SAVINGS', 
            'POWER REDUCTION', 'RESOURCE UTILIZATION IMPROVEMENT', 'CARBON REDUCTION'
          ].map((label, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 w-full min-w-0 box-border">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">{label}</span>
              <span className="text-3xl font-light text-[var(--muted-foreground)] my-1">—</span>
              <span className="text-[9px] font-bold tracking-wider text-[var(--muted)] px-2 py-1 rounded border border-[var(--border)] bg-[var(--surface)] break-words text-center">WAITING FOR MIGRATION RESULTS</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6: SERVER POWER MANAGEMENT IMPACT */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <Zap className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Server Power Management Impact
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-full box-border">
          {[
            'ACTIVE SERVERS', 'IDLE SERVERS', 'SERVERS IN SLEEP MODE', 
            'POWER SAVINGS', 'ENERGY SAVINGS', 'POWER STATE CHANGES'
          ].map((label, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 w-full min-w-0 box-border">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">{label}</span>
              <span className="text-3xl font-light text-[var(--muted-foreground)] my-1">—</span>
              <span className="text-[9px] font-bold tracking-wider text-[var(--muted)] px-2 py-1 rounded border border-[var(--border)] bg-[var(--surface)] break-words text-center">WAITING FOR POWER MANAGEMENT RESULTS</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 7: FAILURE & SELF-HEALING IMPACT */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Failure & Self-Healing Impact
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-full box-border">
          {[
            'FAILURES PREDICTED', 'FAILURES PREVENTED', 'SELF-HEALING ACTIONS', 
            'VMS RECOVERED', 'DOWNTIME AVOIDED', 'RECOVERY SUCCESS RATE'
          ].map((label, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 w-full min-w-0 box-border">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">{label}</span>
              <span className="text-3xl font-light text-[var(--muted-foreground)] my-1">—</span>
              <span className="text-[9px] font-bold tracking-wider text-[var(--muted)] px-2 py-1 rounded border border-[var(--border)] bg-[var(--surface)] break-words text-center">WAITING FOR SELF-HEALING RESULTS</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 8: SUSTAINABILITY COMPARISON */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <PieChart className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Sustainability Comparison
        </h3>
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-6 w-full min-w-0 box-border">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4 w-full box-border">
            <div className="flex-1 text-center lg:text-right border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg w-full min-w-0 box-border">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">CONVENTIONAL SCHEDULING</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-[var(--muted-foreground)]">VS</span>
            </div>
            <div className="flex-1 text-center lg:text-left border border-[var(--accent)]/30 bg-[var(--accent)]/10 p-3 rounded-lg w-full min-w-0 box-border">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] break-words">CARBON-AWARE SCHEDULING</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full box-border">
            {[
              'ENERGY CONSUMPTION', 'CARBON EMISSIONS', 'CARBON SAVINGS', 
              'ENERGY SAVINGS', 'RESOURCE UTILIZATION', 'WORKFLOW COMPLETION TIME'
            ].map((metric, idx) => (
              <div key={idx} className="border border-[var(--border)] bg-[var(--surface)] rounded-lg p-4 flex flex-col items-center justify-center text-center w-full min-w-0 box-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] mb-2 break-words">{metric}</span>
                <span className="text-[10px] text-[var(--muted)] font-medium break-words text-center">WAITING FOR BACKEND COMPARISON</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 9: ENVIRONMENTAL IMPACT */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <Leaf className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Environmental Impact
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full box-border">
          {[
            { label: 'CARBON EMISSIONS AVOIDED', icon: Cloud },
            { label: 'ENERGY SAVED', icon: Battery },
            { label: 'RENEWABLE ENERGY USED', icon: Globe },
            { label: 'CARBON INTENSITY IMPROVEMENT', icon: Activity }
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col items-center text-center gap-3 w-full min-w-0 box-border">
              <div className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">{item.label}</span>
              <span className="text-3xl font-light text-[var(--muted-foreground)] my-1">—</span>
              <span className="text-[9px] font-bold tracking-wider text-[var(--muted)] px-2 py-1 rounded border border-[var(--border)] bg-[var(--surface)] break-words text-center">WAITING FOR BACKEND RESULTS</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 10: OVERALL SYSTEM STATUS */}
      <div className="flex flex-col space-y-4 w-full min-w-0 box-border">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
          <Activity className="w-4 h-4 text-[var(--accent)] shrink-0" />
          Overall System Status
        </h3>
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden w-full box-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)] border-b border-[var(--border)] w-full box-border">
            {[
              { label: 'WORKFLOW SCHEDULER', status: 'WAITING FOR BACKEND' },
              { label: 'RESOURCE MONITORING', status: 'WAITING FOR BACKEND' },
              { label: 'CARBON PREDICTION', status: 'WAITING FOR BACKEND' },
              { label: 'RESOURCE OPTIMIZATION', status: 'WAITING FOR BACKEND' }
            ].map((sys, idx) => (
              <div key={idx} className="p-4 flex flex-col justify-between gap-3 bg-[var(--surface)] w-full min-w-0 box-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">{sys.label}</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted)] px-2 py-1 rounded border border-[var(--border)] bg-[var(--surface-elevated)] inline-flex self-start break-words">{sys.status}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)] bg-[var(--surface)] w-full box-border">
            {[
              { label: 'CLOUDSIM SIMULATION', status: 'WAITING FOR BACKEND' },
              { label: 'VM MIGRATION', status: 'WAITING FOR BACKEND' },
              { label: 'SERVER POWER MANAGEMENT', status: 'WAITING FOR BACKEND' },
              { label: 'SELF-HEALING', status: 'WAITING FOR BACKEND' }
            ].map((sys, idx) => (
              <div key={idx} className="p-4 flex flex-col justify-between gap-3 w-full min-w-0 box-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] break-words">{sys.label}</span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted)] px-2 py-1 rounded border border-[var(--border)] bg-[var(--surface-elevated)] inline-flex self-start break-words">{sys.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
