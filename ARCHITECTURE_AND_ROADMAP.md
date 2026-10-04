# SURAJ SHIVAJI MANE — PROFESSIONAL PORTFOLIO ARCHITECTURE & ROADMAP SPECIFICATION
**Target Repository:** `https://github.com/manesuraj14/suraj-portfolio`  
**Workspace Root:** `E:\Projects\suraj-portfolio`  
**Role Positioning:** Java Full-Stack Developer | Java Backend Developer | Software Engineer  
**Document Classification:** Production Engineering Specification & Phased Execution Plan  

---

## 1. Executive Summary & Information Architecture

### 1.1 Objective & Brand Positioning
The primary purpose of this portfolio is to establish an immediate, credible, and technically authoritative impression on technical recruiters, engineering hiring managers, and senior software architects.

- **Primary Persona:** Software Engineer / Java Backend Developer with strong foundations in Java, Data Structures & Algorithms, Object-Oriented Programming, Spring Boot, REST APIs, Spring Data JPA, MySQL, and React.js.
- **Strategic Rule:** Zero fabrication. No inflated corporate titles, no fake company experience, no unverified stats, and no generic student percentage bars (e.g. "Java 98%"). All technical claims are anchored in verified academic achievements, virtual internships, and public GitHub projects.
- **The "10-Second Recruiter Test":** Within 10 seconds of landing on the site, a recruiter must instantly identify:
  1. Who Suraj is (Java Full-Stack / Backend Engineer based in Pune).
  2. Core technical competence (Core Java, Spring Boot, MySQL, REST APIs, React).
  3. Key production-grade architectural projects (Customer Onboarding Platform, Online Examination System, Store Rating, Mini ERP/CRM).
  4. Quick access to verified code repositories, credentials, and resume download.

```
+--------------------------------------------------------------------------+
|                       PORTFOLIO INFORMATION FLOW                         |
+--------------------------------------------------------------------------+
| 1. NAVBAR: Logo "SM" | Quick Links | Socials | Theme Toggle | Resume CTA |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 2. HERO: 10-Second Value Proposition | Tech Badges | Primary CTAs        |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 3. ABOUT ME: Academic Pedigree (B.Tech 8.5 CGPA) & Engineering Focus     |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 4. HOW I BUILD SOFTWARE: 10-Stage Systematic Engineering Lifecycle       |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 5. TECHNICAL SKILLS: Categorized Mastery Matrix (Zero Fake Percentages)  |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 6. FEATURED PROJECTS: Tiered Hierarchy (Top 4 Featured + Filterable Grid)|
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 7. CASE STUDY MODAL: Full Architecture, Data Flow & Concurrency Tradeoffs|
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 8. EDUCATION & CERTIFICATIONS: Interactive Timeline & Lightbox Gallery   |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 9. EXPERIENCE & ACHIEVEMENTS: Project Engineering History & Top 5% Rank  |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 10. GITHUB SHOWCASE & INTERACTIVE CONTACT FORM                           |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| 11. ENTERPRISE FOOTER & BACK-TO-TOP                                      |
+--------------------------------------------------------------------------+
```

---

## 2. Final Page & Section Structure

The portfolio will be built as a high-performance single-page application (SPA) with deep-linking, smooth section scrolling, modal overlays for case studies, and a standalone 404 page:

