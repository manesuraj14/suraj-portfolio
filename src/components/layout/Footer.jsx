import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MapPin, Terminal, Heart } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { navLinks } from './Navbar';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border bg-surface/50 relative overflow-hidden transition-colors">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-border">
          {/* Identity & Bio */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2.5">
              <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary font-mono text-sm">
                {personalInfo.monogram}
              </span>
              <span className="font-bold text-base tracking-tight text-text-primary">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs font-mono text-primary font-medium">
              {personalInfo.primaryRole} | Software Engineer
            </p>

            <p className="text-sm text-text-secondary max-w-md leading-relaxed">
              Engineering secure, scalable backend services and responsive full-stack applications with Java, Spring Boot, React, and MySQL.
            </p>

            <div className="flex items-center space-x-2 text-xs text-text-muted pt-1">
              <MapPin className="w-3.5 h-3.5 text-text-muted" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary mb-3">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs text-text-secondary hover:text-primary transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-primary mb-3">
              Connect
            </h4>
            <div className="space-y-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-text-secondary hover:text-text-primary transition-colors group"
              >
                <Github className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                <span>GitHub ({personalInfo.githubUsername})</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-text-secondary hover:text-text-primary transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-xs text-text-secondary hover:text-text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                <span>{personalInfo.email}</span>
              </a>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div className="flex items-center space-x-1 font-mono text-[11px]">
            <span>&copy; {new Date().getFullYear()}</span>
            <span>Suraj Shivaji Mane. Crafted with</span>
            <span className="text-primary font-medium">React 18 & Tailwind</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-secondary text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
