import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(time);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 md:px-12 mx-auto max-w-7xl">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-[var(--foreground)]">
              GREEN<span className="text-[var(--accent)]">Cloud</span>
            </span>
          </div>
          <span className="text-[10px] md:text-xs font-medium tracking-wide text-[var(--muted)] uppercase hidden sm:block">
            AI-Driven Carbon-Aware Workflow Scheduling
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]"></span>
            </div>
            <span className="text-xs font-medium text-[var(--muted)] tracking-wider">
              FRONTEND READY
            </span>
          </div>

          <div className="hidden sm:block text-sm font-mono text-[var(--foreground)]">
            {formattedDate}
          </div>

          <div className="flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] p-1">
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "p-1.5 rounded-full transition-colors",
                theme === "light"
                  ? "bg-[var(--surface)] shadow-sm text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              )}
              title="Light theme"
            >
              <Sun className="h-4 w-4" />
            </button>
            <button
              onClick={() => setTheme("system")}
              className={cn(
                "p-1.5 rounded-full transition-colors",
                theme === "system"
                  ? "bg-[var(--surface)] shadow-sm text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              )}
              title="System theme"
            >
              <Monitor className="h-4 w-4" />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                "p-1.5 rounded-full transition-colors",
                theme === "dark"
                  ? "bg-[var(--surface)] shadow-sm text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              )}
              title="Dark theme"
            >
              <Moon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