| Section # | Component | Purpose & Recruiter Objective |
| :--- | :--- | :--- |
| **00** | **Sticky Navbar** | Persistent navigation, brand identity (`SURaj / SM`), quick resume download, dark/light toggle, mobile sheet drawer. |
| **01** | **Hero Section** | High-impact headline: *"Building secure, scalable and user-focused applications with Java, Spring Boot, React and MySQL."* Live status indicator ("Available for Opportunities"), quick links (Projects, Resume, Contact), portrait card with subtle motion. |
| **02** | **Hero Tech Stack** | Immediate badge strip featuring Java, Spring Boot, React, MySQL, REST API, Spring Security, JWT, Git, GitHub. |
| **03** | **About Me** | Narrative on engineering principles, educational background (B.Tech CSE JSPM Pune CGPA 8.5, Diploma GP Solapur 76%, SSC 92.2%). |
| **04** | **Engineering Focus** | 6 technical capability cards: Backend Engineering, API Development, Database Engineering, Secure App Development, Full Stack Development, Problem Solving & DSA. |
| **05** | **"How I Build Software"** | 10-step visual engineering pipeline: Understand -> Architecture -> Database -> REST APIs -> Security -> UI -> Test -> Debug -> Deploy -> Improve. |
| **06** | **Skills Matrix** | 7 categorized groups (Programming, Java Backend, Frontend, Database, Security, Tools, Core Engineering). Filterable and tag-based. |
| **07** | **Featured Projects (Tier 1)** | Dedicated deep cards for the 4 core projects with live preview tags, architecture badges, problem/solution summary, and "View Case Study" trigger. |
| **08** | **More Projects (Tier 2)** | Filterable grid (All, Java/Backend, Full Stack, Frontend, AI, Enterprise Systems) highlighting Industrial ERP, AI Support Agent, and Clueso Clone. |
| **09** | **Case Study Modal** | Full-screen slide-over / dialog with system diagrams, API contracts, database schema notes, concurrency strategies, challenges, and lessons learned. |
| **10** | **Education Timeline** | Vertical timeline detailing B.Tech (2023–2026), Diploma (2020–2023), and SSC (2020) with marks, coursework, and institutions. |
| **11** | **Certifications & Gallery** | Card grid highlighting NPTEL Java Elite Top 5%, NPTEL HCI (86%), NPTEL R Data Science (72%), NPTEL Python (70%), EduSkills Java Full Stack Virtual Internship. Clickable image lightbox modal with zoom/prev/next. |
| **12** | **Project Experience & Achievements** | Project-based professional experience overview and milestone callouts (Top 5% nationwide rank, B.Tech 8.5 CGPA, DSA problem-solving track record). |
| **13** | **GitHub Showcase** | Live-style repository cards linking directly to source repos with stars, language chips, and direct GitHub links. |
| **14** | **Contact Section** | Clean enterprise contact form with name, email, subject, message, real-time client-side validation, direct contact chips (Email, Phone, Pune location, LinkedIn). |
| **15** | **Footer** | Copyright, site map links, technology attribution (Built with React 19, Vite, Tailwind CSS), and back-to-top button. |
| **16** | **404 Not Found Page** | Dedicated route for broken paths with "Back Home" and "View Projects" CTAs. |

---

## 3. UI/UX Design System & Aesthetic Principles

- **Design Persona:** "Modern SaaS + High-End Developer Dashboard" (similar to Stripe Docs, Linear, Vercel, Supabase).
- **Core Visual Guidelines:**
  - Dark mode as the primary default; flawless Light mode available via system-aware toggle.
  - Border treatments: Subdued `1px` borders (`border-slate-800/80` in dark mode, `border-slate-200` in light mode).
  - Cards: Crisp, high-contrast surfaces (`bg-slate-900/60` with backdrop-blur) rather than murky blur gradients.
  - Code & Technical Accents: Monospace typography for endpoints, tags, parameters, and architecture labels.
  - Motion Philosophy: Purposeful and subtle (under 300ms transitions, smooth hover states, scroll-reveal fades). Full support for `prefers-reduced-motion`.
  - Avoided Anti-patterns: No cartoon characters, no floating spheres without purpose, no fake testimonial carousels, no misleading proficiency bars.

---

## 4. Color Palette & Design Tokens

CSS Variables defined at `:root` and `.dark` ensuring zero color invert artifacts:

