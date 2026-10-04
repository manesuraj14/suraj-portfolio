import React from 'react';
import { heroTechStack } from '../../data/skills';
import { 
  Code2, 
  Server, 
  Layers, 
  Database, 
  Cpu, 
  ShieldCheck, 
  KeyRound, 
  GitBranch 
} from 'lucide-react';

const techIcons = {
  'Java 17': Code2,
  'Spring Boot': Server,
  'React.js': Layers,
  'MySQL': Database,
  'REST APIs': Cpu,
  'Spring Security': ShieldCheck,
  'JWT': KeyRound,
  'Git & GitHub': GitBranch,
};

export default function HeroTechStack() {
  return (
    <div className="w-full pt-8 pb-4">
      <div className="text-center sm:text-left mb-3">
        <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted font-semibold">
          Core Technology Stack &bull; Immediate Technical Direction
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
        {heroTechStack.map((tech) => {
          const Icon = techIcons[tech.name] || Code2;
          return (
            <div
              key={tech.name}
              className="group flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-surface border border-border hover:border-primary/50 hover:bg-surface-secondary transition-all duration-200 shadow-sm"
            >
              <div className="w-4 h-4 rounded text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-mono font-medium text-text-primary">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-text-muted px-1.5 py-0.5 rounded bg-surface-secondary border border-border/60">
                {tech.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
