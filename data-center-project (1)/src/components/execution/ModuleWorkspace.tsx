import React, { useEffect } from "react";
import { EXECUTION_MODULES } from "../../data/modules";
import { cn } from "../../lib/utils";
import { Settings2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ClusteringModule } from "./modules/ClusteringModule";
import { ResourceMonitoringModule } from "./modules/ResourceMonitoringModule";
import { RenewableEnergyModule } from "./modules/RenewableEnergyModule";
import { WeatherCarbonModule } from "./modules/WeatherCarbonModule";
import { AICarbonModule } from "./modules/AICarbonModule";
import { ResourceSchedulerModule } from "./modules/ResourceSchedulerModule";
import { CloudSimModule } from "./modules/CloudSimModule";
import { VMMigrationModule } from "./modules/VMMigrationModule";
import { PowerManagementModule } from "./modules/PowerManagementModule";
import { FailurePredictionModule } from "./modules/FailurePredictionModule";
import { SustainabilityDashboardModule } from "./modules/SustainabilityDashboardModule";
import { SystemHealthModule } from "./modules/SystemHealthModule";

interface ModuleWorkspaceProps {
  file: File | null;
  moduleId: string;
  onBack: () => void;
  onNext: () => void;
  showNext: boolean;
}

export function ModuleWorkspace({ file, moduleId, onBack, onNext, showNext }: ModuleWorkspaceProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [moduleId]);

  const module = EXECUTION_MODULES.find(m => m.id === moduleId);

  if (!module) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={module.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col h-full bg-[var(--surface)] rounded-2xl border border-[var(--border)] shadow-sm overflow-hidden"
      >
        {/* Workspace Header */}
        <div className="px-6 py-8 border-b border-[var(--border)] bg-[var(--surface-elevated)] flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 rounded-full border border-[var(--processing)]/30 bg-[var(--processing)]/10 text-[var(--processing)] text-[10px] font-bold uppercase tracking-wider">
              {module.id === 'power' ? 'AI POWER MANAGEMENT READY' : module.pipelineStage === 'WORKFLOW' ? 'COMPLETED' : 'WAITING FOR BACKEND PROCESSING'}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              {module.name}
            </h2>
            <p className="text-sm text-[var(--muted)] mt-2 max-w-3xl">
              {module.purpose}
            </p>
          </div>
        </div>

        {/* Workspace Body / Placeholders */}
        <div className="p-6 md:p-8 flex-1 bg-[var(--surface)] overflow-y-auto min-h-0">
          {module.id === 'clustering' ? (
            <ClusteringModule file={file} />
          ) : module.id === 'resources' ? (
            <ResourceMonitoringModule />
          ) : module.id === 'renewable' ? (
            <RenewableEnergyModule />
          ) : module.id === 'weather' ? (
            <WeatherCarbonModule />
          ) : module.id === 'carbon' ? (
            <AICarbonModule />
          ) : module.id === 'scheduler' ? (
            <ResourceSchedulerModule />
          ) : module.id === 'simulation' ? (
            <CloudSimModule />
          ) : module.id === 'migration' ? (
            <VMMigrationModule />
          ) : module.id === 'power' ? (
            <PowerManagementModule />
          ) : module.id === 'failure' ? (
            <FailurePredictionModule />
          ) : module.id === 'results' ? (
            <SustainabilityDashboardModule />
          ) : module.id === 'system' ? (
            <SystemHealthModule />
          ) : (
            <>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">
                  Architectural Placeholders
                </h3>
                <span className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-wide">
                  Ready for Implementation
                </span>
              </div>

              <div className={cn(
                "grid gap-4",
                module.id === 'scheduler' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'
              )}>
                {module.placeholders.map((placeholder, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--surface-elevated)]/50 text-center",
                      "hover:bg-[var(--surface-elevated)] hover:border-[var(--accent)]/30 transition-colors duration-300"
                    )}
                    style={{
                      minHeight: '160px',
                      gridColumn: (module.placeholders.length % 2 !== 0 && idx === module.placeholders.length - 1) ? '1 / -1' : 'auto'
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center mb-3 shadow-sm">
                      <Settings2 className="w-4 h-4 text-[var(--muted)]" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-[var(--muted)] mb-2">
                      {placeholder}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] opacity-70">
                      NO DATA AVAILABLE
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  This module interface is structurally prepared. The frontend architecture reserves space for real processing components, data visualizations, and operational tables. Actual logic will be provided during backend, API, and database integration phases.
                </p>
              </div>
            </>
          )}

          {/* Bottom Navigation */}
          <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center justify-between">
            <button
              onClick={onBack}
              className="px-6 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-sm font-semibold tracking-wide text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors duration-200"
            >
              {module.id === 'clustering' ? '← BACK TO WORKFLOW' : '← BACK'}
            </button>
            {showNext ? (
              <button
                onClick={onNext}
                className="px-6 py-2.5 rounded-lg border border-transparent bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-semibold tracking-wide hover:bg-[var(--accent-hover)] transition-colors duration-200 shadow-sm"
              >
                NEXT →
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
