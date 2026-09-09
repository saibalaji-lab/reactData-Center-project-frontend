import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { X, CheckCircle, AlertTriangle, AlertCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

type ToastType = "success" | "warning" | "error" | "info";

interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (toast: Omit<ToastMessage, "id">) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((toast: Omit<ToastMessage, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              className={cn(
                "w-[350px] rounded-lg border p-4 shadow-lg backdrop-blur-sm flex items-start gap-3",
                toast.type === "success" && "border-[var(--success)]/30 bg-[var(--surface-elevated)] text-[var(--foreground)]",
                toast.type === "error" && "border-[var(--error)]/30 bg-[var(--surface-elevated)] text-[var(--foreground)]",
                toast.type === "warning" && "border-[var(--warning)]/30 bg-[var(--surface-elevated)] text-[var(--foreground)]",
                toast.type === "info" && "border-[var(--processing)]/30 bg-[var(--surface-elevated)] text-[var(--foreground)]"
              )}
            >
              <div className="mt-0.5">
                {toast.type === "success" && <CheckCircle className="h-5 w-5 text-[var(--success)]" />}
                {toast.type === "error" && <AlertCircle className="h-5 w-5 text-[var(--error)]" />}
                {toast.type === "warning" && <AlertTriangle className="h-5 w-5 text-[var(--warning)]" />}
                {toast.type === "info" && <Info className="h-5 w-5 text-[var(--processing)]" />}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold">{toast.title}</h4>
                <p className="mt-1 text-xs text-[var(--muted)]">{toast.message}</p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
