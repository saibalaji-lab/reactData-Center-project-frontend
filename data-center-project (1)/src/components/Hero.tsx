import React from "react";

export function Hero() {
  return (
    <div className="py-6 md:py-8 text-center space-y-3">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight">
        AI-Driven Carbon-Aware <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)]">
          Workflow Scheduling
        </span>
      </h1>
      <p className="text-sm md:text-base text-[var(--muted)] max-w-2xl mx-auto font-medium tracking-wide">
        Intelligent workflow preparation for sustainable cloud execution.
      </p>
    </div>
  );
}
