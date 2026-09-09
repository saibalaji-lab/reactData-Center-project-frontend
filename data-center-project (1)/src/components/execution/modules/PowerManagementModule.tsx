import React from 'react';
import { 
  Server, Cpu, Activity, ArrowRight, Zap, Leaf, Shield, Box, LayoutDashboard,
  Power, ZapOff, Moon, Settings, Database, ArrowRightLeft, ListTree
} from 'lucide-react';

export function PowerManagementModule() {
  return (
    <div className="flex flex-col space-y-10">
      
      {/* SECTION 1: POWER MANAGEMENT STATUS */}
      <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
            <Power className="w-4 h-4 text-[var(--accent)]" />
            Power Management Status
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]">
            AI POWER MANAGEMENT READY
          </span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-y-6 gap-x-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Management State</span>
              <span className="text-xs font-semibold text-[var(--muted)]">Waiting for backend</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Active Servers</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Low-Power Servers</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Sleep Servers</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Powered-Down Servers</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Total Power Savings</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Carbon Reduction</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: POWER MANAGEMENT DECISION FLOW */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Power Management Decision Flow</h3>
        
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-3 md:p-4 lg:p-8 overflow-hidden">
          <div className="flex flex-row items-center justify-between w-full gap-1 md:gap-2 lg:gap-4 max-w-5xl mx-auto">
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Activity className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">SERVER MONITORING</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Cpu className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">RESOURCE ANALYSIS</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Database className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">WORKLOAD EVALUATION</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />

            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Leaf className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">CARBON EVALUATION</span>
            </div>

            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />

            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center relative min-w-0">
              <div className="absolute -inset-2 bg-[var(--accent)]/5 rounded-full blur-sm" />
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center shadow-md relative z-10 shrink-0">
                <ListTree className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[var(--accent)]" />
              </div>
              <span className="text-[8.5px] md:text-[9px] lg:text-[11px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--foreground)] relative z-10 leading-tight break-words">POWER DECISION</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Power className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">SERVER POWER STATE</span>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 3: SERVER POWER ANALYSIS */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Server Power Analysis</h3>
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--border)] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--muted)]">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[var(--surface)] border-b border-[var(--border)] text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">
                <tr>
                  <th className="px-6 py-4 font-semibold">Server ID</th>
                  <th className="px-6 py-4 font-semibold">CPU Utilization</th>
                  <th className="px-6 py-4 font-semibold">RAM Utilization</th>
                  <th className="px-6 py-4 font-semibold">Workload</th>
                  <th className="px-6 py-4 font-semibold">Current Power</th>
                  <th className="px-6 py-4 font-semibold">Carbon Intensity</th>
                  <th className="px-6 py-4 font-semibold">Power State</th>
                  <th className="px-6 py-4 font-semibold">Recommended Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr>
                  <td colSpan={8} className="px-6 py-8 text-center text-xs text-[var(--muted-foreground)]">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <LayoutDashboard className="w-6 h-6 text-[var(--muted)] opacity-50" />
                      <span className="font-semibold text-[var(--muted)]">NO SERVER POWER DATA AVAILABLE</span>
                      <span className="text-[10px] uppercase tracking-wider">WAITING FOR BACKEND ANALYSIS</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 4: POWER DECISION ENGINE & SECTION 5: POWER STATE DISTRIBUTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SECTION 4 */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">AI Power Decision Engine</h3>
          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-6 flex flex-col gap-6">
            
            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Resource Utilization</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Workload Intensity</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Leaf className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Carbon Condition</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Power Consumption</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Server className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Server Availability</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[var(--surface)] p-4 rounded-lg border border-[var(--border)]">
              <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-[var(--accent)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">Final Power Decision</span>
                <span className="text-xs text-[var(--muted)]">WAITING FOR BACKEND ANALYSIS</span>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 5 & 6 */}
        <div className="flex flex-col space-y-6">
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Server Power State Distribution</h3>
            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                    <Power className="w-3 h-3 text-[var(--foreground)]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Active</span>
                </div>
                <div className="text-2xl font-light text-[var(--muted)]">—</div>
              </div>

              <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                    <ZapOff className="w-3 h-3 text-[var(--foreground)]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Low Power</span>
                </div>
                <div className="text-2xl font-light text-[var(--muted)]">—</div>
              </div>

              <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                    <Moon className="w-3 h-3 text-[var(--foreground)]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Sleep</span>
                </div>
                <div className="text-2xl font-light text-[var(--muted)]">—</div>
              </div>

              <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-md bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center">
                    <Settings className="w-3 h-3 text-[var(--foreground)]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Powered Down</span>
                </div>
                <div className="text-2xl font-light text-[var(--muted)]">—</div>
              </div>

            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Why Power Management?</h3>
            <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-6 flex flex-col gap-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Low Resource Utilization</span>
                  <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
                </div>
                <div className="flex flex-col gap-1 border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">High Idle Power</span>
                  <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
                </div>
                <div className="flex flex-col gap-1 border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Low Workload</span>
                  <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
                </div>
                <div className="flex flex-col gap-1 border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">High Carbon Intensity</span>
                  <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
                </div>
                <div className="flex flex-col gap-1 border border-[var(--border)] bg-[var(--surface)] p-3 rounded-lg md:col-span-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Resource Consolidation</span>
                  <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
                </div>
                <div className="flex flex-col gap-1 border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-3 rounded-lg md:col-span-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--accent)]">Final Decision</span>
                  <span className="text-[10px] text-[var(--muted)]">Waiting for backend analysis</span>
                </div>
              </div>
              
              <div className="mt-2 pt-4 border-t border-[var(--border)]">
                <p className="text-xs text-[var(--muted-foreground)] italic text-center">
                  POWER MANAGEMENT EXPLANATION UNAVAILABLE
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* SECTION 6: POWER MANAGEMENT IMPACT */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Power Management Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Energy Saved</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Power Reduction</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Carbon Reduction</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Active Servers</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Idle Servers</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

          <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-5 flex flex-col gap-2 text-center items-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Resource Efficiency</span>
            <span className="text-lg font-light text-[var(--muted)]">—</span>
            <span className="text-[8px] uppercase tracking-wider text-[var(--muted-foreground)] mt-2">WAITING FOR BACKEND RESULTS</span>
          </div>

        </div>
      </div>

      {/* SECTION 8: POWER MANAGEMENT SAFETY */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Power Management Safety</h3>
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Workload Availability</span>
                <span className="text-[10px] text-[var(--muted)]">WAITING FOR BACKEND VALIDATION</span>
              </div>
            </div>

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
                <ArrowRightLeft className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Migration Dependency</span>
                <span className="text-[10px] text-[var(--muted)]">WAITING FOR BACKEND VALIDATION</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <Settings className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Failure Handling</span>
                <span className="text-[10px] text-[var(--muted)]">WAITING FOR BACKEND VALIDATION</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center shrink-0">
                <ZapOff className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">Power-Down Feasibility</span>
                <span className="text-[10px] text-[var(--muted)]">WAITING FOR BACKEND VALIDATION</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
