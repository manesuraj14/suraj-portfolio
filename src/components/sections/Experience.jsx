import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  Database 
} from 'lucide-react';
import { experienceData } from '../../data/experience';
import { SectionHeader, Card, Badge } from '../common';

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="py-16 sm:py-24 border-t border-border/60 relative"
      aria-label="Project and Engineering Experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Engineering Leadership & Internships"
          title="Project & Engineering Experience"
          subtitle="Hands-on full-stack development, database architecture, team engineering leadership, and accredited virtual internships. Strictly honest without fabricated corporate tenure."
          align="center"
        />

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {experienceData.map((exp, index) => {
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
              >
                <Card 
                  hoverEffect={true}
                  className="flex flex-col justify-between h-full border-border/80 hover:border-primary/50 relative overflow-hidden group"
                >
                  <div>
                    {/* Top Header: Role Type Badge & Period */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <Badge variant="primary" size="xs">
                        {exp.type}
                      </Badge>
                      <span className="text-xs font-mono text-text-muted flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>

                    {/* Organization & Location */}
                    <div className="flex items-center space-x-1.5 text-xs text-text-muted font-medium mt-1 mb-3">
                      <span className="text-text-primary font-semibold">{exp.organization}</span>
                      <span>&bull;</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-text-muted" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    {/* Summary Description */}
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Key Engineering Deliverables */}
                    <div className="space-y-2 mb-5">
                      {exp.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start space-x-2 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Footer */}
                  <div className="pt-4 border-t border-border/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block mb-2 font-semibold">
                      Technologies Applied:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-secondary border border-border/70 text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
