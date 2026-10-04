export const projectsData = [
  {
    id: "digital-customer-onboarding",
    title: "Digital Customer Onboarding Platform",
    shortTitle: "Customer Onboarding",
    category: "Full Stack / Banking & Fintech",
    tier: "featured",
    featured: true,
    badge: "Main Featured Project",
    filterTags: ["Full Stack", "Frontend", "Enterprise Systems"],
    role: "Frontend Lead",
    team: "Suraj Mane (Frontend Lead), Aditya Lokhande, Adesh Madhurkar, Purva Meherkar",
    summary: "Production-ready multi-domain onboarding platform supporting Banking, Healthcare, E-commerce, and Real Estate with an end-to-end banking KYC submission flow.",
    description: "Architected as a modern, multi-domain client application engineered to eliminate customer drop-offs during digital onboarding. The banking onboarding workflow is fully implemented, featuring step-by-step state management, client-side validation, secure document uploading, token-based session persistence, and an administrative analytics dashboard.",
    problem: "Traditional banking onboarding processes face significant drop-off rates due to cumbersome multi-page forms, lost progress during browser reloads, insecure document handling, and lack of real-time onboarding status visibility.",
    solution: "Designed and implemented an 8-stage reactive onboarding state machine in React 19 and Tailwind CSS. Built token-persisted session recovery, dynamic input validation, simulated document upload encryption, and an interactive banking analytics dashboard.",
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS v3",
      "React Router DOM v7",
      "React Context API",
      "Axios",
      "JWT Authentication",
      "Java & Spring Boot (Backend Architecture)",
      "MySQL"
    ],
    architecture: {
      client: "React 19 SPA powered by Vite, Tailwind CSS v3, and React Router DOM v7",
      stateManagement: "Custom React Context provider maintaining multi-step wizard state with localStorage synchronization",
      apiIntegration: "Axios client with authentication interceptors, request retry strategies, and structured error boundaries",
      backendRef: "Spring Boot RESTful service architecture backed by MySQL normalized relational schemas"
    },
    workflowSteps: [
      { step: "01", name: "Bank Selection", detail: "Selection of partner financial institution and account tier" },
      { step: "02", name: "Personal Information", detail: "Applicant identity, demographic data, and contact verification" },
      { step: "03", name: "Address Details", detail: "Permanent and residential address validation with PIN code checks" },
      { step: "04", name: "Nominee Details", detail: "Beneficiary nomination, relationship mapping, and minor legal declaration" },
      { step: "05", name: "Document Upload", detail: "Client-side image/PDF format validation, file compression, and mock upload" },
      { step: "06", name: "KYC Submission", detail: "Aadhaar/PAN verification format checks and regulatory disclosure acceptance" },
      { step: "07", name: "Review & Consent", detail: "Consolidated application preview, digital consent acknowledgment" },
      { step: "08", name: "Banking Dashboard", detail: "Interactive metrics, application tracking status, and account approval telemetry" }
    ],
    features: [
      "Multi-domain support structures (Banking, Healthcare, E-commerce, Real Estate)",
      "Fully implemented end-to-end Banking onboarding journey",
      "User Registration, Login, Forgot Password, and Profile screens",
      "Protected routing guards enforcing authentication state",
      "Token-based session persistence across navigation and page reloads",
      "Comprehensive client-side KYC and document validation",
      "Banking analytics dashboard displaying onboarding completion rates"
    ],
    databaseDesign: "MySQL relational design incorporating normalized applicant entities, document metadata tables with foreign keys, and audit log timestamps.",
    securityAspects: "JWT token persistence, client-side input sanitization, protected route guards, and password masking.",
    technicalChallenges: [
      {
        challenge: "State preservation across multi-stage form steps upon browser refresh",
        solution: "Engineered a centralized Context API state store coupled with a resilient localStorage synchronization layer that validates schema integrity on hydration."
      },
      {
        challenge: "Responsive performance across varying screen sizes without layout shifts",
        solution: "Utilized atomic Tailwind CSS utility patterns and fluid grid containers, ensuring frictionless UX from 320px mobile screens to 1920px desktop viewports."
      }
    ],
    futureImprovements: [
      "Integration of real-time video KYC WebRTC stream",
      "Automated OCR extraction from uploaded identity documents",
      "Multi-language localization support (i18n)"
    ],
    github: "https://github.com/manesuraj14/digital-customer-onboarding-frontend",
    liveDemo: null
  },
  {
    id: "online-examination-system",
    title: "Online Examination & Assessment System",
    shortTitle: "Online Examination System",
    category: "Java Backend & Database Architecture",
    tier: "featured",
    featured: true,
    badge: "Core Java & JDBC",
    filterTags: ["Java / Backend", "Enterprise Systems"],
    role: "Backend & Database Developer",
    team: "Suraj Mane",
    summary: "High-reliability academic testing and evaluation engine built in Core Java, Servlets, and transactional JDBC with parameterized queries.",
    description: "An academic testing engine engineered to manage concurrent exam sessions with automated countdown timers, dynamic question bank generation, and instant scorecard calculation. Employs classical Java Enterprise patterns to ensure data consistency and zero SQL injection vulnerabilities.",
    problem: "Concurrent exam submissions in university environments frequently encounter race conditions, inaccurate timer rollbacks, and potential SQL injection vulnerabilities in legacy JDBC codebases.",
    solution: "Built a robust Servlet-based MVC architecture with ACID transactional JDBC, strictly parameterized queries (`PreparedStatement`), automated server-synchronized timers, and instant scorecard generation.",
    technologies: [
      "Core Java (Java 8 / 11)",
      "Java Servlets",
      "JDBC (Java Database Connectivity)",
      "MySQL",
      "HTML5 & CSS3",
      "JUnit Testing",
      "Apache Tomcat"
    ],
    architecture: {
      client: "Responsive HTML5/CSS3 interface rendered via JSP and Servlet controllers",
      backend: "Modular Core Java Servlets implementing MVC architecture (Model-View-Controller)",
      persistence: "Direct JDBC transactional layer implementing DAO (Data Access Object) pattern",
      database: "Normalized MySQL relational schema with foreign key integrity and strict constraints"
    },
    features: [
      "Concurrent student test session management",
      "Server-enforced automated timer synchronization",
      "Dynamic question bank retrieval with randomized question orders",
      "Automated instant scorecard computation upon submission",
      "Dedicated Student and Administrator portal modules",
      "Transactional JDBC rollback and commit blocks",
      "Zero SQL injection vulnerability via Parameterized PreparedStatement queries",
      "Comprehensive JUnit unit test suites for evaluation logic"
    ],
    databaseDesign: "Normalized 3NF relational schema consisting of Students, Exams, Questions, Options, and Results tables with foreign key cascades and composite primary keys.",
    securityAspects: "Role-based access filtering via Servlet Filters, session timeout invalidation, and strict SQL injection mitigation using parameterized statements.",
    technicalChallenges: [
      {
        challenge: "Guaranteeing ACID transaction safety during bulk student scorecard persistence",
        solution: "Managed JDBC connection auto-commit manually with try-catch rollback blocks to guarantee atomic commits across result and answer audit logs."
      },
      {
        challenge: "Preventing client-side timer manipulation during active tests",
        solution: "Enforced server-timestamped test commencement and deadline timestamps against server clock rather than relying solely on client timers."
      }
    ],
    futureImprovements: [
      "Migration of Servlet controllers to modern Spring Boot REST microservices",
      "Dockerized container deployment with automated database seeding",
      "Real-time proctoring telemetry via WebSocket connections"
    ],
    github: "https://github.com/manesuraj14",
    liveDemo: null
  },
  {
    id: "store-rating-platform",
    title: "Store Rating & Management Platform",
    shortTitle: "Store Rating Platform",
    category: "Full Stack / Web Application",
    tier: "featured",
    featured: true,
    badge: "RBAC Architecture",
    filterTags: ["Full Stack", "Java / Backend"],
    role: "Full Stack Developer",
    team: "Suraj Mane",
    summary: "Full-stack store rating and governance system powered by a 3-tier Role-Based Access Control (RBAC) architecture.",
    description: "A comprehensive store evaluation platform designed to guarantee rating authenticity and structured merchant administration. Differentiates access into three distinct user roles: Normal Users, Store Owners, and System Administrators.",
    problem: "Online rating platforms often suffer from lack of role governance, unauthenticated spam ratings, and absence of administrative tools to moderate fraudulent merchant profiles.",
    solution: "Engineered a secure 3-tier Role-Based Access Control system with authenticated review submissions, merchant analytics views, and administrator system oversight.",
    technologies: [
      "React.js",
      "RESTful APIs",
      "MySQL",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Tailwind CSS"
    ],
    architecture: {
      client: "React.js frontend with role-specific views and permission-guarded routes",
      backend: "RESTful API services validating user claims and authorization scopes",
      database: "MySQL schema linking users, stores, ratings, and audit histories"
    },
    features: [
      "Strict 3-tier Role-Based Access Control (Normal User, Store Owner, System Administrator)",
      "Normal Users: Browse stores, submit star ratings, and write detailed customer reviews",
      "Store Owners: View incoming ratings, calculate average store scores, and review trends",
      "System Administrators: Approve newly registered stores, manage user accounts, and oversee system logs",
      "Token-authenticated API endpoints with permission verification middleware"
    ],
    databaseDesign: "Relational MySQL tables for Users, Roles, Stores, and Reviews with unique constraints preventing duplicate ratings per user-store pair.",
    securityAspects: "JWT token verification, role-based endpoint guards, input sanitization, and password hashing.",
    technicalChallenges: [
      {
        challenge: "Preventing multiple rating submissions from the same user for a single store",
        solution: "Established a composite unique database index on `(user_id, store_id)` combined with API-level validation."
      }
    ],
    futureImprovements: [
      "Sentiment analysis on customer feedback text",
      "Real-time notifications for store owners when new reviews arrive"
    ],
    github: "https://github.com/manesuraj14/Store-Rating-Platform",
    liveDemo: null
  },
  {
    id: "mini-erp-crm",
    title: "Mini ERP + CRM Operations Portal",
    shortTitle: "Mini ERP + CRM",
    category: "Enterprise Operations Management",
    tier: "featured",
    featured: true,
    badge: "Enterprise Architecture",
    filterTags: ["Full Stack", "Enterprise Systems"],
    role: "Full Stack Developer",
    team: "Suraj Mane",
    summary: "Production-oriented Wholesale & Distribution Operations Management System covering Sales, Warehouse, Accounts, and Admin departments.",
    description: "An enterprise-grade operational management portal connecting cross-departmental operations within wholesale and distribution supply chains. Demonstrates deep understanding of full-stack TypeScript architectures, schema validation, and transactional workflows.",
    problem: "Small-to-medium wholesale distributors struggle with data silos between sales desks, warehouse stock management, and financial accounts, causing stock discrepancy and invoicing delays.",
    solution: "Architected a unified operations platform integrating Sales, Warehouse, Accounts, and Administration workflows backed by Zod schema validation and Prisma transactional queries.",
    technologies: [
      "React 19",
      "Node.js 22",
      "TypeScript",
      "Express 5",
      "Prisma ORM",
      "MySQL / PostgreSQL",
      "Tailwind CSS",
      "JWT & RBAC",
      "Zod Validation",
      "Docker"
    ],
    architecture: {
      client: "React 19 with Tailwind CSS and modular departmental dashboards",
      api: "Express 5 REST API written in strict TypeScript with Zod runtime validation middleware",
      orm: "Prisma ORM handling migrations and transactional queries",
      database: "PostgreSQL / MySQL with relational foreign key enforcement"
    },
    features: [
      "Cross-departmental workflows across Sales, Warehouse, Accounts, and Administration",
      "Runtime request and payload validation powered by Zod",
      "Prisma transactional blocks ensuring atomic multi-table updates",
      "Role-Based Access Control restricting sensitive financial ledger data",
      "Containerized deployment configuration with Docker"
    ],
    databaseDesign: "Multi-table relational schema handling Customers, Products, StockUnits, Orders, Invoices, and PaymentLedgers with strict referential integrity.",
    securityAspects: "JWT token validation, Zod request payload sanitization, RBAC department guards, and environment variable isolation.",
    technicalChallenges: [
      {
        challenge: "Preventing inventory discrepancies between order booking and warehouse dispatch",
        solution: "Implemented Prisma interactive transactions (`prisma.$transaction`) to atomically decrement available stock while creating pending warehouse pick-lists."
      }
    ],
    futureImprovements: [
      "Automated PDF invoice generation and automated email dispatches",
      "Barcode/QR code scanning integration for warehouse stock movements"
    ],
    github: "https://github.com/manesuraj14/mini-erp-crm",
    liveDemo: null
  },
  {
    id: "industrial-erp",
    title: "Industrial Manufacturing & Supply ERP",
    shortTitle: "Industrial ERP",
    category: "Database Concurrency & Systems Engineering",
    tier: "more",
    featured: false,
    badge: "Concurrency & Locking",
    filterTags: ["Enterprise Systems", "Java / Backend"],
    role: "Backend & Systems Engineer",
    team: "Suraj Mane",
    summary: "High-concurrency manufacturing and supply chain ERP with PostgreSQL row-level locking (`SELECT FOR UPDATE`) to prevent inventory race conditions.",
    description: "Engineered to manage the complete manufacturing and supply business lifecycle: Customer Enquiry -> Quotation -> Sales Order -> Inventory Reservation -> Dispatch. Highlights deep understanding of database concurrency, ACID isolation levels, and automated integration testing.",
    problem: "In high-throughput manufacturing supply chains, simultaneous order bookings frequently cause negative stock anomalies (overselling) due to read-modify-write race conditions.",
    solution: "Implemented pessimistic row-level locking via PostgreSQL `SELECT FOR UPDATE` within ACID transactions, augmented by database-level CHECK constraints ensuring stock balances never drop below zero.",
    technologies: [
      "PostgreSQL",
      "Express.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "JWT & bcrypt",
      "pg (node-postgres)",
      "Jest & Supertest",
      "Docker & Docker Compose",
      "Nginx"
    ],
    architecture: {
      concurrencyEngine: "PostgreSQL row-level locking (`SELECT FOR UPDATE`) ensuring serializable stock reservation semantics",
      apiLayer: "Express.js REST APIs with transaction middleware and error recovery handlers",
      testingSuite: "Automated Jest and Supertest suites validating concurrent dispatch edge-cases",
      deployment: "Multi-container Docker Compose setup with Nginx reverse proxy"
    },
    businessLifecycle: [
      "Customer Enquiry",
      "Quotation",
      "Sales Order",
      "Inventory Reservation",
      "Dispatch"
    ],
    features: [
      "End-to-end industrial manufacturing & supply lifecycle",
      "Pessimistic row-level locking preventing inventory over-allocation",
      "PostgreSQL CHECK constraints guaranteeing non-negative stock levels",
      "Automated integration test suites covering concurrent edge-cases",
      "Docker Compose configuration with Nginx reverse proxy"
    ],
    databaseDesign: "PostgreSQL relational schema utilizing row-level locks, CHECK constraints (`stock_quantity >= 0`), and indexed order status transitions.",
    securityAspects: "JWT authorization, bcrypt password encryption, parameterized SQL queries via `pg`, and Docker container isolation.",
    technicalChallenges: [
      {
        challenge: "Simulating and testing concurrent order requests competing for the last unit of stock",
        solution: "Constructed automated Supertest integration tests firing concurrent asynchronous promises to verify that only one order commits while the other receives an out-of-stock rollback."
      }
    ],
    futureImprovements: [
      "Read replica scaling for high-volume inventory status queries",
      "Optimistic locking alternative comparison with version timestamps"
    ],
    github: "https://github.com/manesuraj14/industrial-erp",
    liveDemo: null
  },
  {
    id: "ai-support-agent",
    title: "AI Customer Support Agent & Evaluation Suite",
    shortTitle: "AI Support Agent",
    category: "AI & Applied Engineering",
    tier: "more",
    featured: false,
    badge: "Applied RAG",
    filterTags: ["AI"],
    role: "Applied AI Engineer",
    team: "Suraj Mane",
    summary: "Multi-tiered customer support system featuring RAG grounding, a 3-tier escalation engine, and automated evaluation against a golden dataset.",
    description: "An applied engineering take-home project showcasing systems-level AI integration. Combines retrieval-augmented generation (RAG) with a deterministic 3-tier escalation engine and automated evaluation benchmarks to evaluate hallucination rates and escalation accuracy.",
    problem: "Standard LLM customer support bots hallucinate answers, fail to follow business escalation policies, and lack quantitative evaluation benchmarks.",
    solution: "Engineered a grounded RAG retrieval pipeline connected to a deterministic 3-tier escalation rule engine, verified by an automated evaluation suite against a curated golden benchmark dataset.",
    technologies: [
      "Python",
      "Node.js",
      "React UI",
      "Docker",
      "RAG Grounding",
      "Evaluation Suite",
      "Golden Dataset"
    ],
    architecture: {
      retrieval: "Knowledge base chunking and grounded context retrieval",
      orchestrator: "3-tier escalation engine determining when human intervention is required",
      benchmark: "Automated Python evaluation runner executing against a golden test suite",
      interface: "Clean React chat interface with citation provenance"
    },
    features: [
      "Automated RAG-grounded support response generation",
      "Deterministic 3-tier escalation engine for complex or sensitive queries",
      "Comprehensive evaluation harness assessing accuracy and latency",
      "Pre-configured golden evaluation dataset for regression testing",
      "Docker containerized test environment"
    ],
    databaseDesign: "Structured JSON evaluation corpora and document embedding indices.",
    securityAspects: "Strict grounding constraints to prevent prompt injection and confidential data leakage.",
    technicalChallenges: [
      {
        challenge: "Reliably detecting queries requiring escalation without false positives",
        solution: "Constructed deterministic intent boundaries and confidence thresholds to trigger tier escalation prior to LLM generation."
      }
    ],
    futureImprovements: [
      "Evaluation dashboard tracking hallucination drift over time",
      "Integration with enterprise ticketing APIs"
    ],
    github: "https://github.com/manesuraj14/AI-Support-Agent",
    liveDemo: null
  },
  {
    id: "clueso-clone",
    title: "Clueso Screen Recorder MVP",
    shortTitle: "Clueso Clone",
    category: "Frontend Engineering",
    tier: "more",
    featured: false,
    badge: "Browser Media APIs",
    filterTags: ["Frontend"],
    role: "Frontend Developer",
    team: "Suraj Mane",
    summary: "Frontend MVP implementing an in-browser screen and audio recording workflow using native MediaRecorder and MediaDevices APIs.",
    description: "A focused client-side application demonstrating expertise with modern HTML5 browser APIs. Enables users to capture screen displays, record system and microphone audio, preview recordings in real-time, and manage recorded sessions inside a mock dashboard.",
    problem: "Screen capture tools traditionally require bulky desktop installations or intrusive browser extensions for simple walkthrough recordings.",
    solution: "Built a lightweight browser-native recording application utilizing the HTML5 `MediaDevices.getDisplayMedia` and `MediaRecorder` APIs with responsive playback controls.",
    technologies: [
      "React",
      "Vite",
      "Browser MediaRecorder API",
      "MediaDevices API",
      "Tailwind CSS"
    ],
    architecture: {
      mediaEngine: "Browser MediaStream and MediaRecorder API for client-side stream capture",
      client: "React + Vite SPA with mock project dashboard and video playback controls"
    },
    features: [
      "Native in-browser screen and audio capture without plugins",
      "Real-time recording controls (Start, Pause, Resume, Stop)",
      "Instant client-side playback preview using HTML5 video blobs",
      "Mock video management dashboard with project metadata",
      "Clean, modern UI designed with Tailwind CSS"
    ],
    databaseDesign: "Client-side IndexedDB / Blob storage handling temporary video records.",
    securityAspects: "Explicit user permission prompts handled via browser security dialogs for display and microphone media.",
    technicalChallenges: [
      {
        challenge: "Handling stream termination when the user stops screen sharing from the browser's native banner",
        solution: "Bound listeners to the `MediaStreamTrack.onended` event to gracefully finalize chunks and trigger state cleanup."
      }
    ],
    futureImprovements: [
      "Direct cloud upload integration with chunked S3 pre-signed URLs",
      "Basic client-side video trimming via WebAssembly"
    ],
    github: "https://github.com/manesuraj14/clueso-clone",
    liveDemo: null
  }
];

export const projectFilterCategories = [
  "All",
  "Java / Backend",
  "Full Stack",
  "Frontend",
  "AI",
  "Enterprise Systems"
];
