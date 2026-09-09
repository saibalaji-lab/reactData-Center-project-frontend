import React from "react";
import { cn } from "../../lib/utils";
import { EXECUTION_MODULES, ModuleDefinition } from "../../data/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ModuleNavigationProps {
  activeModuleId: string;
  onSelect: (moduleId: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function ModuleNavigation({ activeModuleId, onSelect, isCollapsed, onToggleCollapse }: ModuleNavigationProps) {
  // Group modules by category, excluding HIDDEN
  const groupedModules = EXECUTION_MODULES.reduce((acc, module) => {
    if (module.category === 'HIDDEN') return acc;
    if (!acc[module.category]) {
      acc[module.category] = [];
    }
    acc[module.category].push(module);
    return acc;
  }, {} as Record<string, ModuleDefinition[]>);

  // Ordered categories
  const categories = [
    'WORKFLOW',
    'AI INTELLIGENCE',
    'OPTIMIZATION',
    'EXECUTION',
    'RELIABILITY',
    'RESULTS',
    'SYSTEM'
  ];

  return (
    <div className="sticky top-24 h-[calc(100vh-120px)] flex">
      {/* Scrollable content container */}
      <nav className={cn(
        "flex flex-col gap-6 border-r border-[var(--border)] h-full scrollbar-hide overflow-y-auto relative transition-all duration-300 w-full",
        isCollapsed ? "px-2 items-center" : "pr-4"
      )}>
        {categories.map((category) => {
          const modules = groupedModules[category];
          if (!modules || modules.length === 0) return null;

          return (
            <div key={category} className="flex flex-col w-full">
              {!isCollapsed && (
                <h3 className="text-[10px] font-bold tracking-widest uppercase text-[var(--muted-foreground)] mb-3 pl-2 transition-opacity">
                  {category}
                </h3>
              )}
              {isCollapsed && (
                <div className="w-full flex justify-center mb-2 mt-4 first:mt-0">
                  <div className="w-4 h-px bg-[var(--border)]" />
                </div>
              )}
              <ul className={cn("flex flex-col", isCollapsed ? "space-y-2 items-center" : "space-y-0.5")}>
                {modules.map((module) => {
                  const isActive = module.id === activeModuleId;
                  return (
                    <li key={module.id} className={isCollapsed ? "w-full flex justify-center" : "w-full"}>
                      <button
                        onClick={() => onSelect(module.id)}
                        title={isCollapsed ? module.name : undefined}
                        className={cn(
                          "text-left rounded-lg flex items-center transition-colors duration-200",
                          isCollapsed 
                            ? "justify-center w-8 h-8 p-0" 
                            : "w-full px-3 py-2 items-start gap-3",
                          isActive 
                            ? "bg-[var(--accent)]/10 text-[var(--accent)]" 
                            : "text-[var(--muted)] hover:bg-[var(--surface-elevated)] hover:text-[var(--foreground)]"
                        )}
                      >
                        {isCollapsed ? (
                          <span className={cn(
                            "text-[10px] font-mono flex items-center justify-center w-full h-full",
                            isActive ? "text-[var(--accent)] font-bold" : "text-[var(--muted-foreground)]"
                          )}>
                            {module.number === 'SYS' ? 'S' : module.number}
                          </span>
                        ) : (
                          <>
                            {module.number !== 'SYS' && (
                              <span className={cn(
                                "text-[10px] font-mono mt-0.5 shrink-0",
                                isActive ? "text-[var(--accent)] font-bold" : "text-[var(--muted-foreground)]"
                              )}>
                                {module.number}
                              </span>
                            )}
                            <span className={cn(
                              "text-xs font-medium leading-relaxed",
                              isActive && "font-semibold"
                            )}>
                              {module.name}
                            </span>
                          </>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>

      {/* Collapse Control positioned exactly on the border */}
      <div className="relative w-0 h-full flex items-start -ml-[13px] pt-6 z-50">
        <button 
          onClick={onToggleCollapse}
          className="w-6 h-6 bg-[var(--surface)] border border-[var(--border)] rounded-full hidden lg:flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--muted-foreground)] transition-colors shadow-sm"
          title={isCollapsed ? "Expand navigation" : "Collapse navigation"}
        >
          {isCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
