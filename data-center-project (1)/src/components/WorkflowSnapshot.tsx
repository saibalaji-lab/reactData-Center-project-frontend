import React from "react";
import { FileCode, HardDrive } from "lucide-react";
import { UploadState } from "./WorkflowUploader";
import { cn } from "../lib/utils";

interface WorkflowSnapshotProps {
  file: File | null;
  state: UploadState;
}

export function WorkflowSnapshot({ file, state }: WorkflowSnapshotProps) {
  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  if (!file || state === "empty") {
    return (
      <div className="flex flex-col h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-sm overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
            Workflow Snapshot
          </h3>
          <div className="px-2 py-0.5 rounded text-[10px] font-medium border uppercase tracking-wide text-[var(--muted)] bg-[var(--surface)] border-[var(--border)]">
            No Workflow Loaded
          </div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col justify-center">
          <p className="text-xs text-[var(--muted)] mb-4 text-center">Upload an XML or DAX workflow to inspect its file information.</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium">FILE</span>
              <span className="text-[var(--muted)]">--</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium">TYPE</span>
              <span className="text-[var(--muted)]">--</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium">SIZE</span>
              <span className="text-[var(--muted)]">--</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium">STATUS</span>
              <span className="text-[var(--muted)]">--</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = () => {
    switch (state) {
      case "valid":
      case "ready":
        return "text-[var(--success)] bg-[var(--success)]/10 border-[var(--success)]/20";
      case "error":
        return "text-[var(--error)] bg-[var(--error)]/10 border-[var(--error)]/20";
      case "warning":
        return "text-[var(--warning)] bg-[var(--warning)]/10 border-[var(--warning)]/20";
      case "uploading":
      case "validating":
        return "text-[var(--processing)] bg-[var(--processing)]/10 border-[var(--processing)]/20";
      default:
        return "text-[var(--muted)] bg-[var(--surface)] border-[var(--border)]";
    }
  };

  const getStatusLabel = () => {
    switch (state) {
      case "valid": return "Valid Format";
      case "ready": return "Ready for Processing";
      case "error": return "Invalid File";
      case "warning": return "Warnings Found";
      case "uploading": return "Uploading...";
      case "validating": return "Validating Format...";
      default: return "Unknown State";
    }
  };

  return (
    <div className="flex flex-col h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-sm overflow-hidden">
      <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
          Workflow Snapshot
        </h3>
        <div className={cn("px-2 py-0.5 rounded text-[10px] font-medium border uppercase tracking-wide", getStatusColor())}>
          {getStatusLabel()}
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col justify-center">
        <div className="flex items-start gap-4">
          <div className="mt-1 p-2.5 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
            <FileCode className="w-6 h-6" />
          </div>
          <div className="overflow-hidden flex-1">
            <p className="text-sm font-medium text-[var(--foreground)] truncate" title={file.name}>
              {file.name}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                <span className="font-mono bg-[var(--surface-elevated)] px-1.5 py-0.5 rounded border border-[var(--border)]">
                  {file.name.split('.').pop()?.toUpperCase() || 'UNKNOWN'}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[var(--muted)]">
                <HardDrive className="w-3.5 h-3.5" />
                <span>{formatSize(file.size)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
