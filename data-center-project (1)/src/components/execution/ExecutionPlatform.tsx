import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import { EXECUTION_MODULES } from "../../data/modules";
import { ExecutionPipeline } from "./ExecutionPipeline";
import { ModuleNavigation } from "./ModuleNavigation";
import { ModuleWorkspace } from "./ModuleWorkspace";

interface ExecutionPlatformProps {
  file: File | null;
  onReturnToPreparation: () => void;
}

export function ExecutionPlatform({ file, onReturnToPreparation }: ExecutionPlatformProps) {
  // Start with Clustering (01) as the active module/stage to show 'Ready'
  const [activeModuleId, setActiveModuleId] = useState('clustering');
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const activeModule = EXECUTION_MODULES.find(m => m.id === activeModuleId);

  const sequentialOrder = [
    'clustering', 'resources', 'renewable', 'weather', 'carbon',
    'scheduler', 'simulation', 'migration', 'power', 'failure', 'results'
  ];

  const currentIndex = sequentialOrder.indexOf(activeModuleId);

  const handleBack = () => {
    if (activeModuleId === 'clustering') {
      onReturnToPreparation();
    } else if (activeModuleId === 'system') {
      setActiveModuleId('results');
    } else if (currentIndex > 0) {
      setActiveModuleId(sequentialOrder[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < sequentialOrder.length - 1) {
      setActiveModuleId(sequentialOrder[currentIndex + 1]);
    }
  };

  const showNext = activeModuleId !== 'results' && activeModuleId !== 'system';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[1600px] mx-auto px-6 pb-16 flex flex-col gap-8"
    >
      {/* Official Project Headline */}
      <div className="text-center py-6 border-b border-[var(--border)]">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-[var(--foreground)] leading-snug">
          AI-Driven Carbon-Aware Dynamic Workflow Scheduling <br className="hidden md:block" />
          <span className="text-[var(--muted)] font-medium text-base md:text-lg lg:text-xl">
            with Intelligent Resource Optimization for Sustainable Green Cloud Data Centers
          </span>
        </h1>
      </div>

      {/* Live Execution Pipeline */}
      <div className="w-full">
        <ExecutionPipeline 
          activeStage={activeModule?.pipelineStage || 'NONE'} 
          onSelectStage={(stage) => {
            const firstModuleInStage = EXECUTION_MODULES.find(m => m.pipelineStage === stage);
            if (firstModuleInStage) {
              setActiveModuleId(firstModuleInStage.id);
            }
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-8 items-start relative">
        {/* Left Navigation */}
        <div className={cn(
          "shrink-0 transition-all duration-300 ease-in-out relative",
          isNavCollapsed ? "hidden lg:block lg:w-16" : "w-full lg:w-72"
        )}>
          <ModuleNavigation 
            activeModuleId={activeModuleId} 
            onSelect={setActiveModuleId} 
            isCollapsed={isNavCollapsed}
            onToggleCollapse={() => setIsNavCollapsed(!isNavCollapsed)}
          />
        </div>

        {/* Right Workspace */}
        <div className="flex-1 w-full min-w-0 transition-all duration-300 ease-in-out">
          <ModuleWorkspace 
            file={file}
            moduleId={activeModuleId} 
            onBack={handleBack}
            onNext={handleNext}
            showNext={showNext}
          />
        </div>
      </div>
    </motion.div>
  );
}