### 4.1 Token Specification
```css
/* Dark Theme (Default) */
:root {
  --background: #090D16;          /* Deep Obsidian / Charcoal Navy */
  --surface: #0F172A;             /* Rich Slate Navy */
  --surface-secondary: #1E293B;   /* Elevated Slate */
  --surface-hover: #243248;       /* Subtle card hover tint */
  --primary: #3B82F6;             /* Electric Engineering Blue */
  --primary-hover: #2563EB;
  --secondary: #6366F1;           /* Indigo Accent */
  --accent: #06B6D4;              /* Cyan / API Accent */
  --text-primary: #F8FAFC;        /* Crisp White */
  --text-secondary: #94A3B8;      /* Cool Muted Slate */
  --text-muted: #64748B;          /* Dim Slate */
  --border: #1E293B;              /* Crisp 1px Border */
  --border-focus: #3B82F6;
  --success: #10B981;             /* Emerald 500 */
  --warning: #F59E0B;             /* Amber 500 */
  --danger: #EF4444;              /* Rose 500 */
}

/* Light Theme */
.light {
  --background: #F8FAFC;          /* Clean Slate White */
  --surface: #FFFFFF;             /* Pure White Card */
  --surface-secondary: #F1F5F9;   /* Soft Cool Gray */
  --surface-hover: #E2E8F0;
  --primary: #2563EB;             /* Bold Royal Blue */
  --primary-hover: #1D4ED8;
  --secondary: #4F46E5;           /* Deep Indigo */
  --accent: #0891B2;              /* Deep Cyan */
  --text-primary: #0F172A;        /* Dark Slate */
  --text-secondary: #475569;      /* Charcoal Body */
  --text-muted: #94A3B8;
  --border: #E2E8F0;
  --border-focus: #2563EB;
  --success: #059669;
  --warning: #D97706;
  --danger: #DC2626;
}
```

---

## 5. Typography Hierarchy

- **Primary Sans-Serif:** `Inter`, `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
  - Body Copy: Clean, open tracking, optimal line height (`1.6`).
  - Headings: Bold / SemiBold with tight letter tracking (`tracking-tight`).
- **Monospace Code Font:** `JetBrains Mono`, `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
  - Used for tech badges, API routes, terminal command mockups, database table names, and metric tags.

| Element | Font | Size (Desktop / Mobile) | Weight | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | Inter | `3.5rem (56px) / 2.25rem (36px)` | 800 (Extrabold) | `1.1` |
| **Section Title** | Inter | `2.25rem (36px) / 1.75rem (28px)` | 700 (Bold) | `1.2` |
| **Card Header** | Inter | `1.25rem (20px) / 1.125rem (18px)` | 600 (Semibold) | `1.3` |
| **Body Text** | Inter | `1rem (16px) / 0.95rem (15.2px)` | 400 (Regular) | `1.65` |
| **Code / Badges** | JetBrains Mono | `0.8125rem (13px)` | 500 (Medium) | `1.4` |
| **Caption / Subtext**| Inter | `0.875rem (14px)` | 400 (Regular) | `1.5` |

---

## 6. Component Architecture & Modular Design

