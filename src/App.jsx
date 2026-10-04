import React from 'react';
import { Terminal, Shield, Database, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full bg-surface border border-border rounded-xl p-8 glow-subtle">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-text-primary">
              Suraj Shivaji Mane
            </h1>
            <p className="text-xs text-text-secondary font-mono">
              Java Full Stack Developer | Software Engineer
            </p>
          </div>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          Vite + React + Tailwind CSS + Framer Motion scaffolding initialized successfully.
        </p>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-surface-secondary border border-border rounded-lg p-3 flex flex-col items-center text-center">
            <Database className="w-5 h-5 text-primary mb-1.5" />
            <span className="text-xs font-mono font-medium text-text-primary">MySQL / JPA</span>
          </div>
          <div className="bg-surface-secondary border border-border rounded-lg p-3 flex flex-col items-center text-center">
            <Shield className="w-5 h-5 text-secondary mb-1.5" />
            <span className="text-xs font-mono font-medium text-text-primary">Spring Security</span>
          </div>
          <div className="bg-surface-secondary border border-border rounded-lg p-3 flex flex-col items-center text-center">
            <Cpu className="w-5 h-5 text-accent mb-1.5" />
            <span className="text-xs font-mono font-medium text-text-primary">REST APIs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
