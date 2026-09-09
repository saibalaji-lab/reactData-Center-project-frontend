import React from "react";
import { Check, Loader2, AlertTriangle, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export type StageState = "WAITING" | "PROCESSING" | "COMPLETED" | "WARNING" | "ERROR";

interface PipelineStage {
  id: string;
  number: string;
  title: string;
  state: StageState;
}

interface PreparationPipelineProps {
  stages: PipelineStage[];
}

export function PreparationPipeline({ stages }: PreparationPipelineProps) {
  const getIcon = (state: StageState) => {
    switch (state) {
      case "COMPLETED": return <Check className="w-3.5 h-3.5" />;
      case "PROCESSING": return <Loader2 className="w-3.5 h-3.5 animate-spin" />;
      case "WARNING": return <AlertTriangle className="w-3.5 h-3.5" />;
      case "ERROR": return <AlertCircle className="w-3.5 h-3.5" />;
      case "WAITING":
      default: return <div className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] opacity-50" />;
    }
  };

  const getColorClass = (state: StageState) => {
    switch (state) {
      case "COMPLETED": return "border-[var(--success)] bg-[var(--success)] text-white";
      case "PROCESSING": return "border-[var(--processing)] bg-[var(--processing)] text-white shadow-[0_0_10px_rgba(59,130,246,0.3)]";
      case "WARNING": return "border-[var(--warning)] bg-[var(--warning)] text-white";
      case "ERROR": return "border-[var(--error)] bg-[var(--error)] text-white";
      case "WAITING":
      default: return "border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--muted)]";
    }
  };
  
  const getTextClass = (state: StageState) => {
    switch (state) {
      case "WAITING": return "text-[var(--muted)]";
      case "ERROR": return "text-[var(--error)]";
      default: return "text-[var(--foreground)]";
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-0 mt-8">
      {stages.map((stage, index) => (
        <React.Fragment key={stage.id}>
          {/* Stage Item */}
          <div className="flex-1 flex flex-col items-center text-center relative z-10">
            <motion.div 
              layout
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-500 z-10",
                getColorClass(stage.state)
              )}
            >
              {getIcon(stage.state)}
            </motion.div>
            <div className="mt-4">
              <div className="text-[10px] font-bold text-[var(--muted)] tracking-widest mb-1">
                {stage.number}
              </div>
              <div className={cn("text-xs font-semibold tracking-wide uppercase transition-colors duration-300", getTextClass(stage.state))}>
                {stage.title}
              </div>
              <div className="text-[10px] mt-1.5 uppercase font-medium tracking-wider text-[var(--muted-foreground)]">
                {stage.state}
              </div>
            </div>
          </div>

          {/* Connector Line */}
          {index < stages.length - 1 && (
            <div className="hidden md:block flex-1 relative h-[2px] -mt-12 bg-[var(--border)] mx-2 rounded-full overflow-hidden">
              {/* Animated progress fill based on next stage's state */}
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[var(--processing)]"
                initial={{ width: "0%" }}
                animate={{ 
                  width: stage.state === "COMPLETED" ? "100%" : 
                         stage.state === "PROCESSING" ? "50%" : "0%"
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