```
src/
├── assets/
│   ├── images/              # Profile portraits, project previews, illustrations
│   ├── certificates/        # NPTEL & EduSkills verified certificate images
│   └── resume/              # Suraj_Shivaji_Mane_Resume.pdf
├── components/
│   ├── common/
│   │   ├── Badge.jsx        # Standardized tech pill / status badge
│   │   ├── Button.jsx       # Reusable button with primary/secondary/ghost variants
│   │   ├── SectionHeader.jsx# Consistent section badge, heading, and subtitle
│   │   ├── Modal.jsx        # Accessible dialog wrapper with ESC and focus lock
│   │   └── Card.jsx         # Dashboard-style border card with hover lift
│   ├── layout/
│   │   ├── Navbar.jsx       # Sticky header with navigation and CTA
│   │   ├── MobileMenu.jsx   # Slide-in mobile navigation sheet
│   │   ├── Footer.jsx       # Enterprise footer
│   │   └── ThemeToggle.jsx  # Dark/light switcher with localStorage persistence
│   ├── sections/
│   │   ├── Hero.jsx         # Recruiter-first hero with portrait & quick stats
│   │   ├── HeroTechStack.jsx# Horizontal marquee / badge strip
│   │   ├── About.jsx        # Bio, educational foundations & core values
│   │   ├── EngineeringFocus.jsx # 6 backend & full-stack specialization cards
│   │   ├── SoftwareLifecycle.jsx# "How I Build Software" 10-step flow
│   │   ├── Skills.jsx       # Filterable 7-category skills matrix
│   │   ├── Projects.jsx     # Tier 1 Featured + Tier 2 More Projects grid
│   │   ├── ProjectCard.jsx  # Rich project card with tags & case study trigger
│   │   ├── ProjectModal.jsx # Full architectural case study drawer / modal
│   │   ├── Education.jsx    # Chronological academic milestone timeline
│   │   ├── Certifications.jsx # Interactive cards with verification links
│   │   ├── CertificateLightbox.jsx # Image zoom modal for certificates
│   │   ├── Achievements.jsx # Top 5% ranking, academic score highlights
│   │   ├── GithubSection.jsx# Selected GitHub repo cards & statistics
│   │   └── Contact.jsx      # Contact form + direct communication cards
├── context/
│   └── ThemeContext.jsx     # Manages 'dark' | 'light' mode and system preference
├── data/
│   ├── personal.js          # Core profile metadata, contact info, bio
│   ├── skills.js            # Structured 7-category skills list
│   ├── projects.js          # In-depth project data schemas (7 projects)
│   ├── education.js         # Degree, Diploma, SSC structured data
│   ├── certifications.js   # NPTEL & Internship certificates with credentials
│   └── achievements.js      # Key milestones and awards
├── hooks/
│   ├── useScrollSpy.js      # Active section detection for navbar highlighting
│   └── useReducedMotion.js  # Accessibility check for disabling heavy animations
├── pages/
│   ├── Home.jsx             # Aggregated single-page application view
│   └── NotFound.jsx         # Custom 404 error page
├── styles/
│   └── index.css            # Tailwind directives, CSS design tokens, custom utilities
├── App.jsx                  # Root router & layout wrapper
└── main.jsx                 # Vite application entry point
```

---

## 7. Project Hierarchy & Case Study Breakdown

### 7.1 Tier 1: Featured Flagship Projects
1. **Digital Customer Onboarding Platform (Flagship Featured Project)**
   - **Role:** Frontend Lead (Team of 4: Suraj Mane, Aditya Lokhande, Adesh Madhurkar, Purva Meherkar).
   - **Stack:** React 19, Vite, Tailwind CSS v3, React Router DOM v7, React Context API, Axios, JWT Authentication.
   - **Architecture:** Multi-domain onboarding engine supporting Banking (fully implemented), Healthcare, E-commerce, and Real Estate.
   - **Banking Workflow:** Bank Selection -> Personal Info -> Address Details -> Nominee Details -> Document Upload -> KYC Submission -> Review & Consent -> Banking Analytics Dashboard.
   - **Case Study Focus:** Multi-step state machine, token persistence, protected routes, secure document upload UX, and responsive analytics.

2. **Online Examination & Assessment System**
   - **Category:** Java Backend & Database Architecture
   - **Stack:** Core Java, Java Servlets, JDBC, MySQL, HTML, CSS, JUnit.
   - **Architecture:** Academic testing engine handling concurrent examinees, dynamic question generation, instant scorecard calculation, and parameterized JDBC transactions to guarantee zero SQL injection and ACID compliance.

3. **Store Rating Platform**
   - **Category:** Full-Stack Web Application
   - **Stack:** React, Node.js/Java REST APIs, MySQL, RBAC.
   - **Architecture:** Role-Based Access Control dividing system permissions among Normal Users (submit/view ratings), Store Owners (analytics & feedback), and System Administrators (store approvals & user governance).

