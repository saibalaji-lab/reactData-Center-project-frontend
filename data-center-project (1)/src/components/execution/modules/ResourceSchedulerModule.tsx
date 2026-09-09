import React from 'react';
import { 
  Server, Cpu, MemoryStick, Leaf, Activity, 
  ArrowDown, CheckCircle2, HelpCircle, Network,
  Table2, Database, Zap, Calculator, Target
} from 'lucide-react';

export function ResourceSchedulerModule() {
  return (
    <div className="flex flex-col space-y-10">
      
      {/* SECTION 1: ARCHITECTURAL DECISION FLOW */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Scheduling Logic Flow</h3>
        
        <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-8 overflow-x-auto">
          <div className="flex flex-col items-center min-w-[700px] max-w-3xl mx-auto">
            
            {/* PREVIOUS INTELLIGENCE */}
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-4 bg-[var(--surface)] px-4 py-1.5 rounded-full border border-[var(--border)]">
              Previous Intelligence
            </span>
            
            <div className="flex items-center justify-center gap-6 w-full mb-4">
              <div className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center justify-center gap-2">
                  <Network className="w-3.5 h-3.5 text-[var(--muted)]" />
                  Resources
                </span>
              </div>
              <div className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center justify-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[var(--accent)]" />
                  Renewable
                </span>
              </div>
              <div className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center justify-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-green-500" />
                  Carbon
                </span>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-[var(--muted-foreground)] opacity-50 my-2" />

            {/* SERVER EVALUATION */}
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted-foreground)] mb-4 bg-[var(--surface)] px-4 py-1.5 rounded-full border border-[var(--border)]">
              Server Evaluation
            </span>

            <div className="flex items-center justify-center gap-6 w-full mb-4">
              <div className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center justify-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-[var(--muted)]" />
                  CPU
                </span>
              </div>
              <div className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center justify-center gap-2">
                  <Database className="w-3.5 h-3.5 text-[var(--muted)]" />
                  RAM
                </span>
              </div>
              <div className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center justify-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-green-500" />
                  Carbon
                </span>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-[var(--muted-foreground)] opacity-50 my-2" />
            
            {/* SERVER SCORE */}
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm min-w-[200px] mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center justify-center gap-2">
                <Calculator className="w-3.5 h-3.5 text-[var(--accent)]" />
                Server Score
              </span>
            </div>

            <ArrowDown className="w-5 h-5 text-[var(--muted-foreground)] opacity-50 my-2" />

            {/* SELECTED SERVER */}
            <div className="bg-[var(--surface)] border-2 border-[var(--accent)] rounded-lg p-4 text-center shadow-[0_0_15px_rgba(var(--accent-rgb),0.1)] min-w-[250px] mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[var(--accent)]/5 pointer-events-none" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center justify-center gap-2 relative z-10">
                <Server className="w-4 h-4 text-[var(--accent)]" />
                Selected Server
              </span>
            </div>

            <ArrowDown className="w-5 h-5 text-[var(--muted-foreground)] opacity-50 my-2" />

            {/* WHY THIS SERVER */}
            <div className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm min-w-[300px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center justify-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-[var(--muted)]" />
                Why this server?
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 2: INTELLIGENCE INPUTS */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Previous Intelligence Inputs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden min-h-[140px]">
            <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
              <Network className="w-4 h-4 text-[var(--muted)]" />
              <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                02 Resource Monitoring
              </h3>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
                WAITING FOR BACKEND DATA
              </span>
            </div>
          </div>

          <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden min-h-[140px]">
            <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[var(--muted)]" />
              <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                03 Renewable Energy
              </h3>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
                WAITING FOR BACKEND DATA
              </span>
            </div>
          </div>

          <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden min-h-[140px]">
            <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-[var(--muted)]" />
              <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                05 AI Carbon Prediction
              </h3>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
                WAITING FOR BACKEND DATA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: SERVER EVALUATION TABLE */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-4 flex items-center gap-2">
          <Table2 className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Server Candidate Evaluation</h3>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Server ID</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">CPU Factor</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">RAM Factor</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Carbon Factor</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] text-right">Total Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center text-[var(--muted)] bg-[var(--surface-elevated)]/20">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold tracking-wide mb-2 text-[var(--muted)]">NO SERVERS EVALUATED</span>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] bg-[var(--surface)] px-3 py-1 rounded border border-[var(--border)]">
                      WAITING FOR SCHEDULER EXECUTION
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: SELECTED SERVER & EXPLAINABILITY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SELECTED SERVER */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden min-h-[300px]">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Optimal Selected Server
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[var(--surface-elevated)]/30 relative">
            <Server className="w-12 h-12 text-[var(--border)] mb-4" />
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-3">NO SERVER SELECTED</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR SCHEDULING DECISION
            </span>
          </div>
        </div>

        {/* WHY THIS SERVER? */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden min-h-[300px]">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Explainable AI: Why this server?
            </h3>
          </div>
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center bg-[var(--surface)]">
            <Activity className="w-10 h-10 text-[var(--border)] mb-4" />
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-3">EXPLANATION UNAVAILABLE</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface-elevated)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR XAI ANALYSIS
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
