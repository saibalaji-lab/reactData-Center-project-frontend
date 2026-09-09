import React from 'react';
import { 
  Server, Cpu, Activity, ArrowRight, CheckCircle2,
  Table2, Database, Zap, Leaf, Shield, Box, LayoutDashboard,
  ArrowRightLeft, ListTree, RefreshCcw
} from 'lucide-react';

export function VMMigrationModule() {
  return (
    <div className="flex flex-col space-y-10">
      
      {/* SECTION 1: MIGRATION STATUS */}
      <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
            <RefreshCcw className="w-4 h-4 text-[var(--accent)]" />
            Migration Status
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]">
            WAITING FOR MIGRATION BACKEND
          </span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Migration State</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Source Host</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Target Host</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">VM</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Migration Reason</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Migration Time</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: MIGRATION DECISION FLOW */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Migration Decision Flow</h3>
        
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-3 md:p-4 lg:p-8 overflow-hidden">
          <div className="flex flex-row items-center justify-between w-full gap-1 md:gap-2 lg:gap-4 max-w-4xl mx-auto">
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Box className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">SCHEDULED VM</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Activity className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">RESOURCE CHECK</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Server className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">HOST EVALUATION</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />

            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center relative min-w-0">
              <div className="absolute -inset-2 bg-[var(--accent)]/5 rounded-full blur-sm" />
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center shadow-md relative z-10 shrink-0">
                <ArrowRightLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[var(--accent)]" />
              </div>
              <span className="text-[8.5px] md:text-[9px] lg:text-[11px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--foreground)] relative z-10 leading-tight break-words">MIGRATION DECISION</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Server className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">TARGET HOST</span>
            </div>

            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Database className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">RESOURCE CONSOLIDATION</span>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 3: VM MIGRATION CANDIDATES */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-4 flex items-center gap-2">
          <ListTree className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Migration Candidates</h3>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">VM ID</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Current Host</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">CPU Utilization</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">RAM Utilization</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Current Power</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Target Host</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Migration Priority</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="px-6 py-16 text-center text-[var(--muted)] bg-[var(--surface-elevated)]/20">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold tracking-wide mb-2 text-[var(--muted)]">NO MIGRATION CANDIDATES AVAILABLE</span>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] bg-[var(--surface)] px-3 py-1 rounded border border-[var(--border)]">
                      WAITING FOR BACKEND RESULTS
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: HOST EVALUATION */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-4 flex items-center gap-2">
          <Server className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Host Evaluation</h3>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Host ID</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">CPU Capacity</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">RAM Capacity</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Current Load</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Power State</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Carbon Condition</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Suitability</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Decision</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8} className="px-6 py-16 text-center text-[var(--muted)] bg-[var(--surface-elevated)]/20">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold tracking-wide mb-2 text-[var(--muted)]">NO HOST EVALUATION DATA AVAILABLE</span>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] bg-[var(--surface)] px-3 py-1 rounded border border-[var(--border)]">
                      WAITING FOR RESOURCE AND CARBON DATA
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 5: MIGRATION IMPACT */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Migration Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'VMS MIGRATED', icon: <Box className="w-4 h-4" /> },
            { label: 'HOSTS CONSOLIDATED', icon: <Server className="w-4 h-4" /> },
            { label: 'ENERGY SAVED', icon: <Zap className="w-4 h-4" /> },
            { label: 'POWER REDUCTION', icon: <Activity className="w-4 h-4" /> },
            { label: 'RESOURCE UTILIZATION', icon: <Database className="w-4 h-4" /> },
            { label: 'CARBON REDUCTION', icon: <Leaf className="w-4 h-4" /> },
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-4 flex flex-col justify-between min-h-[100px]">
              <div className="flex items-center gap-2 text-[var(--muted-foreground)] mb-2">
                {item.icon}
                <span className="text-[10px] font-bold uppercase tracking-wider truncate">{item.label}</span>
              </div>
              <div className="text-2xl font-semibold text-[var(--muted)]">—</div>
              <div className="text-[9px] uppercase tracking-widest text-[var(--muted-foreground)] mt-1">WAITING FOR MIGRATION RESULTS</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6 & 7: RESOURCE CONSOLIDATION & MIGRATION DECISION EXPLANATION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SECTION 6: RESOURCE CONSOLIDATION */}
        <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[350px] bg-[var(--surface-elevated)]/50">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Resource Consolidation
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-6">
              <div className="border border-[var(--border)] bg-[var(--surface)] rounded p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Active Hosts</span>
                <div className="text-lg font-semibold text-[var(--muted)] mt-1">—</div>
              </div>
              <div className="border border-[var(--border)] bg-[var(--surface)] rounded p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Idle Hosts</span>
                <div className="text-lg font-semibold text-[var(--muted)] mt-1">—</div>
              </div>
              <div className="border border-[var(--border)] bg-[var(--surface)] rounded p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Consolidated Hosts</span>
                <div className="text-lg font-semibold text-[var(--muted)] mt-1">—</div>
              </div>
              <div className="border border-[var(--border)] bg-[var(--surface)] rounded p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Migration Targets</span>
                <div className="text-lg font-semibold text-[var(--muted)] mt-1">—</div>
              </div>
            </div>
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">NO CONSOLIDATION DATA AVAILABLE</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR MIGRATION BACKEND
            </span>
          </div>
        </div>

        {/* SECTION 7: MIGRATION DECISION EXPLANATION (WHY MIGRATE?) */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden min-h-[350px]">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Why Migrate?
            </h3>
          </div>
          <div className="flex-1 p-6 flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-y-6">
              {[
                { label: 'RESOURCE UTILIZATION' },
                { label: 'POWER CONDITION' },
                { label: 'CARBON CONDITION' },
                { label: 'HOST EFFICIENCY' },
                { label: 'MIGRATION BENEFIT' },
                { label: 'FINAL DECISION' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">{item.label}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded self-start">
                    WAITING FOR BACKEND ANALYSIS
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-4 flex items-center justify-center text-center">
            <span className="text-[10px] px-3 py-1 bg-[var(--surface-elevated)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              MIGRATION EXPLANATION UNAVAILABLE
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 8: MIGRATION SAFETY */}
      <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
          <Shield className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
            Migration Safety
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-4">
            {[
              { label: 'RESOURCE CAPACITY CHECK' },
              { label: 'VM COMPATIBILITY' },
              { label: 'HOST AVAILABILITY' },
              { label: 'MIGRATION FEASIBILITY' },
              { label: 'FAILURE HANDLING' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">{item.label}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded self-start">
                  WAITING FOR BACKEND VALIDATION
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