4. **Mini ERP + CRM Operations Portal**
   - **Category:** Enterprise Operations Management
   - **Stack:** React 19, Node.js 22, Express 5, TypeScript, Prisma ORM, MySQL/PostgreSQL, Tailwind CSS, Zod, JWT.
   - **Architecture:** Wholesale & Distribution Operations system managing end-to-end departmental flows across Sales, Warehouse, Accounts, and Admin with strict schema validation and transactional safety.

### 7.2 Tier 2: Additional Specialized Projects (Demonstrating Breadth)
5. **Industrial Manufacturing & Supply ERP**
   - **Focus:** High-Concurrency Database Engineering & Transactions
   - **Stack:** PostgreSQL, Express.js, React.js, Node.js, TypeScript, Docker, Docker Compose, Nginx, Jest, Supertest.
   - **Core Technical Concept:** PostgreSQL row-level locking (`SELECT FOR UPDATE`), inventory reservation concurrency safeguards, ACID transactions, and CHECK constraints preventing negative inventory over-allocation during simultaneous sales orders.

6. **AI Support Agent**
   - **Focus:** Applied AI Engineering & Benchmarking
   - **Stack:** Python, Node.js, React UI, Docker, RAG Grounding.
   - **Core Concept:** Multi-tiered customer support escalation engine with retrieval-augmented generation (RAG) and automated evaluation suite against a golden benchmark dataset. Positioned as an applied systems project rather than primary specialization.

7. **Clueso Clone**
   - **Focus:** Advanced Frontend Media APIs
   - **Stack:** React, Vite, HTML5 MediaDevices API, Browser MediaRecorder API.
   - **Core Concept:** In-browser screen and audio capture recording workflow with instant playback and mock management dashboard.

---

## 8. Technology Architecture & Setup Specification

### 8.1 Core Frontend Stack
- **Framework:** React 18/19
- **Build Tool:** Vite (Ultra-fast HMR and optimized tree-shaken production bundles)
- **Styling:** Tailwind CSS with CSS Variable design tokens
- **Animations:** Framer Motion (subtle scroll reveals, layout animations, modal transitions)
- **Icons:** Lucide React (featherweight, consistent technical icons)
- **Routing:** React Router DOM (Single page smooth scroll navigation + `/404` error handling)
- **HTTP/API Client:** Axios (configured with clean interceptors and mock service layer)

### 8.2 Production Deployment Architecture
- **Primary Hosting:** Vercel (connected to GitHub repository `manesuraj14/suraj-portfolio`)
- **Continuous Deployment (CI/CD):** Automatic preview deployments on pull requests and production deployment on push to `main`.
- **Environment Isolation:** Zero credentials in source code. `.env` and `.env.example` templates for public site metadata and contact endpoints.

---

## 9. Comprehensive Step-by-Step Development Roadmap

The development process will be executed methodically in bite-sized, verifiable subtasks starting strictly from the frontend foundations:

