import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Github, 
  ExternalLink, 
  Server, 
  Database, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  AlertTriangle, 
  Users, 
  Layers, 
  FileText,
  Lock,
  ArrowRight
} from 'lucide-react';
import { Badge, Button } from '../common';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="min-h-screen px-4 text-center flex items-center justify-center py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-full max-w-4xl bg-surface border border-border rounded-2xl p-6 sm:p-8 text-left shadow-2xl overflow-hidden my-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
            >
              {/* Header Close Button */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-border">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="primary" size="xs">
                      {project.badge}
                    </Badge>
                    <span className="text-xs font-mono text-text-muted">
                      {project.category}
                    </span>
                  </div>
                  <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                    {project.title}
                  </h2>
                  <div className="flex items-center space-x-2 text-xs font-mono text-primary mt-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>Role: {project.role}</span>
                    {project.team && (
                      <>
                        <span className="text-border">&bull;</span>
                        <span className="text-text-muted">{project.team}</span>
                      </>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-lg border border-border bg-surface-secondary text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors"
                  aria-label="Close case study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="py-6 space-y-8 max-h-[70vh] overflow-y-auto pr-2">
                
                {/* 1. Project Overview */}
                <section>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-2">
                    01 &bull; Project Overview
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </section>

                {/* 2. Problem & Solution Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase mb-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>The Engineering Problem</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-bold uppercase mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>The Architecture Solution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* 3. Specialized Multi-Step Banking Workflow (For Onboarding Flagship) */}
                {project.workflowSteps && (
                  <section className="p-5 rounded-xl bg-surface-secondary/50 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Layers className="w-4 h-4 text-primary" />
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary">
                          8-Stage Banking Onboarding Flow
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Fully Implemented
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                      {project.workflowSteps.map((step) => (
                        <div
                          key={step.step}
                          className="p-3 rounded-lg bg-surface border border-border/80 text-xs"
                        >
                          <span className="font-mono text-primary font-bold block mb-1 text-[11px]">
                            Step {step.step}
                          </span>
                          <span className="font-semibold text-text-primary block">
                            {step.name}
                          </span>
                          <span className="text-[11px] text-text-muted leading-tight mt-1 block">
                            {step.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 4. Concurrency Protection Mechanism (For Industrial ERP) */}
                {project.businessLifecycle && (
                  <section className="p-5 rounded-xl bg-surface-secondary/50 border border-border">
                    <div className="flex items-center space-x-2 mb-3">
                      <Lock className="w-4 h-4 text-primary" />
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary">
                        Supply Chain Concurrency & Lock Safeguards
                      </h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono">
                      {project.businessLifecycle.map((stage, idx) => (
                        <React.Fragment key={stage}>
                          <span className="px-2.5 py-1 rounded bg-surface border border-border text-text-primary">
                            {stage}
                          </span>
                          {idx < project.businessLifecycle.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-text-muted" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="text-xs text-text-secondary leading-relaxed space-y-1">
                      <p>
                        <strong>Pessimistic Concurrency Control:</strong> Employs PostgreSQL <code className="text-primary font-mono">SELECT FOR UPDATE</code> to acquire an exclusive row lock on targeted inventory stock before decrementing.
                      </p>
                      <p>
                        <strong>Database Constraint Defense:</strong> Backed by <code className="text-primary font-mono">CHECK (stock_quantity &gt;= 0)</code> constraints ensuring impossible overselling even in race conditions.
                      </p>
                    </div>
                  </section>
                )}

                {/* 5. System Architecture Breakdown */}
                <section>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-3">
                    03 &bull; System Architecture
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(project.architecture).map(([key, val]) => (
                      <div key={key} className="p-3.5 rounded-lg bg-surface-secondary/40 border border-border text-xs">
                        <span className="font-mono text-primary uppercase font-bold text-[10px] block mb-1">
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span className="text-text-secondary leading-relaxed">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 6. Core Features & Capabilities */}
                <section>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-3">
                    04 &bull; Core Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2 text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 7. Database, Security & Testing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3.5 rounded-xl bg-surface-secondary/40 border border-border text-xs">
                    <div className="flex items-center space-x-1.5 text-primary font-mono font-bold mb-2">
                      <Database className="w-4 h-4" />
                      <span>Database Design</span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {project.databaseDesign}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-secondary/40 border border-border text-xs">
                    <div className="flex items-center space-x-1.5 text-primary font-mono font-bold mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Security & Auth</span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {project.securityAspects}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-secondary/40 border border-border text-xs">
                    <div className="flex items-center space-x-1.5 text-primary font-mono font-bold mb-2">
                      <Cpu className="w-4 h-4" />
                      <span>Verification</span>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      Rigorous edge-case and boundary verification with automated assertions and schema constraints.
                    </p>
                  </div>
                </div>

                {/* 8. Technical Challenges & Solutions */}
                {project.technicalChallenges && project.technicalChallenges.length > 0 && (
                  <section>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-3">
                      05 &bull; Technical Challenges & Mitigations
                    </h3>
                    <div className="space-y-3">
                      {project.technicalChallenges.map((item, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-surface-secondary/30 border border-border text-xs space-y-1.5">
                          <div className="flex items-center space-x-2 text-rose-400 font-semibold">
                            <span className="font-mono text-[10px] uppercase">Challenge:</span>
                            <span>{item.challenge}</span>
                          </div>
                          <div className="flex items-start space-x-2 text-emerald-400 font-semibold pt-1">
                            <span className="font-mono text-[10px] uppercase mt-0.5">Solution:</span>
                            <span className="text-text-secondary font-normal leading-relaxed">{item.solution}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 9. Technology Stack Badges */}
                <section>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-2">
                    06 &bull; Verified Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-surface border border-border text-xs font-mono text-text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

              </div>

              {/* Modal Footer / External Actions */}
              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-semibold transition-all shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg border border-border bg-surface-secondary hover:bg-surface text-text-primary text-xs font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demonstration</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-border bg-surface text-text-secondary hover:text-text-primary text-xs font-mono transition-colors"
                >
                  Close Case Study
                </button>
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
