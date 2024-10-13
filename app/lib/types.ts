export interface Company {
  name: string;
  location: string;
}

export enum Skill {
  Testing = "Testing",
  React = "React",
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  CSharp = "C#",
  VBNET = "VB.NET",
  VB6 = "VB6",
  ASPNET = "ASP.NET",
  AWS = "AWS",
  MVC = "MVC",
  SQL = "SQL",
  DynamoDB = "DynamoDB",
  Communication = "Communication",
  SecretsManager = "SecretsManager",
  EventDrivenArchitecture = "Event Driven Architecture",
  MicroserviceArchitecture = "Microservice Architecture",
  EndToEndTesting = "End-to-End Testing",
  Cypress = "Cypress",
  Jest = "Jest",
  UnitTesting = "Unit Testing",
  NextJS = "Next.js",
  MongoDB = "MongoDB",
  Redux = "Redux",
  ReduxSaga = "Redux Saga",
  TailwindCSS = "Tailwind CSS",
  HTML = "HTML",
  CSS = "CSS",
  SASS = "SASS",
  SaaS = "SaaS",
  Git = "Git",
  Mentorship = "Mentorship",
  Leadership = "Leadership",
  LargeScaleSystems = "Large Scale Systems",
  Electron = "Electron",
  APIIntegration = "API Integration",
  APIDevelopment = "API Development",
  REST = "REST",
  GraphQL = "GraphQL",
  StartupEnvironment = "Startup Environment",
  AI = "AI",
  ChatGPTPlugin = "ChatGPT Plugin",
  ChatGPTFeatures = "ChatGPT Features",
  MUI = "MUI (Material UI)",
  CICD = "CI/CD",
  TeamworkandCollaboration = "Teamwork and Collaboration",
  CodeReviews = "Code Reviews",
  PairProgramming = "Pair Programming",
  DesktopAppDevelopment = "Desktop App Development",
  WebAppDevelopment = "Web App Development",
  MobileAppDevelopment = "Mobile App Development",
  CapacitorJS = "CapacitorJS",
  StoredProcedures = "Stored Procedures",
  NodeJS = "Node.js",
  AgileScrum = "Agile/Scrum",
  FrontEnd = "Front End",
  BackEnd = "Back End",
  Storybook = "Storybook",
  MFE = "MFE",
  Webpack = "Webpack",
  Figma = "Figma",
  Jira = "Jira",
  Docker = "Docker",
  Kubernetes = "Kubernetes",
  ProblemSolving = "Problem Solving",
  AttentionToDetail = "Attention to Detail",
  Empathy = "Empathy",
  TimeManagement = "Time Management",
  Adaptability = "Adaptability",
  ConflictResolution = "Conflict Resolution",
  ContinuousLearning = "Continuous Learning",
  Playwright = "Playwright",
  AzureDevops = "Azure Devops",
  NX = "NX",
}

export enum ChartType {
  FrontEnd = "FrontEnd",
  BackEnd = "BackEnd",
  Soft = "Soft",
  General = "General",
}

export interface Experience {
  startDate: Date;
  startDisplay: string;
  endDate?: Date;
  endDisplay?: string;
  title: string;
  company: Company;
  achievements: string[];
  frontEndSkills: Skill[];
  backEndSkills: Skill[];
  generalTechnicalSkills: Skill[];
  softSkills: Skill[];
  id: number;
  url?: string;
}
