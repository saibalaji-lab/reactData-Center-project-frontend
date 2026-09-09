import React from 'react';
import { 
  Server, Cpu, Activity, ArrowRight, ShieldAlert, AlertTriangle,
  GitMerge, ShieldCheck, CheckCircle2, Box, LayoutDashboard, Database,
  Settings, ArrowRightLeft, HeartPulse, RefreshCcw, Shield
} from 'lucide-react';

export function FailurePredictionModule() {
  return (
    <div className="flex flex-col space-y-10">
      
      {/* SECTION 1: FAILURE PREDICTION STATUS */}
      <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
            <HeartPulse className="w-4 h-4 text-[var(--accent)]" />
            Failure Prediction Status
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]">
            WAITING FOR BACKEND PROCESSING
          </span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">System Health</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Failure Risk</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Predicted Failures</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Active Alerts</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Recovered Incidents</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Last Analysis</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: SELF-HEALING DECISION FLOW */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Self-Healing Decision Flow</h3>
        
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-3 md:p-4 lg:p-8">
          <div className="flex flex-row items-center justify-between w-full gap-1 md:gap-2 lg:gap-4 max-w-5xl mx-auto">
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Activity className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">INFRASTRUCTURE MONITORING</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <ShieldAlert className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">FAILURE DETECTION</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <AlertTriangle className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">FAILURE RISK PREDICTION</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />

            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center relative min-w-0">
              <div className="absolute -inset-2 bg-[var(--accent)]/5 rounded-full blur-sm" />
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center shadow-md relative z-10 shrink-0">
                <GitMerge className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[var(--accent)]" />
              </div>
              <span className="text-[8.5px] md:text-[9px] lg:text-[11px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--foreground)] relative z-10 leading-tight break-words">RECOVERY DECISION</span>
            </div>

            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />

            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <RefreshCcw className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">RESOURCE RECOVERY</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">SYSTEM VALIDATION</span>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 3: INFRASTRUCTURE HEALTH ANALYSIS */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Infrastructure Health Analysis</h3>
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--muted)]">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[var(--surface)] border-b border-[var(--border)] text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">
                <tr>
                  <th className="px-6 py-4 font-semibold">Resource ID</th>
                  <th className="px-6 py-4 font-semibold">Resource Type</th>
                  <th className="px-6 py-4 font-semibold">CPU Utilization</th>
                  <th className="px-6 py-4 font-semibold">RAM Utilization</th>
                  <th className="px-6 py-4 font-semibold">Temperature</th>
                  <th className="px-6 py-4 font-semibold">Power Status</th>
                  <th className="px-6 py-4 font-semibold">Health Status</th>
                  <th className="px-6 py-4 font-semibold">Failure Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr>
                  <td colSpan={8} className="px-6 py-8 text-center text-xs text-[var(--muted-foreground)]">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <LayoutDashboard className="w-6 h-6 text-[var(--muted)] opacity-50" />
                      <span className="font-semibold text-[var(--muted)]">NO INFRASTRUCTURE HEALTH DATA AVAILABLE</span>
                      <span className="text-[10px] uppercase tracking-wider">WAITING FOR BACKEND ANALYSIS</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 4 & SECTION 6 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SECTION 4: FAILURE RISK ANALYSIS */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Failure Risk Analysis</h3>
          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-6 flex flex-col gap-6">
            
            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">CPU Load</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Database className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Memory Utilization</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Temperature</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Server className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Power Condition</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <HeartPulse className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Resource Health</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <AlertTriangle className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Workload Anomaly</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[var(--surface)] p-4 rounded-lg border border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4 text-[var(--accent)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">Overall Failure Risk</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 6: SELF-HEALING ACTIONS */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Self-Healing Actions</h3>
          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-6 flex flex-col gap-6 h-full">
            
            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <ArrowRightLeft className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">VM Migration</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND DECISION</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <GitMerge className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Workload Redistribution</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND DECISION</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Settings className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Resource Reconfiguration</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND DECISION</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Box className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Server Isolation</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND DECISION</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <RefreshCcw className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Service Restart</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND DECISION</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Power State Adjustment</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND DECISION</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* SECTION 5: PREDICTED FAILURE EVENTS */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Predicted Failure Events</h3>
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--muted)]">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[var(--surface)] border-b border-[var(--border)] text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">
                <tr>
                  <th className="px-6 py-4 font-semibold">Event ID</th>
                  <th className="px-6 py-4 font-semibold">Resource</th>
                  <th className="px-6 py-4 font-semibold">Failure Type</th>
                  <th className="px-6 py-4 font-semibold">Risk Level</th>
                  <th className="px-6 py-4 font-semibold">Predicted Time</th>
                  <th className="px-6 py-4 font-semibold">Confidence</th>
                  <th className="px-6 py-4 font-semibold">Recommended Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-xs text-[var(--muted-foreground)]">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <AlertTriangle className="w-6 h-6 text-[var(--muted)] opacity-50" />
                      <span className="font-semibold text-[var(--muted)]">NO FAILURE EVENTS PREDICTED</span>
                      <span className="text-[10px] uppercase tracking-wider">WAITING FOR BACKEND RESULTS</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 7: RECOVERY IMPACT */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Recovery Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Failures Prevented</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Recovery Success Rate</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Downtime Avoided</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">VMs Recovered</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Resources Restored</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">System Availability</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

        </div>
      </div>

      {/* SECTION 8 & SECTION 9 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SECTION 8: WHY SELF-HEALING? */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Why Self-Healing?</h3>
          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-6 flex flex-col gap-4 h-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Failure Risk</span>
                <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
              </div>
              <div className="flex flex-col gap-1 border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Resource Health</span>
                <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
              </div>
              <div className="flex flex-col gap-1 border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Workload Condition</span>
                <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
              </div>
              <div className="flex flex-col gap-1 border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Power Condition</span>
                <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
              </div>
              <div className="flex flex-col gap-1 border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Service Availability</span>
                <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
              </div>
              <div className="flex flex-col gap-1 border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Recovery Benefit</span>
                <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
              </div>
              <div className="flex flex-col gap-1 border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-3 rounded-lg md:col-span-2">
                <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--accent)]">Final Recovery Decision</span>
                <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
              </div>
            </div>
            
            <div className="mt-auto pt-4 border-t border-[var(--border)]">
              <p className="text-xs text-[var(--muted-foreground)] italic text-center">
                SELF-HEALING EXPLANATION UNAVAILABLE
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 9: RECOVERY SAFETY */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Recovery Safety</h3>
          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-6 h-full">
            <div className="flex flex-col gap-6">
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <Box className="w-4 h-4 text-[var(--muted-foreground)]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">VM Dependency Check</span>
                  <span className="text-[10px] text-[var(--muted)]">WAITING FOR BACKEND VALIDATION</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 text-[var(--muted-foreground)]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Resource Capacity Check</span>
                  <span className="text-[10px] text-[var(--muted)]">WAITING FOR BACKEND VALIDATION</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <Server className="w-4 h-4 text-[var(--muted-foreground)]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Target Resource Availability</span>
                  <span className="text-[10px] text-[var(--muted)]">WAITING FOR BACKEND VALIDATION</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[var(--muted-foreground)]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Data Integrity Check</span>
                  <span className="text-[10px] text-[var(--muted)]">WAITING FOR BACKEND VALIDATION</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <HeartPulse className="w-4 h-4 text-[var(--muted-foreground)]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Service Dependency Check</span>
                  <span className="text-[10px] text-[var(--muted)]">WAITING FOR BACKEND VALIDATION</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[var(--muted-foreground)]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Recovery Feasibility</span>
                  <span className="text-[10px] text-[var(--muted)]">WAITING FOR BACKEND VALIDATION</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-[var(--muted-foreground)]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Failure Handling</span>
                  <span className="text-[10px] text-[var(--muted)]">WAITING FOR BACKEND VALIDATION</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
