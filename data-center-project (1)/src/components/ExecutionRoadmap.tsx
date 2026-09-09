import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

interface ExecutionRoadmapProps {
  currentStep: number;
}

export function ExecutionRoadmap({ currentStep }: ExecutionRoadmapProps) {
  const steps = [
    "Upload",
    "Read",
    "Extract",
    "Preprocess",
    "Check Workflow"
  ];

  return (
    <div className="flex flex-col items-center py-6">
      <span className="text-[10px] font-bold tracking-widest text-[var(--muted)] uppercase mb-4">Workflow Progress</span>
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider">
        {steps.map((step, index) => {
          const isPast = index < currentStep;
          const isCurrent = index === currentStep;
          const isFuture = index > currentStep;

          return (
            <React.Fragment key={step}>
              <div
                className={cn(
                  "transition-colors duration-300 px-3 py-1.5 rounded-md",
                  isPast && "text-[var(--success)] bg-[var(--success)]/10",
                  isCurrent && "text-[var(--accent)] bg-[var(--accent)]/10 ring-1 ring-[var(--accent)]/30",
                  isFuture && "text-[var(--muted)]"
                )}
              >
                {step}
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-[var(--border)]" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
