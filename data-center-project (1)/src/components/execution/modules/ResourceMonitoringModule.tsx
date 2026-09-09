import React from 'react';
import { Server, Activity, Zap, Cpu, Database, LayoutGrid, Table2 } from 'lucide-react';

interface ServerData {
  id: string;
  status: 'ACTIVE' | 'IDLE' | 'OVERLOADED' | 'MAINTENANCE' | 'UNAVAILABLE';
  cpu: number | null;
  ram: number | null;
  power: number | null;
  resourceState: string | null;
}

// Architecture prepared for dynamic backend data.
// This component provides the required visual hierarchy without using fake data.
const ServerCard: React.FC<{ server: ServerData }> = ({ server }) => {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <span className="text-sm font-bold tracking-tight text-[var(--foreground)] uppercase">{server.id}</span>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--muted)]">
          {server.status}
        </span>
      </div>
      
      <div className="space-y-3">
        {/* CPU */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
            <span>CPU Utilization</span>
            <span>{server.cpu !== null ? `${server.cpu}%` : 'NO CPU DATA AVAILABLE'}</span>
          </div>
          <div className="h-1.5 w-full bg-[var(--surface-elevated)] rounded-full overflow-hidden">
            <div className="h-full bg-[var(--accent)]" style={{ width: `${server.cpu || 0}%` }} />
          </div>
        </div>

        {/* RAM */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
            <span>RAM Utilization</span>
            <span>{server.ram !== null ? `${server.ram}%` : 'NO RAM DATA AVAILABLE'}</span>
          </div>
          <div className="h-1.5 w-full bg-[var(--surface-elevated)] rounded-full overflow-hidden">
            <div className="h-full bg-[var(--accent)]" style={{ width: `${server.ram || 0}%` }} />
          </div>
        </div>

        {/* Power */}
        <div className="flex justify-between items-center text-xs border-t border-[var(--border)] pt-3">
          <span className="font-semibold uppercase tracking-wider text-[var(--muted-foreground)] text-[10px]">Power Consumption</span>
          <span className="text-[var(--foreground)] font-mono text-xs">{server.power !== null ? `${server.power} W` : 'NO POWER DATA AVAILABLE'}</span>
        </div>

        {/* Resource State */}
        <div className="flex justify-between items-center text-xs">
          <span className="font-semibold uppercase tracking-wider text-[var(--muted-foreground)] text-[10px]">Resource State</span>
          <span className="text-[var(--foreground)] font-mono text-xs">{server.resourceState || '—'}</span>
        </div>
      </div>
    </div>
  );
}

export function ResourceMonitoringModule() {
  // Empty array prevents fake data rendering. The UI displays the empty states exactly as requested.
  const servers: ServerData[] = [];

  return (
    <div className="flex flex-col space-y-10">
      
      {/* SECTION 8: Resource Monitoring Status */}
      <div className="flex items-center gap-3 px-5 py-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-sm">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--muted)] opacity-20"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--muted)] border border-[var(--border)]"></span>
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
          WAITING FOR RESOURCE MONITORING BACKEND
        </span>
      </div>

      {/* SECTION 1: Resource Overview */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Resource Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'ACTIVE SERVERS', icon: <Server className="w-4 h-4" /> },
            { label: 'IDLE SERVERS', icon: <Server className="w-4 h-4 opacity-50" /> },
            { label: 'TOTAL CPU UTILIZATION', icon: <Cpu className="w-4 h-4" /> },
            { label: 'TOTAL RAM UTILIZATION', icon: <Database className="w-4 h-4" /> },
            { label: 'TOTAL POWER CONSUMPTION', icon: <Zap className="w-4 h-4" /> },
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-4 flex flex-col justify-between min-h-[100px]">
              <div className="flex items-center gap-2 text-[var(--muted-foreground)] mb-2">
                {item.icon}
                <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
              </div>
              <div className="text-2xl font-semibold text-[var(--muted)]">—</div>
              <div className="text-[9px] uppercase tracking-widest text-[var(--muted-foreground)] mt-1">NO DATA AVAILABLE</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: Server Resource View */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Server Resource View</h3>
        
        {servers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {servers.map(s => <ServerCard key={s.id} server={s} />)}
          </div>
        ) : (
          <div className="bg-[var(--surface-elevated)]/30 border border-[var(--border)] border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center min-h-[250px]">
            <LayoutGrid className="w-8 h-8 text-[var(--border)] mb-4" />
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)]">NO RESOURCE DATA AVAILABLE</span>
            <span className="text-[10px] mt-2 px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR RESOURCE MONITORING BACKEND
            </span>
          </div>
        )}
      </div>

      {/* SECTION 3 & 4: Resource Utilization Chart & Server Power Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SECTION 3: Resource Utilization Chart */}
        <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[300px] bg-[var(--surface-elevated)]/50">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center gap-2">
              <Activity className="w-3.5 h-3.5"/> 
              Resource Utilization
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)]">NO RESOURCE UTILIZATION DATA AVAILABLE</span>
            <span className="text-[10px] mt-2 px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR MONITORING DATA
            </span>
          </div>
        </div>

        {/* SECTION 4: Server Power Chart */}
        <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[300px] bg-[var(--surface-elevated)]/50">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center gap-2">
              <Zap className="w-3.5 h-3.5"/> 
              Server Power Consumption
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)]">NO POWER DATA AVAILABLE</span>
            <span className="text-[10px] mt-2 px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR MONITORING DATA
            </span>
          </div>
        </div>

      </div>

      {/* SECTION 5 & 6: Active vs Idle Servers & Resource Availability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SECTION 5: Server Activity Status */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Server Activity Status
            </span>
          </div>
          <div className="p-6 flex flex-col items-center justify-center min-h-[160px] text-center">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">NO DATA AVAILABLE</span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR SERVER STATUS DATA
            </span>
          </div>
        </div>

        {/* SECTION 6: Resource Availability */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Resource Availability
            </span>
          </div>
          <div className="p-6 flex flex-col items-center justify-center min-h-[160px] text-center">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">RESOURCE AVAILABILITY DATA NOT AVAILABLE</span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR MONITORING DATA
            </span>
          </div>
        </div>

      </div>

      {/* SECTION 7: Server Table */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-4 flex items-center gap-2">
          <Table2 className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Server Table</h3>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-32">Server ID</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-32">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">CPU Utilization</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">RAM Utilization</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Power Consumption</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Resource State</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-6 py-16 text-center text-[var(--muted)] bg-[var(--surface-elevated)]/20">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold tracking-wide mb-2 text-[var(--muted)]">NO SERVER DATA AVAILABLE</span>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] bg-[var(--surface)] px-3 py-1 rounded border border-[var(--border)]">
                      WAITING FOR RESOURCE MONITORING BACKEND
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
