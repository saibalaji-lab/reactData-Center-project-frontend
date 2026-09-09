import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ToastProvider, useToast } from "./contexts/ToastContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WorkflowUploader, UploadState } from "./components/WorkflowUploader";
import { WorkflowSnapshot } from "./components/WorkflowSnapshot";
import { PreparationPipeline, StageState } from "./components/PreparationPipeline";
import { ExecutionRoadmap } from "./components/ExecutionRoadmap";
import { ExecutionPlatform } from "./components/execution/ExecutionPlatform";
import { ArrowRight, Settings2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "./lib/utils";

function MainContent() {
  const { addToast } = useToast();
  
  const [file, setFile] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<UploadState>("empty");
  const [roadmapStep, setRoadmapStep] = useState(0);
  
  const [appState, setAppState] = useState<"preparation" | "execution">("preparation");

  const [pipelineStages, setPipelineStages] = useState<{ id: string; number: string; title: string; state: StageState }[]>([
    { id: "read", number: "01", title: "READ WORKFLOW", state: "WAITING" },
    { id: "extract", number: "02", title: "EXTRACT INFO", state: "WAITING" },
    { id: "preprocess", number: "03", title: "PREPROCESS", state: "WAITING" },
  ]);

  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = (selectedFile: File | null, state: UploadState, errorMsg?: string) => {
    setFile(selectedFile);
    setUploadState(state);
    
    if (state === "error" && errorMsg) {
      addToast({ type: "error", title: "WORKFLOW UPLOAD FAILED", message: errorMsg });
    } else if (state === "warning" && errorMsg) {
      addToast({ type: "warning", title: "WORKFLOW VALIDATION WARNING", message: errorMsg });
    } else if (state === "valid") {
      addToast({ type: "success", title: "FRONTEND VALIDATION SUCCESS", message: "File structure verified. Ready for checking." });
      setRoadmapStep(0); // Uploaded
      resetPipeline();
    }
  };

  const resetPipeline = () => {
    setPipelineStages(stages => stages.map(s => ({ ...s, state: "WAITING" })));
  };

  const handleCheckWorkflow = () => {
    if (!file || uploadState !== "valid") return;
    
    setIsProcessing(true);
    setUploadState("ready");
    addToast({ type: "info", title: "PREPARING WORKFLOW", message: "Initiating workflow check sequence..." });
    
    // Simulate the connected pipeline stages realistically
    
    // 1. READ
    setTimeout(() => {
      setPipelineStages(prev => prev.map(s => s.id === "read" ? { ...s, state: "PROCESSING" } : s));
      setRoadmapStep(1);
    }, 500);

    // 2. READ COMPLETED -> EXTRACT
    setTimeout(() => {
      setPipelineStages(prev => prev.map(s => {
        if (s.id === "read") return { ...s, state: "COMPLETED" };
        if (s.id === "extract") return { ...s, state: "PROCESSING" };
        return s;
      }));
      setRoadmapStep(2);
    }, 2000);

    // 3. EXTRACT COMPLETED -> PREPROCESS
    setTimeout(() => {
      setPipelineStages(prev => prev.map(s => {
        if (s.id === "extract") return { ...s, state: "COMPLETED" };
        if (s.id === "preprocess") return { ...s, state: "PROCESSING" };
        return s;
      }));
      setRoadmapStep(3);
    }, 3500);

    // 4. PREPROCESS COMPLETED -> CHECK WORKFLOW
    setTimeout(() => {
      setPipelineStages(prev => prev.map(s => {
        if (s.id === "preprocess") return { ...s, state: "COMPLETED" };
        return s;
      }));
      setRoadmapStep(4);
      setIsProcessing(false);
      addToast({ type: "success", title: "WORKFLOW READY", message: "All frontend checks passed. Ready for execution pipeline." });
      
      // Trigger transition to "Page 2"
      setTimeout(() => {
        setAppState("execution");
      }, 1500);
    }, 5000);
  };

  const handleReturnToPreparation = () => {
    setAppState("preparation");
    setFile(null);
    setUploadState("empty");
    setRoadmapStep(0);
    resetPipeline();
    setIsProcessing(false);
  };

  if (appState === "execution") {
    return <ExecutionPlatform file={file} onReturnToPreparation={handleReturnToPreparation} />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto px-6 pb-16"
    >
      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="lg:col-span-2">
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] shadow-sm p-1">
            <div className="px-5 py-4 border-b border-[var(--border)] flex items-center justify-between">
              <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--foreground)]">
                Workflow Intake
              </h2>
            </div>
            <div className="p-4">
              <WorkflowUploader 
                onFileSelect={handleFileSelect}
                currentState={uploadState}
              />
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <WorkflowSnapshot file={file} state={uploadState} />
        </div>
      </div>

      <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] shadow-sm p-6 mb-12">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--foreground)] mb-6 text-center">
          Preparation Pipeline
        </h2>
        
        <PreparationPipeline stages={pipelineStages} />

        <div className="mt-12 flex justify-center">
          <button
            onClick={handleCheckWorkflow}
            disabled={uploadState !== "valid" || isProcessing}
            className={cn(
              "group relative flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold tracking-wide uppercase transition-all duration-300 overflow-hidden",
              uploadState === "valid" && !isProcessing
                ? "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                : "bg-[var(--surface-elevated)] text-[var(--muted)] border border-[var(--border)] cursor-not-allowed",
              isProcessing && "bg-[var(--processing)]/10 text-[var(--processing)] border border-[var(--processing)]/30"
            )}
          >
            {isProcessing && (
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></span>
            )}
            <span className="relative z-10 flex items-center gap-2">
              {isProcessing ? "PROCESSING..." : "CHECK WORKFLOW"}
              {!isProcessing && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </span>
          </button>
        </div>
      </div>

      <ExecutionRoadmap currentStep={roadmapStep} />
    </motion.div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)]/20 font-sans">
          <Header />
          <main className="pt-8">
            <AnimatePresence mode="wait">
              <MainContent />
            </AnimatePresence>
          </main>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}
