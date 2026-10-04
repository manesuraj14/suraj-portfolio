import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Sparkles, 
  GraduationCap, 
  Award, 
  Code2, 
  CheckCircle2 
} from 'lucide-react';
import { achievementsData } from '../../data/achievements';
import { SectionHeader, Card, Badge } from '../common';

const achievementIcons = {
  'nptel-elite-top5': Sparkles,
  'btech-cgpa': GraduationCap,
  'ssc-distinction': Award,
  'eduskills-fullstack': Trophy,
  'dsa-practice': Code2,
};

export default function Achievements() {
  return (
    <section 
      id="achievements" 
      className="py-16 sm:py-24 border-t border-border/60 relative"
      aria-label="Academic and Technical Achievements"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Milestones & Merit"
          title="Verified Achievements & Honors"
          subtitle="Key distinctions demonstrating consistency, national competitive performance, and deep engineering focus."
          align="center"
        />

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => {
            const Icon = achievementIcons[item.id] || Award;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card 
                  hoverEffect={true}
                  className={`flex flex-col justify-between h-full border-border/80 hover:border-primary/50 relative overflow-hidden group ${
                    item.highlight ? 'bg-surface/90 shadow-md ring-1 ring-border' : 'bg-surface/60'
                  }`}
                >
                  {/* Highlight Bar for Top Distinctions */}
                  {item.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-primary to-accent" />
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-surface-secondary border border-border flex items-center justify-center text-primary group-hover:scale-105 group-hover:border-primary/40 transition-all">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>

                      <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-surface-secondary border border-border/70 font-mono text-xs font-bold text-text-primary">
                        <span className="text-primary">{item.metric}</span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted font-semibold block mb-1">
                      {item.category}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs font-mono text-text-muted mt-1 mb-3">
                      {item.subtitle}
                    </p>

                    <p className="text-xs text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-text-muted">
                    <span className="flex items-center space-x-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                    <span>HONOR #{index + 1}</span>
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