```
[Phase 1: Architecture & Planning] (COMPLETED)
        │
        ▼
[Subtask 1: Project Initialization & Tooling]
  ├── Vite + React scaffolding in E:\Projects\suraj-portfolio
  ├── Tailwind CSS configuration & CSS design tokens
  ├── Lucide React & Framer Motion installation
  └── Git setup with .gitignore and README
        │
        ▼
[Subtask 2: Structured Data Layer]
  ├── src/data/personal.js (Identity, positioning, contact)
  ├── src/data/skills.js (7 categorizations)
  ├── src/data/projects.js (Tier 1 & Tier 2 complete schemas)
  ├── src/data/education.js & certifications.js
  └── src/data/lifecycle.js ("How I Build Software")
        │
        ▼
[Subtask 3: Design Tokens, Theme Context & Navigation]
  ├── ThemeContext (Dark/Light mode with localStorage)
  ├── Desktop Navbar with sticky blur & navigation links
  ├── Mobile Drawer Navigation
  └── Enterprise Footer with live clock / social links
        │
        ▼
[Subtask 4: Recruiter-First Hero & Quick Tech Bar]
  ├── 10-Second headline & value statement
  ├── Quick action CTAs (Projects, Resume, Contact)
  ├── Professional portrait card with subtle ambient lighting
  └── Hero tech stack marquee / badge strip
        │
        ▼
[Subtask 5: About Me, Engineering Pillars & Software Lifecycle]
  ├── Academic credentials summary (JSPM Pune, GP Solapur, Saraswati)
  ├── 6 Specialization engineering cards
  └── 10-stage "How I Build Software" interactive pipeline
        │
        ▼
[Subtask 6: Technical Skills Matrix]
  ├── 7 Categorized skill groups with search / tag filtering
  └── Code badges with JetBrains Mono typography (Zero fake % bars)
        │
        ▼
[Subtask 7: Featured Projects & More Projects Grid]
  ├── Tier 1 Flagship project cards (Customer Onboarding, Exam System, etc.)
  ├── Tier 2 Filterable project cards (Category pills: Full Stack, Backend, AI)
  └── Direct GitHub links and Architecture summary chips
        │
        ▼
[Subtask 8: Architectural Case Study Modal]
  ├── Deep dive drawer for Digital Customer Onboarding
  ├── System architecture diagram & banking workflow steps
  ├── Concurrency protection breakdown for Industrial ERP
  └── Problem, solution, tech stack, testing, and tradeoffs
        │
        ▼
[Subtask 9: Education Timeline & Certifications Lightbox]
  ├── Vertical academic milestone timeline
  ├── NPTEL Elite Top 5% credential highlight
  ├── EduSkills AICTE Full Stack Virtual Internship card
  └── Interactive certificate image lightbox viewer (Zoom, Close, Prev/Next)
        │
        ▼
[Subtask 10: Experience, Achievements & GitHub Showcase]
  ├── Project & Engineering Experience chronology
  ├── National NPTEL ranking & competitive programming metrics
  └── Curated GitHub repository cards
        │
        ▼
[Subtask 11: Enterprise Contact Section & 404 Page]
  ├── Client-validated contact form (Name, Email, Subject, Message)
  ├── Direct contact chips (Email, Phone, LinkedIn, Pune location)
  └── Custom 404 Page with "Return to Safety" action
        │
        ▼
[Subtask 12: Performance, Accessibility & SEO Optimization]
  ├── Meta tags, OpenGraph card, Twitter cards
  ├── robots.txt and sitemap.xml generation
  ├── Semantic HTML5 and ARIA audit
  └── Lighthouse 95+ performance tuning (lazy loading, code-splitting)
        │
        ▼
[Subtask 13: Git Push & Production Deployment]
  ├── Commit to GitHub: https://github.com/manesuraj14/suraj-portfolio
  ├── Production build verification (`npm run build`)
  └── Vercel deployment configuration
```

---

## 10. Verification & Quality Checklist

Before considering any phase complete, the implementation must pass this checklist:
- [ ] **Positioning Check:** Does the site prominently position Suraj as a **Java Backend & Full-Stack Developer**?
- [ ] **Content Integrity:** Are there zero invented company names, fake job titles, or fake percentages?
- [ ] **Device Responsiveness:** Tested and verified on 320px, 375px, 390px, 430px, 768px, 1024px, 1440px, and 1920px without horizontal scroll.
- [ ] **Theme Stability:** Seamless Dark and Light modes without text-contrast or icon invisibility bugs.
- [ ] **Performance:** Production bundle minified, assets optimized, lazy loading enabled.
- [ ] **Case Studies:** Digital Customer Onboarding and Online Examination projects clearly showcase backend thinking, architectural tradeoffs, and security practices.

---
*Report prepared according to the 75-page professional specification document. Ready for step-by-step phased execution upon user confirmation.*
