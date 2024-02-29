export interface Company {
  name: string;
  location: string;
}

export enum Skill {
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
}

export interface Experience {
  startDate: Date;
  startDisplay: string;
  endDate?: Date;
  endDisplay?: string;
  title: string;
  company: Company;
  achievements: string[];
  skills: Skill[];
}
