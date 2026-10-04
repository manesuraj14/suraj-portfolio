import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { SectionHeader, Card, Badge, Button } from '../common';

export default function ResumeSection() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section 
      id="resume" 
      className="py-16 sm:py-24 border-t border-border/60 relative"
      aria-label="Professional Resume"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Curriculum Vitae"
          title="Professional Resume & Qualifications"
          subtitle="Comprehensive summary of technical competencies, academic excellence, and software engineering capabilities."
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Resume Card */}
          <Card className="border-border/80 hover:border-primary/50 relative overflow-hidden p-6 sm:p-10 shadow-xl">
            {/* Top Accent Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border/80">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="primary" size="xs">
                    Software Engineer
                  </Badge>
                  <span className="text-xs font-mono text-emerald-400">
                    &bull; Actively Available
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                  {personalInfo.name}
                </h3>

                <p className="text-sm font-mono text-primary font-semibold mt-1">
                  {personalInfo.primaryRole} &bull; Pune, India
                </p>
              </div>

              {/* Action Buttons: Download & View */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={personalInfo.resumePath}
                  download="Suraj_Shivaji_Mane_Resume.pdf"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>

                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-border bg-surface-secondary hover:bg-surface text-text-primary text-xs font-semibold transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>View PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Resume Content Body Preview */}
            <div className="py-8 space-y-6">
              
              {/* Professional Summary */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-2">
                  Professional Summary
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed bg-surface-secondary/40 border border-border/60 rounded-xl p-4">
                  "{personalInfo.summary}"
                </p>
              </div>

              {/* Key Qualification Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                
                <div className="p-4 rounded-xl bg-surface-secondary/50 border border-border space-y-1.5">
                  <div className="flex items-center space-x-2 text-primary font-bold">
                    <Code2 className="w-4 h-4" />
                    <span>Core Focus</span>
                  </div>
                  <span className="text-text-primary font-bold block text-sm">Java & Spring Boot</span>
                  <p className="text-text-muted text-[11px] leading-relaxed">
                    REST APIs, Spring Data JPA, MySQL, Microservices fundamentals
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-secondary/50 border border-border space-y-1.5">
                  <div className="flex items-center space-x-2 text-primary font-bold">
                    <GraduationCap className="w-4 h-4" />
                    <span>Academic Distinction</span>
                  </div>
                  <span className="text-text-primary font-bold block text-sm">8.5 / 10 CGPA</span>
                  <p className="text-text-muted text-[11px] leading-relaxed">
                    B.Tech CSE &bull; JSPM University Pune (2023–2026)
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-secondary/50 border border-border space-y-1.5">
                  <div className="flex items-center space-x-2 text-primary font-bold">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>National Honor</span>
                  </div>
                  <span className="text-text-primary font-bold block text-sm">Top 5% Nationwide</span>
                  <p className="text-text-muted text-[11px] leading-relaxed">
                    NPTEL Elite Certification in Java Programming (IIT Kharagpur)
                  </p>
                </div>

              </div>

              {/* Core Competencies Quick Summary */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-2">
                  Verified Technical Competencies
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {[
                    "Core Java (8/11/17)",
                    "Spring Boot",
                    "Spring Data JPA",
                    "MySQL / PostgreSQL",
                    "RESTful APIs",
                    "React.js",
                    "Tailwind CSS",
                    "Spring Security & JWT",
                    "Database Normalization (3NF)",
                    "ACID Transactions & Row Locking",
                    "JUnit Testing",
                    "Git & GitHub"
                  ].map((item) => (
                    <span 
                      key={item}
                      className="px-2.5 py-1 rounded-lg bg-surface-secondary border border-border text-text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Verification Note */}
            <div className="pt-4 border-t border-border/80 flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted font-mono">
              <span className="flex items-center space-x-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Resume Document &bull; Zero Fabricated Credentials</span>
              </span>
              <span>Available in PDF Format</span>
            </div>

          </Card>
        </div>

      </div>
    </section>
  );
}
