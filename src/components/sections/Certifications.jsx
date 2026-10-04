import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Calendar, 
  Building2, 
  ExternalLink, 
  Eye, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { certificationsData } from '../../data/certifications';
import { SectionHeader, Card, Badge, Button } from '../common';
import CertificateLightbox from './CertificateLightbox';

export default function Certifications() {
  const [activeCertIndex, setActiveCertIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveCertIndex(index);
  };

  const closeLightbox = () => {
    setActiveCertIndex(null);
  };

  const handleNext = () => {
    setActiveCertIndex((prev) => (prev + 1) % certificationsData.length);
  };

  const handlePrev = () => {
    setActiveCertIndex((prev) => (prev - 1 + certificationsData.length) % certificationsData.length);
  };

  return (
    <section 
      id="certifications" 
      className="py-16 sm:py-24 border-t border-border/60 relative"
      aria-label="Certifications and Verified Credentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Verified Credentials"
          title="Certifications & Technical Accreditations"
          subtitle="Nationally accredited assessments and industry-aligned virtual internships with verified academic distinction."
          align="center"
        />

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card 
                  hoverEffect={true}
                  className={`flex flex-col justify-between h-full border-border/80 hover:border-primary/50 relative overflow-hidden group ${
                    cert.highlight ? 'bg-surface/90 shadow-md ring-1 ring-border' : 'bg-surface/60'
                  }`}
                >
                  {/* Highlight Ribbon for Top 5% Elite */}
                  {cert.highlight && (
                    <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-amber-400 via-primary to-secondary" />
                  )}

                  <div>
                    {/* Header: Category Badge & Rank / Score */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <Badge 
                        variant={cert.highlight ? 'primary' : 'default'} 
                        size="xs"
                        className="font-bold"
                      >
                        {cert.category}
                      </Badge>

                      <div className="flex items-center space-x-1 text-xs font-mono font-bold text-primary">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>{cert.score}</span>
                      </div>
                    </div>

                    {/* Certificate Name */}
                    <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>

                    {/* Issuer & Date */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-muted font-medium mt-1 mb-3">
                      <span className="text-text-primary font-semibold">{cert.issuer}</span>
                      <span>&bull;</span>
                      <span className="flex items-center space-x-1 font-mono text-[11px]">
                        <Calendar className="w-3 h-3 text-text-muted" />
                        <span>{cert.date}</span>
                      </span>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Skills Covered Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skillsCovered.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-secondary border border-border/60 text-text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skillsCovered.length > 4 && (
                        <span className="text-[10px] font-mono px-1 py-0.5 text-text-muted">
                          +{cert.skillsCovered.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions: View Certificate in Lightbox & Verification */}
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => openLightbox(index)}
                      className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-primary hover:text-primary-hover hover:underline transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>

                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs text-text-muted hover:text-text-primary transition-colors"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Verified
                      </span>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal Lightbox */}
      <CertificateLightbox
        certificate={activeCertIndex !== null ? certificationsData[activeCertIndex] : null}
        isOpen={activeCertIndex !== null}
        onClose={closeLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
        hasMultiple={certificationsData.length > 1}
      />
    </section>
  );
}
