import React, { useState } from 'react';
import { engineeringLifecycle } from '../../data/lifecycle';
import { 
  HelpCircle, 
  Network, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Layout, 
  CheckCircle2, 
  Terminal, 
  Rocket, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Card, Badge } from '../common';

const lifecycleIcons = {
  HelpCircle,
  Network,
  Database,
  Cpu,
  ShieldCheck,
  Layout,
  CheckCircle2,
  Terminal,
  Rocket,
  TrendingUp
};

export default function SoftwareLifecycle() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="mt-16 sm:mt-24 pt-12 border-t border-border/70">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Badge variant="primary" size="sm">
          Engineering Methodology
        </Badge>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary mt-2">
          How I Build Software
        </h3>
        <p className="text-xs sm:text-sm text-text-secondary mt-2">
          A systematic 10-stage engineering lifecycle designed for stability, security, and maintainability.
        </p>
      </div>

      {/* Grid of 10 Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {engineeringLifecycle.map((stage) => {
          const Icon = lifecycleIcons[stage.icon] || HelpCircle;
          const isSelected = activeStep === stage.step;

          return (
            <div
              key={stage.step}
              onClick={() => setActiveStep(stage.step)}
              className={`cursor-pointer rounded-xl p-4 border transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-surface border-primary shadow-lg ring-1 ring-primary/40 -translate-y-1'
                  : 'bg-surface/60 border-border/80 hover:bg-surface hover:border-primary/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-primary text-white' : 'bg-surface-secondary text-text-muted'
                  }`}>
                    {String(stage.step).padStart(2, '0')}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-primary' : 'text-text-muted'}`} />
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-text-primary mb-1">
                  {stage.title}
                </h4>

                <p className="text-[11px] sm:text-xs text-text-secondary line-clamp-3 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-border/50 text-[10px] font-mono text-text-muted flex items-center justify-between">
                <span>Deliverable:</span>
                <span className="text-primary truncate max-w-[110px]" title={stage.deliverables}>
                  {stage.shortTitle}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Step Deep-Dive Card */}
      {(() => {
        const current = engineeringLifecycle.find((s) => s.step === activeStep) || engineeringLifecycle[0];
        const CurrentIcon = lifecycleIcons[current.icon] || HelpCircle;

        return (
          <div className="mt-6 p-5 sm:p-6 rounded-xl bg-surface border border-primary/30 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-primary">
                      Phase {String(current.step).padStart(2, '0')}
                    </span>
                    <span className="text-text-muted">&bull;</span>
                    <span className="text-xs font-mono text-text-muted">{current.shortTitle}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-text-primary">
                    {current.title}
                  </h4>
                </div>
              </div>

              <div className="sm:text-right">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                  Core Deliverables
                </span>
                <span className="text-xs font-mono text-emerald-400 font-medium">
                  {current.deliverables}
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border/60 pt-3">
              {current.description}
            </p>
          </div>
        );
      })()}
    </div>
  );
}
