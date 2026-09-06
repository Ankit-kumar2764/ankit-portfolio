import type { Project, SkillCategory, HackathonEvent, AchievementItem, EducationInfo, ExploringTopic, CertificationItem } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: "skyops-control-center",
    title: "SkyOps Control Center",
    subtitle: "Airport Operations Control Center",
    role: "Software Developer",
    category: "Frontend",
    featured: true,
    description: "Developed a responsive Airport Operations Control Center covering 8 operational modules: flights, passengers, security, gates, baggage, maintenance, staff, and retail.",
    highlightQuote: "A production-style airport operations dashboard designed to centralize operational intelligence across flights, passengers, security, gates, baggage, maintenance, staff and retail operations.",
    problemSolved: "Centralizes operational intelligence across complex airport silos into real-time monitoring dashboards, interactive tables, charts, and data visualizations without requiring external server backends.",
    architectureNotes: "Strict zero-backend architecture: Engineered with NO backend, NO Firebase, NO Supabase, NO MongoDB, and NO external APIs. Implemented CSV data processing with PapaParse and client-side persistence using 2 browser storage mechanisms: IndexedDB and localStorage.",
    datasetModules: [
      "Dashboard",
      "Flights",
      "Passengers",
      "Security",
      "Maintenance",
      "Retail",
      "Gates",
      "Baggage",
      "Staff"
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Table",
      "Recharts",
      "Zustand",
      "Framer Motion",
      "React Router",
      "PapaParse",
      "IndexedDB",
      "localStorage"
    ],
    keyFeatures: [
      "Covered 8 operational modules: flights, passengers, security, gates, baggage, maintenance, staff, and retail",
      "Built modular React dashboards with reusable components, interactive tables, charts, and data visualizations",
      "Implemented CSV data processing with PapaParse and client-side persistence using IndexedDB and localStorage",
      "Integrated 5+ core frontend tools (React Router, TanStack Table, Recharts, Zustand, Framer Motion)",
      "Deployed on Vercel with a scalable, responsive, and production-ready frontend architecture"
    ],
    liveDemoUrl: "https://airport-operations-control-center-pi.vercel.app/",
    githubUrl: "https://github.com/Ankit-kumar2764"
  },
  {
    id: "care-scope-analytics",
    title: "Care-Scope Analytics",
    subtitle: "Healthcare Analytics Dashboard",
    role: "Software Developer",
    category: "Data & ML",
    featured: true,
    description: "Developed a responsive healthcare analytics dashboard with 5+ core modules covering patients, appointments, diagnostics, monitoring, and analytics.",
    problemSolved: "Aggregates healthcare facility records, diagnostic reporting, and appointment pipelines into an intuitive, high-performance web dashboard for clinical decision support.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "React Router",
      "Recharts"
    ],
    keyFeatures: [
      "Covered 5+ core healthcare modules: patients, appointments, diagnostics, monitoring, and analytics",
      "Built 10+ reusable React components for patient management, appointment scheduling, diagnostic reporting, and data visualization",
      "Integrated 3+ frontend libraries including TanStack Query, React Router, and Recharts for data handling and navigation",
      "Deployed on Vercel with a responsive, high-performance architecture"
    ],
    liveDemoUrl: "https://airport-operations-control-center-pi.vercel.app/",
    githubUrl: "https://github.com/Ankit-kumar2764"
  },
  {
    id: "wanderlust",
    title: "Wanderlust",
    subtitle: "Travel & Accommodation Web Application",
    role: "Software Developer",
    category: "Full-Stack",
    featured: true,
    description: "Developed a full-stack travel and accommodation platform with 3+ core workflows for property listings, reviews, and user management.",
    problemSolved: "Simplifies property listing management, booking interactions, and traveler reviews using a robust Node.js and Express RESTful architecture with MongoDB persistence.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "EJS",
      "Bootstrap",
      "Tailwind CSS",
      "React"
    ],
    keyFeatures: [
      "Developed 3+ core workflows for property listings, reviews, and user management",
      "Implemented full CRUD operations, user authentication, authorization, reviews, and listing management using Node.js and Express.js",
      "Integrated MongoDB with Mongoose to manage 3+ major data entities including users, listings, and reviews",
      "Built responsive, dynamic interfaces implementing RESTful routing, middleware, session-based auth, and error handling"
    ],
    liveDemoUrl: "https://airport-operations-control-center-pi.vercel.app/",
    githubUrl: "https://github.com/Ankit-kumar2764"
  },
  {
    id: "tasknova",
    title: "TaskNova",
    subtitle: "Full-Stack Task Management Platform",
    role: "Software Developer",
    category: "Full-Stack",
    featured: false,
    description: "A full-stack task and workflow management application designed to help individuals and teams organize daily priorities, monitor project progress, and boost execution productivity.",
    problemSolved: "Addresses productivity bottlenecks with decoupled React frontend and reliable Express.js REST API with persistent MongoDB database state.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    keyFeatures: [
      "Decoupled React frontend and Express.js REST API architecture",
      "Persistent task schemas and structured state tracking utilizing MongoDB",
      "Dynamic task status updates, categorization, and responsive filtering",
      "Clean modern UI designed with Tailwind CSS"
    ],
    liveDemoUrl: "https://airport-operations-control-center-pi.vercel.app/",
    githubUrl: "https://github.com/Ankit-kumar2764"
  },
  {
    id: "popx",
    title: "PopX",
    subtitle: "Modern Component-Driven Web App",
    role: "Frontend Developer",
    category: "Frontend",
    featured: false,
    description: "A polished frontend web development project emphasizing pixel-perfect layout implementation, modular UI architecture, and seamless cross-device responsiveness.",
    problemSolved: "Showcase of clean frontend craftsmanship, adhering to modern UI specifications, layout consistency, and accessible component structuring.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ],
    keyFeatures: [
      "Modular, reusable UI components built strictly with TypeScript and React",
      "Fluid responsive layout adapting smoothly from 320px mobile screens to large displays",
      "Consistent typography, spacing scale, and interactive micro-states",
      "Optimized production asset bundling with Vite"
    ],
    liveDemoUrl: "https://airport-operations-control-center-pi.vercel.app/",
    githubUrl: "https://github.com/Ankit-kumar2764"
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    subtitle: "E-Commerce Practice Project",
    role: "Frontend Developer",
    category: "Frontend",
    featured: false,
    description: "A practical e-commerce interface study demonstrating responsive product grids, shopping cart state management, and multi-view navigation. (Independent educational project; no affiliation with Amazon).",
    problemSolved: "Provided deep practical experience handling complex e-commerce layouts, dynamic cart state management, and real-world UI patterns in modern React.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "localStorage"
    ],
    keyFeatures: [
      "Product catalog showcase with category navigation and responsive grid layout",
      "Cart management flow with live quantity updates and persistent localStorage state",
      "Clean banner carousels and multi-level product filter views",
      "Independent educational practice scope"
    ],
    liveDemoUrl: "https://airport-operations-control-center-pi.vercel.app/",
    githubUrl: "https://github.com/Ankit-kumar2764"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for problem solving, web engineering, and systems",
    skills: [
      { name: "C++", isPrimary: true, badge: "DSA & CP" },
      { name: "Python", isPrimary: true, badge: "Scripting / ML" },
      { name: "JavaScript", isPrimary: true, badge: "ES6+" },
      { name: "TypeScript", isPrimary: true, badge: "Type-Safe" },
      { name: "SQL", isPrimary: true, badge: "Queries" },
      { name: "C", isPrimary: false }
    ]
  },
  {
    title: "Frameworks & Libraries",
    description: "Modern frontend and backend frameworks for scalable web development",
    skills: [
      { name: "React", isPrimary: true, badge: "React 19" },
      { name: "Next.js", isPrimary: true, badge: "SSR / SSG" },
      { name: "Node.js", isPrimary: true, badge: "Runtime" },
      { name: "Express", isPrimary: true, badge: "REST APIs" },
      { name: "Tailwind CSS", isPrimary: true, badge: "Styling" },
      { name: "Spring Boot", isPrimary: false },
      { name: "FastAPI", isPrimary: false },
      { name: "NestJS", isPrimary: false }
    ]
  },
  {
    title: "Tools & Platforms",
    description: "Developer tooling, CI/CD, containerization, and API workflows",
    skills: [
      { name: "Git", isPrimary: true },
      { name: "GitHub", isPrimary: true },
      { name: "GitHub Actions", isPrimary: true, badge: "CI/CD" },
      { name: "Postman", isPrimary: true, badge: "API Testing" },
      { name: "Docker", isPrimary: true, badge: "Containers" },
      { name: "Kubernetes", isPrimary: false, badge: "Orchestration" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational, document-based, and browser-native persistence",
    skills: [
      { name: "MySQL", isPrimary: true, badge: "Relational" },
      { name: "MongoDB", isPrimary: true, badge: "NoSQL" },
      { name: "SQLite", isPrimary: false },
      { name: "IndexedDB", isPrimary: true, badge: "Browser" },
      { name: "localStorage", isPrimary: true }
    ]
  },
  {
    title: "Soft Skills & Languages",
    description: "Professional workplace strengths and spoken languages",
    skills: [
      { name: "Problem Solving", isPrimary: true },
      { name: "Time Management", isPrimary: true },
      { name: "Adaptability", isPrimary: true },
      { name: "Critical Thinking", isPrimary: true },
      { name: "Decision Making", isPrimary: true },
      { name: "English (Fluent)", isPrimary: true },
      { name: "Hindi (Native)", isPrimary: true }
    ]
  }
];

export const HACKATHONS_DATA: HackathonEvent[] = [
  {
    id: "frontend-wars-2026-final",
    title: "Frontend Wars 2026 — Finalist",
    edition: "Grand Finale",
    organizer: "Frontend Arena",
    year: "2026",
    badge: "Finalist & Certificate",
    projectAssociated: "SkyOps Control Center",
    description: "Qualified as a Finalist in Frontend Wars 2026 and received a Certificate of Achievement for technical skills, creativity, and frontend development. Built the Airport Operations Control Center under strict zero-backend constraints.",
    focusAreas: [
      "Airport Operations Problem Statement",
      "Zero-Backend CSV Architecture",
      "Data Visualization & Recharts",
      "TanStack Table Virtualization",
      "Zustand State Management",
      "UX & Responsive Layout Design"
    ]
  },
  {
    id: "frontend-wars-2026-qualifier",
    title: "Frontend Wars 2026 — Qualifier Round",
    edition: "Build the Future",
    organizer: "Frontend Arena",
    year: "2026",
    badge: "Qualified",
    description: "Participated in the Qualifier Round of Frontend Wars 2026: Build the Future, advancing to the Grand Finale through rigorous UI and architectural problem solving.",
    focusAreas: [
      "UI Engineering Standards",
      "Rapid Dashboard Prototyping",
      "Component Composition",
      "Performance Optimization"
    ]
  },
  {
    id: "paranox-hackathon",
    title: "Paranox 2.0 Hackathon",
    edition: "National Hackathon",
    organizer: "TechXNinjas",
    year: "2025",
    badge: "Participant",
    description: "Participated in the Paranox 2.0 Hackathon organized by TechXNinjas, solving intensive engineering challenges and collaborating on software product prototypes.",
    focusAreas: [
      "Competitive Engineering",
      "Product Prototyping",
      "Full-Stack Integration",
      "Team Collaboration"
    ]
  },
  {
    id: "upskill-techfest-hackathon",
    title: "Mission UpSkill India Techfest — Hackathon",
    edition: "ABES Edition",
    organizer: "HCL GUVI & ABES Engineering College",
    year: "2025",
    badge: "Participant",
    description: "Participated in the Hackathon Event, ABES Edition, powered by HCL GUVI, collaborating on software engineering challenges and practical development solutions.",
    focusAreas: [
      "Collaborative Problem Solving",
      "Rapid Web Application Prototyping",
      "Technical Implementation",
      "Engineering Best Practices"
    ]
  },
  {
    id: "guvi-day",
    title: "GUVI Day — Mission UpSkill India Techfest",
    edition: "Institutional Edition",
    organizer: "HCL GUVI",
    year: "2025",
    badge: "Participant",
    description: "Participated in GUVI Day at ABES Engineering College, powered by HCL GUVI, engaging in hands-on technical sessions and coding competitions.",
    focusAreas: [
      "Technical Skill Development",
      "Software Development Standards",
      "Coding Challenges",
      "Industry Tools"
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    platform: "LeetCode",
    headline: "250+ Problems Solved",
    ratingOrScore: "250+ Solved",
    description: "Solved 250+ Data Structures & Algorithms problems on LeetCode using C++, demonstrating consistent problem-solving and algorithmic practice across core topics.",
    topics: [
      "Arrays & Strings",
      "Linked Lists",
      "Trees & Graphs",
      "Dynamic Programming",
      "Greedy Algorithms",
      "Binary Search",
      "Recursion & Backtracking"
    ],
    profileLink: "https://leetcode.com/u/Ankit_kumar6394/"
  },
  {
    platform: "CodeChef",
    headline: "500 Difficulty Rating & C++ STL",
    ratingOrScore: "500 Rating",
    description: "Completed all practice problems rated 500 difficulty on CodeChef, and completed all lessons and projects on C++ STL (Standard Template Library).",
    topics: [
      "C++ STL (Standard Template Library)",
      "Practice Problems Rated 500",
      "Basic Logic & Loops",
      "Conditionals & Arrays",
      "Time Complexity"
    ],
    profileLink: "https://www.codechef.com/users/ankit_kumar_76"
  },
  {
    platform: "Frontend Wars 2026",
    headline: "Qualified as Finalist",
    ratingOrScore: "Finalist Certificate",
    description: "Qualified as a Finalist in Frontend Wars 2026 and received a Certificate of Achievement for technical skills, creativity, and frontend development.",
    topics: [
      "Frontend Architecture",
      "Airport Operations Dashboard",
      "Zero-Backend CSV System",
      "TanStack Table & Recharts"
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "CodeChef — C++ STL (Standard Template Library)",
    issuer: "CodeChef",
    description: "Completed all lessons and projects on C++ STL, mastering vectors, maps, sets, algorithms, iterators, and custom comparators.",
    credentialUrl: "https://www.codechef.com/users/ankit_kumar_76"
  },
  {
    title: "CodeChef — 500 Difficulty Rating",
    issuer: "CodeChef",
    description: "Completed all practice problems rated 500 difficulty, honing algorithmic problem solving and rapid code implementation.",
    credentialUrl: "https://www.codechef.com/users/ankit_kumar_76"
  },
  {
    title: "Frontend Wars 2026 — Certificate of Achievement",
    issuer: "Frontend Arena",
    description: "Received Certificate of Achievement for qualifying as a Finalist in Frontend Wars 2026 for technical skills, creativity, and frontend development."
  },
  {
    title: "Mission UpSkill India Techfest — Hackathon",
    issuer: "HCL GUVI & ABES Engineering College",
    description: "Participation certificate in the ABES Edition Hackathon powered by HCL GUVI."
  },
  {
    title: "GUVI Day — Mission UpSkill India Techfest",
    issuer: "HCL GUVI",
    description: "Participated in GUVI Day technical challenges and software engineering workshops at ABES Engineering College."
  }
];

export const DSA_TOPICS = [
  { name: "Arrays & Strings", count: "Daily Practice", description: "Two-pointer, sliding window, prefix sums, substring hashing" },
  { name: "Trees & Binary Search Trees", count: "Core Strength", description: "Binary trees, traversals (BFS/DFS), LCA, diameter, paths" },
  { name: "Graphs & Disjoint Sets", count: "Active Focus", description: "Adjacency lists, BFS/DFS, cycle detection, topological sort" },
  { name: "Dynamic Programming", count: "Algorithmic Depth", description: "1D/2D DP, memoization, tabulation, knapsack patterns" },
  { name: "Greedy & Sorting", count: "Optimal Choices", description: "Interval scheduling, priority queues, custom comparators" },
  { name: "Linked Lists", count: "Foundational", description: "Fast & slow pointers, reversals, cycle detection, merge sort" },
  { name: "Binary Search", count: "Optimal Searches", description: "Monotonic search space, upper/lower bounds, rotated arrays" },
  { name: "Recursion & Backtracking", count: "Permutations", description: "Subsets, permutations, N-Queens, state rollback" },
  { name: "Hashing & Sets", count: "Constant Lookup", description: "Hash tables, frequency maps, unordered sets in C++" },
  { name: "C++ STL", count: "Certified", description: "Vectors, deques, heaps, algorithms, pairs, maps, iterators" }
];

export const EDUCATION_DATA: EducationInfo = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "ABES Engineering College Ghaziabad | Ghaziabad",
  location: "Ghaziabad, India",
  period: "2024 — 2028",
  cgpa: "7.32",
  status: "Undergraduate Student (Class of 2028)",
  coreInterests: [
    "Data Structures & Algorithms (DSA in C++)",
    "Full-Stack Web Development (React, Node.js, Express, MongoDB)",
    "Software Engineering & System Architecture",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (MySQL, MongoDB)",
    "Computer Networks & Operating Systems"
  ]
};

export const CURRENTLY_EXPLORING: ExploringTopic[] = [
  {
    title: "Advanced Next.js & React 19",
    category: "Frontend",
    description: "Server actions, streaming SSR, concurrent features, and modern component composition.",
    tools: ["Next.js", "React 19", "TypeScript"]
  },
  {
    title: "Docker & Container Orchestration",
    category: "DevOps & Cloud",
    description: "Containerizing full-stack microservices, multi-stage builds, and Docker Compose development workflows.",
    tools: ["Docker", "Kubernetes", "GitHub Actions"]
  },
  {
    title: "High-Performance Backend Services",
    category: "Backend & Systems",
    description: "Studying scalable REST and gRPC API designs, caching mechanisms, and Spring Boot/FastAPI architectures.",
    tools: ["Node.js", "FastAPI", "Spring Boot", "NestJS"]
  },
  {
    title: "Competitive Programming & Advanced DSA",
    category: "Core Algorithms",
    description: "Progressing on LeetCode with C++ STL, targeting complex multi-dimensional DP, segment trees, and graph flow problems.",
    tools: ["C++ STL", "LeetCode (250+)", "CodeChef"]
  }
];
