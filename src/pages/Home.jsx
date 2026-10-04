import React from 'react';
import { 
  Hero, 
  About, 
  Skills, 
  Projects, 
  Experience,
  Education, 
  Certifications,
  Achievements,
  GithubSection,
  ResumeSection,
  Contact
} from '../components/sections';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 01. Recruiter-First Hero & Tech Stack */}
      <Hero />

      {/* 02. About Me, Engineering Specialization & How I Build Software */}
      <About />

      {/* 03. Technical Skills Matrix */}
      <Skills />

      {/* 04. Featured Projects, More Projects & Case Studies */}
      <Projects />

      {/* 05. Practical Project & Engineering Experience */}
      <Experience />

      {/* 06. Education Timeline */}
      <Education />

      {/* 07. Certifications & Lightbox Gallery */}
      <Certifications />

      {/* 08. Verified Achievements & Honors */}
      <Achievements />

      {/* 09. Curated GitHub Repositories */}
      <GithubSection />

      {/* 10. Resume Preview & Download */}
      <ResumeSection />

      {/* 11. Enterprise Contact Section */}
      <Contact />
    </div>
  );
}
