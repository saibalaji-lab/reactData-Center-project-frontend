import React from 'react';
import { 
  Database, LineChart, BarChart2, Activity, Clock, 
  Table2, Info, ArrowRight, Target, BarChart, Settings
} from 'lucide-react';

export function AICarbonModule() {
  return (
    <div className="flex flex-col space-y-10">
      
      {/* SECTION 1: CARBON DATA INPUT */}
      <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
            <Database className="w-4 h-4 text-[var(--accent)]" />
            Carbon Data Input
          </h3>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Data Source</span>
            <span className="text-xs font-semibold text-[var(--muted)]">WAITING FOR BACKEND DATA</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Location / Region</span>
            <span className="text-xs font-semibold text-[var(--muted)]">WAITING FOR BACKEND DATA</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Time Range</span>
            <span className="text-xs font-semibold text-[var(--muted)]">WAITING FOR BACKEND DATA</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Data Status</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface)] self-start">
              WAITING FOR CARBON DATA
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Update Time</span>
            <span className="text-xs font-semibold text-[var(--muted)]">WAITING FOR BACKEND DATA</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: CARBON OVERVIEW */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Carbon Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'CURRENT CARBON INTENSITY', icon: <Activity className="w-4 h-4" /> },
            { label: 'PREDICTED CARBON INTENSITY', icon: <Target className="w-4 h-4" /> },
            { label: 'FORECAST HORIZON', icon: <Clock className="w-4 h-4" /> },
            { label: 'PREDICTION STATUS', icon: <Settings className="w-4 h-4" /> },
          ].map((item, idx) => (
            <div key={idx} className="bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl p-4 flex flex-col justify-between min-h-[100px]">
              <div className="flex items-center gap-2 text-[var(--muted-foreground)] mb-2">
                {item.icon}
                <span className="text-[10px] font-bold uppercase tracking-wider truncate">{item.label}</span>
              </div>
              <div className="text-2xl font-semibold text-[var(--muted)]">—</div>
              <div className="text-[9px] uppercase tracking-widest text-[var(--muted-foreground)] mt-1">NO DATA AVAILABLE</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: HISTORICAL CARBON INTENSITY */}
      <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[300px] bg-[var(--surface-elevated)]/50">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
          <LineChart className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
            Historical Carbon Intensity
          </h3>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <BarChart className="w-10 h-10 text-[var(--border)] mb-4" />
          <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">NO HISTORICAL CARBON DATA AVAILABLE</span>
          <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
            WAITING FOR BACKEND DATA
          </span>
        </div>
      </div>

      {/* SECTION 4: AI CARBON PREDICTION */}
      <div className="flex flex-col border-2 border-[var(--accent)]/30 rounded-xl overflow-hidden min-h-[420px] bg-[var(--surface-elevated)] relative shadow-[0_0_15px_rgba(var(--accent-rgb),0.05)]">
        <div className="border-b border-[var(--accent)]/20 bg-[var(--surface)] px-4 py-4 flex items-center gap-2 relative z-20">
          <Activity className="w-5 h-5 text-[var(--accent)]" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
            AI Carbon Prediction
          </h3>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden min-h-[360px]">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 border-[var(--border)]/30 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none z-0" />
          
          <LineChart className="w-12 h-12 text-[var(--border)] mb-5 z-10" />
          <span className="text-base font-semibold tracking-wide text-[var(--muted)] mb-3 z-10">NO AI PREDICTION AVAILABLE</span>
          <span className="text-[10px] px-4 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-full uppercase tracking-widest text-[var(--muted-foreground)] shadow-sm z-10">
            WAITING FOR AI MODEL PROCESSING
          </span>
        </div>
      </div>

      {/* SECTION 5 & 6: ACTUAL VS PREDICTED & PREDICTION TIMELINE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SECTION 5: ACTUAL VS PREDICTED */}
        <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[280px] bg-[var(--surface-elevated)]/50">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Actual vs Predicted Carbon Intensity
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">ACTUAL VS PREDICTED DATA UNAVAILABLE</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR BACKEND RESULTS
            </span>
          </div>
        </div>

        {/* SECTION 6: PREDICTION TIMELINE */}
        <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[280px] bg-[var(--surface-elevated)]/50">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Carbon Prediction Timeline
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">NO PREDICTION DATA AVAILABLE</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR BACKEND PROCESSING
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 7: AI MODEL INFORMATION */}
      <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
          <Info className="w-4 h-4 text-[var(--accent)]" />
          <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
            AI Model Information
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Model</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Model Version</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Training Data</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Input Features</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Prediction Horizon</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Last Trained</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Last Updated</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Model Status</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded self-start">
                WAITING FOR BACKEND MODEL INFORMATION
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 8 & 9: PREDICTION INPUT FEATURES & MODEL PERFORMANCE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SECTION 8: PREDICTION INPUT FEATURES */}
        <div className="flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden min-h-[240px]">
          <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 flex items-center gap-2">
            <Settings className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Prediction Input Features
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">NO INPUT FEATURES AVAILABLE</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface-elevated)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR MODEL DATA
            </span>
          </div>
        </div>

        {/* SECTION 9: MODEL PERFORMANCE */}
        <div className="flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden min-h-[240px]">
          <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 flex items-center gap-2">
            <Target className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Model Performance
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">MODEL PERFORMANCE DATA NOT AVAILABLE</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface-elevated)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR BACKEND MODEL EVALUATION
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 10 & 12: PREDICTION HORIZON & AI PREDICTION SUMMARY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SECTION 10: PREDICTION HORIZON */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Prediction Horizon
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-[var(--surface-elevated)]/30 min-h-[140px]">
            <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR PREDICTION CONFIGURATION
            </span>
          </div>
        </div>

        {/* SECTION 12: AI PREDICTION SUMMARY */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <Info className="w-4 h-4 text-[var(--accent)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              AI Prediction Summary
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-[var(--surface-elevated)]/30 min-h-[140px]">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">AI PREDICTION SUMMARY UNAVAILABLE</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR AI MODEL RESULTS
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 11: CARBON INTENSITY DATA TABLE */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-4 flex items-center gap-2">
          <Table2 className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Carbon Intensity Data</h3>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-40">Timestamp</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-32">Location</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Carbon Intensity</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Data Status</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Prediction Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center text-[var(--muted)] bg-[var(--surface-elevated)]/20">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold tracking-wide mb-2 text-[var(--muted)]">NO CARBON DATA AVAILABLE</span>
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

      {/* SECTION 13: CARBON-AWARE SCHEDULING INPUT */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Carbon-Aware Scheduling Input</h3>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 overflow-x-auto">
          <div className="flex items-center min-w-[600px] justify-between">
            <div className="flex flex-col items-center gap-3 w-40 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                <Database className="w-5 h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">CARBON DATA</span>
            </div>
            
            <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-3 w-40 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                <LineChart className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">AI PREDICTION</span>
            </div>
            
            <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-3 w-40 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                <Activity className="w-5 h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">PREDICTED CARBON INTENSITY</span>
            </div>
            
            <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-3 w-40 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                <Settings className="w-5 h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">RESOURCE SCHEDULER</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
