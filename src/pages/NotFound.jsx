import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Terminal, FolderGit2 } from 'lucide-react';
import { Button } from '../components/common';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full bg-surface border border-border rounded-2xl p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
        {/* Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-amber-500 to-primary" />

        <div className="w-14 h-14 rounded-2xl bg-surface-secondary border border-border flex items-center justify-center text-primary mx-auto mb-4">
          <Terminal className="w-7 h-7" />
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded border border-rose-500/20">
          HTTP 404 &bull; Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-4">
          Route Undefined
        </h1>

        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-3 mb-8">
          The requested resource does not exist on this portfolio or has been moved to another endpoint.
        </p>

        {/* Buttons: Back Home & View Projects */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            as={Link}
            to="/"
            variant="primary"
            size="md"
            icon={Home}
            className="w-full sm:w-auto"
          >
            Back Home
          </Button>

          <Button
            as="a"
            href="/#projects"
            variant="secondary"
            size="md"
            icon={FolderGit2}
            className="w-full sm:w-auto"
          >
            View Projects
          </Button>
        </div>

        <p className="mt-8 text-[11px] font-mono text-text-muted">
          surajmane.tech &bull; Software Engineering Portfolio
        </p>
      </div>
    </div>
  );
}
