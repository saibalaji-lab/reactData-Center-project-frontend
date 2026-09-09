import React from 'react';
import { 
  Play, Settings, Database, Activity, Server, 
  ArrowRight, LayoutDashboard, Clock, Box, PlayCircle,
  Network, Cpu, Info, CheckCircle2, AlertCircle,
  Table2, LineChart, BarChart, Target, Zap, Leaf
} from 'lucide-react';

export function CloudSimModule() {
  return (
    <div className="flex flex-col space-y-10">
      
      {/* SECTION 4: SIMULATION STATUS (Top Level Overview) */}
      <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
            <Activity className="w-4 h-4 text-[var(--accent)]" />
            Simulation Status
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]">
            WAITING FOR CLOUDSIM BACKEND
          </span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Status</span>
              <span className="text-xs font-semibold text-[var(--muted)]">WAITING</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Backend Connection</span>
              <span className="text-xs font-semibold text-[var(--muted)] flex items-center gap-1">
                <AlertCircle className="w-3 h-3 text-[var(--muted-foreground)]" /> NOT CONNECTED
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Start Time</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Elapsed Time</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Simulation Time</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Last Update</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: SCHEDULER TO SIMULATION FLOW */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Execution Architecture</h3>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-3 md:p-4 lg:p-6 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between w-full py-2 lg:py-4 gap-4 md:gap-1 lg:gap-4">
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Network className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">CARBON-AWARE RESOURCE SCHEDULER</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0 rotate-90 md:rotate-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Server className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">SELECTED RESOURCES</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0 rotate-90 md:rotate-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Settings className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">VM / HOST CONFIGURATION</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0 rotate-90 md:rotate-0" />

            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center relative min-w-0">
              <div className="absolute -inset-2 bg-[var(--accent)]/5 rounded-full blur-sm" />
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center shadow-md relative z-10 shrink-0">
                <PlayCircle className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[var(--accent)]" />
              </div>
              <span className="text-[8.5px] md:text-[9px] lg:text-[11px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--foreground)] relative z-10 leading-tight break-words">CLOUDSIM PLUS</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0 rotate-90 md:rotate-0" />
            
            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <Cpu className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">WORKFLOW EXECUTION</span>
            </div>
            
            <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-5 lg:h-5 text-[var(--muted-foreground)] opacity-50 shrink-0 rotate-90 md:rotate-0" />

            <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1 text-center min-w-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <LayoutDashboard className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[7.5px] md:text-[8px] lg:text-[10px] font-bold uppercase tracking-wide md:tracking-wider text-[var(--muted-foreground)] leading-tight break-words">SIMULATION RESULTS</span>
            </div>

          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SECTION 1: SIMULATION INPUT */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <Database className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Simulation Input State
            </h3>
          </div>
          <div className="p-6 space-y-5">
            {[
              { label: 'WORKFLOW', icon: <Network className="w-3.5 h-3.5" /> },
              { label: 'CLUSTERED TASKS', icon: <Box className="w-3.5 h-3.5" /> },
              { label: 'SCHEDULED RESOURCES', icon: <Server className="w-3.5 h-3.5" /> },
              { label: 'VM CONFIGURATION', icon: <Settings className="w-3.5 h-3.5" /> },
              { label: 'SIMULATION CONFIGURATION', icon: <PlayCircle className="w-3.5 h-3.5" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 pb-4 border-b border-[var(--border)] last:border-0 last:pb-0">
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  {item.icon}
                  <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                </div>
                <span className="text-xs font-semibold text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-3 py-1.5 rounded w-fit uppercase tracking-wider">
                  WAITING FOR BACKEND DATA
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: SIMULATION CONFIGURATION */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <Settings className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Simulation Configuration
            </h3>
          </div>
          <div className="p-6 space-y-5">
            <div className="flex flex-col gap-1.5 pb-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                <PlayCircle className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-wider">SIMULATOR</span>
              </div>
              <span className="text-xs font-semibold text-[var(--foreground)] bg-[var(--surface)] border-l-2 border-l-[var(--accent)] border-y border-r border-y-[var(--border)] border-r-[var(--border)] px-3 py-1.5 rounded-r w-fit uppercase tracking-wider">
                CloudSim Plus
              </span>
            </div>

            {[
              { label: 'DATACENTER CONFIGURATION', icon: <Server className="w-3.5 h-3.5" /> },
              { label: 'HOST CONFIGURATION', icon: <Box className="w-3.5 h-3.5" /> },
              { label: 'VM CONFIGURATION', icon: <Cpu className="w-3.5 h-3.5" /> },
              { label: 'CLOUDLET CONFIGURATION', icon: <Activity className="w-3.5 h-3.5" /> },
              { label: 'SCHEDULING CONFIGURATION', icon: <Settings className="w-3.5 h-3.5" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1.5 pb-4 border-b border-[var(--border)] last:border-0 last:pb-0">
                <div className="flex items-center gap-2 text-[var(--muted-foreground)]">
                  {item.icon}
                  <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                </div>
                <span className="text-xs font-semibold text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-3 py-1.5 rounded w-fit uppercase tracking-wider">
                  WAITING FOR BACKEND DATA
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 3: SIMULATION CONTROL */}
      <div className="flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden p-8 items-center justify-center min-h-[250px] relative">
        <div className="absolute inset-0 bg-[var(--surface-elevated)]/20 pointer-events-none" />
        
        <div className="flex flex-col items-center gap-6 relative z-10 w-full max-w-md">
          <div className="flex flex-col items-center gap-2 text-center">
            <Info className="w-8 h-8 text-[var(--muted-foreground)] opacity-50 mb-2" />
            <span className="text-sm font-semibold tracking-wide text-[var(--foreground)]">Ready to Initialize</span>
            <span className="text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]">
              Simulation environment is awaiting backend connection and configuration injection.
            </span>
          </div>

          <div className="w-full bg-[var(--surface-elevated)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4 text-[var(--muted-foreground)]" />
              CLOUDSIM BACKEND NOT CONNECTED
            </span>
          </div>

          <button 
            disabled 
            className="w-full max-w-[280px] bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--muted-foreground)] opacity-60 rounded-lg px-6 py-4 flex items-center justify-center gap-3 cursor-not-allowed shadow-sm transition-all"
          >
            <Play className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">RUN SIMULATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* SECTION 6: SIMULATION EXECUTION */}
      <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden shadow-sm">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-[var(--accent)]" />
            Simulation Execution
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]">
            WAITING FOR SIMULATION BACKEND
          </span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Execution Status</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Current Task</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Current VM</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Current Host</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Simulation Clock</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Execution Progress</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 7: WORKFLOW EXECUTION TIMELINE */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-4 flex items-center gap-2">
          <Table2 className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Workflow Execution Timeline</h3>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Task</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">VM</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Host</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Start Time</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">End Time</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Execution Time</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="px-6 py-16 text-center text-[var(--muted)] bg-[var(--surface-elevated)]/20">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold tracking-wide mb-2 text-[var(--muted)]">NO EXECUTION DATA AVAILABLE</span>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] bg-[var(--surface)] px-3 py-1 rounded border border-[var(--border)]">
                      WAITING FOR CLOUDSIM RESULTS
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 8: RESOURCE EXECUTION VIEW */}
      <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[300px] bg-[var(--surface-elevated)]/50">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LineChart className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Resource Execution
            </h3>
          </div>
          <div className="flex gap-2">
            <span className="text-[9px] uppercase tracking-widest text-[var(--muted-foreground)] px-2 py-0.5 border border-[var(--border)] rounded bg-[var(--surface)]">CPU</span>
            <span className="text-[9px] uppercase tracking-widest text-[var(--muted-foreground)] px-2 py-0.5 border border-[var(--border)] rounded bg-[var(--surface)]">RAM</span>
            <span className="text-[9px] uppercase tracking-widest text-[var(--muted-foreground)] px-2 py-0.5 border border-[var(--border)] rounded bg-[var(--surface)]">POWER</span>
            <span className="text-[9px] uppercase tracking-widest text-[var(--muted-foreground)] px-2 py-0.5 border border-[var(--border)] rounded bg-[var(--surface)]">ALLOCATION</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <BarChart className="w-10 h-10 text-[var(--border)] mb-4" />
          <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">NO RESOURCE EXECUTION DATA AVAILABLE</span>
          <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
            WAITING FOR CLOUDSIM RESULTS
          </span>
        </div>
      </div>

      {/* SECTION 9: SIMULATION RESULTS */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Simulation Results</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'TOTAL TASKS', icon: <Box className="w-4 h-4" /> },
            { label: 'COMPLETED TASKS', icon: <CheckCircle2 className="w-4 h-4" /> },
            { label: 'FAILED TASKS', icon: <AlertCircle className="w-4 h-4" /> },
            { label: 'TOTAL EXECUTION TIME', icon: <Clock className="w-4 h-4" /> },
            { label: 'ENERGY CONSUMPTION', icon: <Zap className="w-4 h-4" /> },
            { label: 'POWER CONSUMPTION', icon: <Activity className="w-4 h-4" /> },
            { label: 'RESOURCE UTILIZATION', icon: <Target className="w-4 h-4" /> },
            { label: 'CARBON IMPACT', icon: <Leaf className="w-4 h-4" /> },
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-4 flex flex-col justify-between min-h-[100px]">
              <div className="flex items-center gap-2 text-[var(--muted-foreground)] mb-2">
                {item.icon}
                <span className="text-[10px] font-bold uppercase tracking-wider truncate">{item.label}</span>
              </div>
              <div className="text-2xl font-semibold text-[var(--muted)]">—</div>
              <div className="text-[9px] uppercase tracking-widest text-[var(--muted-foreground)] mt-1">WAITING FOR SIMULATION RESULTS</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SECTION 10: EXECUTION SUMMARY */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <LayoutDashboard className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Execution Summary
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {[
                { label: 'WORKFLOW STATUS' },
                { label: 'SIMULATION STATUS' },
                { label: 'TASK COMPLETION' },
                { label: 'RESOURCE STATUS' },
                { label: 'ENERGY STATUS' },
                { label: 'CARBON STATUS' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">{item.label}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded self-start">
                    WAITING FOR BACKEND RESULTS
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 11: CARBON-AWARE SIMULATION SUMMARY */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <Leaf className="w-4 h-4 text-[var(--accent)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Carbon-Aware Simulation
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {[
                { label: 'SELECTED RESOURCES' },
                { label: 'CARBON-AWARE SCHEDULING DECISION' },
                { label: 'ENERGY CONSUMPTION' },
                { label: 'CARBON IMPACT' },
                { label: 'SCHEDULING OUTCOME' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">{item.label}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded self-start">
                    WAITING FOR RESULTS
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
