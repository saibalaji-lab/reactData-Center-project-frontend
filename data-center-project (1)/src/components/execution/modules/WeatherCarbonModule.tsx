import React from 'react';
import { 
  Cloud, Sun, Wind, Droplets,
  LineChart, Clock, Table2, Info, Zap, Thermometer,
  Activity, BarChart
} from 'lucide-react';

export function WeatherCarbonModule() {
  return (
    <div className="flex flex-col space-y-10">
      
      {/* SECTION 1: Weather Data Input */}
      <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
            <Cloud className="w-4 h-4 text-[var(--accent)]" />
            Weather Data Input
          </h3>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Data Source</span>
            <span className="text-xs font-semibold text-[var(--foreground)]">NASA POWER API</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Location</span>
            <span className="text-xs font-semibold text-[var(--muted)]">WAITING FOR BACKEND DATA</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Time Range</span>
            <span className="text-xs font-semibold text-[var(--muted)]">WAITING FOR BACKEND DATA</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Data Status</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface)] self-start">
              WAITING FOR WEATHER DATA
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Input Variables</span>
            <span className="text-xs font-semibold text-[var(--muted)]">WAITING FOR BACKEND DATA</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: Weather Conditions */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">Weather Conditions</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'TEMPERATURE', icon: <Thermometer className="w-4 h-4" /> },
            { label: 'SOLAR RADIATION', icon: <Sun className="w-4 h-4" /> },
            { label: 'WIND CONDITIONS', icon: <Wind className="w-4 h-4" /> },
            { label: 'HUMIDITY', icon: <Droplets className="w-4 h-4" /> },
            { label: 'RENEWABLE ENERGY INDICATOR', icon: <Zap className="w-4 h-4" /> },
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

      {/* SECTION 3: Weather Trend Visualization */}
      <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[300px] bg-[var(--surface-elevated)]/50">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
          <LineChart className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
            Weather Trend
          </h3>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <BarChart className="w-10 h-10 text-[var(--border)] mb-4" />
          <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">NO WEATHER DATA AVAILABLE</span>
          <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
            WAITING FOR WEATHER DATA
          </span>
        </div>
      </div>

      {/* SECTION 4: Weather-Aware Carbon Forecast */}
      <div className="flex flex-col border-2 border-[var(--border)] rounded-xl overflow-hidden min-h-[400px] bg-[var(--surface-elevated)]/30 relative">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-4 flex items-center gap-2 relative z-20">
          <Activity className="w-5 h-5 text-[var(--accent)]" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground)]">
            Weather-Aware Carbon Forecast
          </h3>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden min-h-[340px]">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 border-[var(--border)]/30 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none z-0" />
          
          <LineChart className="w-12 h-12 text-[var(--border)] mb-5 z-10" />
          <span className="text-base font-semibold tracking-wide text-[var(--muted)] mb-3 z-10">NO CARBON FORECAST DATA AVAILABLE</span>
          <span className="text-[10px] px-4 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-full uppercase tracking-widest text-[var(--muted-foreground)] shadow-sm z-10">
            WAITING FOR WEATHER-AWARE FORECAST
          </span>
        </div>
      </div>

      {/* SECTION 5: Forecast Timeline & SECTION 6: Weather / Carbon Relationship */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SECTION 5: Forecast Timeline */}
        <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[280px] bg-[var(--surface-elevated)]/50">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Carbon Forecast Timeline
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">NO FORECAST DATA AVAILABLE</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR BACKEND PROCESSING
            </span>
          </div>
        </div>

        {/* SECTION 6: Weather / Carbon Relationship */}
        <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--surface)]">
          <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 flex items-center gap-2">
            <Activity className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--foreground)]">
              Weather-Aware Carbon Analysis
            </h3>
          </div>
          <div className="flex-1 p-6 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-2 w-full max-w-sm mx-auto">
              
              <div className="w-full bg-[var(--surface-elevated)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center justify-center gap-2">
                  <Cloud className="w-3.5 h-3.5 text-[var(--accent)]" />
                  WEATHER CONDITIONS
                </span>
              </div>
              
              <div className="w-px h-4 bg-[var(--border)] relative">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-[var(--border)]" />
              </div>
              
              <div className="w-full bg-[var(--surface-elevated)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center justify-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[var(--muted)]" />
                  RENEWABLE ENERGY AVAILABILITY
                </span>
              </div>
              
              <div className="w-px h-4 bg-[var(--border)] relative">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-[var(--border)]" />
              </div>
              
              <div className="w-full bg-[var(--surface-elevated)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center justify-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[var(--muted)]" />
                  ENERGY MIX / GRID CONDITIONS
                </span>
              </div>
              
              <div className="w-px h-4 bg-[var(--border)] relative">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-[var(--border)]" />
              </div>
              
              <div className="w-full bg-[var(--surface-elevated)] border border-[var(--border)] rounded-lg p-3 text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] flex items-center justify-center gap-2">
                  <LineChart className="w-3.5 h-3.5 text-[var(--muted)]" />
                  CARBON INTENSITY
                </span>
              </div>

              <div className="w-px h-4 bg-[var(--border)] relative">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-[var(--border)]" />
              </div>
              
              <div className="w-full bg-[var(--surface-elevated)] border border-[var(--border)] border-l-[3px] border-l-[var(--accent)] rounded-lg p-3 text-center shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--foreground)] flex items-center justify-center gap-2">
                  <BarChart className="w-3.5 h-3.5 text-[var(--accent)]" />
                  CARBON FORECAST
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* SECTION 8: Weather Data Table */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-4 flex items-center gap-2">
          <Table2 className="w-4 h-4 text-[var(--muted)]" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Weather Data</h3>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-40">Timestamp</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-32">Location</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Temperature</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Solar Radiation</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Wind</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Humidity</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-32">Carbon Intensity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="px-6 py-16 text-center text-[var(--muted)] bg-[var(--surface-elevated)]/20">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold tracking-wide mb-2 text-[var(--muted)]">NO WEATHER DATA AVAILABLE</span>
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

      {/* SECTION 7 & 9: Forecast Information & Forecast Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SECTION 7: Forecast Information */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <Info className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Forecast Information
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Model</span>
                <span className="text-xs font-semibold text-[var(--muted)]">—</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Data Source</span>
                <span className="text-xs font-semibold text-[var(--muted)]">—</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Forecast Horizon</span>
                <span className="text-xs font-semibold text-[var(--muted)]">—</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Input Features</span>
                <span className="text-xs font-semibold text-[var(--muted)]">—</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Last Updated</span>
                <span className="text-xs font-semibold text-[var(--muted)]">—</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Forecast Status</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] bg-[var(--surface)] border border-[var(--border)] px-2 py-0.5 rounded self-start">
                  WAITING FOR BACKEND MODEL INFORMATION
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 9: Forecast Summary */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center gap-2">
            <Activity className="w-4 h-4 text-[var(--muted)]" />
            <h3 className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Forecast Summary
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-[var(--surface-elevated)]/30">
            <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">FORECAST SUMMARY UNAVAILABLE</span>
            <span className="text-[10px] px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
              WAITING FOR BACKEND FORECAST
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
