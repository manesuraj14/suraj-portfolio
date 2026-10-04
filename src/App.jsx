import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, Footer } from './components/layout';
import { 
  Hero, 
  About, 
  Skills, 
  Projects, 
  Experience,
  Education, 
  Certifications,
  Achievements,
  GithubSection
} from './components/sections';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text-primary flex flex-col font-sans transition-colors duration-200">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Application Container */}
        <main className="flex-1">
          {/* Section 01: Hero & Immediate Tech Stack */}
          <Hero />

          {/* Section 02: About Me, Engineering Focus & Lifecycle */}
          <About />

          {/* Section 03: Technical Skills Matrix */}
          <Skills />

          {/* Section 04: Featured Projects & Case Studies */}
          <Projects />

          {/* Section 05: Practical Project & Engineering Experience */}
          <Experience />

          {/* Section 06: Education Timeline */}
          <Education />

          {/* Section 07: Certifications & Lightbox Gallery */}
          <Certifications />

          {/* Section 08: Verified Achievements & Honors */}
          <Achievements />

          {/* Section 09: Curated GitHub Repositories */}
          <GithubSection />

          {/* Placeholder anchor targets for remaining subtasks */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
            {['resume', 'contact'].map((sec) => (
              <section
                key={sec}
                id={sec}
                className="py-12 border-t border-border/50 text-center opacity-60 hover:opacity-100 transition-opacity"
              >
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                  #{sec} Section &bull; Upcoming in Subtask
                </span>
              </section>
            ))}
          </div>
        </main>

        {/* Global Enterprise Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
