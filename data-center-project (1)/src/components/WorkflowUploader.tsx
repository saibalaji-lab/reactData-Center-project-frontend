import React, { useCallback, useRef, useState } from "react";
import { UploadCloud, FileType, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "../lib/utils";

export type UploadState = "empty" | "uploading" | "validating" | "valid" | "warning" | "error" | "ready";

interface WorkflowUploaderProps {
  onFileSelect: (file: File | null, state: UploadState, errorMsg?: string) => void;
  currentState: UploadState;
}

export function WorkflowUploader({ onFileSelect, currentState }: WorkflowUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const validateFile = (file: File) => {
    // Basic frontend validation
    if (!file) return;

    onFileSelect(file, "validating");
    
    // Simulate short processing for realism and to show the state
    setTimeout(() => {
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!ext || (ext !== "xml" && ext !== "dax")) {
        onFileSelect(file, "error", "Unsupported file format. Please upload a valid XML or DAX workflow file.");
        return;
      }
      
      if (file.size === 0) {
        onFileSelect(file, "error", "File is empty.");
        return;
      }
      
      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        onFileSelect(file, "warning", "File is very large. Processing may be slow.");
        return;
      }
      
      onFileSelect(file, "valid");
    }, 600);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateFile(e.target.files[0]);
    }
  };

  const triggerSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center w-full min-h-[280px] p-8 border-2 border-dashed rounded-xl transition-all duration-200 cursor-pointer group",
        isDragging 
          ? "border-[var(--accent)] bg-[var(--accent)]/5" 
          : "border-[var(--border)] bg-[var(--surface-elevated)] hover:border-[var(--accent)]/50",
        currentState === "error" && "border-[var(--error)] bg-[var(--error)]/5 hover:border-[var(--error)]",
        currentState === "warning" && "border-[var(--warning)] bg-[var(--warning)]/5 hover:border-[var(--warning)]",
        (currentState === "valid" || currentState === "ready") && "border-[var(--success)]/50 bg-[var(--success)]/5 hover:border-[var(--success)]"
      )}
      onClick={triggerSelect}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".xml,.dax"
        className="hidden"
      />

      <div className="flex flex-col items-center text-center space-y-4 pointer-events-none">
        <div className={cn(
          "p-4 rounded-full transition-colors duration-300",
          isDragging ? "bg-[var(--accent)]/10 text-[var(--accent)]" : "bg-[var(--surface)] text-[var(--muted)] shadow-sm group-hover:text-[var(--accent)]",
          currentState === "error" && "text-[var(--error)]",
          (currentState === "valid" || currentState === "ready") && "text-[var(--success)]"
        )}>
          {(currentState === "valid" || currentState === "ready") ? (
            <CheckCircle2 className="w-8 h-8" />
          ) : currentState === "error" ? (
            <AlertCircle className="w-8 h-8" />
          ) : (
            <UploadCloud className="w-8 h-8" />
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)] tracking-tight">
            DROP WORKFLOW TO BEGIN
          </h3>
          <p className="text-sm text-[var(--muted)] mt-1">
            XML or DAX workflow <span className="mx-2 opacity-50">|</span> Browse Files
          </p>
        </div>

        <div className="flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-medium text-[var(--muted)] shadow-sm">
          <FileType className="w-3.5 h-3.5" />
          <span>WorkflowSim compatible</span>
        </div>
      </div>
    </div>
  );
}
