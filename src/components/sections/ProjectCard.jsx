import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Users,
  Terminal,
  Cpu
} from 'lucide-react';
import { Card, Badge, Button } from '../common';

export default function ProjectCard({ project, onOpenCaseStudy, featured = false }) {
  return (
    <Card 
      hoverEffect={true}
      className={`flex flex-col justify-between h-full border-border/80 hover:border-primary/50 relative overflow-hidden transition-all duration-300 ${
        featured ? 'bg-surface/90 shadow-md ring-1 ring-border' : 'bg-surface/60'
      }`}
    >
      {/* Top Accent Gradient Bar for Featured Projects */}
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      )}

      <div>
        {/* Header: Badge & Role */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <Badge 
            variant={featured ? 'primary' : 'default'} 
            size="xs"
            className="font-bold"
          >
            {project.badge}
          </Badge>

          <span className="text-[11px] font-mono text-text-muted flex items-center space-x-1">
            <Users className="w-3 h-3 text-primary" />
            <span>{project.role}</span>
          </span>
        </div>

        {/* Project Title & Category */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <span className="text-xs font-mono text-primary font-medium block mt-1">
          {project.category}
        </span>

        {/* Summary Description */}
        <p className="mt-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
          {project.summary}
        </p>

        {/* Problem & Solution Callout (For Featured Tier 1) */}
        {featured && (
          <div className="mt-4 p-3 rounded-lg bg-surface-secondary/70 border border-border/60 space-y-2 text-xs">
            <div>
              <span className="font-mono font-bold text-amber-400 text-[10px] uppercase tracking-wider block">
                Problem:
              </span>
              <p className="text-text-secondary line-clamp-2 mt-0.5">
                {project.problem}
              </p>
            </div>
            <div>
              <span className="font-mono font-bold text-emerald-400 text-[10px] uppercase tracking-wider block">
                Engineering Solution:
              </span>
              <p className="text-text-secondary line-clamp-2 mt-0.5">
                {project.solution}
              </p>
            </div>
          </div>
        )}

        {/* Workflow or Concurrency Tag (if available) */}
        {project.businessLifecycle && (
          <div className="mt-3 py-1.5 px-2.5 rounded bg-surface-secondary/50 border border-border/50 text-[10px] font-mono text-text-muted">
            <span className="text-primary font-semibold">Workflow: </span>
            {project.businessLifecycle.join(' → ')}
          </div>
        )}

        {/* Technologies Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, featured ? 7 : 5).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-secondary border border-border/70 text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (featured ? 7 : 5) && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 text-text-muted">
              +{project.technologies.length - (featured ? 7 : 5)} more
            </span>
          )}
        </div>
      </div>

      {/* Card Actions: GitHub Link & Case Study Trigger */}
      <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-primary hover:text-primary-hover hover:underline transition-all group"
        >
          <span>View Architecture & Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-border bg-surface-secondary hover:bg-surface text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors"
            title="View Source Code on GitHub"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </Card>
  );
}
