import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import ThemeToggle from './ThemeToggle';

export default function MobileMenu({ isOpen, onClose, navLinks, activeSection }) {
  // Prevent background scrolling when mobile menu is open
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

  const handleLinkClick = (href) => {
    onClose();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-surface border-l border-border z-50 flex flex-col p-6 shadow-2xl lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <div className="flex items-center space-x-2.5">
                <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary font-mono text-sm">
                  {personalInfo.monogram}
                </span>
                <div>
                  <span className="font-bold text-text-primary text-base">
                    {personalInfo.brandName}
                  </span>
                  <span className="block text-[10px] text-text-muted font-mono uppercase tracking-wider">
                    Software Engineer
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-lg border border-border bg-surface-secondary text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 py-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.href)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-primary' : 'text-text-muted'}`} />
                  </button>
                );
              })}
            </nav>

            {/* Actions & Socials */}
            <div className="pt-6 border-t border-border space-y-4">
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center justify-center space-x-3 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-surface-secondary text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-surface-secondary text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg border border-border bg-surface-secondary text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <p className="text-center text-[11px] text-text-muted font-mono pt-2">
                Pune, Maharashtra, India
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
