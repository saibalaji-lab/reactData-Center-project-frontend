import React from "react";
import { cn } from "../../lib/utils";
import { PipelineStage } from "../../data/modules";

interface ExecutionPipelineProps {
  activeStage: PipelineStage;
  onSelectStage: (stage: PipelineStage) => void;
}

export function ExecutionPipeline({ activeStage, onSelectStage }: ExecutionPipelineProps) {
  const stages: PipelineStage[] = [
    'WORKFLOW', 'CLUSTERING', 'RESOURCES', 'RENEWABLE', 'WEATHER',
    'CARBON', 'SCHEDULER', 'SIMULATION', 'MIGRATION', 'POWER', 'FAILURE', 'RESULTS'
  ];

  // Helper to determine the state of a stage
  const getStageState = (stage: PipelineStage) => {
    if (stage === 'WORKFLOW') {
      // The intake stage is fully completed when Page 2 opens
      return activeStage === 'WORKFLOW' ? 'ACTIVE' : 'COMPLETED';
    }
    
    // For now, only one stage is actively being looked at. The rest are waiting.
    if (stage === activeStage) return 'ACTIVE';
    
    // If it's the next stage after WORKFLOW (and we haven't selected anything else), it might be ready.
    if (stage === 'CLUSTERING' && activeStage !== 'CLUSTERING') return 'READY';

    return 'WAITING';
  };

  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="min-w-max flex items-center justify-between gap-1 px-2">
        {stages.map((stage, index) => {
          const state = getStageState(stage);
          
          return (
            <React.Fragment key={stage}>
              <div 
                onClick={() => onSelectStage(stage)}
                className={cn(
                  "flex flex-col items-center justify-center min-w-[80px] cursor-pointer group transition-all duration-300",
                  state === 'ACTIVE' && "opacity-100",
                  state === 'COMPLETED' && "opacity-80 hover:opacity-100",
                  state === 'READY' && "opacity-80 hover:opacity-100",
                  state === 'WAITING' && "opacity-40 hover:opacity-80",
                )}
              >
                <div className={cn(
                  "w-3 h-3 rounded-full border-2 mb-2 transition-colors duration-300",
                  state === 'ACTIVE' && "bg-[var(--accent)] border-[var(--accent)] ring-4 ring-[var(--accent)]/20",
                  state === 'COMPLETED' && "bg-[var(--success)] border-[var(--success)]",
                  state === 'READY' && "bg-transparent border-[var(--foreground)] border-dashed",
                  state === 'WAITING' && "bg-transparent border-[var(--muted)]"
                )} />
                <span className={cn(
                  "text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors duration-300",
                  state === 'ACTIVE' ? "text-[var(--accent)]" : "text-[var(--muted)]",
                  (state === 'COMPLETED' || state === 'READY') && "group-hover:text-[var(--foreground)]"
                )}>
                  {stage}
                </span>
                <span className="text-[8px] uppercase tracking-widest text-[var(--muted-foreground)] mt-0.5">
                  {state}
                </span>
              </div>
              
              {index < stages.length - 1 && (
                <div className="flex-1 min-w-[20px] h-[1px] -mt-5 bg-[var(--border)] mx-1" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
