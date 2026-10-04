export const engineeringLifecycle = [
  {
    step: 1,
    title: "Understand the Problem",
    shortTitle: "Problem Analysis",
    description: "Analyze core business workflows, identify stakeholders, delineate edge cases, and define functional requirements before writing any code.",
    icon: "HelpCircle",
    deliverables: "Requirements doc, user stories, edge-case checklist"
  },
  {
    step: 2,
    title: "Design the Architecture",
    shortTitle: "Architecture Design",
    description: "Structure service boundaries, design modular layers (Controller, Service, Repository, DTO), and establish API contracts with clean separation of concerns.",
    icon: "Network",
    deliverables: "System boundary diagrams, component contracts, sequence flows"
  },
  {
    step: 3,
    title: "Design the Database",
    shortTitle: "Database Modeling",
    description: "Model normalized relational entities (3NF), design indexes for high-frequency queries, and define foreign keys, composite constraints, and transaction boundaries.",
    icon: "Database",
    deliverables: "ER diagrams, DDL scripts, index strategies, ACID isolation rules"
  },
  {
    step: 4,
    title: "Build REST APIs",
    shortTitle: "API Development",
    description: "Implement clean RESTful endpoints adhering to semantic HTTP status codes, structured DTO mappings, and standardized global exception handling.",
    icon: "Cpu",
    deliverables: "REST endpoints, DTO validators, global `@ControllerAdvice` handlers"
  },
  {
    step: 5,
    title: "Implement Security",
    shortTitle: "Security & Auth",
    description: "Integrate stateless JWT authentication, encrypt passwords using BCrypt, configure role-based access control (RBAC), and sanitize all user inputs.",
    icon: "ShieldCheck",
    deliverables: "Spring Security filters, token interceptors, RBAC permission guards"
  },
  {
    step: 6,
    title: "Build Responsive UI",
    shortTitle: "Frontend UI",
    description: "Develop component-driven client interfaces in React and Tailwind CSS that work fluidly across 320px mobile screens to ultra-wide 1920px desktops.",
    icon: "Layout",
    deliverables: "Modular React components, accessible forms, responsive viewports"
  },
  {
    step: 7,
    title: "Test Thoroughly",
    shortTitle: "Testing",
    description: "Write unit test suites using JUnit, validate API contracts with Postman, and stress-test concurrency and transaction rollbacks for edge cases.",
    icon: "CheckCircle2",
    deliverables: "JUnit tests, integration test suites, automated assertion passes"
  },
  {
    step: 8,
    title: "Debug & Profile",
    shortTitle: "Debug & Observability",
    description: "Inspect stack traces with structured logging, profile SQL query performance using EXPLAIN, and eliminate bottleneck memory leaks or race conditions.",
    icon: "Terminal",
    deliverables: "Query performance profiles, structured logs, bug remedies"
  },
  {
    step: 9,
    title: "Deploy Professionally",
    shortTitle: "Deployment",
    description: "Containerize services with Docker, set up automated CI/CD pipelines, configure custom domains with SSL/HTTPS, and deploy to modern hosting platforms.",
    icon: "Rocket",
    deliverables: "Dockerfiles, Vercel/Cloud deployment, automated release pipeline"
  },
  {
    step: 10,
    title: "Continuously Improve",
    shortTitle: "Optimization",
    description: "Monitor user telemetry, gather feedback, optimize critical database queries, and refactor codebases toward cleaner architectural standards.",
    icon: "TrendingUp",
    deliverables: "Lighthouse 95+ scores, refactored clean code, telemetry reports"
  }
];
