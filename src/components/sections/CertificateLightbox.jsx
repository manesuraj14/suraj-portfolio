import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Award, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { Badge } from '../common';

export default function CertificateLightbox({ 
  certificate, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev,
  hasMultiple = true 
}) {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Reset zoom on certificate change
  useEffect(() => {
    setZoomLevel(1);
  }, [certificate]);

  // Lock body scroll
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

  // Handle keyboard events (ESC, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!certificate) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

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
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Lightbox Container */}
          <div className="min-h-screen px-4 py-6 flex flex-col items-center justify-center relative z-10">
            
            {/* Top Toolbar */}
            <div className="w-full max-w-4xl flex items-center justify-between pb-4 text-white">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                  Certificate Viewer
                </span>
                <span className="text-white/40">&bull;</span>
                <span className="text-xs font-mono text-white/80 truncate max-w-xs sm:max-w-md">
                  {certificate.name}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-surface-secondary/80 border border-border rounded-lg p-1 text-xs">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    className="p-1 hover:text-primary transition-colors"
                    title="Zoom out"
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="px-1 text-[11px] font-mono text-text-muted">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    className="p-1 hover:text-primary transition-colors"
                    title="Zoom in"
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="p-1 hover:text-primary transition-colors"
                    title="Reset zoom"
                    aria-label="Reset zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-lg bg-surface-secondary border border-border text-white hover:text-rose-400 hover:border-rose-400/40 transition-colors"
                  aria-label="Close viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Stage with Navigation Arrows */}
            <div className="w-full max-w-4xl relative flex items-center justify-center">
              {/* Prev Button */}
              {hasMultiple && onPrev && (
                <button
                  type="button"
                  onClick={onPrev}
                  className="absolute left-2 sm:-left-12 z-20 p-2.5 rounded-full bg-surface/80 border border-border text-text-primary hover:text-primary hover:border-primary/50 backdrop-blur-sm transition-all shadow-lg"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Certificate Display Area */}
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="w-full bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
              >
                {/* Render Certificate Image if available, or high-fidelity certificate document mockup */}
                {certificate.image ? (
                  <div className="overflow-auto max-h-[60vh] flex items-center justify-center">
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
                      className="max-h-[55vh] object-contain rounded-lg transition-transform duration-200"
                    />
                  </div>
                ) : (
                  <div 
                    style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
                    className="transition-transform duration-200 p-8 sm:p-10 rounded-xl bg-gradient-to-b from-surface-secondary to-surface border-2 border-primary/30 relative"
                  >
                    {/* Watermark Crest */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <Award className="w-32 h-32 text-primary" />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border/80">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block">
                            Official Verified Certificate
                          </span>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary">
                            {certificate.name}
                          </h3>
                        </div>
                      </div>

                      <Badge variant={certificate.highlight ? 'primary' : 'default'} size="sm">
                        {certificate.achievement}
                      </Badge>
                    </div>

                    <div className="py-6 space-y-4 text-xs sm:text-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                        <div className="p-3 rounded-lg bg-surface border border-border">
                          <span className="text-text-muted block text-[10px] uppercase">Issuing Authority</span>
                          <span className="font-bold text-text-primary text-xs mt-0.5 block">{certificate.issuer}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-surface border border-border">
                          <span className="text-text-muted block text-[10px] uppercase">Verified Score / Rank</span>
                          <span className="font-bold text-primary text-xs mt-0.5 block">{certificate.score}</span>
                        </div>
                        <div className="p-3 rounded-lg bg-surface border border-border">
                          <span className="text-text-muted block text-[10px] uppercase">Course Period</span>
                          <span className="font-bold text-text-primary text-xs mt-0.5 block">{certificate.date}</span>
                        </div>
                      </div>

                      <p className="text-text-secondary leading-relaxed pt-2">
                        {certificate.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block mb-2 font-semibold">
                          Curriculum Competencies Verified:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {certificate.skillsCovered.map((skill) => (
                            <span
                              key={skill}
                              className="px-2.5 py-1 rounded bg-surface border border-border text-[11px] font-mono text-text-primary"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Details Footer */}
                <div className="pt-4 mt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center space-x-2 text-emerald-400 font-mono">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Verified Academic / Industry Credential</span>
                  </div>

                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-semibold transition-colors"
                    >
                      <span>Verify Credential Online</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Next Button */}
              {hasMultiple && onNext && (
                <button
                  type="button"
                  onClick={onNext}
                  className="absolute right-2 sm:-right-12 z-20 p-2.5 rounded-full bg-surface/80 border border-border text-text-primary hover:text-primary hover:border-primary/50 backdrop-blur-sm transition-all shadow-lg"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
