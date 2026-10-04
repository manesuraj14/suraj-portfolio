import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  Search, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { SectionHeader, Badge, Card } from '../common';

const categoryIcons = {
  programming: Code2,
  backend: Server,
  frontend: Layout,
  database: Database,
  security: ShieldCheck,
  tools: Wrench,
  engineering: Cpu,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter skills based on category and search query
  const filteredCategories = useMemo(() => {
    return skillCategories
      .map((cat) => {
        // If category is filtered
        if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
          return null;
        }

        // Filter skills within category by search query
        const matchingSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.level.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (matchingSkills.length === 0) return null;

        return {
          ...cat,
          skills: matchingSkills
        };
      })
      .filter(Boolean);
  }, [selectedCategory, searchQuery]);

  const totalSkillCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section 
      id="skills" 
      className="py-16 sm:py-24 border-t border-border/60 relative"
      aria-label="Technical Skills Matrix"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Technical Competencies"
          title="Technical Skills Matrix"
          subtitle="Grouped across 7 verified engineering domains. Grounded in actual project implementations and verified coursework with zero arbitrary percentage bars."
          align="center"
        />

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 p-1 rounded-xl bg-surface border border-border">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
              }`}
            >
              All Domains ({totalSkillCount})
            </button>

            {skillCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Layers;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    isSelected
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Spring, JPA, SQL)..."
              className="w-full pl-9 pr-3 py-1.5 text-xs font-mono bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-text-muted hover:text-text-primary font-mono"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat) => {
                const Icon = categoryIcons[cat.id] || Layers;

                return (
                  <motion.div
                    key={cat.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="h-full flex flex-col justify-between border-border/80 hover:border-primary/40 group">
                      <div>
                        {/* Category Title Header */}
                        <div className="flex items-center justify-between pb-3.5 border-b border-border/70 mb-4">
                          <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-border flex items-center justify-center text-primary group-hover:border-primary/40 transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-text-primary">
                                {cat.name}
                              </h3>
                              <span className="text-[10px] font-mono text-text-muted block">
                                {cat.skills.length} competencies
                              </span>
                            </div>
                          </div>

                          <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted bg-surface-secondary px-2 py-0.5 rounded border border-border/50">
                            Domain
                          </span>
                        </div>

                        <p className="text-xs text-text-secondary mb-4 leading-relaxed line-clamp-2">
                          {cat.description}
                        </p>

                        {/* Skill Badges List */}
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill) => (
                            <div
                              key={skill.name}
                              className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                                skill.primary
                                  ? 'bg-primary/10 border-primary/30 text-text-primary hover:border-primary'
                                  : 'bg-surface-secondary/70 border-border text-text-secondary hover:text-text-primary hover:border-border-hover'
                              }`}
                            >
                              <span className="font-medium">{skill.name}</span>
                              <span className={`text-[9px] px-1 py-0.2 rounded font-semibold ${
                                skill.primary 
                                  ? 'bg-primary/20 text-primary' 
                                  : 'bg-surface text-text-muted'
                              }`}>
                                {skill.badge}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Info */}
                      <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-text-muted">
                        <span className="flex items-center space-x-1 text-emerald-400">
                          <Check className="w-3 h-3" />
                          <span>Production Tested</span>
                        </span>
                        <span>{cat.id.toUpperCase()}</span>
                      </div>
                    </Card>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12 bg-surface/40 border border-border rounded-xl">
                <Search className="w-8 h-8 text-text-muted mx-auto mb-2" />
                <p className="text-sm font-medium text-text-primary">No matching skills found</p>
                <p className="text-xs text-text-muted mt-1 font-mono">
                  Try clearing your search query "{searchQuery}" or selecting "All Domains"
                </p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="mt-3 text-xs font-mono text-primary underline"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
