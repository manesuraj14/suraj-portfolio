import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Sparkles, 
  Layers, 
  Server, 
  Layout, 
  Cpu, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { projectsData, projectFilterCategories } from '../../data/projects';
import { SectionHeader, Badge } from '../common';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Separate Tier 1 (Featured) and Tier 2 (More Projects)
  const featuredProjects = useMemo(() => {
    return projectsData.filter((p) => p.featured);
  }, []);

  const moreProjects = useMemo(() => {
    return projectsData.filter((p) => !p.featured);
  }, []);

  // Filter logic
  const filteredFeatured = useMemo(() => {
    if (selectedFilter === 'All') return featuredProjects;
    return featuredProjects.filter((p) => p.filterTags.includes(selectedFilter));
  }, [selectedFilter, featuredProjects]);

  const filteredMore = useMemo(() => {
    if (selectedFilter === 'All') return moreProjects;
    return moreProjects.filter((p) => p.filterTags.includes(selectedFilter));
  }, [selectedFilter, moreProjects]);

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-24 border-t border-border/60 relative"
      aria-label="Featured Projects and Engineering Case Studies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Featured Engineering Work"
          title="Featured Projects & Case Studies"
          subtitle="Production-grade systems, high-concurrency database architectures, and reactive web applications backed by real GitHub codebases."
          align="center"
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectFilterCategories.map((category) => {
            const isSelected = selectedFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedFilter(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  isSelected
                    ? 'bg-primary text-white shadow-sm ring-1 ring-primary/50'
                    : 'bg-surface border border-border text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Tier 1: Featured Flagship Projects */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center space-x-2 pb-2 border-b border-border/70">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-text-primary">
              Tier 1 &bull; Featured Flagship Systems ({filteredFeatured.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredFeatured.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCard
                    project={project}
                    featured={true}
                    onOpenCaseStudy={(proj) => setActiveModalProject(proj)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Tier 2: More Projects (Demonstrating Breadth & Concurrency) */}
        {filteredMore.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-border/60">
            <div className="flex items-center space-x-2 pb-2 border-b border-border/70">
              <FolderGit2 className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-text-primary">
                Tier 2 &bull; Specialized Systems & Applied Engineering ({filteredMore.length})
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredMore.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ProjectCard
                      project={project}
                      featured={false}
                      onOpenCaseStudy={(proj) => setActiveModalProject(proj)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
