import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  GitFork, 
  Star, 
  FolderGit2, 
  Code2, 
  Terminal,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { SectionHeader, Card, Badge, Button } from '../common';

const curatedRepositories = [
  {
    name: "digital-customer-onboarding-frontend",
    description: "Production-grade multi-domain customer onboarding platform supporting Banking, Healthcare, and E-commerce with 8-stage KYC workflows.",
    primaryLanguage: "React / JavaScript",
    languageColor: "#F7DF1E",
    tags: ["React 19", "Vite", "Tailwind CSS", "JWT", "Context API"],
    url: "https://github.com/manesuraj14/digital-customer-onboarding-frontend",
    stars: 0,
    forks: 0,
    isFeatured: true
  },
  {
    name: "Store-Rating-Platform",
    description: "Full-stack store evaluation application powered by a 3-tier Role-Based Access Control architecture (Normal Users, Store Owners, Admins).",
    primaryLanguage: "JavaScript / SQL",
    languageColor: "#3178C6",
    tags: ["React.js", "REST APIs", "MySQL", "RBAC", "JWT"],
    url: "https://github.com/manesuraj14/Store-Rating-Platform",
    stars: 0,
    forks: 0,
    isFeatured: true
  },
  {
    name: "mini-erp-crm",
    description: "Wholesale & Distribution Operations Management System integrating Sales, Warehouse, Accounts, and Admin departments.",
    primaryLanguage: "TypeScript",
    languageColor: "#3178C6",
    tags: ["React 19", "Node.js 22", "Express 5", "Prisma", "Zod"],
    url: "https://github.com/manesuraj14/mini-erp-crm",
    stars: 0,
    forks: 0,
    isFeatured: true
  },
  {
    name: "industrial-erp",
    description: "Supply chain ERP system enforcing PostgreSQL row-level locks (SELECT FOR UPDATE) to eliminate inventory race conditions during dispatch.",
    primaryLanguage: "TypeScript / SQL",
    languageColor: "#336791",
    tags: ["PostgreSQL", "Express", "Docker", "Jest", "ACID Locks"],
    url: "https://github.com/manesuraj14/industrial-erp",
    stars: 0,
    forks: 0,
    isFeatured: false
  },
  {
    name: "AI-Support-Agent",
    description: "Multi-tiered customer support system featuring RAG grounding, a 3-tier escalation engine, and automated evaluation against a golden dataset.",
    primaryLanguage: "Python / Node.js",
    languageColor: "#3572A5",
    tags: ["Python", "RAG Grounding", "Evaluation Suite", "React UI"],
    url: "https://github.com/manesuraj14/AI-Support-Agent",
    stars: 0,
    forks: 0,
    isFeatured: false
  },
  {
    name: "clueso-clone",
    description: "Frontend screen and audio recorder MVP utilizing browser MediaDevices and MediaRecorder APIs with video playback controls.",
    primaryLanguage: "React",
    languageColor: "#61DAFB",
    tags: ["React", "Vite", "MediaRecorder API", "Tailwind"],
    url: "https://github.com/manesuraj14/clueso-clone",
    stars: 0,
    forks: 0,
    isFeatured: false
  }
];

export default function GithubSection() {
  return (
    <section 
      id="github" 
      className="py-16 sm:py-24 border-t border-border/60 relative"
      aria-label="Public GitHub Repositories"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Open Source & Codebases"
          title="Curated GitHub Repositories"
          subtitle="Explore the public repositories and engineering codebases backing my projects on GitHub. Built with production standards, clean commits, and comprehensive documentation."
          align="center"
        />

        {/* GitHub Header Callout Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-surface-secondary border border-border flex items-center justify-center text-primary shrink-0">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-text-primary text-base sm:text-lg">
                  github.com/{personalInfo.githubUsername}
                </span>
                <Badge variant="primary" size="xs">
                  Active Profile
                </Badge>
              </div>
              <p className="text-xs text-text-secondary mt-0.5 font-mono">
                Open-source repositories &bull; Java Backend, Full Stack & Concurrency
              </p>
            </div>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold transition-all shadow-sm shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Follow on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curatedRepositories.map((repo, idx) => {
            return (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
              >
                <Card 
                  hoverEffect={true}
                  className="flex flex-col justify-between h-full border-border/80 hover:border-primary/50 relative overflow-hidden group"
                >
                  <div>
                    {/* Header: Repo Name & External Link */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center space-x-2 min-w-0">
                        <FolderGit2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs sm:text-sm font-bold text-text-primary hover:text-primary transition-colors truncate block"
                          title={repo.name}
                        >
                          {repo.name}
                        </a>
                      </div>

                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-primary transition-colors p-1"
                        aria-label={`Open ${repo.name} on GitHub`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Repo Description */}
                    <p className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3">
                      {repo.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {repo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-secondary border border-border/60 text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Language indicator & GitHub CTA */}
                  <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <span 
                        className="w-2.5 h-2.5 rounded-full inline-block"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span className="text-[11px]">{repo.primaryLanguage}</span>
                    </div>

                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[11px] text-primary hover:underline"
                    >
                      <span>Code</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
