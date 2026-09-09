import React from 'react';
import { Database, FileCode, Network, BarChart2 } from 'lucide-react';

interface ClusteringModuleProps {
  file: File | null;
}

export function ClusteringModule({ file }: ClusteringModuleProps) {
  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="flex flex-col space-y-10">
      {/* SECTION 1 & 2: Workflow Input & Information */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* SECTION 1: Workflow Input */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
              <FileCode className="w-4 h-4 text-[var(--accent)]" />
              Workflow Input
            </h3>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-center">
            {file ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium text-xs">WORKFLOW FILE</span>
                  <span className="text-[var(--foreground)] font-medium truncate max-w-[200px]" title={file.name}>{file.name}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium text-xs">FILE TYPE</span>
                  <span className="text-[var(--foreground)] font-mono text-xs px-2 py-0.5 bg-[var(--surface)] border border-[var(--border)] rounded">
                    {file.name.split('.').pop()?.toUpperCase() || 'UNKNOWN'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium text-xs">FILE SIZE</span>
                  <span className="text-[var(--foreground)]">{formatSize(file.size)}</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-2 border-t border-[var(--border)]/50">
                  <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium text-xs">STATUS</span>
                  <span className="text-[var(--processing)] font-semibold text-xs tracking-wide">WORKFLOW FILE AVAILABLE</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="text-[10px] font-bold text-[var(--muted)] uppercase tracking-widest mb-2">NO WORKFLOW DATA AVAILABLE</div>
                <div className="text-xs text-[var(--muted-foreground)]">Upload and validate a workflow from Page 1 to continue.</div>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 2: Workflow Information */}
        <div className="flex flex-col bg-[var(--surface-elevated)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3 flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] flex items-center gap-2">
              <Database className="w-4 h-4 text-[var(--muted)]" />
              Workflow Information
            </h3>
          </div>
          <div className="p-5 flex-1 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium text-xs">WORKFLOW NAME</span>
                <span className="text-[var(--muted)]">—</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium text-xs">WORKFLOW TYPE</span>
                <span className="text-[var(--muted)]">NOT AVAILABLE</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium text-xs">TASK INFORMATION</span>
                <span className="text-[var(--muted)]">—</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium text-xs">DEPENDENCY INFORMATION</span>
                <span className="text-[var(--muted)]">—</span>
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-[var(--border)]/50">
                <span className="text-[var(--muted-foreground)] uppercase tracking-wide font-medium text-xs">WORKFLOW STRUCTURE</span>
                <span className="text-[var(--muted)] text-xs font-semibold tracking-wide">{file ? 'WAITING FOR WORKFLOW PARSER' : 'NOT AVAILABLE'}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SECTION 3: Preprocessed Workflow Data */}
      <div className="bg-[var(--surface-elevated)]/30 border border-[var(--border)] border-dashed rounded-xl p-8 text-center flex flex-col items-center justify-center">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] mb-3">Preprocessed Workflow Data</h3>
        <p className="text-[10px] text-[var(--muted-foreground)] uppercase tracking-widest bg-[var(--surface)] px-4 py-1.5 rounded-full border border-[var(--border)]">
          {file ? 'WAITING FOR PREPROCESSED WORKFLOW DATA' : 'NO WORKFLOW DATA AVAILABLE'}
        </p>
      </div>

      {/* SECTION 4, 5, 6, 8, 9: K-Means Clustering Area */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden flex flex-col">
        {/* SECTION 4 & 8: Header & Processing State */}
        <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                K-MEANS WORKFLOW TASK CLUSTERING
              </h2>
              <p className="text-sm text-[var(--muted)] mt-1 max-w-2xl">
                Workflow tasks will be dynamically grouped using K-Means based on the processed workflow characteristics.
              </p>
            </div>
            <div className="px-3 py-1 rounded bg-[var(--processing)]/10 text-[var(--processing)] border border-[var(--processing)]/20 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap self-start">
              WAITING FOR BACKEND PROCESSING
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8 flex-1">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* SECTION 5: Cluster Visualization Container */}
            <div className="lg:col-span-2 flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[320px] bg-[var(--surface-elevated)]/50">
              <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">Cluster Visualization</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <Network className="w-8 h-8 text-[var(--border)] mb-4" />
                <span className="text-sm font-semibold tracking-wide text-[var(--muted)]">NO CLUSTERING DATA AVAILABLE</span>
                <span className="text-[10px] mt-2 px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
                  WAITING FOR K-MEANS RESULTS
                </span>
              </div>
            </div>

            {/* SECTION 6: Cluster Results */}
            <div className="flex flex-col border border-[var(--border)] rounded-xl overflow-hidden min-h-[320px] bg-[var(--surface-elevated)]/50">
              <div className="border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">Cluster Results</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <BarChart2 className="w-8 h-8 text-[var(--border)] mb-4" />
                <span className="text-sm font-semibold tracking-wide text-[var(--muted)]">NO CLUSTER RESULTS AVAILABLE</span>
                <span className="text-[10px] mt-2 px-3 py-1 bg-[var(--surface)] border border-[var(--border)] rounded uppercase tracking-widest text-[var(--muted-foreground)]">
                  WAITING FOR K-MEANS RESULTS
                </span>
              </div>
            </div>
          </div>

          {/* SECTION 9: Clustering Action Area */}
          <div className="flex flex-col items-center justify-center pt-8 border-t border-[var(--border)]">
            <button 
              disabled
              className="px-8 py-3 rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--muted)] font-semibold tracking-wide cursor-not-allowed transition-all"
            >
              RUN CLUSTERING →
            </button>
            <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] mt-3">
              Backend processing is not connected
            </span>
          </div>

        </div>
      </div>

      {/* SECTION 7: Workflow Task Table */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Workflow Task Table</h3>
        </div>
        
        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-24">Task ID</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Task Type</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Dependencies</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)]">Task Characteristics</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--muted-foreground)] w-24">Cluster</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center text-[var(--muted)] bg-[var(--surface-elevated)]/20">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold tracking-wide mb-2 text-[var(--muted)]">NO TASK DATA AVAILABLE</span>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] bg-[var(--surface)] px-3 py-1 rounded border border-[var(--border)]">
                      Waiting for backend results
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
