import React from 'react';
import { 
  Database, Calendar, MapPin, Activity, Sun, Wind, 
  LineChart, Clock, Table2, ArrowRight, Info, Zap 
} from 'lucide-react';

export function RenewableEnergyModule() {
  return (
    <div className="flex flex-col space-y-10">
      
      {/* SECTION 1: Renewable Energy Input */}
      <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
            <Database className="w-4 h-4 text-[var(--accent)]" />
            Renewable Energy Input
          </h3>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Data Source</span>
            <span className="text-xs font-semibold text-[var(--foreground)]">NASA POWER API / NREL</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Data Type</span>
            <span className="text-xs font-semibold text-[var(--foreground)]">Environmental</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Time Range</span>
            <span className="text-xs font-semibold text-[var(--muted)]">WAITING FOR BACKEND</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Location</span>
            <span className="text-xs font-semibold text-[var(--muted)]">WAITING FOR BACKEND</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Data Status</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface)] self-start">
              WAITING
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 2: Renewable Energy Overview */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Renewable Energy Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'RENEWABLE AVAILABILITY', icon: <Zap className="w-4 h-4" /> },
            { label: 'PREDICTED ENERGY', icon: <Activity className="w-4 h-4" /> },
            { label: 'SOLAR CONTRIBUTION', icon: <Sun className="w-4 h-4" /> },
            { label: 'WIND CONTRIBUTION', icon: <Wind className="w-4 h-4" /> },
            { label: 'RENEWABLE SHARE', icon: <LineChart className="w-4 h-4" /> },
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

      {/* SECTION 3: Renewable Energy Prediction Graph */}
      <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[360px] bg-[var(--surface-elevated)]/50">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
          <LineChart className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
            Renewable Energy Prediction Graph
          </h3>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <Activity className="w-10 h-10 text-[var(--border)] mb-4" />
          <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">NO PREDICTION DATA AVAILABLE</span>
          <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
            WAITING FOR RENEWABLE ENERGY PREDICTION
          </span>
        </div>
      </div>

      {/* SECTION 4 & 5: Prediction Timeline & Renewable Energy Availability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SECTION 4: Prediction Timeline */}
        <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[280px] bg-[var(--surface-elevated)]/50">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Prediction Timeline
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">NO PREDICTION DATA AVAILABLE</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR BACKEND PROCESSING
            </span>
          </div>
        </div>

        {/* SECTION 5: Renewable Energy Availability */}
        <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[280px] bg-[var(--surface-elevated)]/50">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Renewable Energy Availability
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">NO RENEWABLE AVAILABILITY DATA</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR BACKEND PROCESSING
            </span>
          </div>
        </div>

      </div>

      {/* SECTION 6: Data Table */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-4 flex items-center gap-2">
          <Table2 className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Renewable Energy Data</h3>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-40">Timestamp</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-32">Location</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Solar</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Wind</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Renewable Availability</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Prediction</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-24">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="px-6 py-16 text-center text-[var(--muted)] bg-[var(--surface-elevated)]/20">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold tracking-wide mb-2 text-[var(--muted)]">NO RENEWABLE ENERGY DATA AVAILABLE</span>
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

      {/* SECTION 7: Prediction Information */}
      <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
          <Info className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
            Prediction Information
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Model</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Data Source</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Prediction Horizon</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Last Updated</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Input Features</span>
              <span className="text-xs font-semibold text-[var(--muted)]">—</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Prediction Status</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded self-start">
                WAITING FOR BACKEND MODEL INFORMATION
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 8: Renewable-Aware Decision Support (Conceptual Flow) */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Renewable-Aware Scheduling Input</h3>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 overflow-x-auto">
          <div className="flex items-center min-w-[600px] justify-between">
            <div className="flex flex-col items-center gap-3 w-40 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                <Database className="w-5 h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">RENEWABLE DATA</span>
            </div>
            
            <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-3 w-40 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                <LineChart className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)]">PREDICTION</span>
            </div>
            
            <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-3 w-40 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                <Zap className="w-5 h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">RENEWABLE AVAILABILITY</span>
            </div>
            
            <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] opacity-50 shrink-0" />
            
            <div className="flex flex-col items-center gap-3 w-40 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center shadow-sm">
                <Activity className="w-5 h-5 text-[var(--muted)]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">CARBON-AWARE SCHEDULING</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
