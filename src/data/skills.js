export const skillCategories = [
  {
    id: "programming",
    name: "Programming",
    description: "Core languages for building enterprise-grade applications and systems.",
    skills: [
      { name: "Java (8 / 11 / 17)", level: "Core", primary: true, badge: "Primary" },
      { name: "JavaScript (ES6+)", level: "Proficient", primary: true, badge: "Core" },
      { name: "SQL", level: "Advanced", primary: true, badge: "Database" },
      { name: "HTML5", level: "Proficient", primary: false, badge: "Frontend" },
      { name: "CSS3", level: "Proficient", primary: false, badge: "Frontend" }
    ]
  },
  {
    id: "backend",
    name: "Java Backend",
    description: "Enterprise application architectures, microservices fundamentals, and persistence frameworks.",
    skills: [
      { name: "Spring Boot", level: "Core", primary: true, badge: "Framework" },
      { name: "Spring MVC", level: "Proficient", primary: true, badge: "Architecture" },
      { name: "Spring Data JPA", level: "Core", primary: true, badge: "ORM" },
      { name: "Hibernate", level: "Proficient", primary: true, badge: "ORM" },
      { name: "JDBC", level: "Core", primary: true, badge: "Database Access" },
      { name: "Java Servlets", level: "Proficient", primary: false, badge: "Web Engine" },
      { name: "RESTful APIs", level: "Core", primary: true, badge: "Integration" },
      { name: "Microservices Fundamentals", level: "Foundational", primary: false, badge: "Architecture" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend",
    description: "Modern, component-driven client architecture and responsive UI design.",
    skills: [
      { name: "React.js", level: "Core", primary: true, badge: "SPA Framework" },
      { name: "React Router", level: "Proficient", primary: true, badge: "Navigation" },
      { name: "Tailwind CSS", level: "Core", primary: true, badge: "UI Styling" },
      { name: "Axios", level: "Core", primary: true, badge: "HTTP Client" },
      { name: "Responsive Web Design", level: "Advanced", primary: true, badge: "Cross-Device" },
      { name: "Bootstrap", level: "Familiar", primary: false, badge: "CSS Library" }
    ]
  },
  {
    id: "database",
    name: "Database",
    description: "Relational data modeling, schema normalization, and query performance.",
    skills: [
      { name: "MySQL", level: "Core", primary: true, badge: "RDBMS" },
      { name: "Relational Schema Design", level: "Advanced", primary: true, badge: "Modeling" },
      { name: "Normalization (3NF)", level: "Advanced", primary: true, badge: "Data Integrity" },
      { name: "Indexing", level: "Proficient", primary: true, badge: "Performance" },
      { name: "Query Optimization", level: "Proficient", primary: false, badge: "Performance" },
      { name: "PostgreSQL", level: "Proficient", primary: false, badge: "RDBMS" }
    ]
  },
  {
    id: "security",
    name: "Security",
    description: "Authentication protocols, stateless authorization, and API protection.",
    skills: [
      { name: "Spring Security", level: "Core", primary: true, badge: "Security Framework" },
      { name: "JWT (JSON Web Tokens)", level: "Core", primary: true, badge: "Stateless Auth" },
      { name: "Authentication & Authorization", level: "Advanced", primary: true, badge: "Identity" },
      { name: "Role-Based Access Control (RBAC)", level: "Advanced", primary: true, badge: "Access Control" },
      { name: "Password Encryption (BCrypt)", level: "Proficient", primary: false, badge: "Cryptography" },
      { name: "Protected APIs", level: "Advanced", primary: true, badge: "API Guard" }
    ]
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    description: "Development environments, version control, build tools, and API testing suites.",
    skills: [
      { name: "Git", level: "Core", primary: true, badge: "VCS" },
      { name: "GitHub", level: "Core", primary: true, badge: "Collaboration" },
      { name: "Maven", level: "Proficient", primary: true, badge: "Build Tool" },
      { name: "Postman", level: "Advanced", primary: true, badge: "API Testing" },
      { name: "VS Code", level: "Proficient", primary: false, badge: "IDE" },
      { name: "Eclipse / Spring Tool Suite (STS)", level: "Proficient", primary: false, badge: "Java IDE" },
      { name: "MySQL Workbench", level: "Proficient", primary: false, badge: "DB Tool" },
      { name: "Docker", level: "Familiar", primary: false, badge: "Containers" }
    ]
  },
  {
    id: "engineering",
    name: "Software Engineering",
    description: "Foundational computer science principles, testing methodologies, and architectural paradigms.",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: "Advanced", primary: true, badge: "CS Fundamentals" },
      { name: "Object-Oriented Programming (OOP)", level: "Advanced", primary: true, badge: "Design Paradigm" },
      { name: "SDLC & Agile / Scrum", level: "Proficient", primary: false, badge: "Methodology" },
      { name: "JUnit Testing", level: "Proficient", primary: true, badge: "Unit Testing" },
      { name: "API Testing & Validation", level: "Advanced", primary: true, badge: "Quality Assurance" },
      { name: "Edge-Case Testing", level: "Advanced", primary: false, badge: "Reliability" }
    ]
  }
];

export const heroTechStack = [
  { name: "Java 17", category: "Language" },
  { name: "Spring Boot", category: "Backend" },
  { name: "React.js", category: "Frontend" },
  { name: "MySQL", category: "Database" },
  { name: "REST APIs", category: "Architecture" },
  { name: "Spring Security", category: "Security" },
  { name: "JWT", category: "Auth" },
  { name: "Git & GitHub", category: "Tooling" }
];
