import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  Code, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { educationData } from '../../data/education';
import { SectionHeader, Card, Badge } from '../common';
import EngineeringFocus from './EngineeringFocus';
import SoftwareLifecycle from './SoftwareLifecycle';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-24 border-t border-border/60 relative"
      aria-label="About Me and Engineering Foundation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="About Me"
          title="Engineering Foundations & Philosophy"
          subtitle="A dedicated software engineer with deep roots in Java, algorithms, relational database normalization, and full-stack architecture."
          align="center"
        />

        {/* Narrative & Education Quick Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Bio (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            <p>
              I am an aspiring <strong className="text-text-primary font-semibold">Java Full Stack Developer & Backend Software Engineer</strong> who believes that great software is built on solid data structures, clear domain boundaries, and resilient database transactions.
            </p>

            <p>
              Throughout my academic and project engineering journey, I have prioritized learning from the ground up: starting with object-oriented fundamentals in <strong className="text-text-primary font-semibold">Core Java</strong>, understanding servlet lifecycles and manual JDBC transactions, and scaling up to modern <strong className="text-text-primary font-semibold">Spring Boot REST microservices</strong> and reactive <strong className="text-text-primary font-semibold">React.js</strong> architectures.
            </p>

            <p>
              Whether engineering an 8-stage state machine for a financial onboarding platform or safeguarding inventory dispatches with pessimistic database row-level locks, I value write-time correctness, schema normalization (3NF), and measurable test coverage.
            </p>

            {/* Quick Facts List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono">
              <div className="flex items-center space-x-2 text-text-primary">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Zero fabricated metrics</span>
              </div>
              <div className="flex items-center space-x-2 text-text-primary">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>NPTEL Elite Top 5% (Java)</span>
              </div>
              <div className="flex items-center space-x-2 text-text-primary">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>B.Tech CSE (8.5 CGPA)</span>
              </div>
              <div className="flex items-center space-x-2 text-text-primary">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Enterprise RBAC & Security</span>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Highlights Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="p-1 rounded-xl bg-surface border border-border shadow-sm">
              <div className="p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary">
                      Academic Pedigree
                    </span>
                  </div>
                  <Badge variant="primary" size="xs">
                    Verified
                  </Badge>
                </div>

                {educationData.map((edu) => (
                  <div key={edu.id} className="text-xs space-y-1 pb-3 last:pb-0 border-b border-border/40 last:border-0">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-text-primary">{edu.degree}</span>
                      <span className="font-mono text-primary font-semibold">{edu.score}</span>
                    </div>
                    <p className="text-text-muted">{edu.institution}, {edu.location}</p>
                    <span className="text-[10px] font-mono text-text-muted block">{edu.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Section 04: Engineering Focus Areas */}
        <EngineeringFocus />

        {/* Section 05: How I Build Software (10-Stage Lifecycle) */}
        <SoftwareLifecycle />

      </div>
    </section>
  );
}
