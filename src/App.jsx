import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, Footer } from './components/layout';
import { personalInfo } from './data/personal';
import { Terminal, Shield, Database, Cpu, ArrowDown } from 'lucide-react';
import { Badge, Button } from './components/common';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text-primary flex flex-col font-sans transition-colors duration-200">
        {/* Navigation Bar */}
        <Navbar />

        {/* Temporary Scaffolding Container for Layout Verification */}
        <main className="flex-1 pt-24">
          <section id="hero" className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl w-full text-center space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>{personalInfo.availability.status}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-text-primary">
                {personalInfo.name}
              </h1>

              <p className="text-lg sm:text-xl font-mono text-primary font-medium">
                {personalInfo.primaryRole}
              </p>

              <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                "{personalInfo.headline}"
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button
                  as="a"
                  href="#projects"
                  variant="primary"
                  size="md"
                >
                  View My Projects
                </Button>
                <Button
                  as="a"
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                >
                  Download Resume
                </Button>
                <Button
                  as="a"
                  href="#contact"
                  variant="outline"
                  size="md"
                >
                  Contact Me
                </Button>
              </div>

              <div className="pt-10 flex items-center justify-center space-x-2 text-xs text-text-muted font-mono">
                <span>Layout & Navigation operational</span>
                <span>•</span>
                <span className="text-text-secondary">Ready for Hero Section (Subtask 4)</span>
              </div>
            </div>
          </section>

          {/* Placeholder anchor sections to verify scroll-spy */}
          {['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'resume', 'contact'].map((sec) => (
            <section
              key={sec}
              id={sec}
              className="py-16 px-4 border-t border-border/40 text-center opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Section: #{sec} (To be populated in upcoming subtask)
              </span>
            </section>
          ))}
        </main>

        {/* Global Enterprise Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
