import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { SectionHeader, Card, Badge, Button } from '../common';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Secure mailto fallback action
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Contact] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      window.location.href = mailtoUrl;

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 600);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-24 border-t border-border/60 relative"
      aria-label="Contact and Communication Channels"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Get In Touch"
          title="Let's Connect & Build"
          subtitle="Interested in hiring a software engineer or discussing high-concurrency systems, REST APIs, or full-stack architectures? Reach out directly."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <Card className="border-border/80 p-6 space-y-4 shadow-md">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                Direct Contact Information
              </span>

              {/* Email Chip */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-secondary border border-border group">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono text-text-muted uppercase block">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono font-medium text-text-primary hover:text-primary transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="p-1.5 rounded-lg border border-border text-text-muted hover:text-text-primary hover:bg-surface transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Chip */}
              <div className="flex items-center p-3.5 rounded-xl bg-surface-secondary border border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0 mr-3">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-muted uppercase block">Phone / WhatsApp</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-xs sm:text-sm font-mono font-medium text-text-primary hover:text-primary transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location Chip */}
              <div className="flex items-center p-3.5 rounded-xl bg-surface-secondary border border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0 mr-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-text-muted uppercase block">Current Location</span>
                  <span className="text-xs sm:text-sm font-mono font-medium text-text-primary">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Professional Networks */}
              <div className="pt-2 border-t border-border/60 flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl border border-border bg-surface-secondary hover:bg-surface text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors text-xs font-mono font-medium"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl border border-border bg-surface-secondary hover:bg-surface text-text-secondary hover:text-text-primary hover:border-primary/40 transition-colors text-xs font-mono font-medium"
                >
                  <Github className="w-4 h-4 text-primary" />
                  <span>GitHub</span>
                </a>
              </div>
            </Card>

            {/* Recruiter Response SLA Card */}
            <div className="p-4 rounded-xl bg-surface/50 border border-border/80 text-xs text-text-muted font-mono space-y-1">
              <span className="text-primary font-bold block">Response Time SLA</span>
              <p className="text-[11px] text-text-secondary">
                I actively monitor email inquiries and respond within 24 hours for software developer interview scheduling.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="border-border/80 p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-text-primary mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-text-muted mb-6 font-mono">
                Fill in the details below to initiate direct communication.
              </p>

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="font-bold block">Message initiated successfully!</span>
                    <span className="text-[11px] text-emerald-300">
                      Your default mail application has opened to complete sending.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-semibold text-text-primary mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-3.5 py-2.5 text-xs bg-surface-secondary border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-border focus:ring-primary/40 focus:border-primary'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-semibold text-text-primary mb-1.5">
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@company.com"
                      className={`w-full px-3.5 py-2.5 text-xs bg-surface-secondary border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500/30'
                          : 'border-border focus:ring-primary/40 focus:border-primary'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono font-semibold text-text-primary mb-1.5">
                    Subject / Discussion Topic <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Java Full Stack Developer Position / Technical Interview"
                    className={`w-full px-3.5 py-2.5 text-xs bg-surface-secondary border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-border focus:ring-primary/40 focus:border-primary'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-semibold text-text-primary mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about the engineering opportunity, team requirements, or project..."
                    className={`w-full px-3.5 py-2.5 text-xs bg-surface-secondary border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-border focus:ring-primary/40 focus:border-primary'
                    }`}
                  />
                  <div className="flex items-center justify-between mt-1 text-[11px] font-mono text-text-muted">
                    {errors.message ? (
                      <p className="text-rose-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    ) : (
                      <span>Minimum 15 characters</span>
                    )}
                    <span>{formData.message.length} chars</span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    icon={Send}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Preparing Email Client...' : 'Send Message'}
                  </Button>
                </div>

              </form>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
