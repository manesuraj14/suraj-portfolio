import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  CheckCircle2, 
  Terminal,
  Code2,
  Shield,
  Database
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Button, Badge } from '../common';
import HeroTechStack from './HeroTechStack';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden"
      aria-label="Introduction and Overview"
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 10-Second Recruiter Content (7 cols on large screens) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Availability & Location Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personalInfo.availability.status}</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-surface border border-border text-text-muted text-xs font-mono">
                <MapPin className="w-3.5 h-3.5 text-text-secondary" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Candidate Name */}
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold block mb-1">
                Hello, I am
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary leading-tight">
                {personalInfo.name}
              </h1>
            </div>

            {/* Primary & Secondary Role Titles */}
            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-mono font-bold text-primary flex items-center justify-center lg:justify-start space-x-2">
                <Code2 className="w-5 h-5 text-primary shrink-0" />
                <span>{personalInfo.titles[0]}</span>
              </div>
              <div className="text-xs sm:text-sm font-mono text-text-muted flex items-center justify-center lg:justify-start space-x-2">
                <span>{personalInfo.titles[1]}</span>
                <span>&bull;</span>
                <span>{personalInfo.titles[2]}</span>
              </div>
            </div>

            {/* Core Recruiter Value Headline */}
            <blockquote className="border-l-0 lg:border-l-2 border-primary/50 lg:pl-4 py-0.5 text-base sm:text-lg text-text-secondary font-medium leading-relaxed italic">
              "{personalInfo.headline}"
            </blockquote>

            {/* Honest Engineering Bio */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.summary} Focused on scalable RESTful microservices, clean database normalization, role-based API protection, and reactive user interfaces with modern software engineering standards.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                as="a"
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                variant="primary"
                size="md"
                iconRight={ArrowRight}
                className="group"
              >
                View My Projects
              </Button>

              <Button
                as="a"
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                icon={FileText}
              >
                Download Resume
              </Button>

              <Button
                as="a"
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                variant="outline"
                size="md"
                icon={Mail}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Proof & Direct Channels */}
            <div className="pt-2 flex items-center justify-center lg:justify-start space-x-4 text-xs text-text-secondary">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-primary transition-colors py-1"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono">{personalInfo.githubUsername}</span>
              </a>

              <span className="text-border">&bull;</span>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-primary transition-colors py-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-mono">suraj-shivaji-mane</span>
              </a>

              <span className="text-border">&bull;</span>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-1.5 hover:text-primary transition-colors py-1"
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4" />
                <span className="font-mono">Email</span>
              </a>
            </div>

            {/* Hero Tech Stack Component */}
            <HeroTechStack />
          </motion.div>

          {/* Right Column: Premium Engineering Portrait Card (5 cols on large screens) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Card Outer Glow Frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-surface border border-border p-6 shadow-xl space-y-5">
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center space-x-1 text-[11px] font-mono text-text-muted">
                    <Terminal className="w-3.5 h-3.5 text-primary" />
                    <span>suraj_engineer.java</span>
                  </div>
                </div>

                {/* Profile Portrait / Monogram Card */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-secondary border border-border flex items-center justify-center group">
                  {!imageError ? (
                    <img
                      src="/images/profile.jpg"
                      alt="Suraj Shivaji Mane - Java Full Stack Developer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Elegant SVG Fallback when custom photo is loading or pending */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-surface-secondary to-surface">
                      <div className="w-24 h-24 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center text-primary font-mono text-3xl font-bold mb-3 shadow-inner">
                        {personalInfo.monogram}
                      </div>
                      <span className="font-bold text-text-primary text-base">
                        Suraj Shivaji Mane
                      </span>
                      <span className="text-xs font-mono text-primary font-medium mt-1">
                        Java Full Stack Developer
                      </span>
                      <span className="text-[11px] text-text-muted font-mono mt-2">
                        B.Tech CSE &bull; JSPM Pune
                      </span>
                    </div>
                  )}

                  {/* Verification Pill Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-surface/90 backdrop-blur-md border border-border/80 rounded-lg p-2.5 flex items-center justify-between text-xs shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-mono text-text-primary font-medium">B.Tech CSE (8.5 CGPA)</span>
                    </div>
                    <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">
                      Elite Top 5%
                    </span>
                  </div>
                </div>

                {/* Micro Metric Widgets */}
                <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono text-xs">
                  <div className="p-2 rounded-lg bg-surface-secondary/70 border border-border/70">
                    <div className="text-primary font-bold text-sm">8.5</div>
                    <div className="text-[10px] text-text-muted">B.Tech CGPA</div>
                  </div>
                  <div className="p-2 rounded-lg bg-surface-secondary/70 border border-border/70">
                    <div className="text-primary font-bold text-sm">Top 5%</div>
                    <div className="text-[10px] text-text-muted">NPTEL Java</div>
                  </div>
                  <div className="p-2 rounded-lg bg-surface-secondary/70 border border-border/70">
                    <div className="text-primary font-bold text-sm">7+</div>
                    <div className="text-[10px] text-text-muted">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
