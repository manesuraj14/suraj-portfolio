import React from 'react';
import { 
  Server, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Layers, 
  Code2, 
  CheckCircle2 
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Card } from '../common';

const pillarIcons = {
  backend: Server,
  api: Cpu,
  database: Database,
  security: ShieldCheck,
  fullstack: Layers,
  dsa: Code2,
};

export default function EngineeringFocus() {
  return (
    <div className="mt-12 sm:mt-16">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Engineering Focus Areas
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary mt-1">
            Core Specialization & Capabilities
          </h3>
        </div>
        <p className="text-xs font-mono text-text-muted">
          Grounding in full-cycle software delivery
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {personalInfo.engineeringPillars.map((pillar) => {
          const Icon = pillarIcons[pillar.id] || Server;
          return (
            <Card
              key={pillar.id}
              hoverEffect={true}
              className="flex flex-col justify-between group border-border/80 hover:border-primary/50 relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-secondary border border-border flex items-center justify-center text-primary group-hover:scale-105 group-hover:border-primary/40 transition-all mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                <h4 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                  {pillar.title}
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center space-x-1.5 text-[11px] font-mono text-text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Production Standard</span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
