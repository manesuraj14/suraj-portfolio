import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';
import { educationData } from '../../data/education';
import { SectionHeader, Badge, Card } from '../common';

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-16 sm:py-24 border-t border-border/60 relative"
      aria-label="Academic Education and Timeline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Academic Background"
          title="Education Timeline"
          subtitle="Strong academic foundation in Computer Science and Engineering, systems programming, algorithms, and applied software development."
          align="center"
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Axis Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-primary via-border to-border/40" />

          <div className="space-y-10 sm:space-y-12">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={edu.id}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center"
                >
                  {/* Timeline Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center text-primary z-10 shadow-md">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Content Container (Alternating Left/Right on Desktop) */}
                  <div className={`w-full pl-12 sm:pl-0 sm:w-1/2 ${
                    isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:ml-auto text-left'
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <Card className="border-border/80 hover:border-primary/50 relative overflow-hidden group">
                        {/* Top Badge & Duration */}
                        <div className={`flex flex-wrap items-center gap-2 mb-2 ${
                          isEven ? 'sm:justify-end' : 'justify-start'
                        }`}>
                          <Badge variant="primary" size="xs">
                            {edu.badge}
                          </Badge>
                          <span className="text-xs font-mono text-text-muted flex items-center space-x-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{edu.duration}</span>
                          </span>
                        </div>

                        {/* Degree Title */}
                        <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>

                        {/* Institution & Location */}
                        <div className={`flex items-center space-x-1.5 text-xs text-text-muted font-medium mt-1 mb-3 ${
                          isEven ? 'sm:justify-end' : 'justify-start'
                        }`}>
                          <span className="text-text-primary font-semibold">{edu.institution}</span>
                          <span>&bull;</span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3 text-text-muted" />
                            <span>{edu.location}</span>
                          </span>
                        </div>

                        {/* Score Metric Highlight */}
                        <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-surface-secondary border border-border mb-3 font-mono text-xs ${
                          isEven ? 'sm:ml-auto' : ''
                        }`}>
                          <Award className="w-4 h-4 text-primary" />
                          <span className="font-bold text-text-primary">{edu.score}</span>
                          <span className="text-text-muted">({edu.status})</span>
                        </div>

                        {/* Narrative Description */}
                        <p className="text-xs text-text-secondary leading-relaxed mb-3">
                          {edu.description}
                        </p>

                        {/* Academic Highlights */}
                        <div className={`space-y-1.5 text-xs text-text-secondary ${
                          isEven ? 'sm:text-right' : 'text-left'
                        }`}>
                          {edu.highlights.map((item, hIdx) => (
                            <div 
                              key={hIdx}
                              className={`flex items-start space-x-2 ${
                                isEven ? 'sm:flex-row-reverse sm:space-x-reverse' : ''
                              }`}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span className="text-text-muted">{item}</span>
                            </div>
                          ))}
                        </div>

                      </Card>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
