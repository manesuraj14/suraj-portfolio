export const experienceData = [
  {
    id: "onboarding-lead",
    role: "Frontend Lead Developer",
    organization: "Digital Customer Onboarding Project",
    period: "2024 – 2025",
    type: "Project & Engineering Leadership",
    location: "Pune, India",
    description: "Led the frontend engineering team in designing and constructing a multi-domain digital customer onboarding platform with a complete banking KYC onboarding flow.",
    keyPoints: [
      "Directed frontend architecture using React 19, Vite, and Tailwind CSS v3 across a 4-engineer team.",
      "Engineered an 8-stage state machine with Context API and localStorage session persistence preventing data loss on page refresh.",
      "Built client-side document upload validation and integrated banking analytics dashboard.",
      "Coordinated REST API interface specifications with backend developers."
    ],
    technologies: ["React 19", "Vite", "Tailwind CSS", "Context API", "Axios", "REST APIs", "Git"]
  },
  {
    id: "eduskills-intern",
    role: "Java Full Stack Developer Intern",
    organization: "EduSkills / AICTE Virtual Internship",
    period: "Virtual Internship",
    type: "Virtual Industry Program",
    location: "Remote",
    description: "Intensive industry-aligned program focused on enterprise Java web application architectures and microservices foundations.",
    keyPoints: [
      "Developed enterprise web modules utilizing Spring Boot, Spring Data JPA, and MySQL.",
      "Engineered secure RESTful endpoints protected by JWT and role authorization policies.",
      "Integrated React.js frontend interfaces with Spring Boot backend services using Axios.",
      "Conducted unit testing with JUnit and API contract verification using Postman."
    ],
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "React.js", "REST APIs", "Postman"]
  },
  {
    id: "exam-system-backend",
    role: "Backend & Database Developer",
    organization: "Online Examination & Assessment Engine",
    period: "Academic Project",
    type: "Backend & Database Engineering",
    location: "Pune, India",
    description: "Engineered a high-concurrency academic testing platform prioritizing transaction safety, dynamic timers, and zero SQL injection.",
    keyPoints: [
      "Constructed a classic MVC architecture using Core Java Servlets and JDBC with manual transaction commit/rollback safeguards.",
      "Guaranteed absolute SQL injection resistance through exclusively parameterized PreparedStatement queries.",
      "Designed normalized 3NF relational schemas in MySQL with strict composite constraints.",
      "Authored JUnit test suites covering automated scoring logic and edge-case question submissions."
    ],
    technologies: ["Core Java", "Servlets", "JDBC", "MySQL", "JUnit", "SQL"]
  },
  {
    id: "concurrency-erp",
    role: "Systems & Concurrency Engineer",
    organization: "Industrial Manufacturing & Supply ERP",
    period: "Engineering Project",
    type: "Systems & Concurrency Engineering",
    location: "Pune, India",
    description: "Architected a supply chain engine with a focus on database-level row locking and inventory race condition mitigation.",
    keyPoints: [
      "Implemented PostgreSQL pessimistic row-level locking (`SELECT FOR UPDATE`) to prevent overselling during simultaneous order dispatch.",
      "Constructed automated concurrency testing suites in Jest and Supertest that simulate race conditions under load.",
      "Enforced database CHECK constraints ensuring stock balances never drop below zero.",
      "Configured Docker Compose with Nginx reverse proxy for isolated development and deployment."
    ],
    technologies: ["PostgreSQL", "Express.js", "TypeScript", "Docker", "Jest", "Supertest"]
  }
];
